import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellHeader } from './layout/shell-header/shell-header';

/**
 * Root component for the host application.
 *
 * Notice what is deliberately absent: accounts, payments, transfers, and other
 * banking business logic. The root owns composition and layout only. That is an
 * important guardrail against allowing a micro-frontend shell to become another
 * monolith over time.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShellHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
