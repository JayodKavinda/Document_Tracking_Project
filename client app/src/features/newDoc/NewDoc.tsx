import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, Card, Container, Grid, Image } from 'semantic-ui-react'

export const NewDoc = () => {
    let {  url } = useRouteMatch();
    return (
        <Container  style={{marginTop:'7em'}}>
            <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <Card fluid>
                        <Image src='/assests/risograph.jpg' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header> Requesting for Risograph Copies </Card.Header>
                        <Card.Meta>
                            <span> Sumbmission flow: Lecture to Department Head </span>
                        </Card.Meta>
                        <Card.Description>
                        Requesting for Risograph Copies
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Button  as ={Link}  to={`${url}/risographForm`} fluid  color='blue' content = 'Download Form' />
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                <Card fluid>
                        <Image src='/assests/van.jpg' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header> Application for Vehical Reservation </Card.Header>
                        <Card.Meta>
                            <span> Sumbmission flow: Lecture to Dean/AR via Department Head  </span>
                        </Card.Meta>
                        <Card.Description>
                        Application for Vehical Reservation
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Button fluid  color='blue' content = 'Download Form' />
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    
                </Grid.Column>
            </Grid.Row>    
        </Grid>
        </Container>
    )
}
