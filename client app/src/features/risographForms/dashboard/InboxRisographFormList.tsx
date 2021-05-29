import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Item, Label, Segment } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore'



const RisographFormList:React.FC = () => {

    const rootStore = useContext(RootStoreContext)
    const{inboxRisographForms} = rootStore.risographFormStore;

    return (
        <Segment clearing  style={{marginRight : '20px',background:'Moccasin'}}  >
        <Item.Group divided>
            {inboxRisographForms.map(risographForm =>(
                <Item key ={risographForm.risograghFormId}>
                <Item.Content>
                <Item.Header as='a'>New Application - Approval pending application by Jayod</Item.Header>
                <Item.Meta>Title of the Document: {risographForm.documentTitle}</Item.Meta>
                <Item.Description>
                    <div >
                        This is a request for a risograph copies for the {risographForm.purpose} purposes.<br/>Application due date is <b>{risographForm.dueDateTime}</b> 
                        </div>
                </Item.Description>
                <Item.Extra>
                    
                    <Label style={{background:'NavajoWhite'}} basic content='Inbox | Risograph Copies Request'/>
                    <Label  style={{background:'LightGreen'}} basic content={risographForm.formStatus} />
                </Item.Extra>
               
                <Button fluid as = {Link} to={`/risographForms/manage/${risographForm.risograghFormId}`}  content='View Application' color='orange'></Button>
                </Item.Content>
                </Item>
            ))}
    
      </Item.Group>
        </Segment>
    )
}

export default observer(RisographFormList);