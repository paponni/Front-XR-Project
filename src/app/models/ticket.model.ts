export class ticket{
    id:number;
    nomMatch:string;
    dateMatch:Date;
    heureMatch : Date;
    lieuMatch:String;
    prix:number;
    photo:string;
    nombreTicket:number;
    statusTicket:StatusTicket;
}

export enum StatusTicket{
    en_cours,
    bloque,
    slode_out
}