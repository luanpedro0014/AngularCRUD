import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { PeriodicElement } from '../Models/PeriodicElement';

@Injectable()
export class PeriodicElementService {
  elementAPiUrl ='https://localhost:44366/api/PeriodicElements';
  constructor(private http: HttpClient) {}

   getElements(): Observable<PeriodicElement[]>{

      return this.http.get<PeriodicElement[]>(this.elementAPiUrl);

   }
   createElements(element:PeriodicElement):Observable<PeriodicElement>{

   return this.http.post<PeriodicElement>(this.elementAPiUrl,element);

   }

   editElement(element:PeriodicElement): Observable<PeriodicElement>{
     return this.http.put<PeriodicElement>(this.elementAPiUrl, element);
   }


     deleteElement(id:number):Observable<any>{

     return this.http.delete<any>(`${this.elementAPiUrl}? id=${id}`);

     }


   }



