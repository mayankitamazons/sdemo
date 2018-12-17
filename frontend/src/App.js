import React, { Component } from 'react';
import logo from './usm.png';
import './App.css';
// import Homepage from './Components/Homepage';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Blur from 'react-blur';
import homepage from './Components/Homepage';
import typeoffair from './Components/Typeoffair';
import u_sform from './Components/U_sform';
import back from './Images/back.jpg';
import registered from './Components/Registered';
import queries from './Components/Queries';
import { Parallax, Background } from 'react-parallax';
import image1 from './Images/hall.jpg';
import queries_sent from './Components/Queries_sent';

class App extends Component {

  render() {
    return (
      <div className="App" >

        {/* <Blur class='blur.demo' img={back} blurRadius={6} resizeInterval= "150ms"   enableStyles>
        <header> 
        <h1 className="Trial"> Centre </h1>
        </header>
        </Blur> */}


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mississippi Region-I Science and Engineering Fair</h1>
          <a  href = "https://www.usm.edu/science-math-education">Centre of Science and Math Education</a>
        </header>
        

        <Parallax className="Appbody"
            blur={7}
            bgImage={image1}
            strength={500} >
       
        <Nav-bar class="Nav-css">
            <ul id="tabs"  >
         
              <li >
               <Link to={'/'} >Home  </Link> 
              </li>
              <li>
                <Link to={'/fairs'}   >Fairs</Link>
              </li>
              <li>
                <Link to={'/queries'}>ContactUs</Link>
              </li>
			   <li>
                <Link to={'/judgeregister'}>Judge Register</Link>
              </li>
            </ul>
            </Nav-bar>
          
        <Route path ={'/queries_sent'} component={queries_sent}/> 
        <Route path ={'/sucess'} component={registered}/>
        <Route path ={'/queries'} component={queries}/>
        <Route path = {'/uform'} component={u_sform}/>
        
        <Route path={'/fairs'} component={typeoffair} />
        <Route path={'/'} exact component={homepage}/>
        
      
        
       

        
        </Parallax>
           </div>
    );
  }
}

export default App;
