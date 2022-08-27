import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhNhan} from '../model/benh-nhan';
import {BenhAn} from '../model/benh-an';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(API_URL + '/benhan');
  }
  findById(id: string): Observable<BenhAn> {
    return this.http.get<BenhAn>(`${API_URL}/benhan/${id}`);
  }
  editBenhAn(id: string, benhan: BenhAn): Observable<BenhAn> {
    return this.http.put<BenhAn>(`${API_URL}/benhan/${id}`, benhan);
  }
  deleteCustomer(id: string): Observable<BenhAn> {
    return this.http.delete<BenhAn>(`${API_URL}/benhan/${id}`);
  }
  saveBenhAn(benhan): Observable<BenhAn> {
    return this.http.post<BenhAn>(API_URL + '/benhan', benhan);
  }
}
