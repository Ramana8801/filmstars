import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link,Route } from "react-router-dom";
import Mainbody from "./Mainbody";
function Logout(){
    return(
        <div>
            <Link to="/">
            <Button>Logout</Button>
            </Link>
            <Route exact path="/Mainbody">
            <Mainbody/>
        </Route>
        </div>
    )
}
export default Logout;