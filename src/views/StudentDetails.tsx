import * as React from "react";

import { StudentDetailViewQueryComponent } from "../queries/components";
import { setHeaderTitle } from "../components/Header";

interface Props {
  id: string;
}

export default class StudentDetails extends React.Component<Props, {}> {
  render() {
    const { id } = this.props;
    return (
      <StudentDetailViewQueryComponent variables={{ id }}>
        {({ data }) => {
          if (data) {
            const { student } = data;
            if (student) {
              setHeaderTitle(`${student.firstName} ${student.lastName}`);
              return (
                <ul>
                  <li>ID: {student.id}</li>
                  <li>First Name: {student.firstName}</li>
                  <li>Last Name: {student.lastName}</li>
                  <li>Phone: {student.phoneNumber}</li>
                  <li>Email: {student.email}</li>
                  <li>Station: {student.station}</li>
                  <li>Gender: {student.gender}</li>
                  <li>Room Title: {student.roomTitle}</li>
                  <li>Accepts SMS: {student.acceptsSms ? "Yes" : "No"}</li>
                  <li>Note: {student.note}</li>
                </ul>
              );
            }
          }
          return <div>Student not found!</div>;
        }}
      </StudentDetailViewQueryComponent>
    );
  }
}
