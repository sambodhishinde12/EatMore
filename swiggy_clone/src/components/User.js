import { useState } from "react";

const User = ({name,add}) =>{
    const [count] = useState(0);
    return(
        <div>
            <h2>Count: {count}</h2>
            <h1>Name: {name}</h1>
            <h2>Address: {add}</h2>
        </div>
    )
}
export default User;