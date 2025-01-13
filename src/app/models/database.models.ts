export interface User {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    password: string;
}
  
export interface Association {
    id: number;
    name: string;
    members: Member[];
}

export interface RolePerAssoc {
    id: number;
    name: string;
    role: string;
}

export interface Member {
    firstname: string;
    lastname: string;
    age: number;
    role: string;
}

export interface AssocDTO {
    name: string;
    users: User[];
    id: number;
}
  

export interface Minutes {
    id: number;
    date: string;
    content: string;
    association: Association;  
    user: User[];  
}

export interface RoleAll {
    association_id: number;
    user_id: number;
    name: string;
    firstname: string;
    lastname: string;
    role: string;
}
  