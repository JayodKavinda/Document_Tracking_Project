import { observer } from 'mobx-react-lite'
import React, {  useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, ButtonGroup, Card, Container, Divider, Header, Icon } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../../app/stores/rootStore'

interface DetailParams{
  id:string
}

 const RisographFormDetails:React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
  
  const rootStore = useContext(RootStoreContext)
    const{selectedRisographForm:risographForm ,  loadRisographform, loadingInitial, editRisographForm} = rootStore.risographFormStore;

    useEffect(()=>{
      loadRisographform(+match.params.id)
    },[loadRisographform])

   
    const updateForm=()=>{
      let newRisographForm={
        risograghFormId:risographForm?.risograghFormId,
        documentTitle:risographForm!.documentTitle,
        teacherName:risographForm!.teacherName,
        numberOfPage:risographForm!.numberOfPage,
        numberOfCopies:risographForm!.numberOfCopies,
        sizeOfCopies:risographForm!.sizeOfCopies,
        purpose:risographForm!.purpose,
        paperProvided:risographForm!.paperProvided,
        copyTo:risographForm!.copyTo,
        dueDateTime:risographForm!.dueDateTime,
        
        finalLevelUser:risographForm!.finalLevelUser,
        formStatus: 'Approved',
        finalUserDateTime:risographForm!.finalUserDateTime,

        formModelId:risographForm!.formModelId,
        formModelName:risographForm!.formModelName,
        userId:risographForm!.userId,
        initDateTime:risographForm!.initDateTime,
        };
    editRisographForm(newRisographForm)
    }
   
    if(loadingInitial || !risographForm) return <LoadingComponent content ='Loading activity..'/>

    return (

      <Container style={{marginTop:'7em'}}>
        <Card fluid>
            <div  style={{ background:'FloralWhite'}}>
            <Header as='h2'  style={{margin:'1em'}}>
            <Icon color='green' name='envelope open' />
                <Header.Content>
                Approval pending Application
                <Header.Subheader>Manage your preferences</Header.Subheader>
                </Header.Content> 
            </Header>
            </div>
       
        <Header as ='h2'  textAlign ='center'>Request for Risograph Copies</Header>
          
        <Card.Content>
          <Card.Header> Document Title: {risographForm!.documentTitle} </Card.Header>
          
          <Card.Meta>
            <span>This document is sumbitted by you at {risographForm!.initDateTime} for the approval of Head of the Department</span>
          </Card.Meta>
          <br></br>
          <Card.Description>
          <h4>Name of the teacher: {risographForm!.teacherName} </h4>
            <h4>No. of pages in the document:  {risographForm!.numberOfPage} </h4>
            <h4>No. of copies necessary:  {risographForm!.numberOfCopies} </h4>
            <h4>Size of copies needed:  {risographForm!.sizeOfCopies} </h4>
            <h4>Purpose:   {risographForm!.purpose} </h4>
            <h4>Paper proided:   {risographForm!.paperProvided} </h4>
            <h4>Copy to:   {risographForm!.copyTo} </h4>
            <h4>Due date and time:   {risographForm!.dueDateTime} </h4>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
              <Button  floated='right' onClick={()=> history.push('/dashboard/forms')} basic color='grey' content = 'Back to dashboard' />
          
        </Card.Content>
      </Card>
        <Divider/>
        
        <h3>Your action ?</h3>
        {risographForm.formStatus=='Pending' ?(
          <ButtonGroup  size='large' fluid>
          <Button basic icon='trash' color='orange' content = 'Cancel Application' />
          <Button basic icon='times' negative content = 'Reject Request' />
          <Button onClick={updateForm} icon='check' positive content = 'Approve Request' />
  
          </ButtonGroup>
        ):(
          <h3>You {risographForm.formStatus} this application</h3>
        )

         
 
        }
       
        
        
        <Divider/>

      <Card fluid>
        
        <Card.Content>
          <Card.Header>Document flow</Card.Header>
          <Card.Meta>
            <span> Check your document progress and status </span>
          </Card.Meta>
          <Card.Description>
          <a>
            <Icon name='user' color ='orange' />
           Pending for approval
          </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          
        </Card.Content>
      </Card>
      </Container>
        

      


    )
}

export default observer(RisographFormDetails);
