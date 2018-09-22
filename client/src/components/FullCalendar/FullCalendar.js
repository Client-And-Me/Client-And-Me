import React from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment'

/* eslint-disable import/no-unresolved */
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';
// import 'fullcalendar-scheduler';
/* eslint-disable import/no-unresolved */

class FullCalendar extends React.Component {
    render() {
        return <div><Calendar />
        </div>;
    }
}

/*
 * A simple React component
 */
class Calendar extends React.Component {


    openModal() {
        $("#newAppt").modal("open");
        // calendarObject = calEvent;
        var id = "";
        var title = "";
        var date = moment(this.start).format("MM/DD/YYYY");
        var time = moment(this.start).format("HH:mm a");
        var hour = 1;
        var minute = 0;
        var note = "";
        var eventType = "create";
        var duration = moment(this.end).diff(moment(this.start)) / 1000 / 60;
        if (duration / 60 % 1 == 0) {
            hour = parseInt(duration / 60);
            minute = 0;
            // console.log(parseInt(duration / 60))
        } else {
            minute = duration % 60;
            hour = (duration - minute) / 60;
            console.log(hour + " " + minute)
        };
        // updateModalAppt(title, date, time, hour, minute, note, eventType, id);
    }

    render() {
        return <div id="calendar"></div>;
    }
    componentDidMount() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            defaultDate: moment(),
            navLinks: true, //can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
            nowIndicator: true,
            timezone: "local",
            defaultView: "agendaWeek",
            businessHours: {
                // days of week. an array of zero-based day of week integers (0=Sunday)
                dow: [0, 1, 2, 3, 4, 5, 6], // Monday - Thursday

                start: '06:00', // a start time (6am in this example)
                end: '19:00', // an end time (7pm in this example)
            },

            eventClick: function (calEvent, jsEvent, view) {
                // console.log($.fullCalendar.moment(calEvent.start._d).utc());
                console.log("startClick");
                // $("#newAppt").modal("open");
                // var id = calEvent.id;
                // var title = calEvent.title;
                // var date = moment(calEvent.start._i).format("MM/DD/YYYY");
                // var time = moment(calEvent.start._i).format("HH:mm a");
                // var hour = 0;
                // var minute = 0;
                // var note = "";
                // // for (let i = 0; i < gAppointments.length; i++) {
                // //     if (gAppointments[i].id == id) {
                // //         note = gAppointments[i].note;
                // //     };
                // // }
                // var eventType = "update";
                // var duration = moment(calEvent.end._i).diff(moment(calEvent.start._i)) / 1000 / 60;
                // if (duration / 60 % 1 == 0) {
                //     hour = parseInt(duration / 60);
                //     minute = 0;
                //     // console.log(parseInt(duration / 60))
                // } else {
                //     minute = duration % 60;
                //     hour = (duration - minute) / 60;
                //     console.log(hour + " " + minute)
                // };
                // // updateModalAppt(title, date, time, hour, minute, note, eventType, id);
                console.log("endClick");

            },
            select: function (start, end, jsEvent, view) {
                console.log("startClick");
                console.log("Start: " + start + " End: " + end);
                console.log(jsEvent);
                console.log(view);
                // this.openModal();
                console.log("endClick");
            },
            //dayClick: function (date, allDay, jsEvent, view) {
            //console.log("this is the day click function")
            //},
            editable: true,
            eventLimit: true,
            eventDrop: function (event, delta, revertFunc) {
                // calendarObject = event;
                // var id = event.id;
                // var appointment = {};
                // appointment.title = event.title;
                // if (event.allDay) {
                //     appointment.start = moment(event.start._i).utc().format("YYYY/MM/DD");
                //     appointment.end = moment(event.end._i).utc().format("YYYY/MM/DD");
                // } else {
                //     appointment.start = moment(event.start._i).utc().format("YYYY/MM/DD HH:mm:ss");
                //     if (event.end != null) {
                //         appointment.end = moment(event.end._i).utc().format("YYYY/MM/DD HH:mm:ss");
                //     } else {
                //         appointment.end = moment(event.end._i).add(30, "m").utc().format("YYYY/MM/DD HH:mm:ss");
                //     }
                // };
                // // if (!confirm("Are you sure about this change?")) {
                // //     revertFunc();
                // // } else {
                // //     updateAppointment(id, appointment)
                // // }

            },
            eventResize: function (event, jsEvent, ui, view) {
                // var id = event.id;
                // var appointment = {};
                // // calendarObject = event;
                // if (event.allDay) {
                //     appointment.start = moment(event.start._d).format("YYYY/MM/DD");
                //     appointment.end = moment(event.start._d).format("YYYY/MM/DD");
                // } else {
                //     appointment.start = moment(event.start._i).utc().format("YYYY/MM/DD HH:mm:ss");
                //     appointment.end = moment(event.end._i).utc().format("YYYY/MM/DD HH:mm:ss");
                // }
                // appointment.title = event.title;
                // // if (!confirm("Are you sure about this change?")) {
                // //     revertFunc();
                // // } else {
                // //     updateAppointment(id, appointment)
                // // }
            },

            events: function (start, end, timezone, callback) {
                // $.ajax({
                //     method: "GET",
                //     url: "/api/appointments/" + localStorage.getItem("provider_id"),
                //     success: function (doc) {
                //         var events = [];
                //         $(doc).each(function () {
                //             //console.log($(this).attr('end'));
                //             if ($(this).attr('start') === $(this).attr('end')) {
                //                 events.push({
                //                     id: $(this).attr('id'),
                //                     title: $(this).attr('title'),
                //                     start: $(this).attr('start'),
                //                     note: $(this).attr('note'),
                //                     allDay: true,
                //                     timezone: timezone,
                //                 });
                //             } else {
                //                 events.push({
                //                     id: $(this).attr('id'),
                //                     title: $(this).attr('title'),
                //                     start: $(this).attr('start'),
                //                     end: $(this).attr('end'),
                //                     note: $(this).attr('note'),
                //                 });
                //             }
                //             // console.log(events)
                //         });
                //         callback(events);
                //     }
                // });
            },

        });
        // getAppointments(localStorage.getItem("provider_id"));
    }
}

export default FullCalendar;