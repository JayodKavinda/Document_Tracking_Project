import   { Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import  RisographDashboard  from '../../features/risographForms/dashboard/RisographDashboard';
import {observer} from 'mobx-react-lite'
import { Route, Switch} from 'react-router-dom'
import HomePage from '../../features/home/HomePage';
import RisographForm from '../../features/risographForms/form/RisographForm';
import RisographFormDetails from '../../features/risographForms/details/RisographFormDetails';
import RisographFormManage from '../../features/risographForms/details/RisographFormManage';
import { ToastContainer } from 'react-toastify';
import { NewDoc } from '../../features/newDoc/NewDoc';
import UnAutherized from './UnAutherized';
import NotFound from './NotFound';
import ModalContainer from '../common/modals/ModalContainer'
import BlankForm from '../../features/risographForms/form/BlankForm';
import VehicalReservationForm from '../../features/vehicalReservationForm/form/VeicalReservationForm'
import VehicalReservationFormDetails from '../../features/vehicalReservationForm/details/VehicalReserationFormDetails'
import VehicalFormManage from '../../features/vehicalReservationForm/details/VehicalFormMange'

const App =()=> {



    return (
      <Fragment>
         <ModalContainer/>
        <ToastContainer position ='bottom-right'/>
         <Route exact path='/' component ={HomePage}/>
         
         <Route path ={'/(.+)'} render={() =>(
           <Fragment>
            <NavBar/>
            <Container fluid style={{marginTop:'3.8em'}}>
              <Switch>
              <Route path='/dashboard' component ={RisographDashboard}/>
              <Route exact path='/risographForms/:id' component ={RisographFormDetails}/>
              <Route exact path='/vehicalReservationForms/:id' component ={VehicalReservationFormDetails}/>
              <Route path='/risographForms/manage/:id' component ={RisographFormManage}/>
              <Route path='/vehicalReservationForm/manage/:id' component ={VehicalFormManage}/>
              <Route exact path='/createDoc' component ={NewDoc}/> 
              <Route path='/createDoc/risographForm' component ={RisographForm}/> 
              <Route path='/createDoc/blankForm' component ={BlankForm}/> 
              <Route path='/createDoc/vehicalReservationForm' component ={VehicalReservationForm}/> 
              <Route  path='/notfound' component={NotFound}/>
              <Route  path='/unatherized' component={UnAutherized}/>
              </Switch>
            
            </Container>
           </Fragment>
          
         )}/>
        
      </Fragment>
    );
  
}

export default observer(App);
