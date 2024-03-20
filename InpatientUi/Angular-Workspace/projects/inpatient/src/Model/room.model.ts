import { RoomType } from "./roomkind.model";
import { Ward } from "./ward.model";
export interface Room{
    id:number;
    roomNo:number;
    roomSharing:number;
    roomPrice:number;
    roomTypeId:RoomType;
    wardId:Ward;
    availability:number;
    status:string;
    
}
