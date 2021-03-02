import { action, observable, reaction } from "mobx";
import { act } from "react-dom/test-utils";
import { RootStore } from "./rootStore";

export default class CommonStore{
    rootStore: RootStore;

    constructor(rootStore :RootStore){
        this.rootStore =rootStore;

        // reaction(()=>this.token, token=>{
        //     if(token){
        //         window.localStorage.setItem('jwt', token)
        //     }else{
                
        //     }
        // })
    }

    @observable token:string|null =window.localStorage.getItem('jwt');
    @observable userId:string|null =window.localStorage.getItem('userId');
    @observable appLoaded =false;

    @action setToken= (token:string|null)=>{
        window.localStorage.setItem('jwt',token!);
        this.token=token;

    }

    @action setUserId= (id:string|null)=>{
        window.localStorage.setItem('userId',id!);
        this.userId=id;

    }

    @action setAppLoaded=()=>{
        this.appLoaded =true;
    }
}