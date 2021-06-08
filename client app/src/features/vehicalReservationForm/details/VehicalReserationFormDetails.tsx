import { observer } from 'mobx-react-lite'
import React, {  useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Card, Container, Header, Icon, Label, Step } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { jsPDF } from 'jspdf'

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

    const PrintDoc = () => {

      const doc = new jsPDF(); 
      doc.rect(5, 5, 200, 285)
      //form title
      doc.setFontSize(20);
      doc.setFont("times","bold");
      doc.setTextColor("#000000");
      doc.text("Application for Vehical Reservation", 50, 15);
    
      //date , vehicle num
      doc.setFontSize(12);
      doc.setFont("time","normal");
      doc.setTextColor("#000000");
      doc.text("Date:  " + vehicalReservationForm.initDateTime , 15, 30);
      doc.text("Vehicle No: ..................  ", 130, 30);
      doc.text("Drive the vehicle for the benefit of the"+ vehicalReservationForm.department+ " at "+vehicalReservationForm.dueDateTime+" as ", 15, 35);
      doc.text("described below ", 15, 40);
      doc.text("Purpose : "+vehicalReservationForm.purpose, 15, 45);
      doc.text("Route From : "+vehicalReservationForm.routeFrom+" To: "+ vehicalReservationForm.routeTo, 15, 50);
      doc.text("Return From : "+vehicalReservationForm.returnFrom+" To: "+ vehicalReservationForm.returnTo, 15, 55);
      doc.text("Expected Time (Hr) : "+vehicalReservationForm.estimateTime, 15, 60);
      doc.text("Expected Distance (km) : "+ vehicalReservationForm.estimateDistance, 15, 65);
      doc.rect(15, 70, 80, 30)
      doc.text("Ask the officer in charge of the vehicle", 20, 75);
      doc.text("for proper instructions. ", 20, 80);
      doc.text("Account Vote:  ", 20, 85);
      doc.text(" "+ vehicalReservationForm.vote, 20, 90);
      doc.text("Project Number:  "+vehicalReservationForm.projectNo, 20, 95);
      doc.text("Officers on duty for the relevant journey:", 105, 75);
      doc.text(vehicalReservationForm.officers, 105, 80);
      doc.text(".................................", 105, 85);
      doc.text(".................................", 105, 90);
      doc.text("Applicant:"+ vehicalReservationForm.applicant, 15, 110);
      doc.text("Date:" + vehicalReservationForm.initDateTime, 130, 110);
      doc.text("HOD: Mr.Eranda Jaytunga (signed)", 15, 115);
      doc.text("Date:" + vehicalReservationForm.level2UserDateTime, 130, 115);
      doc.rect(15, 120, 180, 0)
    
      //2nd part
      doc.text("I recommend reserving the above vehicle", 15, 125);
      doc.text("Clack: none", 15, 130);
      doc.text("Date: " + vehicalReservationForm.level3UserDateTime, 130, 130);
      doc.text("AR: Ms. Nadeeshani (signed)", 15, 135);
      doc.text("Status: Approved" , 130, 135);
      doc.rect(15, 140, 180, 0)
    
      //3rd part
      doc.text("Optional-", 15, 145);
      doc.text("I recommend reserving the above vehicle", 15, 150);
      doc.text("DEAN: Dr.Harsha Sooriyaarchchi", 15, 155);
      doc.text("Date: "+vehicalReservationForm.level4UserDateTime, 130, 155);
      doc.text("VC: Arewi  (signed)", 15, 160);
      doc.text("Status: Approved", 130, 160);
      doc.rect(15, 165, 180, 0)
    
      doc.text("The following parts should be certified by the officer authorized to use the vehicle mentioned here.", 15, 170);
      doc.text("and handed over to the security officer at the main gate.", 15, 175);

      doc.text("    1. Km when going from main gate: .......................................", 15, 185);
      doc.text("    2. Km when return to the main gate: ........................................", 15, 190);
      doc.text("Name: ..........................     Signature:.......................    Date:..........................", 15, 195);
      doc.rect(15, 200, 180, 0)

      doc.text("Supervise when departed", 15, 210);
      doc.text("Supervised when return", 130, 210);
      doc.text("Signature:................ Date:....................", 15, 215);
      doc.text("Signature:................ Date:....................", 130, 215);

      doc.rect(15, 230, 180, 0)
      doc.text("I cetified that above metion all details are true", 15, 240);
      doc.text("................................................", 130, 245);
      doc.text("Main Security Officer", 130, 250);
      //save doc
      doc.save("Vehicle Reservation.pdf");
      
    }

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
      <Button  onClick = { PrintDoc }   floated='right' icon labelPosition='left'   color='green'>  <Icon name='print' /> Print PDF Document</Button>
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
              <Step.Description>Approval of Assitant Registrar</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            {vehicalReservationForm.isLevel4Approved==='true'?(   <Icon name='check' color='green'/>):(
              
                <Icon name='hourglass half' color='orange'/>
            )
            }
            <Step.Content>
              <Step.Title>Final Level: Dean</Step.Title>
              <Step.Description>Approval of Deant</Step.Description>
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
