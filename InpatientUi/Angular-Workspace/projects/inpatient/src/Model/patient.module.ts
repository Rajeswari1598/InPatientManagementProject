import { Doctor } from "./doctor.model";

export interface Patient {
    patientid:number;
    firstName: string;
    lastName: string;
    patientGender:string;
    patientAge:number;
    patientContactNo:number;
    patientAlternteContactNo:number;
    patientNumber:string;
    doctorBean:Doctor;
}