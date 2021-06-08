import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore'
import LoadingComponent from '../../../app/layout/LoadingComponent'


const VehicalReservationFormList:React.FC = () => {

    const rootStore = useContext(RootStoreContext)
    const{vehicalReservationForms} = rootStore.vehicalReservationFormStore;

   

    


    return (
        <Segment clearing   >
        <Item.Group divided>
            {vehicalReservationForms.map(vehicalReservationForm =>(
                <Item key ={vehicalReservationForm.vehicalReservationFormId}>
                <Item.Content>
                <Item.Header as='a'>Vehical Reservation for {vehicalReservationForm.applicant}</Item.Header>
                <Item.Meta>sumbitted at {vehicalReservationForm.initDateTime}</Item.Meta>
                <Item.Description>
                    <div >
                        This is a request for a risograph copies for the {vehicalReservationForm.purpose} purposes.<br/> Due date is  {vehicalReservationForm.dueDateTime}
                        </div>
                </Item.Description>
                <Item.Extra>
                    <Button as = {Link}  to={`/vehicalReservationForms/${vehicalReservationForm.vehicalReservationFormId}`} floated='right' content='View Application' color='blue'></Button>
                    <Label  style={{background:'LightGreen'}} basic content='Risograph Copies Request'/>
                    <Label  style={{background:'LightGreen'}} basic content={vehicalReservationForm.formStatus} />
                </Item.Extra>
                </Item.Content>
                </Item>
            ))}
    
      </Item.Group>
        </Segment>
    )
}

export default observer(VehicalReservationFormList);