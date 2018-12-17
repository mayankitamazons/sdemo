import React from 'react';
import { Link } from 'react-router-dom';
import './look.css';

class queries extends React.Component
{
    render()
    {
        console.log("contactus");
        return( <div style={{ WebkitTextFillColor: "white"}}>
            <center>
                <br/><br/>
            <table  width="50%" border="10" cellspacing="4">

                <tr><td> <font size="5"> <b>Name</b> </font></td><td style={{ WebkitTextFillColor: "black"}}>  < input type="text"/></td></tr><br/><br/>
                <tr><td> <font size="5"><b>Email</b> </font></td><td style={{ WebkitTextFillColor: "black"}}><input type="email"/></td></tr> <br/><br/>
                <tr><td><font size="5"><b>Post your Query</b> </font></td><td style={{ WebkitTextFillColor: "black" }} ><textarea rows="10" cols="100"></textarea></td></tr>
              </table>
              <br/><br/><br/> <Link to ={ {
         pathname: "/queries_sent" 
} }> <button style={{WebkitTextFillColor : "Brown"}}> <font size="5">SEND</font></button></Link>
                </center>
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          </div>

        );
    }
    }

export default queries;