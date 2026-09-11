## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture diagrams

Diagrams live in `src/components/diagrams/` as hand-coded SVG `.astro` components — not Mermaid. This was a deliberate choice: Mermaid's and `beautiful-mermaid`'s auto-layout produced crossing lines and poor spacing on anything past a trivial graph (see the abandoned, deleted `DuplicateOrgBeautifulMermaid.astro` in git history, and the D2 comparison referenced below). Hand-placed coordinates give full control over routing and let the diagrams match the site's exact theme and support clickable nodes.

**Adding or updating a diagram:**

1. Every diagram wraps `<DiagramFrame label="..." viewBox="..." ariaLabel="..." description="...">`. This shared component owns the toolbar, card chrome, arrow marker, shadow filter, and all base CSS (`.diagram`, `.node`, `.connectors`). Never duplicate that boilerplate into a diagram file — it lives in one place so a design-system change (accent color, card radius) only needs editing once.
2. Nodes: `<g class="node"><rect rx="14" /><text>...</text></g>`, wrapped in `<a href="..." class="node-link" aria-label="...">` **only** if the target node has a real page in this docs site. Never invent a link for a node with no page (e.g. `November`, `bfapi` in Sierra's diagram) — leave it as a plain `<g>`.
3. Connectors: hand-written `<path d="M ... H ... V ... Q ...">` elbow paths in a `<g class="connectors">`. Add `class="both"` for a bidirectional edge (adds the reverse arrowhead) and `class="soft"` for a Mermaid `-.->`-style dashed/contextual edge (needs a local `.connectors path.soft { stroke-dasharray: 5 5; opacity: 0.75; }` rule in that diagram's own `<style>`).
4. Labeling convention: if the diagram is a genuinely time-ordered flow (a handful of sequential steps, like `FBBFlowForParcel` or the Shipium sequence diagram), use numbered circular `.step-badges` at each connector's midpoint, no text labels. If it's a dependency/hub-and-spoke graph with no inherent order (most of them), use short `.edge-labels` text (3-5 words) at each midpoint instead — do not use both on the same diagram.
5. Layout: no auto-layout engine. For a hub-and-spoke graph, put the hub on the left and spokes in a column on the right; size the `viewBox` snugly to the content. Reuse the same visual language as the existing files (rx:14 cards, `var(--sl-color-*)` tokens only, never hardcoded hex except the one-off `#241a08`/`#1a1410` used for badge text and the shadow filter).
6. **Always verify visually before considering it done**: start the dev server, screenshot the page with headless Chrome (`--headless=new --screenshot=... --window-size=1400,1000 <url>`), and read the screenshot back. Check for overlapping lines/text, arrowheads landing correctly, and labels not colliding. Iterate on coordinates until it's clean — do not skip this step.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
