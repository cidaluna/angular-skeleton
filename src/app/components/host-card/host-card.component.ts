import { Component, OnInit } from '@angular/core';
import { ExampleCardBComponent } from "../example-card-b/example-card-b.component";
import { ExampleCardDComponent } from "../example-card-d/example-card-d.component";
import { HostService } from '../../services/host.service';
import { IHostOffer } from '../../interfaces/host';

@Component({
  selector: 'app-host-card',
  standalone: true,
  imports: [ExampleCardBComponent, ExampleCardDComponent],
  templateUrl: './host-card.component.html',
  styleUrl: './host-card.component.scss'
})
export class HostCardComponent implements OnInit {
  listOffers: IHostOffer [] = [];

  constructor(private readonly hostService: HostService) {}

  ngOnInit(): void {
    this.startOffers();
  }

  startOffers(): void {
    this.hostService.getHostOffers().subscribe({
      next: (offers) => {
        this.listOffers = offers;
        console.log(this.listOffers);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
