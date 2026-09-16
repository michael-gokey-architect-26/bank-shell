import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

/**
 * The application configuration is our composition root.
 *
 * Architecturally, this is where the shell wires together infrastructure that
 * truly belongs to the entire application: routing, global error handling,
 * HTTP/interceptors, authentication adapters, telemetry, and later federation.
 *
 * Keeping these providers here makes those dependencies easy to find and keeps
 * domain features from quietly becoming application-wide infrastructure.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
