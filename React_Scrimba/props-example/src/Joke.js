import React from "react"

function Joke(props) {
    const styles = {
    }
    if(!props.product.question) {
        styles.display = "none";
    }    
    return (
        <div className="joke-card">
            <h3 style={styles}>Question: {props.product.question}</h3>
            <h4 style={{paddingTop: !props.product.question && "5px"}}>Answer: {props.product.punchLine}</h4>
        </div>
    )
}

export default Joke