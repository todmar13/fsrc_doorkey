// SurveyForm shows a form for the user to add input
import _ from 'lodash'
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import SurveyField from './SurveyField'
import {Link} from 'react-router-dom'
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields,({label,name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" label= {label} name={name} />
    );
  });
  }
  render() {
    return (
      <div>
        < form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
        <i className="material-icons right">not_interested</i>
        Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">Next
        <i className="material-icons right">done</i>
        </button>
        </form>
      </div>
    )
  }
}
function validate(values,valueNeeded) {
  const errors = {};
  _.each(formFields,({name,valueNeeded}) => {
    if (!values[name]) {
      errors[name] = valueNeeded;
    }
  })
  return errors;
}
export default reduxForm({
  validate,
  form:'surveyForm',
  destroyOnUnmount:false
 }) (SurveyForm);
