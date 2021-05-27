import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, Icon, Image, Menu, Popup } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'


const NavBar: React.FC =() => {
        const rootStore = useContext(RootStoreContext);
        const{ user, logout, currentUser} = rootStore.userStore
        
    return (
        <Menu fixed = 'top' inverted>

        <Container fluid>
        <Menu.Item header as ={NavLink} exact to ='/'>
            {/* <img src ="/assests/logo.png" alt = 'logo' style={{marginRight : '20px'}}/> */}
            Document Tracking System | University of Ruhuna
        </Menu.Item>
        
        
        <Menu.Item name='My Document' as ={NavLink} to ='/dashboard'
        />
        <Menu.Item>
        <Popup content='Add a new Document' trigger={
        <Button as ={NavLink} to ='/createDoc'  positive icon labelPosition='left'>
            <Icon name='plus' />
        Create New Document
        </Button>} />
            
        </Menu.Item>
            {currentUser  &&
            <Menu.Item position='right'>
            <Image avatar spaced='right' src={'/assests/user.png'} />
            <Dropdown pointing='top right' text={currentUser?.firstName}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`/profile/username`} text='My profile' icon='user'/>
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
            }
        </Container>
       
      </Menu>
    )
}

export default observer(NavBar);
