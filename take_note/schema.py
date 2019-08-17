"""Project Schema main module"""
import graphene

import notes.schema

class Query(notes.schema.Query, graphene.ObjectType):
    """Query class"""

class Mutation(notes.schema.Mutation, graphene.ObjectType):
    """Mutation class"""

schema = graphene.Schema(query=Query, mutation=Mutation)
