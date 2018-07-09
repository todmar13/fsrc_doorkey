import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'

class Body extends Component {
  renderContent() {
    switch(this.props.auth) {
      case false:
      return <Landing />
      case null:
      return (
        <div style={{textAlign:'center'}}>
          <h1>
            Checking Login...
          </h1>
        </div>
      )
      default:
//      return (<Dashboard />)
      return (<div className='containter'>
          <BrowserRouter>
          <div>
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/"        component={Dashboard} />
          <Route exact path="/surveys" component={Dashboard} />
          </div>
          </BrowserRouter>
          </div>
      )
    }
  }
  render() {
    return (
      <div> {this.renderContent() }</div>
    );
  }
}
function mapStateToProps({auth}) {
  return {auth}
}
export default connect(mapStateToProps)(Body);
