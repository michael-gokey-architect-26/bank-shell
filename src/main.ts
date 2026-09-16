import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Angular's standalone bootstrap keeps the composition root small and explicit.
 * Application-wide providers belong in app.config.ts rather than being scattered
 * through feature code.
 */
bootstrapApplication(App, appConfig).catch((error: unknown) => {
  console.error('Bank Shell failed to start.', error);
});
