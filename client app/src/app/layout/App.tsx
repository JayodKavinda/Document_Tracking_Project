import React , { Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import  RisographDashboard  from '../../features/risographForms/dashboard/RisographDashboard';
import {observer} from 'mobx-react-lite'
import { Route} from 'react-router-dom'
import HomePage from '../../features/home/HomePage';
import RisographForm from '../../features/risographForms/form/RisographForm';
import RisographFormDetails from '../../features/risographForms/details/RisographFormDetails';
import RisographFormManage from '../../features/risographForms/details/RisographFormManage';
import { ToastContainer } from 'react-toastify';
import { NewDoc } from '../../features/newDoc/NewDoc';
import LoginForm from '../../features/user/LoginForm';


const App =()=> {

    return (
      <Fragment>
         
        <ToastContainer position ='bottom-right'/>
         <Route exact path='/' component ={HomePage}/>
         <Route  path='/login' component={LoginForm}/>
         <Route path ={'/(.+)'} render={() =>(
           <Fragment>
            <NavBar/>
            <Container fluid style={{marginTop:'3.8em'}}>
            <Route path='/dashboard' component ={RisographDashboard}/>
            <Route exact path='/risographForms/:id' component ={RisographFormDetails}/>
            <Route path='/risographForms/manage/:id' component ={RisographFormManage}/>
            <Route exact path='/createDoc' component ={NewDoc}/> 
            <Route path='/createDoc/risographForm' component ={RisographForm}/> 
            
            </Container>
           </Fragment>
          
         )}/>
        
      </Fragment>
    );
  
}

export default observer(App);
