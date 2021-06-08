import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { act } from "react-dom/test-utils";
import { history } from "../..";
import agent from "../api/agent";
import { ICurrentUser, IPasswaordChange, IUser, IUserForm } from "../models/user";
import { RootStore } from "./rootStore";

export default class UserStore{

    rootStore:RootStore;

    constructor(rootStore: RootStore) {
        // for new Mobx version
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @observable user: IUser | null= null;
    @observable currentUser: ICurrentUser | null= null;

  


    @computed get isLoggedIn() {return !!this.currentUser}

    @action login = async(values : IUserForm)=>{
        try {
            const user = await agent.User.login(values);
            runInAction(()=>{
                this.user= user
            })
            //console.log(user)
            this.rootStore.commonStore.setToken(user.token);
            this.rootStore.commonStore.setUserId(user.userId);
            this.rootStore.modalStore.closeModal();
            history.push('/dashboard');
           
        } catch (error) {
           throw error;
        }
    }

    @action getUser = async (id:string|null)=>{
        try {
            const currUser = await agent.User.current(id);
            runInAction(()=>{
                this.currentUser =currUser;
                console.log(currUser)
            })
          
        } catch (error) {
           // console.log(error)
        }
    }

    @action updatePassword = async (password:IPasswaordChange)=>{
        try {
            const currUser = await agent.User.changePassword(password);
            runInAction(()=>{
               // this.currentUser =currUser;
               this.rootStore.commonStore.setToken(null);
               this.rootStore.commonStore.setUserId(null);
               this.user =null;
               this.currentUser = null;
               history.push('/')
                console.log(currUser)
            })
          
        } catch (error) {
            //console.log(error)
            throw error;
        }
    }

    @action logout=()=>{
        this.rootStore.commonStore.setToken(null);
        this.rootStore.commonStore.setUserId(null);
        this.user =null;
        this.currentUser = null;
        history.push('/')
        
    }
}