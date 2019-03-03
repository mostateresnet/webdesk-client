export type Maybe<T> = T | null;

/** An enumeration. */
export enum StudentGender {
  M = "M",
  F = "F",
}

// ====================================================
// Documents
// ====================================================

export type StudentDetailViewQueryVariables = {
  id: string;
};

export type StudentDetailViewQueryQuery = {
  __typename?: "Query";

  student: StudentDetailViewQueryStudent;
};

export type StudentDetailViewQueryStudent = StudentDetailedFragment;

export type StudentDetailedFragment = {
  __typename?: "StudentType";

  id: string;

  phoneNumber: Maybe<string>;

  acceptsSms: Maybe<boolean>;

  note: string;

  firstName: string;

  middleName: string;

  lastName: string;

  gender: StudentGender;

  roomTitle: string;

  email: string;

  station: Maybe<StudentDetailedStation>;
};

export type StudentDetailedStation = {
  __typename?: "StationType";

  name: string;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Fragments
// ====================================================

export const StudentDetailedFragmentDoc = gql`
  fragment StudentDetailed on StudentType {
    id
    phoneNumber
    acceptsSms
    note
    firstName
    middleName
    lastName
    gender
    roomTitle
    email
    station {
      name
    }
  }
`;

// ====================================================
// Components
// ====================================================

export const StudentDetailViewQueryDocument = gql`
  query StudentDetailViewQuery($id: ID!) {
    student(id: $id) {
      ...StudentDetailed
    }
  }

  ${StudentDetailedFragmentDoc}
`;
export class StudentDetailViewQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<StudentDetailViewQueryQuery, StudentDetailViewQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<StudentDetailViewQueryQuery, StudentDetailViewQueryVariables>
        query={StudentDetailViewQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type StudentDetailViewQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<StudentDetailViewQueryQuery, StudentDetailViewQueryVariables>
> &
  TChildProps;
export function StudentDetailViewQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        StudentDetailViewQueryQuery,
        StudentDetailViewQueryVariables,
        StudentDetailViewQueryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    StudentDetailViewQueryQuery,
    StudentDetailViewQueryVariables,
    StudentDetailViewQueryProps<TChildProps>
  >(StudentDetailViewQueryDocument, operationOptions);
}
