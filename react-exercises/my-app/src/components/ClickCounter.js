import React, { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export function ClickCounter({initialValue = 0}){
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    // useEffect(() =>{
    //     console.log(`The counter is: ${counter}`)
    // },[counter])

    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrement}>Increase</button>
            <button onClick={onDecrement}>Decrease</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

// export class ClickCounter extends React.Component {
//     state = {
//         count: this.props.count 
//     }

//     handleCounterIncrement = () => {
//         this.setState(state => {
//             return {
//                 count: state.count + 1
//             }
//         })
//     }

//     render() {
//         return <div>
//             <h1>Count: {this.state.count}</h1>
//             <button onClick={this.handleCounterIncrement}>Click here!</button>
//         </div>
//     }
// }