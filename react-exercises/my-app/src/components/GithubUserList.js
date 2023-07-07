import { useState } from "react";
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
    const [userArray, setUserArray] = useState([])
    const [user, setUser] = useState("")

    function handleInputChange(event) {
        setUser(event.target.value)
    }

    function handleBtnClick() {
        setUserArray([...userArray, user])
    }

    return (
        <div>
            <div>
                <input onChange={handleInputChange} type="text" />
                <button onClick={handleBtnClick}>send</button>
            </div>
            {userArray.map((uservalue, index) =>
                <div key={uservalue + index}>
                    <GithubUser username={uservalue} />
                </div>)}
            {/* {userArray.map((githubName)=> (<div> <GithubUser username={githubName}/> </div> ))} */}
        </div>
    )
}