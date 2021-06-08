export interface IVehicalReservationForm{
    vehicalReservationFormId?:number
    applicant:string
    dueDateTime:string
    department:string
    purpose:string
    routeFrom:string
    routeTo:string
    returnFrom:string
    returnTo:string
    estimateTime:string
    estimateDistance:string
    vote:string
    projectNo:string
    officers:string
    formStatus:string
    formCurrentLevel:number

    level2UserId:string
    isLevel2Approved:string
    level2UserDateTime?:string

    level3UserId:string
    isVehicalOK:string
    isLevel3Approved:string
    level3UserDateTime?:string

    level4UserId:string
    isLevel4Approved:string
    level4UserDateTime?:string

    formModelId?:number;
    formModelName:string;
    userId:string | null;
    initDateTime:string;
}