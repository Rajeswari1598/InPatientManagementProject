export interface Bed {
    id:number|null ; 
    bedNo: number|null;
    status:string;
    roomId:Room|null;
  }
  export interface Room {
    id: number;
    roomNo: number;
    roomSharing: number;
    roomPrice: number;
    roomType: RoomType;
    wardId: Ward;
  }
  interface Department {
    id: number;
    name: string;
  }
  
  interface Ward {
    id: number;
    name: string;
    capacity: number;
    availability: number;
    departmentId: Department;
  }
  
  interface RoomType {
    id: number;
    name: string;
  }