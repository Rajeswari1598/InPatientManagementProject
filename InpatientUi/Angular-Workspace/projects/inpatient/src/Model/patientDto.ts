export interface PatientDto {
  firstName: string;
  lastName: string;
  patientAge: number;
  patientGender: string;
  patientContactNo: number;
  patientAlternateContactNo: number;
  noOfDays: number;
  id: number;
  startDate: Date;
  endDate: Date;
  bedId: BedEntity;
  status: string;
  paidAmount:number;
  totalAmount:number;
}
export interface BedEntity {
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
  roomTypeId: RoomType;
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
  name: string;
}