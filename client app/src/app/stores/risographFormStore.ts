import {observable ,action, makeObservable,  runInAction} from 'mobx';
import { history } from '../..';
import agent from '../api/agent';
import { IRisographForm } from '../models/risographForm';
import { RootStore } from './rootStore';



export default class RisographFormStore{

    rootStore:RootStore;

    constructor(rootStore: RootStore) {
        // for new Mobx version
        makeObservable(this);
        this.rootStore = rootStore;
      }
     
    
    @observable.shallow risographForms:IRisographForm[] =[];
    @observable inboxRisographForms:IRisographForm[] =[];
    @observable loadingInitial = false;
    @observable selectedRisographForm: IRisographForm| undefined
    @observable submitting = false;
    @observable isSubmitted = false;

   

    @action loadRisographForms= (id:string|null)=>{
        this.loadingInitial=true;
        agent.RisographForms.listWithId(id)
        .then(risograhForms=>{
            runInAction(()=>{
                console.log(risograhForms)
                risograhForms.forEach((risograhForm)=>{
                    this.risographForms.push(risograhForm)
                })
            })
        }).finally(()=>
        runInAction(()=>{
            this.loadingInitial=false
        }));
    }

    @action loadInboxRisographForms= (id:string|null)=>{
        this.loadingInitial=true;
        agent.RisographForms.listInbox(id)
        .then(risograhForms=>{
            runInAction(()=>{
                console.log(risograhForms)
                risograhForms.forEach((risograhForm)=>{
                    this.inboxRisographForms.push(risograhForm)
                })
            })
        }).finally(()=>
        runInAction(()=>{
            this.loadingInitial=false
        }));
    }


    @action createRisographForm = (risographForm: IRisographForm)=>{
        this.submitting =true;
        agent.RisographForms.create(risographForm)
        .then(()=>{
            runInAction(()=>{
                this.risographForms.push(risographForm)
            })
          }).then(()=>
            runInAction(()=>{
                this.submitting=false
                
            })).then(()=>{
                history.push('/dashboard')
               // this.rootStore.modalStore.openModal('tets');
            })
          

    }

    @action editRisographForm = (risographForm: IRisographForm)=>{
        this.submitting =true;
        agent.RisographForms.update(risographForm)
        .then(()=>{
            runInAction(()=>{
                this.risographForms.push(risographForm)
            })
          }).then(()=>
            runInAction(()=>{
                this.submitting=false
                
            })).then(()=>{
                history.push('/dashboard')
               // this.rootStore.modalStore.openModal('tets');
            })
          

    }

    @action loadRisographform = (id: number)=>{
        let risographForm = this.getRisographForm(id);
        if(risographForm){
            this.selectedRisographForm=risographForm;
        }else{
            this.loadingInitial =true;
            agent.RisographForms.details(id)
            .then((response)=>{
                runInAction(()=>{
                    this.selectedRisographForm = response;
                    this.loadingInitial =false;
                })
            })
         
        }
    }

    getRisographForm = (id: number)=>{
        return this.risographForms.find(a=> a.risograghFormId === id);
    }

    @action openCreateForm=()=>{
        this.selectedRisographForm=undefined;
    }

    @action selectRisographForm = (id: number)=>{
        this.selectedRisographForm = this.risographForms.find(a=> a.risograghFormId === id);
    }

    
     @action cancelSelectedActivity = () => {
        this.selectedRisographForm = undefined;
    }

   
}

