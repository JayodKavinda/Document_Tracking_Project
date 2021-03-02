import { configure, makeObservable } from 'mobx';
import { createContext } from 'react';
import CommonStore from './commonStore';
import ModalStore from './modalStore';
import RisographFormStore from './risographFormStore'
import UserStore from './userStore';


configure({enforceActions: 'always'});

export class RootStore{

    risographFormStore : RisographFormStore;
    userStore: UserStore;
    commonStore: CommonStore
    modalStore: ModalStore

    constructor(){

      

        this.risographFormStore=new RisographFormStore(this);
        this.userStore = new UserStore(this);
        this.commonStore =new CommonStore(this);
        this.modalStore = new ModalStore(this);

    }
}

export const RootStoreContext = createContext(new RootStore());