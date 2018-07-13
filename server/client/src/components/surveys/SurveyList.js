import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }
  renderSurveys() {
    return this.props.surveys.map(survey=> {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
            <div className="card-content white-text">
              <span className="card-title">Door:{survey.title}</span>
              <p>
                Key:{survey.subject}
              </p>
            </div>
            <div className="card-action">
            <button onClick= {()=>{alert("edit")} }
            className="green btn-flat center white-text">
            Edit
            </button>
            </div>
          </div>

      )

    })
  }
  render() {
    return (
      <div>
      {this.renderSurveys()}
      </div>
    )
  }
}
function mapStateToProps({surveys}) {   // state
  return {surveys}    // surveys: state.surveys
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList)
