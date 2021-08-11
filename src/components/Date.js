import React, {useState} from "react";

export default function Date(props) {
    const { date }= props

    return (
        <div>
            <p>{date}</p>
        </div>
    )
}