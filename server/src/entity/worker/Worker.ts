export interface WorkerData {
    name: string;
    email: string;
    password: string;
    phone: number; 
    job_title:string;

  }
  
  export class WorkerProfile {
    name: string;
    email: string;
    password: string;
    phone: number;
    job_title:string;

  
    constructor({ email, name, phone,  password,job_title }: WorkerData) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.job_title=job_title;

    }
  } 