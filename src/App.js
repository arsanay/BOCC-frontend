import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import Introduce from './components/dashboard/Introduce'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import  {getProject}  from "./store/actions/projectActions"
import  {checkAuth}  from "./store/actions/authActions"
import { connect } from "react-redux";
import { AuthConsumer } from "react-check-auth";
import { AuthProvider } from "react-check-auth";
import { user } from 'firebase-functions/lib/providers/auth';

class App extends Component {
  state = {
    logs:''
  }
  componentDidMount() {
    this.props.getProjects()
    this.props.checkAuths()
}
// componentDidUpdate(){
//   this.setState
// }
  render() {
    const urlAuth = "http://localhost:8081/user/checkAuth";
    return (
      <BrowserRouter>
        <div className="App">
        <AuthProvider authUrl={urlAuth}>
                <AuthConsumer>
                  {({ userInfo }) => {
                     return <Navbar Navbar={userInfo} /> 
                  }}
                </AuthConsumer>
              </AuthProvider>
          
          <Switch>
            <Route exact path='/'component={Introduce} />
            {/* Route /project ini yang bermasalah, karena kamu ngerender 2 kali, harusnya gak gitu */}
            <Route path='/signin'component={SignIn} />
            <Route path='/project/:_id' component={ProjectDetails}/>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProject()),
    checkAuths:() => dispatch(checkAuth())
  };
};



export default connect(null,mapDispatchToProps)(App)