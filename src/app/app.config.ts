import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { DialogService as DynamicDialogService } from 'primeng/dynamicdialog';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimations(), ConfirmationService, DynamicDialogService],
};
