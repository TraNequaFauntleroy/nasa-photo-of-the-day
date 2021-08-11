import React, {useState} from "react";

export default function Copyright(props) {
    const { copyright }= props

    return (
        <div>
            <p>{copyright}</p>
        </div>
    )
}