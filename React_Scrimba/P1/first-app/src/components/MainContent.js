import React from "react"

function MainContent() {
    const date = new Date(2018, 6, 31, 18)
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }
    return (
        <div>
            <h1>Hi from Mayank</h1>
            <h3 style={styles}>Good {timeOfDay}!</h3>
            <p>Top Places to visit</p>
            <ul>
                <li>New Zealand</li>
                <li>Mauritius</li>
                <li>Sweden</li>
            </ul>
        </div>
    )
}

export default MainContent;