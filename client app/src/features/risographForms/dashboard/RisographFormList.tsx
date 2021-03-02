import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import RisographFormStore from '../../../app/stores/risographFormStore'
import { RootStoreContext } from '../../../app/stores/rootStore'



const RisographFormList:React.FC = () => {

    const rootStore = useContext(RootStoreContext)
    const{risographForms} = rootStore.risographFormStore;

    return (
        <Segment clearing  style={{marginRight : '20px'}} >
        <Item.Group divided>
            {risographForms.map(risographForm =>(
                <Item key ={risographForm.risograghFormId}>
                <Item.Content>
                <Item.Header as='a'>{risographForm.documentTitle}</Item.Header>
                <Item.Meta>sumbitted at {risographForm.initDateTime}</Item.Meta>
                <Item.Description>
                    <div >
                        This is a request for a risograph copies for the {risographForm.purpose} purposes.<br/> Due date is  {risographForm.dueDateTime}
                        </div>
                </Item.Description>
                <Item.Extra>
                    <Button as = {Link} to={`/risographForms/${risographForm.risograghFormId}`} floated='right' content='View' color='green'></Button>
                    <Label basic content='Risograph Copies Request'/>
                </Item.Extra>
                </Item.Content>
                </Item>
            ))}
    
      </Item.Group>
        </Segment>
    )
}

export default observer(RisographFormList);