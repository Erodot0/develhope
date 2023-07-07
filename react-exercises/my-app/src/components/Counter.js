import React, { useEffect, useState } from "react";
// import { ClickTracker } from "./ClickTracker";
import { ClickCounter } from "./ClickCounter";
// import { CounterDisplay } from "./CounterDisplay";

// export class Counter extends React.Component {
//     state = {
//         count: this.props.initialValue 
//     }

//     componentDidMount(){
//         setInterval(() => {
//             this.setState((state) => {
//                 return {
//                     count: state.count + this.props.incrementAmount
//                 }
//             })
//         }, this.props.incrementInterval)
//     }
//     render() {
//         return <div>
//             {/* <CounterDisplay count={this.state.count} /> */}
//             <ClickCounter  initialValue={this.props.initialValue} count={this.state.count} />
//             {/* <ClickTracker/> */}
//         </div>
//     }
// }

export function Counter({initialValue = 0, incrementAmount = 1,incrementInterval = 1000}) {
    const [counter,setCounter] = useState(initialValue)
    
    useEffect(() => {
        console.log("i'm up to be mounted")

        const interval = setInterval(() => {
            setCounter((counter) => {
                return counter + incrementAmount
            })
        }, incrementInterval)

        return () => {
            clearInterval(interval)
            console.log("im up to  be unmounted")
        }

    },[counter])

    return (
        <div>
            {/* <CounterDisplay count={counter} /> */}
            <ClickCounter initialValue={initialValue} count={"initialValue"} />
            {/* <ClickTracker/> */}
        </div>
    )
}