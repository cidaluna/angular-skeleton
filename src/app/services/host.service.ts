import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHostOffer } from '../interfaces/host';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private readonly http: HttpClient) { }

  getHostOffers(): Observable<IHostOffer[]>{
    return this.http.get<IHostOffer[]>('http://localhost:3000/offerCards');
  }
}
