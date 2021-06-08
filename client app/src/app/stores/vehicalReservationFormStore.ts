import {observable ,action, makeObservable,  runInAction} from 'mobx';
import { history } from '../..';
import agent from '../api/agent';
import { IRisographForm } from '../models/risographForm';
import { IVehicalReservationForm } from '../models/vehicalReservationForm';
import { RootStore } from './rootStore';



export default class VehicalReservationFormStore{

    rootStore:RootStore;

    constructor(rootStore: RootStore) {
        // for new Mobx version
        makeObservable(this);
        this.rootStore = rootStore;
      }
     
    
    @observable.shallow vehicalReservationForms:IVehicalReservationForm[] =[];
    @observable inboxVehicalReservationForms:IVehicalReservationForm[] =[];
    @observable loadingInitial = false;
    @observable selectedVehicalReservationForm: IVehicalReservationForm| undefined
    @observable submitting = false;
    @observable isSubmitted = false;

    @action createVehicalReservationForm = (vehicalReservationForm: IVehicalReservationForm)=>{
        this.submitting =true;
        agent.VehicalReservationForms.create(vehicalReservationForm)
        .then(()=>{
            runInAction(()=>{
                this.vehicalReservationForms.push(vehicalReservationForm)
            })
          }).then(()=>
            runInAction(()=>{
                this.submitting=false
                
            })).then(()=>{
                this.rootStore.modalStore.openModal("Ok")
               // history.push('/dashboard')
               
            })
          

    }


    @action loadVehicalReervationForms= (id:string|null)=>{
        this.loadingInitial=true;
        agent.VehicalReservationForms.listWithId(id)
        .then(vehicalReservationForms=>{
            runInAction(()=>{
                console.log(vehicalReservationForms)
                vehicalReservationForms.forEach((vehicalReservationForm)=>{
                    this.vehicalReservationForms.push(vehicalReservationForm)
                })
            })
        }).catch((err)=>{
            throw err;
        }).finally(()=>
        runInAction(()=>{
            this.loadingInitial=false
        }));
    }

    

    @action loadInboxehicalReservationForms= (id:string|null)=>{
        this.loadingInitial=true;
        agent.VehicalReservationForms.listInbox(id)
        .then(vehicalReservationForms=>{
            runInAction(()=>{
                console.log(vehicalReservationForms)
                vehicalReservationForms.forEach((vehicalReservationForm)=>{
                    this.inboxVehicalReservationForms.push(vehicalReservationForm)
                })
            })
        }).finally(()=>
        runInAction(()=>{
            this.loadingInitial=false
        }));
    }

       
    @action loadVehicalReservationform = async (id: number)=>{
        let vehicalReservationForm = this.getVehicalReservationForm(id);
        if(vehicalReservationForm){
            this.selectedVehicalReservationForm=vehicalReservationForm;
        }else{
            this.loadingInitial =true;
            try{
                vehicalReservationForm = await agent.VehicalReservationForms.details(id);
                runInAction(()=>{
                    this.selectedVehicalReservationForm = vehicalReservationForm;
                    this.loadingInitial =false;
                })
            } catch(error){
                runInAction(()=>{
                    this.loadingInitial= false;
                })
               console.log(error)
            }
        }
    }

    @action editVehicalReservationForm = (vehicalReservationForm: IVehicalReservationForm)=>{
        this.submitting =true;
        agent.VehicalReservationForms.update(vehicalReservationForm)
        .then(()=>{
            runInAction(()=>{
                this.vehicalReservationForms.push(vehicalReservationForm)
            })
          }).then(()=>
            runInAction(()=>{
                this.submitting=false
                
            })).then(()=>{
                history.push('/dashboard')
               // this.rootStore.modalStore.openModal('tets');
            })
          

    }
    
    
    getVehicalReservationForm = (id: number)=>{
        return this.vehicalReservationForms.find(a=> a.vehicalReservationFormId === id);
    }

    @action openCreateForm=()=>{
        this.selectedVehicalReservationForm=undefined;
    }

    @action selectRisographForm = (id: number)=>{
        this.selectedVehicalReservationForm = this.vehicalReservationForms.find(a=> a.vehicalReservationFormId === id);
    }

    
     @action cancelSelectedActivity = () => {
        this.selectedVehicalReservationForm = undefined;
    }
           
         
      


    


 

   
          


    
    

   
}

