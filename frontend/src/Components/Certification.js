import React from 'react';


class certification extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
            p_cert: props.getStore().p_cert,
            t_cert: props.getStore().t_cert
        };

        this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms
    
        this.validationCheck = this.validationCheck.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }

    handleCheck(index) {
        if (index == 'p')
            this.state.p_cert = !this.state.p_cert;
        else
            this.state.t_cert = !this.state.t_cert;
    }

    isValidated() {
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
        let isDataValid = false;
    
        // if full validation passes then save to store and pass as valid
        if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
            if (this.props.getStore().p_cert != userInput.p_cert || this.props.getStore().t_cert != userInput.t_cert) { // only update store of something changed
                this.props.updateStore({
                  ...userInput,
                  savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
                });  // Update store here (this is just an example, in reality you will do it via redux or flux)
            }

            isDataValid = true;
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
            p_certVal: data.p_cert, // required: anything besides N/A
            t_certVal: data.t_cert // required: anything besides N/A
        }
      }
    
      _validationErrors(val) {
            const errMsgs = {
                p_certValMsg: val.p_certVal ? '' : 'Parent Certification is required',
                t_certValMsg: val.t_certVal ? '' : 'Key Teacher Certification is required'
            }
            return errMsgs;
      }
    
      _grabUserInput() {
        return {
            p_cert: this.state.p_cert,
            t_cert: this.state.t_cert,
        };
      }

    render()
    {
        return(
            <div class="page1">
            <table >
                <tr><b><h2 align="left" >Parent Certification:</h2></b></tr>
                <tr> <td align="left"><h4 class=" text1"> Signature required for ALL Exhibitors. This is to certify that as the parent or legal guardian of the above-indicated student,
                I give my permission for his/her participation in the Mississippi Science and Engineering Fair program. I further certify that I release any and every liability, claim, right
                of action of any kind or nature, which my child or legal representative may have for any and all bodily or personal injuries or property damages or any other damages resulting there from,
                whether caused by negligence or other acts or missions or releases or otherwise which might occur during participation in the MSEF programs, any host institution(s), any regional or state fair sponsor(s),
    or the representative(s) thereof, and the management or owner(s) of any physical facility in which any fair is conducted.</h4></td></tr>

                <tr>
                    <td align="left">
                        <div>{this.state.p_certValMsg}</div>
                    </td>
                </tr>

                <tr><td align="left">
                <input type="checkbox" onChange={this.handleCheck.bind(this, 'p')} defaultChecked={this.state.p_cert}/><font size="4"> By checking this box, you guarantee that the student has parental permission to compete in the MS Region 1 Science & Engineering Fair  and can provide signature upon request.</font></td></tr>

                <tr><td> <b><h2 align="left">Key Teacher Certification</h2></b></td></tr>
                <tr><td align="left"><h4>  Signature required for ALL entries to Regional Fairs. Registration will be VOIDED without signature. I have reviewed the form(s) for both correctness and completeness. I further certify that (1) this project follows all proper procedures involving humans and/or vertebrates, (2) that school officials preapproved the questionnaire(s) and that I and others in the school take full legal and ethical responsibility for both the questionnaire and its use in human research, and (3) that the research behind the project and display represent the work of this student.</h4></td></tr>

                <tr>
                    <td align="left">
                        <div>{this.state.t_certValMsg}</div>
                    </td>
                </tr>

                <tr><td align="left"> 
                    <input type="checkbox" onChange={this.handleCheck.bind(this, 't')} defaultChecked={this.state.t_cert} /><font size="4" class=" text1" >By checking this box, you certify this registration to be a complete, authorized entry in the MS Region 1 Science & Engineering Fair and can provide signature upon request.</font></td></tr>
            </table>
        </div>
        );

    }
}
export default certification;