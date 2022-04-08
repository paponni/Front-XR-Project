import { ticket } from "./ticket.model";

export interface Order{
    orderId : number;
    orderBy : string;
    orderStatus : string;
    tickets  : ticket[];
}