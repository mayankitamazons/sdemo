import React from 'react';

class Specific_u extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            summary: props.getStore().summary
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
            if (userInput.summary.length >= 70 && userInput.summary.length <= 100) {

                if (this.props.getStore().summary != userInput.summary) { // only update store of something changed
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
            summaryVal: (data.summary != '')
        }
      }
    
      _validationErrors(val) {
          let msg = '';

          if (val.summaryVal == '') {
            msg = 'A summary is required';
          } else if (val.summaryVal < 70 || val.summaryVal > 100) {
            msg = "Password should be 70 to 100 characters";
          }

            const errMsgs = {
            summaryValMsg: msg
            }
        return errMsgs;
      }
    
      _grabUserInput() {
        return {
            summary: this.refs.summary.value
        };
      }

      calcWritedNum (e) {
          this.setState({writedSpellNum: e.target.value.length});
      }

    render() {
        return (
            <div>
                <div class="page1"><table align="center">
                    <br />
                    <tr><td><br /><font size="4"> <font size="5"><b>Project Requirements</b></font></font></td></tr>
                    <tr><td><textarea rows="10" cols="70" auto focus>Maximum display dimensions are as follows:
                  76 cm (30 in) deep
                  122 cm (48 in) wide
                  274 cm (108 in) high, including the table height. Table height should not exceed 91 cm (36 in).
                  
                  An Institutional Review Board (IRB) MUST review and approve all projects dealing with human subjects BEFORE experimentation begins.
                  
                  IRB signatures are required on Form 4A, in addition to the SRC signature on Form 1B. When students conduct questionnaires, the students, their parents, and the school are responsible for protecting the rights and welfare of the participating human subjects.
                  
                  The school MUST monitor administration of all questionnaires; seeing that all legal requirements are met and that informed consent forms are used for any subjects less than 18 years of age.
                  
                  All informed consent forms (Form 4B) MUST be available with the project during judging. Form 4B MUST be attached to the registration with all other required forms. -- DO NOT SEND THE COMPLETED QUESTIONNAIRES TO THE MSEF OFFICE. However, they must be made available during the judging process.
                  
                  Specific federal laws that attention should be paid to are as follows: 1) CFR, Title 45(Public Welfare), Part 47-Protection of Human Subjects (45cfr47); 2) CFR, Title 45(Public Welfare) Part 5-Privacy Act Regulations (45CFR5b); and 3) Public Health Service Act 42 USC, S 241 (d) (Protection of Privacy of Individuals who are Research Subjects). These documents are available from the Office of Protection from Research Risks, National Institutes of Health, Bldg 31 Room 5B63, 9000 Rockville Pike, Bethesda, MD 20892
</textarea></td></tr>

                    <tr><td><br /> <font size="5"><b> Project summary</b></font></td></tr>
                    <tr><td >
                        At least 5 sentences; you may type the summary</td></tr>
                    <tr><td class=" text1">in the box or upload a scan below.</td></tr>

                    <tr><td><br /> <div>
                                <textarea
                                    rows="4" 
                                    cols="50"
                                    ref="summary"
                                    autoComplete="off"
                                    className="form-control"
                                    required
                                    defaultValue={this.state.summary}
                                    onChange={(event) => this.calcWritedNum(event)} 
                                    onBlur={this.validationCheck}></textarea>
                                <div style={{marginTop: "10px", marginBottom: "20px", paddingLeft: "60%"}}>{this.state.writedSpellNum} charactors</div>
                                <div>{this.state.summaryValMsg}</div>
                            </div></td></tr>
                    <tr><td></td><td><b>OR</b></td></tr>
                    <tr><td><br /><font size='5'><b>Project Summary Upload</b></font></td></tr>
                    <tr><td><input id="a" name="a" type="file" required /></td></tr>

                    <tr><td><br /><font size="4">(Upload any Specialty Forms as needed.)</font></td></tr>
                </table>
                </div>

                <div class="page1">
                    <table style={{ paddingRight: "50px" }} align="center">


                        <tr><td><br /><font size="5"><b>Form Submission</b></font></td></tr>
                        <tr>
                            <td><textarea rows="10" cols="50" name="mfi_4_a_ii" id="project" required="required" autofocus>

                                Regulated Research Institutional/Industrial Setting Form (1C)
                                Qualified Scientist Form (2)
                                Risk Assessment Form (3)
                                Human Participants Form (4)
                                Human Informed Consent Form
                                Vertebrate Animal Form (5A)
                                Vertebrate Animals Form (5B)
                                Potentially Hazardous Biological Agents Risk Assessment (6A)
                                Human & Vertebrate Animal Tissue Form (6B)
                                Continuation Projects Form (7)
            
            
            
            
            
            
                </textarea></td></tr>
                        <tr><td><br /><input type="file" id="dis" required /></td></tr>

                    </table>
                </div>
            </div>
        );
    }
}
export default Specific_u;