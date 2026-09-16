import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-capability-placeholder',
  imports: [RouterLink],
  template: `
    <section class="placeholder">
      <p class="eyebrow">Domain boundary</p>
      <h1>{{ capabilityName() }}</h1>
      <p>{{ description() }}</p>

      <div class="boundary-note">
        <strong>Why this page exists</strong>
        <p>
          During the shell milestone this route is local. Later it becomes a clean
          composition seam for the independently owned {{ capabilityName() }} UI.
        </p>
      </div>

      <a routerLink="/">← Return to shell overview</a>
    </section>
  `,
  styles: `
    .placeholder { max-width: 760px; padding-block: 3rem; }
    .eyebrow { margin: 0 0 .5rem; color: var(--accent); font-size: .75rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
    h1 { margin: 0 0 1rem; font-size: clamp(2rem, 5vw, 3.5rem); }
    p { color: var(--text-muted); line-height: 1.7; }
    .boundary-note { margin-block: 2rem; padding: 1.5rem; border-left: 4px solid var(--accent); background: var(--surface); }
    .boundary-note p { margin-bottom: 0; }
    a { color: var(--primary); font-weight: 700; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapabilityPlaceholder {
  /**
   * Route data is bound to component inputs by withComponentInputBinding().
   * This keeps the component independent of ActivatedRoute and makes its public
   * contract explicit and easy to test.
   */
  readonly capabilityName = input.required<string>();
  readonly description = input.required<string>();
}
