// SurveyFormReview shows users their form inputs for review
import _ from 'lodash'
import React from 'react';
import  {connect} from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions'


const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields,({name,label}) => {
    return (
      <div key={name}>
      <label>{label}</label>
      <div>
      {formValues[name]}
      </div>
      </div>
    );
  });

  return (
    <div>
    <h5>Save this Door and Key?</h5>
    {reviewFields}
    <button className="yellow darken-3 white-text btn-flat"
    onClick={onCancel}> Back <i className="material-icons right">arrow_back</i>
    </button>
    <button onClick= {()=>submitSurvey(formValues) }
    className="green btn-flat right white-text">
    Send Survey(Save Door Key)<i className="material-icons right">web_asset</i>
    </button>
    </div>
  )
} // className="green btn-flat right white-text" first button

function mapStateToProps(state) {
  return {
    formValues:state.form.surveyForm.values
  }
}

export default connect(mapStateToProps,actions)(SurveyFormReview)