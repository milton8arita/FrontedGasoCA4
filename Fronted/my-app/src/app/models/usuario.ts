export class Usuario{
    _id?: number;
    username: string;
    email: string;
    password: string;
    roles: string[];
//    calificaciones: string;

    constructor(username: string, email: string, password: string, roles: string[], calificaciones: string){
     this.username = username;
     this.email = email;
     this.password = password;
     this.roles = roles;  
//     this.calificaciones = calificaciones; 
    }
}