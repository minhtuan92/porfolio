import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { ThemeService } from './core/services'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AngularSvgIconModule.forRoot()),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    ThemeService
  ]
}
