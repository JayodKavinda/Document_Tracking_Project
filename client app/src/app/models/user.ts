export interface IUser {
    email: string
    firstName : string
    token:string
    userId:string
}

export interface IUserForm {
    email: string
    password : string
    
}

export interface ICurrentUser {
    email: string
    firstName : string
    lastName : string
    department : string
    designation: string
    
}

export interface IPasswaordChange{
    email:string
    oldPassword:string
    NewPassword:string
    confirmPassword:string
}

