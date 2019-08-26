export type Maybe<T> = T | null;

/** The `DateTime` scalar type represents a DateTime value as specified by [iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
export type DateTime = any;

/** The `GenericScalar` scalar type represents a generic GraphQL scalar value that could be: String, Boolean, Int, Float, List or Object. */
export type GenericScalar = any;

// ====================================================
// Documents
// ====================================================

export namespace NotesQuery {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    notes: Maybe<(Maybe<Notes>)[]>;
  };

  export type Notes = {
    __typename?: "NoteType";

    id: string;

    name: string;

    content: string;

    created: DateTime;

    postedBy: PostedBy;

    likes: Likes[];
  };

  export type PostedBy = {
    __typename?: "UserType";

    username: string;
  };

  export type Likes = {
    __typename?: "LikeType";

    user: User;
  };

  export type User = {
    __typename?: "UserType";

    username: string;
  };
}

export namespace CreateNoteMutation {
  export type Variables = {
    name?: Maybe<string>;
    content?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    createNote: Maybe<CreateNote>;
  };

  export type CreateNote = {
    __typename?: "CreateNote";

    id: Maybe<number>;
  };
}

export namespace MeQuery {
  export type Variables = {
    token: string;
  };

  export type Query = {
    __typename?: "Query";

    me: Maybe<Me>;
  };

  export type Me = {
    __typename?: "UserType";

    id: string;

    username: string;
  };
}

export namespace CreateUserMutation {
  export type Variables = {
    username: string;
    password: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    createUser: Maybe<CreateUser>;
  };

  export type CreateUser = {
    __typename?: "CreateUser";

    user: Maybe<User>;
  };

  export type User = {
    __typename?: "UserType";

    username: string;
  };
}

export namespace TokenAuth {
  export type Variables = {
    username: string;
    password: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    tokenAuth: Maybe<TokenAuth>;
  };

  export type TokenAuth = {
    __typename?: "ObtainJSONWebToken";

    token: Maybe<string>;
  };
}

export namespace VerifyToken {
  export type Variables = {
    token: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    verifyToken: Maybe<VerifyToken>;
  };

  export type VerifyToken = {
    __typename?: "Verify";

    payload: Maybe<GenericScalar>;
  };
}

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Components
// ====================================================

export namespace NotesQuery {
  export const Document = gql`
    query NotesQuery {
      notes {
        id
        name
        content
        created
        postedBy {
          username
        }
        likes {
          user {
            username
          }
        }
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.DataProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace CreateNoteMutation {
  export const Document = gql`
    mutation CreateNoteMutation($name: String, $content: String) {
      createNote(name: $name, content: $content) {
        id
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutateProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFunction<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace MeQuery {
  export const Document = gql`
    query MeQuery($token: String!) {
      me(token: $token) {
        id
        username
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.DataProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace CreateUserMutation {
  export const Document = gql`
    mutation CreateUserMutation($username: String!, $password: String!) {
      createUser(username: $username, password: $password) {
        user {
          username
        }
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutateProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFunction<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace TokenAuth {
  export const Document = gql`
    mutation TokenAuth($username: String!, $password: String!) {
      tokenAuth(username: $username, password: $password) {
        token
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutateProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFunction<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace VerifyToken {
  export const Document = gql`
    mutation VerifyToken($token: String!) {
      verifyToken(token: $token) {
        payload
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutateProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFunction<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
