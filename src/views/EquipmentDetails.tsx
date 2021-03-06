import * as React from "react";

import { EquipmentDetailViewQueryComponent } from "../queries/components";
import { setHeaderTitle } from "../components/Header";

interface Props {
  id: string;
}

export default class EquipmentDetails extends React.Component<Props, {}> {
  render() {
    const { id } = this.props;
    return (
      <EquipmentDetailViewQueryComponent variables={{ id }}>
        {({ data }) => {
          if (data) {
            const { equipment } = data;
            if (equipment) {
              let currentRentalId: any = equipment.currentRental;
              if (currentRentalId) {
                currentRentalId = equipment.currentRental!.id;
              }
              return (
                <ul>
                  <li>id: {equipment.id}</li>
                  <li>name: {equipment.name}</li>
                  <li>categoryId: {equipment.category.id}</li>
                  <li>timeLimit: {equipment.timeLimit}</li>
                  <li>billRate: {equipment.billRate}</li>
                  <li>value: {equipment.value}</li>
                  <li>comments: {equipment.comments}</li>
                  <li>currentRentalId: {currentRentalId}</li>
                  <li>addedDate: {equipment.addedDate}</li>
                  <li>disabledDate: {equipment.disabledDate}</li>
                </ul>
              );
            }
          }
          return <div>Equipment not found!</div>;
        }}
      </EquipmentDetailViewQueryComponent>
    );
  }
}
