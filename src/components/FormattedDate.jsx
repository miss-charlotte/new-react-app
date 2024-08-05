import React from 'react'

export default function FormattedDate(props) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]

    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    let month = months[props.date.getMonth()]

    if (hour  < 10) {
        hour = `0${hour}`
    }
    if (minutes < 10) {
        minutes =`0${minutes}`
    }
    return <>
    {hour}:{minutes}, {day}, {month}
    </>;
}

