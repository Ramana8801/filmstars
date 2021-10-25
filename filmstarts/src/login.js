import Button from 'react-bootstrap/Button';
import React from "react"
import { Link,Route } from "react-router-dom"
import Mainbody from "./Mainbody";
import Heroines from './Heroines/heroines';
import Heross from './Heros/heross';
import Comedians from './comedians/comedians';
import Villains from './villains/Villains';
function Login(){
      return(
        <div>
            <Link to="/">
            <Button>Login</Button>
            </Link>
            <Route exact path="/">
            <Heross/>
           <Heroines/>
           <Comedians/>
           <Villains/>
        </Route>
        </div>
);

}
export default Login;