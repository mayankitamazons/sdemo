import React from 'react';


class user_reg extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          email: props.getStore().email,
          teamname: props.getStore().teamname,
          password: props.getStore().password,
        };
    
        this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms
    
        this.validationCheck = this.validationCheck.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }

    isValidated() {
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
        let isDataValid = false;
    
        // if full validation passes then save to store and pass as valid
        if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
            if (userInput.password.length >= 8 && userInput.password.length <= 12) {
                if (this.props.getStore().email != userInput.email || this.props.getStore().password != userInput.password || this.props.getStore().teamname != userInput.teamname) { // only update store of something changed
                    this.props.updateStore({
                    ...userInput,
                    savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
                    });  // Update store here (this is just an example, in reality you will do it via redux or flux)
                }

                isDataValid = true;
            }
        }
        else {
            // if anything fails then update the UI validation state but NOT the UI Data State
            this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
        }
    
        return isDataValid;
      }
    
      validationCheck() {
        if (!this._validateOnDemand)
          return;
    
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
    
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
      }
    
       _validateData(data) {
        return  {
            pwdVal: (data.password != ''),
            teamVal: (data.teamname != ''),
            emailVal: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(data.email), // required: regex w3c uses in html5
        }
      }
    
      _validationErrors(val) {
            let msg = '';

            if (val.pwdVal == '') {
                msg = 'Password is required';
            } else if (val.pwdVal < 8 || val.pwdVal > 12) {
                msg = "Password should be 8 to 12 characters";
            }

        const errMsgs = {
          pwdValMsg: msg,
          emailValMsg: val.emailVal ? '' : 'A valid email is required',
          teamnameValMsg: val.teamVal ? '' : 'A teamname is required',
        }
        return errMsgs;
      }
    
      _grabUserInput() {
        return {
            teamname: this.refs.teamname.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        };
      }

    render()
    {        
        return(
            <div>
                <h1 align="center" ><b>User Registration</b></h1>

                <table cellpadding="2" width="50%" border="10" cellspacing="4" align="center">
                    <tr></tr>

                    <tr> <td>Teamname </td>
                        <td>
                            <div>
                                <input
                                    ref="teamname"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Teamname"
                                    className="form-control"
                                    required
                                    defaultValue={this.state.teamname}
                                    onBlur={this.validationCheck} />
                                <div>{this.state.teamnameValMsg}</div>
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <td>Password</td>
                        <td>
                            <div>
                                <input
                                    ref="password"
                                    autoComplete="off"
                                    type="password"
                                    className="form-control"
                                    required
                                    defaultValue={this.state.password}
                                    onBlur={this.validationCheck} />
                                <div>{this.state.pwdValMsg}</div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>
                            <div>
                                <input
                                    ref="email"
                                    autoComplete="off"
                                    type="email"
                                    placeholder="john.smith@example.com"
                                    className="form-control"
                                    required
                                    defaultValue={this.state.email}
                                    onBlur={this.validationCheck} />
                                <div>{this.state.emailValMsg}</div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>  
        );
    }
}

export default user_reg;