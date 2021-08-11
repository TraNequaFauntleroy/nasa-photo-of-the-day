import React, {useState} from "react";

export default function Image(props) {
    const { url }= props

    return (
        <div>
            <img src={url}/>
        </div>
    )
}