export class budgetDataFullModel{
    id:number;
    purpose:string;
    costEstimated:number;
    advanceAmmount:number;
    description:string;
    date:Date;
    userId:number;
    managerId:number;
    status:string;
    createdOn:string;
    employee:object;
    reportingTo:string;
    rejectionReason:string;
}