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

    likes: Likes[];
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
