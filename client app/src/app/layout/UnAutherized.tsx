import { Segment, Button, Header, Icon, Image, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UnAtherized = () => {
    return (
        <Container style={{textAlign: "center"}}>
        
            <Header >
            <Image src='/assests/unauth.png' style={{width: 'auto', height: 'auto'}} />
            <Header textAlign ='center' size ='large' >Unautherized Access <br/> Please login first </Header>
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/' primary>
                    Return to Login page
                </Button>
            </Segment.Inline>
        </Container>
    );
};

export default UnAtherized;