import React from 'react';
import { Link } from 'react-router-dom';

class Payment extends React.Component
{
    constructor(props) {
        super(props);
        this.registerData = this.registerData.bind(this);
    }

    registerData() {
        console.log("============> clcicked", this.props.getStore());

        // var url = 'http://localhost:4000/user/?category=' + this.props.getStore().category + '&email=' + this.props.getStore().email + '&f_name=' + this.props.getStore().f_name + '&grade=' + this.props.getStore().grade + '&l_name=' + this.props.getStore().l_name + '&p_cert=' + this.props.getStore().p_cert + '&password=' + this.props.getStore().password + '&s_name1=' + this.props.getStore().s_name1 + '&s_name2=' + this.props.getStore().s_name2 + '&savedToCloud=' + this.props.getStore().savedToCloud + '&sc_name1=' + this.props.getStore().sc_name1 + '&sc_name2=' + this.props.getStore().sc_name2 + '&summary=' + this.props.getStore().summary + '&t_cert=' + this.props.getStore().t_cert + '&t_email=' + this.props.getStore().t_email + '&teamname=' + this.props.getStore().teamname + '&title=' + this.props.getStore().title;

        // fetch(url, {
            // method: 'get'
        // }).then(function(response) {
            // console.log("1111111111", response);
            // return response;
        // }).then(function(body) {
            // console.log("========>", body);
        // });
		var jsonrequest={
						teamname:this.props.getStore().teamname,
						paasword:this.props.getStore().password,
						email:this.props.getStore().email,
						teacher_f_name:this.props.getStore().f_name,
						teacher_last_name:this.props.getStore().l_name,
						teacher_email:this.props.getStore().t_email,
						teacher_sname:this.props.getStore().sc_name1,
						s_name1:this.props.getStore().sc_name1,
						s_name2:this.props.getStore().sc_name2,
						s_name3:this.props.getStore().s_name3,
						grade:this.props.getStore().grade,
						s_class:this.props.getStore().s_class,
						project_title:this.props.getStore().project_title,
						category:this.props.getStore().category,
						school_name:this.props.getStore().school_name,
						school_phone:this.props.getStore().school_phone,
						s1_tshirt:this.props.getStore().shirt_sizes_1,
						s2_tshirt:this.props.getStore().shirt_sizes_2,
						s3_tshirt:this.props.getStore().shirt_sizes_3,
						summary:this.props.getStore().summary
		};
		// post whole form data 
		 fetch('http://localhost:4000/registeruser', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify(jsonrequest)
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))

        alert("saved successfully!!");
    }

    render()
    {
        return(

            <div>
            <br/><br/>
            <table align="center">
            
            
            <tr><td><br/><br/><br/> <font size='5'><b> Payment</b> </font></td></tr>
            <tr><td >Please send Cash or Check (made payable to MSEF Region 1 or CSME) to:</td></tr>
            
            <tr><td ><br/><br/>  University of Southern Mississippi</td></tr>
            <tr><td >CSME c/o MSEF Region 1</td></tr>
            <tr><td >118 College Drive Box #5087</td></tr>
            <tr><td >  Hattiesburg, MS 39406</td></tr>
            
            <tr><td><br/> Fees can also be paid online by following this link:<a> https://squareup.com/store/msefregion1 </a></td></tr>
            </table>
                <button onClick={this.registerData}><font size='5'> Register </font></button>
            </div>




            
        );
    }
}
export default Payment;