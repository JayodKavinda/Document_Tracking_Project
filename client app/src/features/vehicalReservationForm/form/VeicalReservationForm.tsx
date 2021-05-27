import { observer } from 'mobx-react-lite';
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Button, Card, Container, Divider, Form, Header, Icon, Label, Segment, Step, TextArea } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore';
import FormSuccessModal from '../../../app/layout/FormSuccessModal'
import { IVehicalReservationForm } from '../../../app/models/vehicalReservationForm';





const VehicalReservationForm: React.FC<RouteComponentProps> = ({history}) => {

  const rootStore = useContext(RootStoreContext);
  const {createVehicalReservationForm ,submitting} = rootStore.vehicalReservationFormStore;

  
  const {setAppLoaded, userId}= rootStore.commonStore;
  const {getUser} = rootStore.userStore
  useEffect(()=>{
    if(userId){
      getUser(userId);
    }
  }, [getUser, setAppLoaded, userId])

  
  const{  currentUser} = rootStore.userStore

    const initializeForm = () => {
          return {
            //vehicalReservationFormId:'',
            applicant:'',
            dueDateTime:'',
            department:'',
            purpose:'',
            routeFrom:'',
            routeTo:'',
            returnFrom:'',
            returnTo:'',
            estimateTime:'',
            estimateDistance:'',
            vote:'',
            projectNo:'',
            officers:'',
            formStatus:'Pending',
            formCurrentLevel:1,

            level2UserId:'',
            isLevel2Approved:'',
           // level2UserDateTime:'',

            level3UserId:'',
            isVehicalOK:'',
            isLevel3Approved:'',
            //level3UserDateTime:'',

            level4UserId:'',
            isLevel4Approved:'',
           // level4UserDateTime:'',

           // formModelId:'',
            formModelName:'Vehical Reservation Form',
            userId:'',
            initDateTime: '' // this need to be current date time
           
          };
        
      };

    const [vehicalReservationForm, setvehicalReservationForm] = useState<IVehicalReservationForm>(initializeForm);

    const handleSubmit = () => {
        let newVehicalReservationForm={
            ...vehicalReservationForm, 
            initDateTime: '2021-03-24T16:49',
            userId: window.localStorage.getItem('userId'),  //getting current user

            applicant : currentUser!.firstName,
            department: currentUser!.department,

            level2UserId:'8dfaae4b-83a8-41cb-b69b-f7e04e236151',  // coonst hoD -> retrive relevent HoDs id
            level3UserId:'71a76dba-9153-4400-ab8d-c012268d7fc6', // coonst AR -> retrive relevent AR id
            level4UserId:'35b9e725-ed59-4018-95b7-54ce8d5f98d9'  // coonst Dean -> retrive relevent Dean id
        };
        createVehicalReservationForm(newVehicalReservationForm)
   
        
      };

    

      const handleInputChange = (
        event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = event.currentTarget;
        
        setvehicalReservationForm({...vehicalReservationForm,[name]: value})
        
        
      };

    return (
      <Container fluid style={{marginTop:'7em'}}>
          <Container>
           <FormSuccessModal/>
          <Segment clearing>
          <Header textAlign ='center' size ='small' >Department of Electrical and Infromation  <br/> Engineering Faculty of Engineering - University of Ruhuna</Header>
          <Header as ='h1' dividing textAlign ='center'>Application for Vehical Reservation</Header>
          
        
            <Form onSubmit = {handleSubmit}>
            <Form.Input required onChange={handleInputChange} name='applicant' placeholder = "Name of the applicant"  >Name of the applicant: Mr. {currentUser?.firstName}  {currentUser?.lastName} </Form.Input>
            <Form.Input required onChange={handleInputChange} name='department' placeholder = "Name of the department"  >Name of the department: {currentUser?.department}  </Form.Input>
            <h5>  Vehical Due date and time</h5>
            <Form.Input required onChange={handleInputChange} type='datetime-local'  name='dueDateTime' placeholder = "Vehical due date and time" /> 
            <Form.Input required onChange={handleInputChange}   name='purpose' placeholder = "Purpose" /> 
            <Form.Input required onChange={handleInputChange}  name='routeFrom' placeholder = "Route From"/> 
            <Form.Input required onChange={handleInputChange}  name='routeTo' placeholder = "Route To"/> 
            <Form.Input required onChange={handleInputChange}  name='returnFrom' placeholder = "Return From"/> 
            <Form.Input required onChange={handleInputChange}  name='returnTo' placeholder = "Return To"/> 

            <Form.Input required onChange={handleInputChange}  name='estimateTime' placeholder = "Estimate Time"/> 
            <Form.Input required onChange={handleInputChange}  name='estimateDistance' placeholder = "Estimate Distance"/> 
            <Form.Input required onChange={handleInputChange}  name='vote' placeholder = "Vote"/> 
            <Form.Input required onChange={handleInputChange}  name='projectNo' placeholder = "Project Number"/> 

            <TextArea required onChange={handleInputChange}  name='officers' placeholder = "Name of the officers attent to the journey"/> 
            
            
               

     
               
                <Header  size ='small' > I request a vehical for above metioned puprose</Header>
                {currentUser && 
                  <Label ribbon> Signature <Divider /> <p> Mr.{currentUser?.firstName}  {currentUser?.lastName} <br/>   {currentUser?.designation} <br/> Department of {currentUser?.department} <br/> Faculty of Engineering, University of Ruhuna </p></Label>
                }
                
                <Divider />
                <TextArea placeholder=' Additional notes here (optional)' />
                <Divider />
                <Button style={{marginTop:'1em'}} size = 'big' loading={submitting} floated='right' positive type='Sumbit' content='Submit to the flow'/>

                <Button style={{marginTop:'1em'}} onClick={()=> history.push('/dashboard')} size = 'big' floated='right'  type='button' content='Cancel'/>
            </Form>

            
        </Segment>

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
                Apllicaion Current State: Draft document
                </a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>

              <Step.Group  fluid>
                <Step >
                <Icon name='hourglass half' color='orange'/>
                  <Step.Content>
                    <Step.Title>Level 1: Submission</Step.Title>
                    <Step.Description></Step.Description>
                  </Step.Content>
                </Step>

                <Step >
                
                  <Icon name='hourglass half' color='orange'/>
                  <Step.Content>
                    <Step.Title>Level 2: </Step.Title>
                    <Step.Description>Approval of Head of the Department</Step.Description>
                  </Step.Content>
                </Step>
                <Step >
                <Icon name='hourglass half' color='orange'/>
                  <Step.Content>
                  <Step.Title>Level 3: </Step.Title>
                    <Step.Description>Approval of Head of the AR</Step.Description>
                  </Step.Content>
                </Step>

                <Step >
                <Icon name='hourglass half' color='orange'/>
                  <Step.Content>
                  <Step.Title>Final Level: </Step.Title>
                    <Step.Description>Approval of Head of the Dean</Step.Description>
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

export default observer(VehicalReservationForm);
