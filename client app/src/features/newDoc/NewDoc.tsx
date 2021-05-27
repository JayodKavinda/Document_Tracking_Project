import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, Card, Container, Grid, Image } from 'semantic-ui-react'

export const NewDoc = () => {
    let {  url } = useRouteMatch();
    return (
        <Container >

            <Card.Group itemsPerRow={4}  style={{marginTop:'5em'}}>
            <Card fluid>
                        <Image src='/assests/newDoc.png' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header> Blank document </Card.Header>
                        <Card.Meta>
                            <span> Sumbmission flow: You can define document flow up to 5 Levels  </span>
                        </Card.Meta>
                        <Card.Description>
                        This is black sheet
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Button  as ={Link}  to={`${url}/blankForm`}  fluid  color='blue' content = 'Download Form' />
                        </Card.Content>
                    </Card>

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
                        <Button as ={Link}  to={`${url}/vehicalReservationForm`} fluid  color='blue' content = 'Download Form' />
                        </Card.Content>
                    </Card>

                    <Card fluid>
                        <Image src='/assests/bank.png' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header> Bank Voucher Application </Card.Header>
                        <Card.Meta>
                            <span> Sumbmission flow: Lecture to Dean/AR via Department Head  </span>
                        </Card.Meta>
                        <Card.Description>
                        Application for Bank Voucher
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Button fluid  color='blue' content = 'Download Form' />
                        </Card.Content>
                    </Card>

                   
            </Card.Group>
           
        </Container>
    )
}
