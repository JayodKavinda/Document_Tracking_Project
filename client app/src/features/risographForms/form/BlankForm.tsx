import React from 'react'
import { Button, Card, Container, Divider, Form, Header, Icon, Label, Segment, Step, TextArea } from 'semantic-ui-react'
import { history } from '../../..';

 const BlankForm = () => {
    return (
        <Container  style={{marginTop:'7em'}}>
          
          <Segment clearing>
          <Header textAlign ='center' size ='small' >  Engineering Faculty of Engineering - University of Ruhuna</Header>
          <Header as ='h1' dividing textAlign ='center'>Blank Document Sheet</Header>
          
        
            <Form>
            

               

                <Form.Input  name='title' placeholder = "Document title"/> 
               
                
                <Divider />
                <TextArea rows='15' placeholder=' Type here' />
                <Divider />
                
            </Form>

            
        </Segment>

        <Card fluid>
        
              <Card.Content>
                <Card.Header>Please Difine your Document flow</Card.Header>
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
              <Divider />
                <Button style={{marginTop:'1em'}} size = 'big'  floated='right' positive type='Sumbit' content='Submit to the flow'/>

                <Button style={{marginTop:'1em'}} onClick={()=> history.push('/dashboard')} size = 'big' floated='right'  type='button' content='Cancel'/>
              </Card.Content>
      </Card>

      </Container>
    )
}

export default BlankForm;
