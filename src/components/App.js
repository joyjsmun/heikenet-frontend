import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
//import {About,ChooseAccount,Dashboard,Home,PageNotFound,SignIn,SignUp,UserAccount,CreateProject,CreateFreelancer} from 'pages'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {ChooseAccount} from './pages/ChooseAccount';
import {Dashboard} from './pages/Dashboard';
import {PageNotFound} from './pages/PageNotFound';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';
import {UserAccount} from './pages/UserAccount';
import {CreateProject} from './pages/CreateProject';
import {CreateFreelancer} from './pages/CreateFreelancer';



class App extends Component {
    render() {
        return (
         <div>
             <Switch>
                 <Route exact path='/' component={Home} />
                 <Route path='/about' component={About} />
                 <Route path='/choose_account' component={ChooseAccount} />
                 <Route path='/dashboard' component={Dashboard} />
                 <Route path='/signin' component={SignIn} />
                 <Route path='/signup' component={SignUp} />
                 <Route path='/user_account' component={UserAccount} />
                 <Route path='/create_project' component={CreateProject} />
                 <Route path='/create_freelancer' component={CreateFreelancer} />
                 <Route component={PageNotFound}/>
             </Switch>
         </div>   
        )
    }
}

export default App;