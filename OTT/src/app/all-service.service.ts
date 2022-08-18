import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';



const baseUrl = "http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  
  public userLoggedinID!: number;

  constructor(private http : HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/movies`)
  }

  getmovie(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/movies/${id}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/users`);
  }

  getuser(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/users/${id}`);
  }
  addUser(user: Users): Observable<any> {
    return this.http.post(`${baseUrl}/users`, user);
  }
}
