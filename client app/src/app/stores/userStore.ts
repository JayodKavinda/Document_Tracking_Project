import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { act } from "react-dom/test-utils";
import { history } from "../..";
import agent from "../api/agent";
import { IUser, IUserForm } from "../models/user";
import { RootStore } from "./rootStore";

export default class UserStore{

    rootStore:RootStore;

    constructor(rootStore: RootStore) {
        // for new Mobx version
        makeObservable(this);
        this.rootStore = rootStore;
      }
    @observable user: IUser | null= null;

    @computed get isLoggedIn() {return !!this.user}

    @action login = async(values : IUserForm)=>{
        try {
            const user = await agent.User.login(values);
            runInAction(()=>{
                this.user= user
            })
            //console.log(user)
            this.rootStore.commonStore.setToken(user.token);
            this.rootStore.commonStore.setUserId(user.userId);
            history.push('/dashboard')
           
        } catch (error) {
           throw error;
        }
    }

    @action getUser = async ()=>{
        try {
            const user = await agent.User.current();
            runInAction(()=>{
                this.user =user;
            })
        } catch (error) {
            console.log(error)
        }
    }

    @action logout=()=>{
        this.rootStore.commonStore.setToken(null);
        this.rootStore.commonStore.setUserId(null);
        this.user =null;
        history.push('/')
    }
}