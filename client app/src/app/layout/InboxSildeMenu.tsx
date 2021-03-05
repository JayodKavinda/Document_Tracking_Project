import React from 'react'
import {  NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import { Grid, Menu } from 'semantic-ui-react'
import InboxRisographFormList from '../../features/risographForms/dashboard/InboxRisographFormList';

 const InboxSideMenu = () => {
    let { path, url } = useRouteMatch();

    return (
        <Grid  style={{marginTop:'1em'}}>
        <Grid.Column  width={3} >
          <Menu fluid vertical tabular >
            <Menu.Item
              name='Request for Risograph Copies'
              as ={NavLink} exact to={`${url}`}
              
            />
            <Menu.Item
              name='Application for Vehical Reservation'
              as ={NavLink} exact to={`${url}/vehicalReservation`}
            />
            <Menu.Item
              name='Voucher Application'
              as ={NavLink} exact to={`${url}/voucher`}
            />
            <Menu.Item
              name='Bank Application'
              as ={NavLink} exact to={`${url}/bankApplication`}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={13}>
          
          <Switch>
                <Route exact path={path}>
                <InboxRisographFormList/>
                </Route>
                <Route path={`${path}/vehicalReservation`}>
                <h3>Inbox Application for Vehical Reservation</h3>
                </Route>
                <Route path={`${path}/voucher`}>
                <h3>Inbox Voucher Application</h3>
                </Route>
                <Route path={`${path}/bankApplication`}>
                <h3>Inbox Bank Applications</h3>
                </Route>
        </Switch>
         
        </Grid.Column>
      </Grid>
    )
}

export default InboxSideMenu
