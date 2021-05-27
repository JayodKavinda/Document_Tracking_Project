
import { Segment, Button, Header, Icon, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container  style={{textAlign: "center"}}>
        
        <Header >
        
        <Image src='/assests/notfound.png'  style={{width: 'auto', height: 'auto'}} />
        <Header textAlign ='center' size ='large' >Oops - we've looked everywhere but couldn't find this.  </Header>
        </Header>
        <Segment.Inline>
            <Button as={Link} to='/dashboard' primary>
                Return to dashboard page
            </Button>
        </Segment.Inline>
    </Container>
    );
};

export default NotFound;