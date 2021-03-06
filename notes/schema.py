""""Notes Schema module"""
from datetime import datetime
import graphene
from graphene_django import DjangoObjectType
from .models import Note, Like
from users.schema import UserType

class NoteType(DjangoObjectType):
    """Schema type class"""
    class Meta:
        """NoteType meta"""
        model = Note
        use_connection = True

class CreateNote(graphene.Mutation):
    """CreateNote Mutation"""
    id = graphene.Int()
    name = graphene.String()
    content = graphene.String()
    created = graphene.DateTime()
    posted_by = graphene.Field(UserType)

    class Arguments:
        name = graphene.String()
        content = graphene.String()

    def mutate(self, info, name, content):
        user = info.context.user
        created = datetime.now()
        note = Note(name=name, content=content, created=created, posted_by=user)
        note.save()

        return CreateNote(
            id=note.id,
            name=note.name,
            content=note.content,
            created=note.created,
            posted_by=note.posted_by
        )

class EditNote(graphene.Mutation):
    """Edit note muration"""
    id = graphene.Int()
    name = graphene.String()
    content = graphene.String()

    class Arguments:
        id = graphene.String()
        name = graphene.String()
        content = graphene.String()

    def mutate(self, info, id, name, content):
        note = Note.objects.get(pk=id)
        if name:
            note.name = name
        if content:
            note.content = content
        note.save()

        return EditNote(
            id=note.id,
            name=note.name,
            content=note.content
        )

class DeleteNote(graphene.Mutation):
    """Delete note mutaion"""
    id = graphene.Int()

    class Arguments:
        id = graphene.String()

    def mutate(self, info, id):
        note = Note.objects.get(pk=id)
        note.delete()

        return DeleteNote(
            id=note.id
        )

class CreateLike(graphene.Mutation):
    """Mutation for liking a note"""
    user = graphene.Field(UserType)
    note = graphene.Field(NoteType)

    class Arguments:
        note_id = graphene.Int()

    def mutate(self, info, note_id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("You must be logged in to vote")

        note = Note.objects.filter(id=note_id).first()
        if not note:
            raise Exception("Invalid note item")
        
        Like.objects.create(user=user, note=note)

        return CreateLike(user=user, note=note)

class LikeType(DjangoObjectType):
    class Meta:
        model = Like
class Query(graphene.ObjectType):
    """Queries class"""
    notes = graphene.List(NoteType)
    likes = graphene.List(LikeType)

    def resolve_notes(self, info, **kwargs):
        """Resolves notes query"""
        return Note.objects.all()

    def resolve_likes(self, info, **kwargs):
        return Like.objects.all()
class Mutation(graphene.ObjectType):
    """Mutations class"""
    create_note = CreateNote.Field()
    create_like = CreateLike.Field()
    edit_note = EditNote.Field()
    delete_note = DeleteNote.Field()
