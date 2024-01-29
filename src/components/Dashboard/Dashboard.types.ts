export interface TableDataType {
    key: string;
    job:{
        id:string,
        scheduled:boolean,
      },
      sp:{
        name:any,
        number:any
      },
      schedule: {
        date:string,
        time:string
        isNew : boolean,
      },
      hub:{
        sector:string,
        rescheduleCount:number
      },
      category:{
        name:string,
        count:number
      },
      customerDetails:{
        name:string,
        email:string,
        phone:string
      },
      customerAddress:{
        line1:string,
        line2:string
      }
  }