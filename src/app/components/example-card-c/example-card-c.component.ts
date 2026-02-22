import { Component, Input, signal } from '@angular/core';
import { StaticMiniCardComponent } from '../static-mini-card/static-mini-card.component';

@Component({
  selector: 'app-example-card-c',
  standalone: true,
  imports: [StaticMiniCardComponent],
  templateUrl: './example-card-c.component.html',
  styleUrl: './example-card-c.component.scss'
})
export class ExampleCardCComponent {
  @Input() mainTitle!: string;
  @Input() mainDescription!: string;

  totalCards: number = 5;
  staticCards = [
    { title: 'Teste A', company: 'Empresa A', category: 'Categoria A' },
    { title: 'Teste B', company: 'Empresa B', category: 'Categoria B' },
    { title: 'Teste C', company: 'Empresa C', category: 'Categoria C' },
    { title: 'Teste D', company: 'Empresa D', category: 'Categoria D' },
    { title: 'Teste E', company: 'Empresa E', category: 'Categoria E' },
  ];



}
