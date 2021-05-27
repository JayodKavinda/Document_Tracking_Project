
import React, { useContext } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { RootStoreContext } from '../stores/rootStore';
import { observer } from 'mobx-react-lite';
import { history } from '../..';

const FormSuccessModal = () => {
    const rootStore = useContext(RootStoreContext);
    const {modal: {open}, closeModal} = rootStore.modalStore;

    const gotoDashboard = ()=>{
        closeModal();
        history.push('/dashboard/forms')
    }

  return (
    <Modal  open={open} onClose={closeModal} size='large'>
      <Header icon>
        <Icon name='archive' />
        Submission Successfull!
      </Header>
      <Modal.Content>
        <p>
        Your Application is sucessfully sumbittied to the documentation flow
         <br/> See your application in dashboard
        </p>
      </Modal.Content>
      <Modal.Actions>
       
        <Button color='green' inverted onClick={gotoDashboard}>
          <Icon name='checkmark' /> Go to dashboard
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default observer(FormSuccessModal);
