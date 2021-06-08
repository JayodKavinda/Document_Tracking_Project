import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Container, Grid, Header, HeaderContent, Icon, Image, Label, List } from 'semantic-ui-react'
import { history } from '../..';
import { RootStoreContext } from '../stores/rootStore';

 const Home = () => {

    const rootStore = useContext(RootStoreContext);
    const{ currentUser,getUser} = rootStore.userStore
    
    const{risographForms, inboxRisographForms}= rootStore.risographFormStore

    const{vehicalReservationForms, inboxVehicalReservationForms}= rootStore.vehicalReservationFormStore

    const userId = window.localStorage.getItem('userId');

    useEffect(()=>{
       

        if(userId){
            getUser(userId);
          }

    },[getUser]);

    var approvedNum =0;
    var pendingNum =0;
    var rejectionNum =0;
    var canceledNum =0;
    const openSendDoc=()=>{
        history.push('/dashboard/forms')
    }

    const openInbox=()=>{
        history.push('/dashboard/inbox')
    }
    risographForms.forEach((form)=>{
       if(form.formStatus === 'Approved'){
            approvedNum++;
       }
       if(form.formStatus === 'Pending'){
        pendingNum++;
        }
        if(form.formStatus === 'Rejected'){
            rejectionNum++;
        }
        if(form.formStatus === 'Canceled'){
            canceledNum++;
        }
       
    })

    vehicalReservationForms.forEach((form)=>{
        if(form.formStatus === 'Approved'){
             approvedNum++;
        }
        if(form.formStatus === 'Pending'){
         pendingNum++;
         }
         if(form.formStatus === 'Rejected'){
             rejectionNum++;
         }
         if(form.formStatus === 'Canceled'){
             canceledNum++;
         }
        
     })
    return (
        <Container fluid>
            <Grid>
                <Grid.Column mobile={16} tablet={4} computer={4}  style={{background: '#182A73', height: '70em' }}>
                <Header size='huge' inverted  style={{margin:'1em'}}>
                    Document Tracking System
                    <Header.Subheader>
                   Faculty of Engineering | University of Ruhuna
                    </Header.Subheader>
                </Header>
                <Header inverted as='h2' style={{margin:'1em'}}>
                    <Icon name='download' />
                    <Header.Content>
                   Start Here
                    <Header.Subheader>Download a new application template here</Header.Subheader>
                    </Header.Content>
                </Header>

                <Button size='large' inverted  as ={Link} to={'/createDoc'}  style={{marginLeft:'3em'}}>
                    New Document
                </Button>
                <Image size='small'centered src='/assests/document.png' style={{marginTop:'2em'}}/>
                <Header  inverted  style={{margin:'2em'}}>
                  Application Templates
                    <Header.Subheader>
                   <List>
                   <List.Item icon='file' content='Requesting Risograph Forms' />
                    <List.Item icon='file' content='Vehical Revervation Form' />
                    <List.Item icon='file' content='Bank Application' />
                    <List.Item icon='file' content='Voucher Application' />
                   </List>
                    </Header.Subheader>
                </Header>
                </Grid.Column>


                <Grid.Column   mobile={16} tablet={12} computer={8} >
                    <Label  size='huge'>Personal Dashboard</Label>
                <Card.Group centered >
                <Card  color = 'blue'  onClick = {openSendDoc}>
                    <Image src='/assests/dashboard_send.png'  />
                    <Card.Content>
                    <Card.Header>Send</Card.Header>
                    <Card.Meta>
                        <span className='date'>Send Documents</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                        {risographForms.length+ vehicalReservationForms.length}</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>

                <Card color = 'green' onClick = {openSendDoc}>
                    <Image src='/assests/dashboard_approved.png' />
                    <Card.Content>
                    <Card.Header>Approved</Card.Header>
                    <Card.Meta>
                        <span className='date'>Approved Documents</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                    {approvedNum}</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>

                <Card  color = 'yellow' onClick = {openSendDoc}>
                    <Image src='/assests/dashboard_pending.png' />
                    <Card.Content>
                    <Card.Header>For Approval</Card.Header>
                    <Card.Meta>
                        <span className='date'>Approval Pending Documents</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                    {pendingNum}</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>
                <Card  color = 'blue' onClick = {openInbox}>
                    <Image src='/assests/dashboard_inbox.png'  />
                    <Card.Content>
                    <Card.Header>Inbox</Card.Header>
                    <Card.Meta>
                    <span className='date'>Recived Document</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                    {inboxRisographForms.length+ inboxVehicalReservationForms.length}</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>
                <Card  color = 'blue' onClick = {openSendDoc}>
                    <Image src='/assests/dashboard_complete.png' />
                    <Card.Content>
                    <Card.Header>Completed</Card.Header>
                    <Card.Meta>
                        <span className='date'>Completed Documents</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                        0</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>
               
                <Card  color = 'red' onClick = {openSendDoc}>
                    <Image src='/assests/dashboard_rejected.png' />
                    <Card.Content>
                    <Card.Header>Rejected</Card.Header>
                    <Card.Meta>
                        <span className='date'>Rejected Documents</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                    {rejectionNum}</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>

                <Card  color = 'red' onClick = {openSendDoc}>
                    <Image src='/assests/dashboard_pending.png' />
                    <Card.Content>
                    <Card.Header>Canceled</Card.Header>
                    <Card.Meta>
                        <span className='date'>Canceled Documents</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                    {canceledNum}</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>
                <Card  color = 'purple' >
                    <Image src='/assests/dashboard_expired.png'  />
                    <Card.Content>
                    <Card.Header>Expired</Card.Header>
                    <Card.Meta>
                        <span className='date'>Expired Documents</span>
                    </Card.Meta>
                    <Card.Description>
                    <Card.Header as = 'h1'>
                    <Icon name='file alternate outline' />
                        0</Card.Header>
                    </Card.Description>
                    </Card.Content>
                  
                </Card>
                </Card.Group>
                </Grid.Column>



                <Grid.Column mobile={16} tablet={8} computer={4}>
                <Card>
                    <Card.Content>
                    <Card.Header>Your Information</Card.Header>
                    {/* <Image src='/assests/user.png'  /> */}
                    
                    <Card.Description>
                       Mr. {currentUser?.firstName}  {currentUser?.lastName}<br/>
                       {currentUser?.designation} <br/>
                       {currentUser?.department} <br/>
                        Faculty of Engineering<br/>
                        University of Ruhuna<br/>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        Logged in user
                    </a>
                    </Card.Content>
                </Card>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Home;
