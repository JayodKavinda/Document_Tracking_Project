import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext, useEffect } from 'react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import RisographFormStore from '../../../app/stores/risographFormStore'
import { TopMenuBar } from '../../../app/layout/TopMenuBar'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import  SideMenu  from '../../../app/layout/SideMenu'
import InboxSideMenu from '../../../app/layout/InboxSildeMenu'
import { Container } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore'



 const RisographDashboard:React.FC = () => {

    const rootStore = useContext(RootStoreContext)
    
    const { path } = useRouteMatch();

    useEffect(()=>{
        rootStore.risographFormStore.risographForms  =[]
        rootStore.risographFormStore.inboxRisographForms  =[]

        rootStore.risographFormStore.loadRisographForms(window.localStorage.getItem('userId'));
        rootStore.risographFormStore.loadInboxRisographForms(window.localStorage.getItem('userId'));
    },[rootStore.risographFormStore]);
  
    if(rootStore.risographFormStore.loadingInitial) return <LoadingComponent content='Loading Applications...'/>

   
    
    return (
        <div>
            <TopMenuBar/>

            <Container fluid style={{marginTop:'1em'} }>
            <Switch >
                <Route exact path={path}>
                    <h3>Home</h3>
                </Route>
                <Route path={`${path}/forms`}>
                <h3 style={{marginLeft : '20px'}}>Your send Documents</h3>
                    <SideMenu  />
                </Route>
                <Route path={`${path}/inbox`}>
                    <h3 style={{marginLeft : '20px'}}>Check your inbox</h3>
                   <InboxSideMenu  />
                </Route>
                </Switch>
            </Container>
            
            

        </div>
        
    )
}

export default observer(RisographDashboard);
