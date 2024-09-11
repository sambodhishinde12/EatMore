import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div className="position">
            <h1>About US</h1>
            <User name={"Sambodhi Shinde"} add={"Pune Lohegaon"}/>
            {/* <UserClass name={"Sam"} add={"Pune"} /> */}
        </div>
    )
}

// class About extends React.Component{
//     constructor(props){
//         super(props)
        
//     }
//     async componentDidMount(){
//         const data = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
//         const json = await data.json();

// console.log((json));
//     }
//     render(){
//         return(
//             <div className="position"><h1>About Us</h1>
//             <UserClass name={"Sambodhi Shinde"} add={"Pune"}/>
//             <UserClass name={"Sambodhi Shinde"} add={"Pune"}/>
//             </div>
//         )
//     }
// }

export default About;