import React from "react"

export function Sum({numbers=[1,2,3]}){
    return(
        <h1>
            {numbers.reduce((a,b) => a + b)}
        </h1>
    )
}