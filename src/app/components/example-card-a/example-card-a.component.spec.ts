import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardAComponent } from './example-card-a.component';

describe('ExampleCardComponent', () => {
  let component: ExampleCardAComponent;
  let fixture: ComponentFixture<ExampleCardAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCardAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve mapear miniCardTitles para staticCards com uiKeys formatadas corretamente (slugify)', () => {
    const firstCard = component.staticCards[0];
    const complexCard = component.staticCards.find(c => c.title === 'Sustação por motivos judiciais comarca SC');

    expect(firstCard.uiKey).toBe('title-card-cheque');
    expect(complexCard?.uiKey).toBe('title-card-sustacao-por-motivos-judiciais-comarca-sc');
    expect(component.staticCards.length).toBe(7);
  });

  it('deve ativar isProcessing e showSkeletonTwo ao chamar callSkeletonTwo', () => {
    // Inicialmente devem ser falsos
    expect(component.isProcessing()).toBeFalse();
    expect(component.showSkeletonTwo()).toBeFalse();

    component.callSkeletonTwo();

    expect(component.isProcessing()).toBeTrue();
    expect(component.showSkeletonTwo()).toBeTrue();
  });

  it('não deve alterar o estado se callSkeletonTwo for chamado enquanto isProcessing for true', () => {
    component.isProcessing.set(true);
    component.showSkeletonTwo.set(false); // Forçamos um estado inconsistente para testar a trava

    component.callSkeletonTwo();

    // Se a trava funcionar, o showSkeletonTwo NÃO deve ter mudado para true
    expect(component.showSkeletonTwo()).toBeFalse();
  });

  it('deve renderizar a quantidade correta de app-static-mini-card no HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const miniCards = compiled.querySelectorAll('app-static-mini-card');

    expect(miniCards.length).toBe(7);
  });

});
