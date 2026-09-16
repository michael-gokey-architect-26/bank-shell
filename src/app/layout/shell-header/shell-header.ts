import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationItem {
  readonly label: string;
  readonly route: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-shell-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './shell-header.html',
  styleUrl: './shell-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHeader {
  /**
   * Navigation is data rather than repeated markup. Later, authorization can
   * transform this model without mixing permission rules into the HTML.
   *
   * Important: hiding a link is a UX concern, not a security boundary. APIs
   * must still authorize every protected operation server-side.
   */
  protected readonly navigation: readonly NavigationItem[] = [
    { label: 'Overview', route: '/', exact: true },
    { label: 'Accounts', route: '/accounts' },
    { label: 'Payments', route: '/payments' },
    { label: 'Transfers', route: '/transfers' },
  ];
}
