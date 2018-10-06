import React from "react";
import moment from "moment"
import API from "../../utils/API";
import { firebase } from '../../firebase';


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
        console.log("getting appts");
        // console.log(this.props.user.uid)
        API.getAppts(this.props.user.uid).then(res =>
            this.setState({
                events: res.data,
            }),
        ).catch(err => console.log(err));

        console.log(this.props.user);
        console.log("got appts");

        //console.log(auth.currentUser().uid)
    };
    componentDidMount() {
        console.log("FullCalendar mount started");
        //console.log(this.props.firebaseUser);
        console.log(this.state)
        this.getAppointments()
        console.log("FullCalendar mount end");
    }

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            date: moment(),
            user: this.props.user,
            isLoading: true
        }
    }

    render() {

        return (
            <div id="calendar-component">
                <FullCalendar
                    firebaseUser={this.props.user}
                    id="fullcalendar"
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "month,agendaWeek,agendaDay,listWeek"
                    }}
                    defaultView="agendaWeek"
                    defaultDate={this.state.date}
                    navLinks={true} // can click day/week names to navigate views
                    editable={true}
                    timezone="local"
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