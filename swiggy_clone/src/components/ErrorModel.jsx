import { useRouteError } from "react-router-dom";

const ErrorModel = () =>{
    const err = useRouteError();
    console.log(err);
    
    return(
        <div>
            <h1>{err.data}</h1>
            <h2>
                {err.statusText} : {err.status}
            </h2>
        </div>
       
    )
}
export default ErrorModel;