import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { TokenHttpInterceptor } from './interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [    {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenHttpInterceptor,
          multi: true,
        },
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideHttpClient()]
};
