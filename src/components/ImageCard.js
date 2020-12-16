import React from 'react'

export default function ImageCard(props) {
    return (
        <div style={styles.Card}>
            {props.cardNumber}
        </div>
    )
}
    const styles = {
        Card:{
            width:"350px",
            height:"200px",
            background:"blue",
            border:"1px solid black",
            fontSize:"2-rem",
            color:'white',
            borderSizing:'border-box'
        }
    }

