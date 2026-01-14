import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Banner {
  id: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) {}

  getOfferBanner(): Observable<Banner> {
    return this.http.get<Banner>(
      'http://localhost:3000/offerBanner'
    );
  }
}
