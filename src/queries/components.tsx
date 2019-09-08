export type Maybe<T> = T | null;

/** An enumeration. */
export enum StudentGender {
  M = "M",
  F = "F",
}

/** The `DateTime` scalar type represents a DateTime value as specified by [iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export type EquipmentDetailViewQueryVariables = {
  id: string;
};

export type EquipmentDetailViewQueryQuery = {
  __typename?: "Query";

  equipment: EquipmentDetailViewQueryEquipment;
};

export type EquipmentDetailViewQueryEquipment = EquipmentDetailedFragment;

export type StudentDetailViewQueryVariables = {
  id: string;
};

export type StudentDetailViewQueryQuery = {
  __typename?: "Query";

  student: StudentDetailViewQueryStudent;
};

export type StudentDetailViewQueryStudent = StudentDetailedFragment;

export type EquipmentDetailedFragment = {
  __typename?: "EquipmentType";

  id: string;

  name: string;

  category: EquipmentDetailedCategory;

  timeLimit: number;

  billRate: number;

  value: Maybe<number>;

  comments: Maybe<string>;

  currentRental: Maybe<EquipmentDetailedCurrentRental>;

  addedDate: DateTime;

  disabledDate: Maybe<DateTime>;
};

export type EquipmentDetailedCategory = {
  __typename?: "EquipmentCategoryType";

  id: string;
};

export type EquipmentDetailedCurrentRental = {
  __typename?: "EquipmentRentalType";

  id: string;
};

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

export const EquipmentDetailedFragmentDoc = gql`
  fragment EquipmentDetailed on EquipmentType {
    id
    name
    category {
      id
    }
    timeLimit
    billRate
    value
    comments
    currentRental {
      id
    }
    addedDate
    disabledDate
  }
`;

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

export const EquipmentDetailViewQueryDocument = gql`
  query EquipmentDetailViewQuery($id: ID!) {
    equipment(id: $id) {
      ...EquipmentDetailed
    }
  }

  ${EquipmentDetailedFragmentDoc}
`;
export class EquipmentDetailViewQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<EquipmentDetailViewQueryQuery, EquipmentDetailViewQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<EquipmentDetailViewQueryQuery, EquipmentDetailViewQueryVariables>
        query={EquipmentDetailViewQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EquipmentDetailViewQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<EquipmentDetailViewQueryQuery, EquipmentDetailViewQueryVariables>
> &
  TChildProps;
export function EquipmentDetailViewQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EquipmentDetailViewQueryQuery,
        EquipmentDetailViewQueryVariables,
        EquipmentDetailViewQueryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EquipmentDetailViewQueryQuery,
    EquipmentDetailViewQueryVariables,
    EquipmentDetailViewQueryProps<TChildProps>
  >(EquipmentDetailViewQueryDocument, operationOptions);
}
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
