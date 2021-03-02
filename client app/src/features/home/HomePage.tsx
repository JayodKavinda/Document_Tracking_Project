import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Container, Header, Segment ,Image, Button} from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';

const HomePage = () => {

    const rootStore = useContext(RootStoreContext);
    const {isLoggedIn,user} = rootStore.userStore
    return (
        <Segment inverted  vertical className='masthead' >
        <Container >
            <Header as='h1' inverted>
                <Image size='massive' src='/assests/logo.png' alt='logo' style={{marginBottom: 12}}/>
                Document Tracking System
            </Header>
            <Header as='h2' inverted content='Faculty of Engineering | University of Ruhuna' />
            {isLoggedIn && user ? (
                <Fragment>
                    <Header as='h2' inverted content= {`Welcome back ${user.firstName}`} />
                    <Button as={Link}  to='/dashboard' size='huge' inverted>
                        Go to dashboard
                    </Button>
                </Fragment>
            ): (
                <Fragment>
                    
                        <Button as={Link}  to='/login' size='huge' inverted>
                        Login
                        </Button>
                </Fragment>
            )}
            
        </Container>
    </Segment>
    )
}

export default HomePage;
