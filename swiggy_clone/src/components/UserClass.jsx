
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);   

        this.state = {
            count : 1
        }
        console.log("child constructor");
        
    }
    componentDidMount(){
        console.log("child component");
        
    }
    render(){
        console.log("child render");
        
        const {count} = this.state;
        return(
            <div>
                <h2>Count: {count}</h2>
                <button onClick={(()=>{
                    this.setState({
                        count:count+1
                    })
                })}>Increase Count</button>
            <h1>Name: {this.props.name}</h1>
            <h2>Address: {this.props.add}</h2>
        </div>
        )
    }
}

export default UserClass;