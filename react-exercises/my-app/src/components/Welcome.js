import React from "react";
import { Age } from "./Age";


export function Welcome(props) {
    return (
        <div className="welcome">
            <p>Welcome {props.name}!</p>
            <Age age={props.age} />
        </div>
    )
}

// export class Welcome extends React.Component {
//     render() {
//         return (
//             <>
//                 <p className="welcome">Welcome {this.props.name}!</p>
//                 <Age age={this.props.age}/>
//             </>
//         )
//     }
// }