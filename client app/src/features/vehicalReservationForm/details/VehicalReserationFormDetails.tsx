import { observer } from 'mobx-react-lite'
import React, {  useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Card, Container, Header, Icon, Label, Step } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../../app/stores/rootStore'

interface DetailParams{
  id:string
}

 const VehicalReservationFormDetails:React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
  
  const rootStore = useContext(RootStoreContext)
    const{selectedVehicalReservationForm:vehicalReservationForm ,  loadVehicalReservationform, loadingInitial} = rootStore.vehicalReservationFormStore;

    useEffect(()=>{
        loadVehicalReservationform(+match.params.id)
    },[loadVehicalReservationform,match.params.id])
   
    if(loadingInitial || !vehicalReservationForm) return <LoadingComponent content ='Loading activity..'/>

    return (

      <Container fluid style={{marginTop:'7em'}}>
          <Container>
        <Card fluid>
        <Header style={{marginTop:'2em'}} textAlign ='center' size ='small' >Department of Electrical and Infromation  <br/> Engineering Faculty of Engineering - University of Ruhuna</Header>
        <Header as ='h1'  textAlign ='center'>Vehical Reservation Application</Header>
          
        <Card.Content>
          <Card.Header>Name of the  Applicant: {vehicalReservationForm!.applicant} </Card.Header>
          
          <Card.Meta>
            <span>This document is sumbitted by you at {vehicalReservationForm!.initDateTime} for the approval of Head of the Department, AR and Dean</span>
          </Card.Meta>
          <br></br>
          <Card.Description>
          <h4>Department: {vehicalReservationForm!.department} </h4>
            <h4>Purpose:  {vehicalReservationForm!.purpose} </h4>
            <h4>Route form:  {vehicalReservationForm!.routeFrom} </h4>
            <h4>Route To:  {vehicalReservationForm!.routeTo} </h4>
            <h4>Return form:  {vehicalReservationForm!.returnFrom} </h4>
            <h4>Return To:  {vehicalReservationForm!.returnTo} </h4>
            <h4>Estimate time:   {vehicalReservationForm!.estimateTime} </h4>
            <h4>Estimate Distance:   {vehicalReservationForm!.estimateDistance} </h4>
            <h4>Vote:   {vehicalReservationForm!.vote} </h4>
            <h4>Project Number:   {vehicalReservationForm!.projectNo} </h4>
            <h4>Officers:   {vehicalReservationForm!.officers} </h4>
          </Card.Description>
        </Card.Content>
        
        <Card.Content extra>
              <Button  floated='left' onClick={()=> history.push('/dashboard/forms')} basic color='grey' content = 'Back to dashboard' />
              {vehicalReservationForm.formStatus === 'Pending' && 
              <Button  floated='right' icon labelPosition='left' onClick={()=> history.push('/dashboard/forms')}  color='red'>  <Icon name='arrow circle right' /> Cancel Request</Button>
              }
          
          
        </Card.Content>

       
      </Card>
      
      {vehicalReservationForm.formStatus === 'Approved' && 
      <Card.Content>
      <Label  basic color='green' size='large' >Your application Request Risogrph Copies has been {vehicalReservationForm.formStatus}</Label>
      <Button  floated='right' icon labelPosition='left'   color='green'>  <Icon name='print' /> Print PDF Document</Button>
      </Card.Content>
      
      }
      </Container>
      <Card fluid>
        
        <Card.Content>
          <Card.Header>Here is your Document flow</Card.Header>
          <Card.Meta>
            <span> Check your document progress and status </span>
          </Card.Meta>
          <Card.Description>
          <a>
            <Icon name='user' color ='orange' />
           Apllicaion Current State: {vehicalReservationForm!.formStatus}
          </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

        <Step.Group  fluid>
          <Step >
          <Icon name='check' color='green'/>
            <Step.Content>
              <Step.Title>Level 1: Submission</Step.Title>
              <Step.Description>You requested Risograph Copies <br/>Form id: {vehicalReservationForm.vehicalReservationFormId}</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            {vehicalReservationForm.isLevel2Approved==='true'?( <Icon name='check' color='green'/> ):(
               
                <Icon name='hourglass half' color='orange'/>
            )
            }
            <Step.Content>
              <Step.Title>Level 2: Head of the Deparment</Step.Title>
              <Step.Description>Approval of Head of the Department</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            {vehicalReservationForm.isLevel3Approved=== 'true'?( <Icon name='check' color='green'/> ):(
               
                <Icon name='hourglass half' color='orange'/>
            )
            }
            <Step.Content>
              <Step.Title>Level 3:AR</Step.Title>
              <Step.Description>Approval of Head of the Department</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            {vehicalReservationForm.isLevel4Approved==='true'?(   <Icon name='check' color='green'/>):(
              
                <Icon name='hourglass half' color='orange'/>
            )
            }
            <Step.Content>
              <Step.Title>Final Level: Dean</Step.Title>
              <Step.Description>Approval of Head of the Department</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title>Print the Document</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>

        
        </Card.Content>
      </Card>
      </Container>
      

    )
}

export default observer(VehicalReservationFormDetails);
