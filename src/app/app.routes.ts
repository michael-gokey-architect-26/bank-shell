import { Routes } from '@angular/router';

/**
 * Top-level routes are intentionally boring.
 *
 * A shell should understand *where* a capability lives without knowing the
 * capability's internal implementation. Lazy boundaries also give us a natural
 * seam for replacing local placeholders with independently deployed remotes.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./features/capability-placeholder/capability-placeholder').then(
        (m) => m.CapabilityPlaceholder,
      ),
    data: {
      capabilityName: 'Accounts',
      description: 'Balances, account details, statements, and transaction history.',
    },
  },
  {
    path: 'payments',
    loadComponent: () =>
      import('./features/capability-placeholder/capability-placeholder').then(
        (m) => m.CapabilityPlaceholder,
      ),
    data: {
      capabilityName: 'Payments',
      description: 'Payment initiation, approvals, status, and payment history.',
    },
  },
  {
    path: 'transfers',
    loadComponent: () =>
      import('./features/capability-placeholder/capability-placeholder').then(
        (m) => m.CapabilityPlaceholder,
      ),
    data: {
      capabilityName: 'Transfers',
      description: 'Internal and external movement of funds.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
