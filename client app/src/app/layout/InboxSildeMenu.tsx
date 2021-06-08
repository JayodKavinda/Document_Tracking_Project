import React from 'react'
import {  NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import { Card, Grid, Image, Menu } from 'semantic-ui-react'
import InboxRisographFormList from '../../features/risographForms/dashboard/InboxRisographFormList';
import InboxVehicalFormList from  '../../features/vehicalReservationForm/dashboard/InboxVehicalFormList';

 const InboxSideMenu = () => {
    let { path, url } = useRouteMatch();

    return (
        <Grid >
        <Grid.Column  mobile={16} tablet={3} computer={3} style={{background: '#182A73', height: '70em' }}>
          <Menu inverted fluid vertical   style={{marginTop:'3em',  background: '#182A73'}} >
            
            <Menu.Item
              name='Application for Vehical Reservation'
              color='blue'
              as ={NavLink} exact to={`${url}`}
            />

            <Menu.Item
              name='Request for Risograph Copies'
              color='blue'
              as ={NavLink} exact to={`${url}/risographForm`}
              
            />
            <Menu.Item
              name='Voucher Application'
              color='blue'
              as ={NavLink} exact to={`${url}/voucher`}
            />
            <Menu.Item
              name='Bank Application'
              color='blue'
              as ={NavLink} exact to={`${url}/bankApplication`}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched mobile={16} tablet={13} computer={10}>
          
          <Switch>
                <Route exact path={path}>
                <InboxVehicalFormList/>
                </Route>
                <Route path={`${path}/risographForm`}>
                <InboxRisographFormList/>
                </Route>
                <Route path={`${path}/voucher`}>
                <h3>No Inbox Voucher Application</h3>
                </Route>
                <Route path={`${path}/bankApplication`}>
                <h3>No Inbox Bank Applications</h3>
                </Route>
        </Switch>
         
        </Grid.Column>

        <Grid.Column mobile={16} tablet={3} computer={3}>
      

      <Card fluid>
          <Card.Content header='Do you know ?' />
          <Card.Content >
          Risograph Form documentation process flow
          </Card.Content>
          <Card.Content >
          <Image src='/assests/riso_flow.png' />
          </Card.Content>
        </Card>
        </Grid.Column>
      </Grid>
    )
}

export default InboxSideMenu
