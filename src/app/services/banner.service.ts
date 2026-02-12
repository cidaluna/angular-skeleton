import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOfferBanner } from '../interfaces/banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private readonly http: HttpClient) {}

  getOfferBanner(): Observable<IOfferBanner> {
    return this.http.get<IOfferBanner>(
      'http://localhost:3000/offerBanner'
    );
  }
}
