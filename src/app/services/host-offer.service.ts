import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHostOffer } from './../interfaces/host';

@Injectable({
  providedIn: 'root'
})
export class HostOfferService {
  private http = inject(HttpClient);

  // URL padrão do JSON Server para o seu endpoint
  private readonly API_URL = 'http://localhost:3000/offerCards';

  getOffers(): Observable<IHostOffer[]> {
    return this.http.get<IHostOffer[]>(this.API_URL);
  }
}
