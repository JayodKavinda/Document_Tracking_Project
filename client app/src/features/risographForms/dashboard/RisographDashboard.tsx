import { observer } from 'mobx-react-lite'
import React, {  useContext, useEffect } from 'react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { TopMenuBar } from '../../../app/layout/TopMenuBar'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import  SideMenu  from '../../../app/layout/SideMenu'
import InboxSideMenu from '../../../app/layout/InboxSildeMenu'
import { Container } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore'
import Home from '../../../app/layout/Home' 



 const RisographDashboard:React.FC = () => {

    const rootStore = useContext(RootStoreContext)

    const {setAppLoaded, userId, appLoaded}= rootStore.commonStore;
    const {getUser} = rootStore.userStore

    const { path } = useRouteMatch();

    useEffect(()=>{
        rootStore.risographFormStore.risographForms  =[]
        rootStore.risographFormStore.inboxRisographForms  =[]

        rootStore.vehicalReservationFormStore.vehicalReservationForms  =[]
        rootStore.vehicalReservationFormStore.inboxVehicalReservationForms  =[]

        rootStore.risographFormStore.loadRisographForms(window.localStorage.getItem('userId'));
        rootStore.risographFormStore.loadInboxRisographForms(window.localStorage.getItem('userId'));

        rootStore.vehicalReservationFormStore.loadVehicalReervationForms(window.localStorage.getItem('userId'));
        rootStore.vehicalReservationFormStore.loadInboxehicalReservationForms(window.localStorage.getItem('userId'));

        if(userId){
            getUser(userId);
          }

    },[rootStore.risographFormStore,rootStore.vehicalReservationFormStore,getUser,  userId]);
  
    if(rootStore.risographFormStore.loadingInitial) return <LoadingComponent content='Loading Applications...'/>
    if(rootStore.vehicalReservationFormStore.loadingInitial) return <LoadingComponent content='Loading Applications...'/>

    
   
    
    
    return (
        <div>
            <TopMenuBar/>

            <Container fluid style={{marginTop:'1em'} }>
            <Switch >
                <Route exact path={path}>
                    <Home/>
                </Route>
                <Route path={`${path}/forms`}>
                    <SideMenu  />
                </Route>
                <Route path={`${path}/inbox`}>
                   <InboxSideMenu  />
                </Route>
                </Switch>
            </Container>
            
            

        </div>
        
    )
}

export default observer(RisographDashboard);
