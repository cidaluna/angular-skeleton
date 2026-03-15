import { Pipe, PipeTransform } from '@angular/core';
import { IHostOffer } from './../../interfaces/host';

@Pipe({
  name: 'isFirstVisible',
  standalone: true
})
export class IsFirstVisiblePipe implements PipeTransform {
  /**
   * @param currentOffer - A oferta que o @for está iterando
   * @param allOffers - A lista completa (listOffers$)
   */
  transform(currentOffer: IHostOffer, allOffers: IHostOffer[] | null): boolean {
    if (!allOffers || !currentOffer.showAlert) return false;

    // if (!allOffers) return false;
    // // LOG DE DEBUG: Veja o estado real de cada oferta quando o Angular re-checar a lista
    // console.log(`[Pipe Check] Oferta ID: ${currentOffer.id} | showAlert: ${currentOffer.showAlert}`);
    // if (!currentOffer.showAlert) return false;

    // Encontra o primeiro que tem showAlert true na lista toda
    const firstVisible = allOffers.find(o => o.showAlert === true);

    // Retorna true APENAS se a oferta que o @for está processando agora for esse primeiro visível
    // Obs. Caso nao tenha um campo que seja id único, usar campos compostos que identifiquem unicamente a oferta
    return firstVisible ? firstVisible.id === currentOffer.id : false;
  }
}
