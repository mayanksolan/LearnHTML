import React from "react"

function Joke(props) {
    const styles = {
    }
    if(!props.question) {
        styles.display = "none";
    }    
    return (
        <div className="joke-card">
            <h3 style={styles}>Question: {props.question}</h3>
            <h4 style={{paddingTop: !props.question && "5px"}}>Answer: {props.punchLine}</h4>
        </div>
    )
}

export default Joke