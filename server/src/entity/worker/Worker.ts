export interface WorkerData {
    name: string;
    email: string;
    password: string;
    phone: number; 
    // is_Admin: boolean;
    // userId: string;
  }
  
  export class WorkerProfile {
    name: string;
    email: string;
    password: string;
    phone: number;
    // is_Admin: boolean;
    // userId: string;
  
    constructor({ email, name, phone,  password }: WorkerData) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.phone = phone;
    //   this.is_Admin = is_Admin;
    }
  } 