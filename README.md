<html>
  <h3>Construção da APi através do db.json.</h3>
   <br> Criar no power shell.</br>
   <br>npm install -g json-server</br>
   <br>json-server --watch db.json</br>
  <h4>Criar o file db.json.</h4>
  
<br>{
  "PeriodicElement": [
  <br>
    {
      "id": 1,
      "position": 1,
      "name": "Hydrogen",
      "weight": 1.0079,
      "symbol": "H"
    },
  </br>
  <br>
    {
      "id": 2,
      "position": 2,
      "name": "Helium",
      "weight": 4.0026,
      "symbol": "He"
    },
    </br>
    <br>
    {
      "id": 3,
      "position": 3,
      "name": "Lithium",
      "weight": 6.941,
      "symbol": "Li"
    },
    </br>
    <br>
    {
      "id": 4,
      "position": 4,
      "name": "Beryllium",
      "weight": 9.0122,
      "symbol": "Be"
    },
    </br>
    <br>
    {
      "id": 5,
      "position": 5,
      "name": "Boron",
      "weight": 10.811,
      "symbol": "B"
    },
    </br>
    <br>
    {
      "id": 6,
      "position": 6,
      "name": "Carbon",
      "weight": 12.0107,
      "symbol": "C"
    },
    </br>
    <br>
    {
      "id": 7,
      "position": 7,
      "name": "Nitrogen",
      "weight": 14.0067,
      "symbol": "N"
    },</br>
    <br>
    {
      "id": 8,
      "position": 8,
      "name": "Oxygen",
      "weight": 15.9994,
      "symbol": "O"
    },
    </br>
    <br>
    {
      "id": 9,
      "position": 9,
      "name": "Fluorine",
      "weight": 18.9984,
      "symbol": "F"
    },</br>
    <br>
    {
      "id": 10,
      "position": 10,
      "name": "Neon",
      "weight": 20.1797,
      "symbol": "Ne"
    }
    </br>

  ]
}

<h3>Criar uma Folder com o novo model e criar o file PeriodicElement.</h3>

export interface PeriodicElement {
<br>
 <br> id: number;</br>
 <br> name: string;</br>
 <br> position: number;</br>
 <br> weight: number;</br>
 <br> symbol: string;</br>
}
</br>


<h3>Criar um folder service e o file  periodicEllement.service.ts</h3>

<br>import { Injectable } from '@angular/core';</br>
<br>import { HttpClient } from '@angular/common/http';</br>
<br>import { Observable } from 'rxjs';</br>
<br>import { PeriodicElement } from '../models/PeriodicElement';</br>

<br>@Injectable()</br>
<br>export class PeriodicElementService {</br>


 <br> elementApiUrl ='http://localhost:3000/PeriodicElement'; //Link da API</br>
 <br> constructor(private http: HttpClient) { }<br>


 <br> getElements(): Observable<PeriodicElement[]>{
   return this.http.get<PeriodicElement[]>(this.elementApiUrl);

  }</br>

  <br>createElements(element:PeriodicElement): Observable<PeriodicElement>{
  return this.http.post<PeriodicElement>(this.elementApiUrl,element);
}
</br>
  <h2>Para testar APi é utilizado o Postman</h2>
<br> GET http://localhost:3000/PeriodicElement/   <br>
<br> Delete http://localhost:3000/PeriodicElement/</br>
  <br>Post http://localhost:3000/PeriodicElement/</br>
  


</html>
