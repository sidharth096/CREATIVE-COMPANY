export interface UserData {
    name: string;
    email: string;
    password: string;
    phone: number; 
  
    // is_Admin: boolean;
    // userId: string;
  }
  
  export class UserProfile {
    name: string;
    email: string;
    password: string;
    phone: number;
  
    // is_Admin: boolean;
    // userId: string;
  
    constructor({ email, name, phone,  password }: UserData) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.phone = phone;
      

    //   this.is_Admin = is_Admin;
    }
  }