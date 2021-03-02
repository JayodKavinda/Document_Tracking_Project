export interface IRisographForm{
    risograghFormId?:number;
    documentTitle:string;
    teacherName:string;
    numberOfPage:number;
    numberOfCopies:number;
    sizeOfCopies:string;
    purpose:string;
    paperProvided:string
    copyTo:string;
    dueDateTime:string;
    finalLevelUser:string;
    formStatus:string;
    finalUserDateTime?:string;
    formModelId?:number;
    formModelName:string;
    userId:string | null;
    initDateTime:string;

}