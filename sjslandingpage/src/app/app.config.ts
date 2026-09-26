import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter,withInMemoryScrolling  } from '@angular/router';
import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top'
    })),
    provideOptimus({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.never-dark-mode-on-purpose'
        }
      }
    })
  ]
};
