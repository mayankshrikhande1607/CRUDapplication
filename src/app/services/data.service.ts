import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { Data } from '../interfaces/datas';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlapi="http://127.0.0.1:7000/api/form";
  // signupapi=" http://localhost:3000/signup";
  constructor(private http: HttpClient) { }


  all():Observable<Data[]>{
    return this.http.get<Data[]>(this.urlapi)
  }

  create(data:any):Observable<Data[]>{
    return this.http.post<Data[]>(this.urlapi,data)
  }

  get(id:number):Observable<Data>{
    return this.http.get<Data>(`${this.urlapi}/${id}`)
  }

  update(id:number,data:any):Observable<Data>{
    return this.http.put<Data>(`${this.urlapi}/${id}`,data)
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlapi}/${id}`)
  }
  sessonData(data:any){
    // console.log(sessionStorage.getItem(data))
    const data1= sessionStorage.getItem(data)
    return data1

  }
  login1(username:string,password:string){
    return this.http.post<any>('http://127.0.0.1:8000/accounts/apitoken/auth/',{username,password}
    ).pipe(
      map(user => {
        console.log(user)
        if(user){
          sessionStorage.setItem("username",username)
        }
      })
    )
  }
}
