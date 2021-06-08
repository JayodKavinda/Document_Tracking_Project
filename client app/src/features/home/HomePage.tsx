import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Container, Header, Segment ,Image, Button, Icon} from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';

const HomePage = () => {

    const rootStore = useContext(RootStoreContext);
    const {isLoggedIn,user,currentUser} = rootStore.userStore
    const {openModal} = rootStore.modalStore;
    return (
        <Segment inverted  vertical className='masthead' >
        <Container  style={{marginLeft: '5em'}} >
            <Segment.Inline>
            <Image size='small' src='/assests/logo.png' alt='logo' />
            <Header as='h1'  inverted>
                Document Tracking System
                <Header.Subheader>
                    Offical documents and request traking system of Faculty of Engineering, University of Ruhuna
                </Header.Subheader>
            </Header>
            </Segment.Inline>
            
            <Header as='h2' inverted content='Faculty of Engineering | University of Ruhuna' />
            {isLoggedIn && currentUser ? (
                <Fragment>
                    <Header as='h2' inverted content= {`Welcome back ${currentUser.firstName}`} />
                    <Button as={Link}  to='/dashboard' size='huge' inverted>
                        Go to dashboard
                    </Button>
                </Fragment>
            ): (
                <Fragment>
                    
                        <Button onClick={()=> openModal(<LoginForm/>)} size='huge' inverted>
                        Login
                        </Button>
                </Fragment>
            )}
            
        </Container>
    </Segment>
    )
}

export default HomePage;
