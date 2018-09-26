import React from "react";
import moment from "moment"

import FullCalendar from "fullcalendar-reactwrapper";
import "fullcalendar/dist/fullcalendar.css";

class Calendar extends React.Component {

    eventClick = event => {
        console.log(event)
    };

    eventDrop = event => {
        console.log(event.start.format())
    };

    eventResize = event => {
        console.log(event.end.format())
    };

    eventSelect = event => {
        console.log(event)
    };



    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    title: "All Day Event",
                    start: "2018-09-01"
                },
                {
                    title: "Long Event",
                    start: "2018-09-07",
                    end: "2018-09-10"
                },
                {
                    id: 999,
                    title: "Repeating Event",
                    start: "2018-09-09T16:00:00"
                },
                {
                    id: 999,
                    title: "Repeating Event",
                    start: "2018-09-16T16:00:00"
                },
                {
                    title: "Conference",
                    start: "2018-09-11",
                    end: "2018-09-13"
                },
                {
                    title: "Meeting",
                    start: "2018-09-12T10:30:00",
                    end: "2018-09-12T12:30:00"
                },
                {
                    title: "Birthday Party",
                    start: "2018-09-13T07:00:00"
                },
                {
                    title: "Click for Google",
                    url: "http://google.com/",
                    start: "2018-09-28"
                }
            ],
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
                        this.eventSelect
                    }
                />
            </div>
        );
    }
}

export default Calendar;