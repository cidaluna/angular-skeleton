import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfferComponent } from './card-offer.component';
import { IHostOffer } from '../../interfaces/host';
import { ExampleCardAComponent } from '../example-card-a/example-card-a.component';

const mockOffer: IHostOffer = {
  id: 1,
  title: 'Oferta Especial',
  description: 'Descrição Teste',
  type: 'card_animated_compact',
  showAlert: true
};

describe('CardOfferComponent', () => {
  let component: CardOfferComponent;
  let fixture: ComponentFixture<CardOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOfferComponent);
    component = fixture.componentInstance;
    // Seta o Input obrigatório antes do detectChanges
    component.offer = mockOffer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 1. Teste de Mapeamento de Componente Dinâmico
  it('deve retornar o componente correto baseado no tipo da oferta', () => {
    // Caso conhecido
    component.offer = { ...mockOffer, type: 'card_animated_compact' };
    expect(component.currentCardComponent).toBe(ExampleCardAComponent);

    // Caso desconhecido (Fallback)
    component.offer = { ...mockOffer, type: 'tipo_inexistente' };
    expect(component.currentCardComponent).toBeNull();
  });

  // 2. Teste de Emissão de Evento e Estado de Processamento
  it('deve emitir offerAccepted e ativar isProcessing ao clicar em aceitar', () => {
    spyOn(component.offerAccepted, 'emit');

    component.onAcceptClick();

    expect(component.isProcessing()).toBeTrue();
    expect(component.showSkeletonTwo()).toBeTrue();
    expect(component.offerAccepted.emit).toHaveBeenCalled();
  });

  // 3. Teste de Proteção contra Cliques Duplos (Idempotência)
  it('não deve emitir o evento se isProcessing já estiver como true', () => {
    spyOn(component.offerAccepted, 'emit');

    // Simula que já está processando
    component.isProcessing.set(true);

    component.onAcceptClick();

    // Não deve ter chamado o emit novamente
    expect(component.offerAccepted.emit).not.toHaveBeenCalled();
  });

  // 4. Teste de Renderização do Template (DOM)
  it('deve renderizar o título e a descrição da oferta no HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.card-example__title');
    const descElement = compiled.querySelector('.card-example__description');

    expect(titleElement?.textContent).toContain(mockOffer.title);
    expect(descElement?.textContent).toContain(mockOffer.description);
  });
});
