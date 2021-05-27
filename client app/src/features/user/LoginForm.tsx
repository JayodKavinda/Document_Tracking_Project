import { FORM_ERROR } from 'final-form'
import  { useContext } from 'react'
import {Form as FinalForm, Field} from 'react-final-form'
import { Button, Container, Form, Grid, Header, Icon, Image, Label, Segment } from 'semantic-ui-react'
import TextInput from '../../app/common/Form/TextInput'
import { IUserForm } from '../../app/models/user'
import { RootStoreContext } from '../../app/stores/rootStore'




const LoginForm = () => {

    const rootStore = useContext(RootStoreContext)
    const {login} = rootStore.userStore
    return (


            <Segment  textAlign='center' vertical style={{marginTop:'2em', marginBotton:'2em'}} >
                    <Grid verticalAlign='middle' divided padded>
                        <Grid.Column width={8} >
                        <Container fluid text>
                                <Header as='h1' size='huge' textAlign='center'>
                                <Image src='/assests/logo.jpg'  />
                                    <Header.Content>
                                    Document Tracking System
                                    <Header.Subheader>Faculty of Engineering | University of Ruhana</Header.Subheader>
                                    </Header.Content>
                                </Header> 
                                
                                <br/>
                                <br/>
                            <FinalForm  onSubmit = {(values:IUserForm)=> login(values).catch(err=>({
                                    [FORM_ERROR]:err
                                }))}
                                    render ={({handleSubmit , submitting, form, submitError})=>(
                                    <Form onSubmit={handleSubmit}   >
                                        <Header as='h4'  textAlign='left'>Email</Header>
                                        <Field        
                                        name= 'email'
                
                                        render = {TextInput}
                                        placeholder='name@test.com'
                                        
                                        />
                                       <Header as='h4'  textAlign='left'>Password</Header>
                                        <Field 
                                        name= 'password'
                                      
                                        render = {TextInput}
                                        type = 'password'
                                        placeholder='Enter Password here'
                                        />
                                        {submitError && <Label color= 'red'basic   content = {(submitError.status===400 || submitError.status===401 )&& 'Invaild username or password'} />}
                                        <br/>
                                        <br/>
                                        <Button  size='huge'  loading={submitting} color='blue' content='Login' />
                                    
                                    </Form>
                                    )}
                                    />
                                
                            </Container>
                
                        </Grid.Column>
                        <Grid.Column  width={8}>
                        <Image src='/assests/login.jpg' fluid />
                        </Grid.Column>
                    </Grid>
                
                        
               
                 
        </Segment>

               

        
        
        
    )
}

export default LoginForm
