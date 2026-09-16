# Bank Shell

An enterprise banking UI architecture reference application built around an Angular application shell and independently owned banking capabilities.

## Purpose

`bank-shell` is the host application for a portfolio-grade banking platform. The project demonstrates the architectural concerns of a real enterprise front end: application composition, navigation, security boundaries, accessibility, shared UI standards, testing, observability, and independently deployable business capabilities.

The shell should stay intentionally thin. Business logic belongs in domain applications rather than accumulating in the host.

## Architecture direction

The shell owns cross-cutting application concerns:

- application bootstrap and top-level routing
- global page layout and navigation
- authentication/session boundary
- authorization-aware navigation
- design-system integration
- accessibility standards
- shared error handling and user feedback
- remote application composition
- observability hooks

Business capabilities can evolve as separate applications, for example:

- `bank-accounts`
- `bank-payments`
- `bank-transfers`
- `bank-orders`

This separation allows teams to own and deploy business capabilities without turning the shell into a monolith.

## Initial technical direction

- Angular with standalone APIs
- TypeScript strict mode
- SCSS
- Angular Router
- signals where local/reactive state benefits from them
- lazy-loaded feature boundaries
- accessible semantic HTML and WCAG-oriented UI patterns
- unit tests around behavior and architectural boundaries
- CI validation through GitHub Actions

Micro-frontend composition will be introduced deliberately after the host foundation is stable rather than coupling the first commit to a federation implementation.

## Target source structure

```text
src/app/
├── core/       # singleton infrastructure and application-wide services
├── layout/     # shell chrome: header, navigation, page frame
├── shared/     # reusable presentation building blocks
└── features/   # shell-owned routes only
```

## Engineering principles

1. **Keep the shell thin.** Domain behavior belongs to domain applications.
2. **Prefer explicit boundaries.** Ownership should be visible in both code and routing.
3. **Accessibility is architecture.** It is part of component and navigation design, not a cleanup task.
4. **Secure at the correct boundary.** UI authorization improves UX but never replaces server-side authorization.
5. **Test behavior, not implementation trivia.** Tests should protect contracts and user-visible behavior.
6. **Optimize for change.** A good architecture makes the next business capability easier to add without destabilizing existing ones.

## Development workflow

Changes are developed on focused branches and merged through pull requests.

```bash
git checkout main
git pull
git checkout -b feature/<work-item>
```

After a pull request is merged:

```bash
git checkout main
git pull
```

## Status

Foundation work is in progress. The first implementation milestone establishes the Angular host, application layout, routing, architectural boundaries, tests, and CI before adding remote banking applications.

## License

MIT
