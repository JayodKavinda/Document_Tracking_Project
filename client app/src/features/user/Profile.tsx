import React, { useContext, useEffect } from 'react'
import { Button, Card, Checkbox, Container, Form, Grid, Header, HeaderContent, Icon, Image, Label, List } from 'semantic-ui-react'
import { history } from '../..';
import { RootStoreContext } from '../../app/stores/rootStore';
import {Form as FinalForm, Field} from 'react-final-form'
import { IPasswaordChange } from '../../app/models/user';
import TextInput from '../../app/common/Form/TextInput'
import { FORM_ERROR } from 'final-form'

const Profile = () => {
    const rootStore = useContext(RootStoreContext);
    const{ currentUser} = rootStore.userStore

    const {updatePassword} = rootStore.userStore
    return (
        <Container style={{marginTop:'8em'}} >
            <Grid>
                <Grid.Column  mobile={16} tablet={4} computer={4}>
                    <Card>
                    <Card.Content>
                    <Card.Header>Your Information</Card.Header>
                    {/* <Image src='/assests/user.png'  /> */}
                    
                    <Card.Description>
                       Mr. {currentUser?.firstName}  {currentUser?.lastName}<br/>
                       {currentUser?.designation} <br/>
                       {currentUser?.department} <br/>
                        Faculty of Engineering<br/>
                        University of Ruhuna<br/>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        Logged in user
                    </a>
                    </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={10} computer={10} >
                <Header as='h2'>
                    <Icon name='settings' />
                    <Header.Content>
                    Account Settings
                    <Header.Subheader>Change Password</Header.Subheader>
                    </Header.Content>
                </Header>

                <FinalForm  onSubmit = {(values:IPasswaordChange)=> updatePassword(values).catch(err=>({
                                    [FORM_ERROR]:err
                                }))}
                                    render ={({handleSubmit , submitting, form, submitError})=>(
                                    <Form onSubmit={handleSubmit}   >
                                        <Header as='h4'  textAlign='left'>Please Confirm Your Email First</Header>
                                        <Field        
                                        name= 'email'
                                        render = {TextInput}
                                        value = {currentUser?.email}
                                        placeholder= {currentUser?.email}
                                        />
                                        <Header as='h4'  textAlign='left'>Current Password</Header>
                                        <Field        
                                        name= 'oldPassword'
                                        render = {TextInput}
                                        type = 'password'
                                        placeholder='enter current passwaord'
                                        />
                                       <Header as='h4'  textAlign='left'>New Passwaord</Header>
                                        <Field 
                                        name= 'newPassword'
                                        render = {TextInput}
                                        type = 'password'
                                        placeholder='Enter new Password here'
                                        />
                                        <Header as='h4'  textAlign='left'>Confirm New Passwaord</Header>
                                        <Field 
                                        name= 'confirmPassword'
                                        render = {TextInput}
                                        type = 'password'
                                        placeholder='Enter new Password here'
                                        />
                                        {submitError && <Label color= 'red'basic   content = {(submitError.status===400 || submitError.status===401 )&& 'Invaild action'} />}
                                        <br/>
                                        <br/>
                                        <Button  size='huge'  loading={submitting} color='blue' content='Update Password' />
                                    
                                    </Form>
                                    )}
                                    />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Profile;