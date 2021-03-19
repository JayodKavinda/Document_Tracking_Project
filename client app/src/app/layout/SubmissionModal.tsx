
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import {  RootStoreContext } from '../stores/rootStore'

const SubmissionModal = () => {

    const rootStore = useContext(RootStoreContext)
    const{modal:{open, body}, closeModal} = rootStore.modalStore;

    return (
        <Modal
            basic
            open={open}
            onClose = {closeModal}
            size='small'
            >
            <Header icon>
                <Icon name='archive' />
                Archive Old Messages
            </Header>
            <Modal.Content>
                <p>
                Your application is successfuly submitted in to Document flow 
                </p>
            </Modal.Content>
            <Modal.Actions>
                
                <Button color='green' inverted onClick={() => closeModal()}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
    </Modal>
    )
}

export default observer(SubmissionModal)
