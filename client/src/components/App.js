import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // Ensure fetchUser is properly imported
import Header from './Header';
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'






class App extends Component {
  componentDidMount() {
      // Check that fetchUser is being called correctly
     
      this.props.fetchUser();
  }

  render() {
    return (
      
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </Switch>
          </div>
        </BrowserRouter>
      
    );
  }
}

// The connect function must pass actions correctly
export default connect(null, actions)(App);
