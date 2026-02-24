import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ExampleCardAComponent } from '../example-card-a/example-card-a.component';
import { ExampleCardBComponent } from "../example-card-b/example-card-b.component";
import { ExampleCardCComponent } from '../example-card-c/example-card-c.component';
import { ExampleCardDComponent } from "../example-card-d/example-card-d.component";
import { HostService } from '../../services/host.service';
import { IHostOffer } from '../../interfaces/host';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CardOfferComponent } from "../card-offer/card-offer.component";
import { ExampleCardEComponent } from '../example-card-e/example-card-e.component';

@Component({
  selector: 'app-host-card',
  standalone: true,
  imports: [AsyncPipe, ExampleCardAComponent, ExampleCardBComponent, ExampleCardCComponent, ExampleCardDComponent, ExampleCardEComponent, CardOfferComponent],
  templateUrl: './host-card.component.html',
  styleUrl: './host-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostCardComponent {
  //listOffers = signal<IHostOffer[]>([]); poderia ser signal tbm
  listOffers$: Observable<IHostOffer[]>;

  constructor(private readonly hostService: HostService) {
    // inicializa após hostService estar disponível
    this.listOffers$ = this.hostService.getHostOffers();
  }

  offerAccepted(offer: IHostOffer, index: number): void {
    // handler invoked from template when a card offer is accepted
    // currently logs acceptance; extend to call backend when available
    console.log('offerAccepted', { offer, index });
  }
}
