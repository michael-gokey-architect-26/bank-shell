import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CapabilityCard {
  readonly name: string;
  readonly route: string;
  readonly description: string;
  readonly ownership: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  /**
   * These are architectural examples, not customer account data. Keeping the
   * first dashboard focused on capability ownership makes the intent of this
   * repository immediately understandable to another architect or interviewer.
   */
  protected readonly capabilities: readonly CapabilityCard[] = [
    {
      name: 'Accounts',
      route: '/accounts',
      description: 'Balances, transactions, statements, and account servicing.',
      ownership: 'Accounts team',
    },
    {
      name: 'Payments',
      route: '/payments',
      description: 'Payment initiation, approval workflows, status, and history.',
      ownership: 'Payments team',
    },
    {
      name: 'Transfers',
      route: '/transfers',
      description: 'Internal and external funds-transfer experiences.',
      ownership: 'Transfers team',
    },
  ];
}
