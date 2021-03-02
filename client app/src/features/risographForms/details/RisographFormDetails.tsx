import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Card, Container, Header, Icon, Image } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import RisographFormStore from '../../../app/stores/risographFormStore'
import { RootStoreContext } from '../../../app/stores/rootStore'

interface DetailParams{
  id:string
}

 const RisographFormDetails:React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
  
  const rootStore = useContext(RootStoreContext)
    const{selectedRisographForm:risographForm ,  loadRisographform, loadingInitial} = rootStore.risographFormStore;

    useEffect(()=>{
      loadRisographform(+match.params.id)
    },[loadRisographform])
   
    if(loadingInitial || !risographForm) return <LoadingComponent content ='Loading activity..'/>

    return (

      <Container>
        <Card fluid>
        <Header style={{marginTop:'2em'}} textAlign ='center' size ='small' >Department of Electrical and Infromation  <br/> Engineering Faculty of Engineering - University of Ruhuna</Header>
        <Header as ='h1'  textAlign ='center'>Request for Risograph Copies</Header>
          
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

      <Card fluid>
        
        <Card.Content>
          <Card.Header>Here is your Document flow</Card.Header>
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
