import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Item, Label, Segment } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore'



const InboxVehicalFormList:React.FC = () => {

    const rootStore = useContext(RootStoreContext)
    const{inboxVehicalReservationForms} = rootStore.vehicalReservationFormStore;

    return (
        <Segment clearing  >
        <Item.Group divided>
            {inboxVehicalReservationForms.map(vehicalForm =>(
                <Item key ={vehicalForm.vehicalReservationFormId}>
                <Item.Content>
                <Item.Header as='a'>New Application - Approval pending application by Mr.{vehicalForm.applicant}</Item.Header>
                <Item.Meta>Department: {vehicalForm.department}</Item.Meta>
                <Item.Description>
                    <div >
                        This is a request a vehical for {vehicalForm.purpose} purposes.<br/>Application due date is <b>{vehicalForm.dueDateTime}</b> 
                        </div>
                </Item.Description>
                <Item.Extra>
                    
                    <Label style={{background:'NavajoWhite'}} basic content='Inbox | Vehical Reservation'/>
                    <Label  style={{background:'LightGreen'}} basic content={vehicalForm.formStatus} />
                </Item.Extra>
               
                <Button fluid as = {Link} to={`/vehicalReservationForm/manage/${vehicalForm.vehicalReservationFormId}`}  content='Review Application' color='orange'></Button>
                </Item.Content>
                </Item>
            ))}
    
      </Item.Group>
        </Segment>
    )
}

export default observer(InboxVehicalFormList);