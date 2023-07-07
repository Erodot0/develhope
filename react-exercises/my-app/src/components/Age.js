import React from "react";

export class Age extends React.Component {
    render() {
        const propAge = this.props.age;
        if (propAge > 18) {
          return  <p>Your age is {this.props.age}</p>
        } else {
            return <p>You are to young!</p>
        }
    }
}