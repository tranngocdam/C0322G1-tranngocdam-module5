import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BenhNhan} from '../model/benh-nhan';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<BenhNhan[]> {
    return this.http.get<BenhNhan[]>(API_URL + '/benhnhan');
  }
  findById(id: string): Observable<BenhNhan> {
    return this.http.get<BenhNhan>(`${API_URL}/benhnhan/${id}`);
  }
}
