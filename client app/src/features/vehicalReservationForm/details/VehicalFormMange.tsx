import { observer } from 'mobx-react-lite'
import React, {  useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, ButtonGroup, Card, Container, Divider, Header, Icon, Label, Step } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../../app/stores/rootStore'

interface DetailParams{
  id:string
}

 const VehicalFormManage:React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
  
  const rootStore = useContext(RootStoreContext)
  const{ currentUser,getUser} = rootStore.userStore
    const{selectedVehicalReservationForm:vehicalForm ,  loadVehicalReservationform, loadingInitial, editVehicalReservationForm, submitting} = rootStore.vehicalReservationFormStore;

    const userId = window.localStorage.getItem('userId');

    useEffect(()=>{
        loadVehicalReservationform(+match.params.id)

        if(userId){
            getUser(userId);
          }
    },[loadVehicalReservationform,getUser])

   
    const updateForm=(state1:string ,state2:string ,state3:string ,state:string, i:number)=>{
      let newVehicalForm={
        vehicalReservationFormId:vehicalForm!.vehicalReservationFormId,
        applicant:vehicalForm!.applicant,
        dueDateTime:vehicalForm!.dueDateTime,
        department:vehicalForm!.department,
        purpose:vehicalForm!.purpose,
        routeFrom:vehicalForm!.routeFrom,
        routeTo:vehicalForm!.routeTo,
        returnFrom:vehicalForm!.returnFrom,
        returnTo:vehicalForm!.returnTo,
        estimateTime:vehicalForm!.estimateTime,
        estimateDistance:vehicalForm!.estimateDistance,
        vote:vehicalForm!.vote,
        projectNo:vehicalForm!.projectNo,
        officers:vehicalForm!.officers,
        formStatus:state,
        formCurrentLevel:i,

        level2UserId:vehicalForm!.level2UserId,
        isLevel2Approved:state1,
       // level2UserDateTime:vehicalForm.level2UserDateTime,

        level3UserId:vehicalForm!.level3UserId,
        isVehicalOK:state2,
        isLevel3Approved:state2,
       // level3UserDateTime:vehicalForm.level3UserDateTime,

        level4UserId:vehicalForm!.level4UserId,
        isLevel4Approved:state3,
       // level4UserDateTime:vehicalForm.level4UserDateTime,

        formModelId:vehicalForm!.formModelId,
        formModelName:vehicalForm!.formModelName,
        userId:vehicalForm!.userId,
        initDateTime:vehicalForm!.initDateTime
       
        };
    editVehicalReservationForm(newVehicalForm)
    }
   
    if(loadingInitial || !vehicalForm) return <LoadingComponent content ='Loading activity..'/>

    return (

      <Container fluid style={{marginTop:'7em'}}>
          <Container>
        <Card fluid>
        {vehicalForm.formStatus==='Pending'&&
            <div  style={{ background:'FloralWhite'}}>
            <Header as='h2'  style={{margin:'1em'}}>
            <Icon color='green' name='envelope open' />
                <Header.Content>
                Approval pending Application
                <Header.Subheader>Manage your preferences</Header.Subheader>
                </Header.Content> 
            </Header>
            </div>
            }
       
        <Header as ='h2' style={{marginTop:'1em'}} textAlign ='center'>Request for Risograph Copies</Header>
          
        <Card.Content>
          <Card.Header> Vehical Reservatio application by: {vehicalForm!.applicant} </Card.Header>
          
          <Card.Meta>
            <span>This document is sumbitted by you at {vehicalForm!.initDateTime} for the approval of Head of the Department, AR and Dean</span>
          </Card.Meta>
          <br></br>
          <Card.Description>
          <h4>Department: {vehicalForm!.department} </h4>
            <h4>Purpose:  {vehicalForm!.purpose} </h4>
            <h4>Route form:  {vehicalForm!.routeFrom} </h4>
            <h4>Route To:  {vehicalForm!.routeTo} </h4>
            <h4>Return form:  {vehicalForm!.returnFrom} </h4>
            <h4>Return To:  {vehicalForm!.returnTo} </h4>
            <h4>Estimate time:   {vehicalForm!.estimateTime} </h4>
            <h4>Estimate Distance:   {vehicalForm!.estimateDistance} </h4>
            <h4>Vote:   {vehicalForm!.vote} </h4>
            <h4>Project Number:   {vehicalForm!.projectNo} </h4>
            <h4>Officers:   {vehicalForm!.officers} </h4>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
              <Button  floated='right' onClick={()=> history.push('/dashboard/forms')} basic color='grey' content = 'Back to dashboard' />
          
        </Card.Content>
      </Card>
        <Divider/>
        
        
        {vehicalForm.formCurrentLevel==1 && currentUser?.designation==='Head of the Department'&& vehicalForm.formStatus === 'Pending'&&
        <div>
          <Header>This Application is under your review, Your action ?</Header>
          <ButtonGroup  size='large' fluid>
          <Button  onClick={()=>updateForm('cancel','','','Canceled',2)} loading={submitting} basic icon='trash' color='orange' content = 'Cancel Application' />
          <Button  onClick={()=>updateForm('false','','','Rejected',2)} loading={submitting} basic icon='times' negative content = 'Reject Request' />
          <Button onClick={()=>updateForm('true','','','Pending',2)} loading={submitting} icon='check' positive content = 'Approve Request' />
  
          </ButtonGroup>
        </div>
        }

        {vehicalForm.formCurrentLevel==2 && currentUser?.designation==='Assistant Registrar' && vehicalForm.formStatus === 'Pending'&&
        <div>
          <Header>This Application is under your review, Your action ?</Header>
          <ButtonGroup  size='large' fluid>
          <Button  onClick={()=>updateForm(vehicalForm.isLevel2Approved,'cancel','','Canceled',3)} loading={submitting} basic icon='trash' color='orange' content = 'Cancel Application' />
          <Button  onClick={()=>updateForm(vehicalForm.isLevel2Approved,'false','','Rejected',3)} loading={submitting} basic icon='times' negative content = 'Reject Request' />
          <Button onClick={()=>updateForm(vehicalForm.isLevel2Approved,'true','','Pending',3)} loading={submitting} icon='check' positive content = 'Approve Request' />
  
          </ButtonGroup>
        </div>
        }
       
       {vehicalForm.formCurrentLevel==3 && currentUser?.designation==='Dean'&& vehicalForm.formStatus === 'Pending'&&
        <div>
          <Header>This Application is under your review, Your action ?</Header>
          <ButtonGroup  size='large' fluid>
          <Button  onClick={()=>updateForm(vehicalForm.isLevel2Approved,vehicalForm.isLevel3Approved,'cancel','Canceled',4)} loading={submitting} basic icon='trash' color='orange' content = 'Cancel Application' />
          <Button  onClick={()=>updateForm(vehicalForm.isLevel2Approved,vehicalForm.isLevel3Approved,'false','Rejected',4)} loading={submitting} basic icon='times' negative content = 'Reject Request' />
          <Button onClick={()=>updateForm(vehicalForm.isLevel2Approved,vehicalForm.isLevel3Approved,'true','Approved',4)} loading={submitting} icon='check' positive content = 'Approve Request' />
  
          </ButtonGroup>
        </div>
        }
        <Divider/>

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
           Apllicaion Current State: {vehicalForm!.formStatus}
          </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

        <Step.Group  fluid>
          <Step >
          <Icon name='check' color='green'/>
            <Step.Content>
              <Step.Title>Level 1: Submission</Step.Title>
              <Step.Description>You requested Risograph Copies <br/>Form id: {vehicalForm.vehicalReservationFormId}</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            {vehicalForm.isLevel2Approved==='true'?(<Icon name='check' color='green'/> ):(
                <Icon name='hourglass half' color='orange'/>
            )
            }
            <Step.Content>
              <Step.Title>Level 2: Head of the Deparment</Step.Title>
              <Step.Description>Approval of Head of the Department</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            {vehicalForm.isLevel3Approved=== 'true'?(  <Icon name='check' color='green'/>):(
               
                <Icon name='hourglass half' color='orange'/>
            )
            }
            <Step.Content>
              <Step.Title>Level 3:AR</Step.Title>
              <Step.Description>Approval of Head of the Department</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            {vehicalForm.isLevel4Approved==='true'?(  <Icon name='check' color='green'/>):(
               
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

export default observer(VehicalFormManage);
