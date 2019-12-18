import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form/form";
import "react-phone-input-2/lib/style.css";
import countries from "./country.json";

class App extends Component {
  state = {
    InputFirstName: { input: "", error: true },
    InputLastName: { input: "", error: true },
    InputEmail: { input: "", error: true },
    InputPhone: { input: "", error: true },
    InputCountry: { input: "", error: true }
  };

  valueChageHandler = e => {
    if (e.target.id === "firstname") {
      this.setState({
        InputFirstName: { input: e.target.value, error: this.state.error }
      });
      this.validationFirstName(e.target.value);
    }
    if (e.target.id === "lastname") {
      this.setState({
        InputLastName: { input: e.target.value, error: this.state.error }
      });
      this.validationLastName(e.target.value);
    }
    if (e.target.id === "email") {
      this.setState({
        InputEmail: { input: e.target.value, error: this.state.error }
      });

      this.validationEmail(e.target.value);
    }
  };

  valueChageHandlerPhone = phone => {
    this.setState({ InputPhone: { input: phone, error: this.state.error } });
    this.validationPhone(phone);
  };

  valueChageHandlerCountry = value => {
    this.setState({
      InputCountry: { input: value, error: this.state.error }
    });
    this.validationCountry(value);
  };
  validationFirstName = value => {
    let reg = /[A-Z|А-Я][a-z|а-я]+$/;

    if (reg.test(value) === true) {
      this.setState({
        InputFirstName: { input: value, error: true }
      });
    } else {
      this.setState({
        InputFirstName: { input: value, error: false }
      });
    }
  };

  validationLastName = value => {
    let reg = /[A-Z|А-Я][a-z|а-я]+$/;

    if (reg.test(value) === true) {
      this.setState({
        InputLastName: { input: value, error: true }
      });
    } else {
      this.setState({
        InputLastName: { input: value, error: false }
      });
    }
  };

  validationEmail = value => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(value) === true) {
      this.setState({
        InputEmail: { input: value, error: true }
      });
    } else {
      this.setState({
        InputEmail: { input: value, error: false }
      });
    }
  };

  validationPhone = value => {
    this.setState({
      InputPhone: { input: value, error: true }
    });
  };

  validationCountry = value => {
    countries.map(country => {
      if (country.name === value) {
        this.setState({
          InputCountry: { input: value, error: true }
        });
      }
    });
  };

  submitForm = () => {
    const stateArr = Object.values(this.state);
    let status = true;
    console.log(Object.values(this.state));
    stateArr.map(state => {
      if (state.input === "" || state.error !== true) {
        status = false;
      }
    });
    if (status === true) {
      alert("Successfully");
    } else {
      alert("Not successful");
    }
  };

  render() {
    return (
      <div className="App">
        <Form
          validationEmail={this.validationEmail}
          validationFirstAndLastName={this.validationFirstAndLastName}
          valueChageHandler={this.valueChageHandler}
          valueChageHandlerPhone={this.valueChageHandlerPhone}
          valueChageHandlerCountry={this.valueChageHandlerCountry}
          validationCountry={this.validationCountry}
          InputFirstName={this.state.InputFirstName}
          InputLastName={this.state.InputLastName}
          InputEmail={this.state.InputEmail}
          InputPhone={this.state.InputPhone}
          InputCountry={this.state.InputCountry}
          submitForm={this.submitForm}
        />
      </div>
    );
  }
}

export default App;
