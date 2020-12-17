import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// NOTE: Use State is a hook

const Join = () => {
    // hooks are declared only inside function based components
    // used for events
    const [name, setName] = useState(''); // name is initialized as ''
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /> </div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /> </div>
                //? passes parameters
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                // mt -20 is margin
                <button className= "button mt-20" type= "submit">Sign In</button>
                </Link>
            </div>

        </div>
    )
    
}

export default Join