import React, {createRef} from "react";

export class UncontrolledLogin extends React.Component {
    _userFocusRef = createRef()

    componentDidMount(){
        this._userFocusRef.current.focus()
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(username,password,remember)
    }

    render() {
        return(
            <>
            <h3>Form</h3>
            
            <form onSubmit={this.handleFormSubmit}>
                <input ref={this._userFocusRef} /* otherwise we can simply use: autoFocus */ type="text" name="username"/>
                <input type="password" name="password"/>
                <input type="checkbox" name="remember"/>

                <button type="submit" >Login</button>
                <button type="reset">Reset</button>
            </form>
            </>
        )
    }
}