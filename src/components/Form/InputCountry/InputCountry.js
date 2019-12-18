import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import countries from "../../../country.json";
import "./theme.css";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0
    ? []
    : countries.filter(
        count =>
          count.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class InputCountry extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.valueChageHandlerCountry(newValue);
    //this.props.validationCountry();
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  shouldRenderSuggestions = value => {
    return value.trim().length > 3;
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Enter your country in English",
      value: value,
      onChange: this.onChange,
     // onBlur: this.props.validationCountry
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
export default InputCountry;
