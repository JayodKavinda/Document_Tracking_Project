
import {  Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import { Card, Grid, Icon, Image, Menu, Segment } from 'semantic-ui-react'
import { history } from '../..';
import RisographFormList from '../../features/risographForms/dashboard/RisographFormList';
import VehicalReservationFormList from '../../features/vehicalReservationForm/dashboard/VehicalReservationFormList'

 const SideMenu = () => {
    let { path, url } = useRouteMatch();

    const createRisograph= ()=>{
      history.push('/createDoc/risographForm')
    }

    return (
        <Grid >
        <Grid.Column mobile={16} tablet={3} computer={3}   style={{background: '#182A73', height: '70em' }}>
          <Menu  inverted fluid vertical   style={{marginTop:'3em',  background: '#182A73'}}> 
            
            <Menu.Item
              name='Application for Vehical Reservation'
              color='blue'
              as ={NavLink} exact to={`${url}`}
            />
            <Menu.Item
              name='Request for Risograph Copies'
              color='blue'
              as ={NavLink} exact to={`${url}/risographForms`}
              
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
                <VehicalReservationFormList/>
               
                </Route>
                <Route path={`${path}/risographForms`}>
                <RisographFormList/>
                </Route>
                <Route path={`${path}/voucher`}>
                <h3>No Voucher Application</h3>
                </Route>
                <Route path={`${path}/bankApplication`}>
                <h3>No Bank Applications</h3>
                </Route>
        </Switch>
         
        </Grid.Column>

        <Grid.Column  mobile={16} tablet={3} computer={3}>
        <Card fluid
        image='/assests/newDoc.png'
        header='Create new Document'
        meta='Download Now'
        description='Download Request Risograph Copies Appllication template and eidt with your details'
        onClick = {createRisograph}
        />

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

export default SideMenu
