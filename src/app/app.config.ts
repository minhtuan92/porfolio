import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { LayoutService, ThemeService } from './core/services';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AngularSvgIconModule.forRoot()),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimations(),
    ThemeService,
    LayoutService,
    MessageService
  ]
};
