import axios, { AxiosResponse }  from 'axios';
import { history } from '../..';
import { IRisographForm } from '../models/risographForm';
import { IVehicalReservationForm } from '../models/vehicalReservationForm';
import { ICurrentUser, IUser, IUserForm } from '../models/user';

var flag= false;

//axios.defaults.baseURL = 'https://localhost:5001/api';
axios.defaults.baseURL = 'https://dtsruhuna.azurewebsites.net/api'


axios.interceptors.request.use((config)=>{
    const token=window.localStorage.getItem('jwt');
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
}, error=>{
    return Promise.reject(error)
})


axios.interceptors.response.use(undefined, error =>{
    if(error.response.status===404 && !flag){
        history.push('/notfound')
    }else if(error.response.status===401){
        history.push('/unatherized')
        flag=true;
    }
    console.log(error.response)
    throw error.response
    
    
    //console.log(error.response);
})

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms:number)=> (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(()=> resolve(response),ms))


const requests = {
    get:(url:string)=> axios.get(url).then(sleep(1000)).then(responseBody),
    post:(url:string, body:{})=> axios.post(url,body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody)
}

const RisographForms ={ 
    list:(): Promise<IRisographForm[]>=> requests.get('/RisograghForms'),  //get all
    listWithId:(id:string|null): Promise<IRisographForm[]>=> requests.get(`/RisograghForms?id=${id}`),  //get all
    details:(id:number)=> requests.get(`/RisograghForms/${id}`),              //get one
    create:(risographForm:IRisographForm)=> requests.post(`/RisograghForms/`,risographForm),      //post
    update: (risographForm:IRisographForm) => requests.put(`/RisograghForms/${risographForm.risograghFormId}`, risographForm),
    listInbox:(id:string|null): Promise<IRisographForm[]>=> requests.get(`/RisograghForms/inbox?id=${id}`)  //get all
}

const VehicalReservationForms ={ 
    list:(): Promise<IVehicalReservationForm[]>=> requests.get('/VehicalReservationForms'),  //get all
    listWithId:(id:string|null): Promise<IVehicalReservationForm[]>=> requests.get(`/VehicalReservationForms?id=${id}`),  //get all
    details:(id:number)=> requests.get(`/VehicalReservationForms/${id}`),              //get one
    create:(vehicalReservationForm:IVehicalReservationForm)=> requests.post(`/VehicalReservationForms/`,vehicalReservationForm),      //post
    update: (vehicalReservationForm:IVehicalReservationForm) => requests.put(`/VehicalReservationForms/${vehicalReservationForm.vehicalReservationFormId}`, vehicalReservationForm),
    listInbox:(id:string|null): Promise<IVehicalReservationForm[]>=> requests.get(`/VehicalReservationForms/inbox?id=${id}`)  //get all
}

const User = {
    current:(id:string|null): Promise<ICurrentUser| null> => requests.get(`/accounts/current?id=${id}`),
    login:(user : IUserForm) : Promise<IUser> => requests.post('accounts/login', user),
    register:(user : IUserForm) : Promise<IUser> => requests.post('accounts/register', user)
}

export default {RisographForms, User,VehicalReservationForms }