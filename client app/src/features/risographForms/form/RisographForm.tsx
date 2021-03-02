import { observer } from 'mobx-react-lite';
import React, { FormEvent, useContext, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Button, Container, Divider, Form, Header, Segment, TextArea } from 'semantic-ui-react'
import SubmissionModal from '../../../app/layout/SubmissionModal';
import { IRisographForm } from '../../../app/models/risographForm'
import RisographFormStore from '../../../app/stores/risographFormStore'
import { RootStoreContext } from '../../../app/stores/rootStore';





const RisographForm: React.FC<RouteComponentProps> = ({history}) => {

  const rootStore = useContext(RootStoreContext);
  const {createRisographForm ,submitting} = rootStore.risographFormStore;
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
            initDateTime: '2021-02-09T16:49',
            userId: window.localStorage.getItem('userId'),  //getting current user
            finalLevelUser:'8b355855-d903-4ff4-80ff-d8da3ffc23bc'  // coonst hoD -> retrive relevent HoDs id
        };
        createRisographForm(newRisographForm)
        //history.push('/dashboard/forms');
        
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
      <Container>
          <SubmissionModal/>
          <Segment clearing>
          <Header textAlign ='center' size ='small' >Department of Electrical and Infromation  <br/> Engineering Faculty of Engineering - University of Ruhuna</Header>
          <Header as ='h1' dividing textAlign ='center'>Request for Risograph Copies</Header>
          
        
            <Form onSubmit = {handleSubmit}>
                <Form.Input required onChange={handleInputChange} name='documentTitle' placeholder = "Title of the Document" /> 
                <Form.Input required onChange={handleInputChange} name='teacherName' placeholder = "Name of the Teacher"/> 
                <Form.Input required onChange={handleInputChange} type='number' name='numberOfPage' placeholder = "No of Pages in the doucument"/> 
                <Form.Input required onChange={handleInputChange} type='number' name='numberOfCopies' placeholder = "No of Copies necessary"/> 
                <Form.Field required control='select' onChange={handleInputChange} name='sizeOfCopies' placeholder = "Size of copies needed"> 
                <option >-Select-</option>
                  <option  value='A4'>A4</option>
                  <option  value='B4'>B4</option>
                  <option  value='Other'>Other</option>
                </Form.Field>
                <Form.Field required control='select'  onChange={handleInputChange} name='purpose' placeholder = "Purpose">
                <option >-Select-</option>
                  <option  value='Teaching'>Teaching</option>
                  <option  value='Research'>Research</option>
                  <option  value='Other'>Other</option>
                </Form.Field>
                <Form.Field required control='select' onChange={handleInputChange} name='paperProvided' placeholder = "Paper Provided">
                <option >-Select-</option>
                  <option  value='Yes'>Yes</option>
                  <option  value='No'>No</option>
                </Form.Field>
                <Form.Field required control='select' onChange={handleInputChange} name='copyTo' placeholder = "Copy To">
                <option >-Select-</option>
                  <option  value='Double side'>Double side</option>
                  <option  value='Single side'>Single side</option>

                </Form.Field>

                <Form.Input required  onChange={handleInputChange} type='datetime-local' name='dueDateTime' placeholder = "Due Date and time"/> 
               
                <Header  size ='small' > I request the above copies for the above purpose of the departmant <br/> I certify that the above copies are necessary for obove mention purpose of the department</Header>

                <TextArea placeholder=' Additional notes here (optional)' />
                <Divider />
                <Button style={{marginTop:'1em'}} size = 'big' loading={submitting} floated='right' positive type='Sumbit' content='Submit to the flow'/>
                <Button style={{marginTop:'1em'}} size = 'big' floated='right'  type='button' content='Cancel'/>
            </Form>

            
        </Segment>

      </Container>
        
            
    )
}

export default observer(RisographForm);
