"""User schema"""
from django.contrib.auth import get_user_model

import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required

User = get_user_model()
class UserType(DjangoObjectType):
    class Meta:
        model = User

class CreateUser(graphene.Mutation):
    """CreateUser Mutation"""
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(self, info, username, password):
        user = User(
            username=username,
            password=password
        )
        user.set_password(password)
        user.save()

        return CreateUser(user=user)

class Mutation(graphene.ObjectType):
    """Mutations class"""
    create_user = CreateUser.Field()

class Query(graphene.ObjectType):
    """User queries"""
    users = graphene.List(UserType)
    me = graphene.Field(UserType, token=graphene.String(required=True))

    def resolve_users(self, info):
        return User.objects.all()

    @login_required
    def resolve_me(self, info, **kwargs):
        return info.context.user
        




