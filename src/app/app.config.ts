import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenHttpInterceptor } from './interceptors/token.interceptor';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [        
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),  
    {
        provide:HTTP_INTERCEPTORS,
        useClass:TokenHttpInterceptor,
        multi:true
    }
      ],
};
