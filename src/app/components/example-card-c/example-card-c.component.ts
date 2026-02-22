import { Component, Input } from '@angular/core';
import { MiniCardDetailComponent } from '../mini-card-detail/mini-card-detail.component';

@Component({
  selector: 'app-example-card-c',
  standalone: true,
  imports: [MiniCardDetailComponent],
  templateUrl: './example-card-c.component.html',
  styleUrl: './example-card-c.component.scss'
})
export class ExampleCardCComponent {
  @Input() mainTitle!: string;
  @Input() mainDescription!: string;

  totalCards: number = 5;
  staticCards = [
    { title: 'Teste A', company: 'Empresa A', category: 'Categoria 1' },
    { title: 'Teste B', company: 'Empresa B', category: 'Categoria 2' },
    { title: 'Teste C', company: 'Empresa C', category: 'Categoria 3' },
    { title: 'Teste D', company: 'Empresa D', category: 'Categoria 4' },
    { title: 'Teste E', company: 'Empresa E', category: 'Categoria 5' },
  ];

}
