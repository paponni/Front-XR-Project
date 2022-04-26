import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {

   }

   public findAll() : Observable<ticket[]>{
     return this.http.get<ticket[]>(
       'http://localhost:8080/api/v1/admin/tickets/'
     );
     
   }

   public getTicket(id : number){

    return this.http.get<ticket>(
      'http://localhost:8080/api/v1/admin/tickets/'+id
    )
   }
}
