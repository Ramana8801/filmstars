import logo from './logo.svg';
import './App.css';
import Mainbody from './Mainbody';
//import Mahesh from './Heros/mahesh';
import Pawan from './Heros/pawan';
import Prabhas from './Heros/prabhas';
import Ntr from './Heros/ntr';
import Srntr from './Heros/sr.ntr';
import Krishna from './Heros/krishna';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './heading';
import Logout from './logout';
import Login from './login';
import Mahesh from './Heros/mahesh';
import Heroines from './Heroines/heroines';
import Samantha from './Heroines/samantha';
import Anupama from './Heroines/anupama';
import Kajal from './Heroines/kajal';
import Rasikana from './Heroines/rasikana';
import Rakul from './Heroines/rakul';
import Tamanna from './Heroines/tamanna';
import Aravind from './villains/aravind';
import Jagapathi from './villains/jagapathi';
import Pinisetty from './villains/pinisetty';
import Pradeep from './villains/pradeep';
import Prakash from './villains/prakash';
import Saikumar from './villains/saikumar';
import Ntrphoto from './photos/ntrphotos';
import Maheshphotos from './photos/maheshphotos';
import Pawanphotos from './photos/pawanphotos';
import Prabhasphotos from './photos/prabhasphotos';
import Srntrphotos from './photos/srntrphotos';
import Krishnaphotos from './photos/krishnaphotos';
import Brahmanandam from './comedians/brahmanandam';
import Narayan from './comedians/narayan';
import Venu from './comedians/venu';
import Prudhviraj from './comedians/prudhviraj';
import Chidambaram from './comedians/chidambaram';
import lakshman from './comedians/lakshman';
import Lakshman from './comedians/lakshman';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
   
   
     <Switch>
     
     
        <Route exact path="/mahesh">
          <Mahesh/>
        </Route>
        <Route exact path="/pawan">
          <Pawan/>
        </Route>
        <Route exact path="/prabhas">
          <Prabhas/>
        </Route>
        <Route  exact path="/ntr">
          <Ntr/>
        </Route>
        <Route exact path="/sr.ntr">
          <Srntr/>
        </Route>
        <Route exact path="/krishna">
          <Krishna/>
          </Route>
          <Route exact path="/">
         
        <Mainbody/>
          </Route>
          <Route exact path="/samantha">
          <Samantha/>
      </Route>
      <Route exact path="/anupama">
          <Anupama/>
      </Route>
      <Route exact path="/kajal">
          <Kajal/>
      </Route>
      <Route exact path="/rasikana">
         <Rasikana/>
      </Route>
      <Route exact path="/rakul">
         <Rakul/>
      </Route>
      <Route exact path="/tamanna">
        <Tamanna/>
      </Route>


      <Route exact path="/brahmanandam">
        <Brahmanandam/>
        </Route>
        <Route exact path="/narayan">
        <Narayan/>
        </Route>
        <Route exact path="/venu">
        <Venu/>
        </Route>
        <Route exact path="/prudhviraj">
        <Prudhviraj/>
        </Route>
        <Route exact path="/chidambaram">
        <Chidambaram/>
        </Route>
        <Route exact path="/lakshman">
        <Lakshman/>
        </Route>


      <Route exact path="/aravind">
        <Aravind/>
        </Route>
        <Route exact path="/jagapathi">
        <Jagapathi/>
        </Route>
        <Route exact path="/pinisetty">
        <Pinisetty/>
        </Route>
        <Route exact path="/pradeep">
          <Pradeep/>
      </Route>
      <Route exact path="/prakash">
          <Prakash/>
      </Route>
      <Route exact path="/saikumar">
        <Saikumar/>
      </Route>

      <Route exact path="/ntrphotos">
      <Ntrphoto/>
      </Route>
      <Route exact path="/maheshphotos">
      <Maheshphotos/>
      </Route>
      <Route exact path="/pawanphotos">
      <Pawanphotos/>
      </Route>
      <Route exact path="/prabhasphotos">
      <Prabhasphotos/>
      </Route>

      <Route exact path="/srntrphotos">
      <Srntrphotos/>
      </Route>

      <Route exact path="/krishnaphotos">
      <Krishnaphotos/>
      </Route>

      


      </Switch>
     
    
    </div>
    </BrowserRouter>
  );
}


export default App;
