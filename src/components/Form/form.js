import React, { Component } from "react";
import { Button } from "reactstrap";
import "./form.css";
import InputCountries from "./InputCountry/InputCountry";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const defaultInputClass = "input-group";
const errorInputClass = "input-group error";
const styleButton = {
  border: "1px solid #999",
  "border-radius": "0px"
};
const styleInput = {
  border: "1px solid #999",
  "border-radius": "0px",
  height: "33px",
  width: "200px"
};

class FormValidation extends Component {
  render() {
    const {
      valueChageHandler,
      InputFirstName,
      InputLastName,
      InputEmail,
      InputPhone,
      InputCountry,

      valueChageHandlerPhone,
      valueChageHandlerCountry,
      validationCountry,
      submitForm
    } = this.props;

    return (
      <form className="form" inline>
        <div
          className={InputFirstName.error ? defaultInputClass : errorInputClass}
        >
          <label>First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            onChange={valueChageHandler}
          />
          <div className="massage"></div>
        </div>
        <div
          className={InputLastName.error ? defaultInputClass : errorInputClass}
        >
          <label>Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            onChange={valueChageHandler}
          />
        </div>
        <div className={InputEmail.error ? defaultInputClass : errorInputClass}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="something@idk.cool"
            onChange={valueChageHandler}
          />
        </div>
        <div className={defaultInputClass}>
          <label>Phone</label>
          <PhoneInput
            country={"ru"}
            value={InputPhone.input}
            onChange={valueChageHandlerPhone}
            inputStyle={styleInput}
            buttonStyle={styleButton}
          />
        </div>

        <div
          className={InputCountry.error ? defaultInputClass : errorInputClass}
        >
          <label>Country</label>
          <InputCountries
            valueChageHandlerCountry={valueChageHandlerCountry}
            validationCountry={validationCountry}
          />
        </div>

        <Button onClick={submitForm}>Submit</Button>
      </form>
    );
  }
}

export default FormValidation;
