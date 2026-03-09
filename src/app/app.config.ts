import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgxsLoggerPluginModule, withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { provideStore } from '@ngxs/store';
import { HostOfferState } from './store/host-offer.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // Essencial para o Service funcionar
    provideStore(
      [HostOfferState],
      withNgxsLoggerPlugin() // Isso ativa logs automáticos incríveis no console!
    )
  ]
};
