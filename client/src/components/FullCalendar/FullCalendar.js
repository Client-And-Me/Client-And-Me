import React from "react";
import moment from "moment"
import API from "../../utils/API";
import { auth } from "../../firebase";

import FullCalendar from "fullcalendar-reactwrapper";
import "fullcalendar/dist/fullcalendar.css";

class Calendar extends React.Component {

    eventClick = event => {
        console.log(event);
    };

    eventDrop = event => {
        console.log(event.start.format());
    };

    eventResize = event => {
        console.log(event.end.format());
    };

    eventSelect = event => {
        console.log(event);
    };

    getAppointments = () => {
        API.getAppts(
            //auth.currentUser().uid
        )
            .then(res =>
                this.setState({
                    events: res.data,
                }),

            )
            .catch(err => console.log(err));
        console.log("getting appts");
        console.log(this.state.events)
        //console.log(auth.currentUser().uid)
    };

    componentDidMount() {
        console.log("FullCalendar mount started");
        this.getAppointments();
        //console.log(this.state.events)
        console.log("FullCalendar mount end");
    }

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            date: moment(),
        }
    }

    render() {
        return (
            <div id="calendar-component">
                <FullCalendar
                    id="fullcalendar"
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "month,agendaWeek,agendaDay,listWeek"
                    }}
                    defaultDate={this.state.date}
                    navLinks={true} // can click day/week names to navigate views
                    editable={true}
                    selectable={true}
                    eventLimit={true} // allow "more" link when too many events
                    events={this.state.events}
                    eventClick={
                        // function (calEvent, jsEvent, view, resourceObj) { console.log(calEvent) }
                        this.eventClick
                    }
                    eventDrop={
                        //function (event, delta, revertFunc) { console.log(event.title + " was dropped on " + event.start.format()) }
                        this.eventDrop
                    }
                    eventResize={
                        //function (event, delta, revertFunc, jsEvent, ui, view) { console.log(event.end.format()) }
                        this.eventResize
                    }
                    eventColor={"#648c9f"}
                    select={
                        // function (start, end, jsEvent, view) { console.log(start.format()) }
                        // this.eventSelect
                        this.getAppointments
                    }
                />
            </div>
        );
    }
}

export default Calendar;