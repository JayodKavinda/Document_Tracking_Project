import { observer } from 'mobx-react-lite';
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Button, Card, Container, Divider, Form, Header, Icon, Label, Segment, Step, TextArea } from 'semantic-ui-react'
import { IRisographForm } from '../../../app/models/risographForm'
import { RootStoreContext } from '../../../app/stores/rootStore';
import FormSuccessModal from '../../../app/layout/FormSuccessModal'





const RisographForm: React.FC<RouteComponentProps> = ({history}) => {

  const rootStore = useContext(RootStoreContext);
  const {createRisographForm ,submitting} = rootStore.risographFormStore;

  
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
            //risograghFormId: 0,
            documentTitle: '',
            teacherName: '',
            numberOfPage: 0,
            numberOfCopies: 0,
            sizeOfCopies: '',
            purpose: '',
            paperProvided: '',
            copyTo: '',
            dueDateTime: '',
            finalLevelUser: '',
            formStatus: 'Pending',
            //finalUserDateTime: '',
            //formModelId:0,
            formModelName:'Request for Risograph',
            userId:'',
            initDateTime: '' // this need to be current date time
           
          };
        
      };

    const [risographForm, setRisographForm] = useState<IRisographForm>(initializeForm);

    const handleSubmit = () => {
        let newRisographForm={
            ...risographForm, 
            initDateTime: '2021-03-24T16:49',
            teacherName: currentUser!.firstName,
            userId: window.localStorage.getItem('userId'),  //getting current user
            finalLevelUser:'8dfaae4b-83a8-41cb-b69b-f7e04e236151'  // coonst hoD -> retrive relevent HoDs id
        };
        createRisographForm(newRisographForm)
   
        
      };

    

      const handleInputChange = (
        event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = event.currentTarget;
        if(name === 'numberOfPage' || name === 'numberOfCopies'){
          setRisographForm({...risographForm,[name]: parseInt(value)})
        }else{
          setRisographForm({...risographForm,[name]: value})
        }
        
      };

    return (
      <Container  style={{marginTop:'7em'}}>
           <FormSuccessModal/>
          <Segment clearing>
          <Header textAlign ='center' size ='small' >Department of Electrical and Infromation  <br/> Engineering Faculty of Engineering - University of Ruhuna</Header>
          <Header as ='h1' dividing textAlign ='center'>Request for Risograph Copies</Header>
          
        
            <Form onSubmit = {handleSubmit}>
            <Form.Input required onChange={handleInputChange} name='teacherName' placeholder = "Name of the Teacher"  >Name of the teacher: Mr. {currentUser?.firstName}  {currentUser?.lastName} </Form.Input>
                <Form.Input required onChange={handleInputChange} name='documentTitle' placeholder = "Title of the Document" /> 
                <Form.Input required onChange={handleInputChange} type='number' name='numberOfPage' placeholder = "No of Pages in the doucument"/> 
                <Form.Input required onChange={handleInputChange} type='number' name='numberOfCopies' placeholder = "No of Copies necessary"/> 
                <Form.Field required control='select' onChange={handleInputChange} name='sizeOfCopies' placeholder = "Size of copies needed"> 
                <option >-Size of copies needed -</option>
                  <option  value='A4'>A4</option>
                  <option  value='B4'>B4</option>
                  <option  value='Other'>Other</option>
                </Form.Field>
                <Form.Field required control='select'  onChange={handleInputChange} name='purpose' placeholder = "Purpose">
                <option >-Purpose-</option>
                  <option  value='Teaching'>Teaching</option>
                  <option  value='Research'>Research</option>
                  <option  value='Other'>Other</option>
                </Form.Field>
                <Form.Field required control='select' onChange={handleInputChange} name='paperProvided' placeholder = "Paper Provided">
                <option >-Paper provided-</option>
                  <option  value='Yes'>Yes</option>
                  <option  value='No'>No</option>
                </Form.Field>
                <Form.Field required control='select' onChange={handleInputChange} name='copyTo' placeholder = "Copy To">
                <option >-Copy to-</option>
                  <option  value='Double side'>Double side</option>
                  <option  value='Single side'>Single side</option>

                </Form.Field>

                <Form.Input required  onChange={handleInputChange} type='datetime-local' name='dueDateTime' placeholder = "Due Date and time"/> 
               
                <Header  size ='small' > I request the above copies for the above purpose of the departmant <br/> I certify that the above copies are necessary for obove mention purpose of the department</Header>
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
                    <Step.Description>You are requesting Risograph Copies <br/>Form id: {risographForm.risograghFormId}</Step.Description>
                  </Step.Content>
                </Step>

                <Step >
                
                  <Icon name='hourglass half' color='orange'/>
                  <Step.Content>
                    <Step.Title>Final level: {risographForm.formStatus}</Step.Title>
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

export default observer(RisographForm);
