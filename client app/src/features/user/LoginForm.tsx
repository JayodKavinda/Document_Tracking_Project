import { FORM_ERROR } from 'final-form'
import React, { useContext } from 'react'
import {Form as FinalForm, Field} from 'react-final-form'
import { Button, Container, Form, Grid, Header, Label, Segment } from 'semantic-ui-react'
import TextInput from '../../app/common/Form/TextInput'
import { IUserForm } from '../../app/models/user'
import { RootStoreContext } from '../../app/stores/rootStore'




const LoginForm = () => {

    const rootStore = useContext(RootStoreContext)
    const {login} = rootStore.userStore
    return (


            <Segment inverted textAlign='center' vertical className='masthead' >
         
                
                        <Container text>
                                <Header as='h1' inverted>
                                    Document Tracking System
                                </Header>
                                <Header as='h3' inverted content='Faculty of Engineering | University of Ruhuna' />
                                <br/>
                                <br/>
                            <FinalForm  onSubmit = {(values:IUserForm)=> login(values).catch(err=>({
                                    [FORM_ERROR]:err
                                }))}
                                    render ={({handleSubmit , submitting, form, submitError})=>(
                                    <Form onSubmit={handleSubmit}  style={{marginLeft:'9em',marginRight:'9em'}} >
                                        <Field        
                                        name= 'email'
                                     
                                        render = {TextInput}
                                        placeholder='Email'
                                        
                                        />
                                       
                                        <Field 
                                        name= 'password'
                                      
                                        render = {TextInput}
                                        type = 'password'
                                        placeholder='Password'
                                        />
                                        {submitError && <Label color= 'red'basic   content = {(submitError.status===400 || submitError.status===401 )&& 'Invaild username or password'} />}
                                        <br/>
                                        <br/>
                                        <Button  size='huge' inverted loading={submitting}  content='Login' />
                                    
                                    </Form>
                                    )}
                                    />
                                
                            </Container>
                
               
                 
        </Segment>

               

        
        
        
    )
}

export default LoginForm
