import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // Ensure fetchUser is properly imported
import Header from './Header';
import Landing from './Landing'

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey</h2>;


class App extends Component {
  componentDidMount() {
      // Check that fetchUser is being called correctly
     
      this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

// The connect function must pass actions correctly
export default connect(null, actions)(App);
