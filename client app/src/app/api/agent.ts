import axios, { AxiosResponse }  from 'axios';
import { IRisographForm } from '../models/risographForm';
import { IUser, IUserForm } from '../models/user';


axios.defaults.baseURL = 'https://localhost:44374/api';


axios.interceptors.request.use((config)=>{
    const token=window.localStorage.getItem('jwt');
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
}, error=>{
    return Promise.reject(error)
})

axios.interceptors.response.use(undefined, error =>{
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

const User = {
    current:(): Promise<IUser> => requests.get('/accounts'),
    login:(user : IUserForm) : Promise<IUser> => requests.post('accounts/login', user),
    register:(user : IUserForm) : Promise<IUser> => requests.post('accounts/register', user)
}

export default {RisographForms, User}