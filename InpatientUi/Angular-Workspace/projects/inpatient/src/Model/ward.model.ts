import { Department } from "./department.model"
export interface Ward {
    id: number  ;
    name: string;
    capacity: number;
    availability: number;
    departmentId: Department; 
    status:string;
  }
