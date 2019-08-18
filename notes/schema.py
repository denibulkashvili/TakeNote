""""Notes Schema module"""
from datetime import datetime
import graphene
from graphene_django import DjangoObjectType
from .models import Note

class NoteType(DjangoObjectType):
    """Schema type class"""
    class Meta:
        """NoteType meta"""
        model = Note
        use_connection = True

class Query(graphene.ObjectType):
    """Queries class"""
    notes = graphene.List(NoteType)

    def resolve_notes(self, info, **kwargs):
        """Resolves notes query"""
        return Note.objects.all()

class CreateNote(graphene.Mutation):
    """CreateNote Mutation"""
    id = graphene.Int()
    name = graphene.String()
    content = graphene.String()
    created = graphene.DateTime()

    class Arguments:
        """CreateNote input arguments"""
        name = graphene.String()
        content = graphene.String()

    def mutate(self, info, name, content):
        """Mutation method"""
        created = datetime.now()
        note = Note(name=name, content=content, created=created)
        note.save()

        return CreateNote(
            id=note.id,
            name=note.name,
            content=note.content,
            created=note.created,
        )

class Mutation(graphene.ObjectType):
    """Mutations class"""
    create_note = CreateNote.Field()
