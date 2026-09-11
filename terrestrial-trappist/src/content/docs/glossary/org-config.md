---
title: Org Config
description: Per-organization key/value settings in Core that link organizations and switch behavior.
---

**Org Config (Organization Configuration)** is Core's per-organization settings mechanism: a key/value table where the key comes from a fixed enum, so settings are explicit and discoverable rather than free-form. Changes are audited.

It carries three broad kinds of setting:

- **Links to other systems** — `hubble_organization_id` (the GoBolt/BoxKnight identifier used for the FBB Transport integration) and `fbb_fulfillment_org_id` (the original Fulfillment org that a Transport org was cloned from, so finance can trace billing back). These two are what tie a [twin org](/glossary/twin-org/) to its original.
- **Behavior switches** — auto-fulfilling orders, disabling partial fulfillment, ignoring empty SKUs, suppressing low-stock notifications.
- **Per-merchant credentials and defaults** — carrier API credentials, the default warehouse to fulfil from, fallback contact details.

Org Config is the usual place a merchant-specific quirk ends up, which makes it the first place to look when one organization behaves differently from the rest.
