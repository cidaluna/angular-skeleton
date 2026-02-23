import { Component } from '@angular/core';
import { CardOfferComponent } from '../card-offer/card-offer.component';
import { CardOfferBodyComponent } from '../card-offer-body/card-offer-body.component';
import { CardAnimatedSummaryBodyComponent } from '../card-animated-summary-body/card-animated-summary-body.component';
import { CardAnimatedSplitBodyComponent } from '../card-animated-split-body/card-animated-split-body.component';
import { Observable } from 'rxjs';
import { IHostOffer } from '../../interfaces/host';
import { HostService } from '../../services/host.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [AsyncPipe, CardOfferComponent, CardAnimatedSplitBodyComponent, CardAnimatedSummaryBodyComponent, CardOfferBodyComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
//listOffers = signal<IHostOffer[]>([]); poderia ser signal tbm
  listOffers$: Observable<IHostOffer[]>;

  constructor(private readonly hostService: HostService) {
    // inicializa após hostService estar disponível
    this.listOffers$ = this.hostService.getHostOffers();
    console.log('getOffers: ', this.listOffers$);
  }
}
