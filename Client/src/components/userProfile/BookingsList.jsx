import React, { Component } from 'react';
import { Panel, Accordion, ListGroup, ListGroupItem, Label } from 'react-bootstrap';

import messages from '!json!../../sources/appVariables.json';
import * as utils from '../../utils/utils';

class BookingsList extends Component {
  componentWillMount() {
    this.props.load();
  }

  render() {
    const { bookings } = this.props;
    const format = (date) => utils.standardDateFormat(date);
    return (
    <Accordion bsClass="full-headings-width panel-group">
      { bookings && bookings.map((booking, index) =>
        <Panel
          key={index}
          eventKey={index}
          header={utils.fullDateFormat(booking.registrationTime)}
        >
          <ListGroup fill className="options-list">
            <ListGroupItem header="Статус"> { messages.orderStatuses[booking.status] }</ListGroupItem>
            <ListGroupItem header="Заказ">
            <ListGroup className="paragraph">
            { booking.rooms && booking.rooms.map(room =>
              <ListGroupItem key={room.id}>
                <Label>#{ room.address }</Label> { room.category.name }. {format(room.startDate)} - {format(room.endDate)}
              </ListGroupItem>
            )}
            </ListGroup>
            </ListGroupItem>
            <ListGroupItem header="Имя">{ booking.name } { booking.surname } { booking.patronymic }</ListGroupItem>
            <ListGroupItem header="Email">{ booking.email }</ListGroupItem>
            <ListGroupItem header="Итог">${ booking.total }</ListGroupItem>
          </ListGroup>
        </Panel>
      )}
    </Accordion>
    );
  }
}

export default BookingsList;