---
title: Hubble
description: Why GoBolt acquired Hubble, and how it overlaps with Core today.
---

### Why Hubble Exists

Hubble was acquired — originally operating as BoxKnight — mainly for its parcel rate-fetching layer. At the time, GoBolt's own systems were focused mostly on heavy/large-item delivery, and BoxKnight had a more mature parcel layer already built out. The acquisition also brought over some existing customers along with it.

---

### Overlapping Concepts Between Hubble and Core

| Concept | In Hubble | In Core | Status |
| --- | --- | --- | --- |
| FSA + Service Area | Yes | Yes | Duplicated — causing issues |
| Shipping Lane | Yes | Only recently | Brought over to Core last cycle; Core didn't have this before |
| Merchant | Yes | Yes (as Organization) | Same concept, different name |
| Packages | Yes | Yes | Pretty much the same on both sides |
| Label | Yes | Yes | Duplicated — labels are still generated on Hubble's side for now |
| Rate | Yes | Partially | Core's version isn't used effectively yet (some hardcoded rates); unclear whether last cycle's migration covered this — needs to be confirmed |

:::caution[Duplicated data across FSA/Service Area and Label]
Both FSA + Service Area and Label exist in both Hubble and Core, which is actively causing issues rather than just being redundant.
:::

:::note[Rate migration status unconfirmed]
It's not clear whether the last migration cycle moved rate data over to Core — this needs to be looked up rather than assumed.
:::

---

### Where This Is Heading

Hubble is currently also used as the merchant-facing layer, but it doesn't offer functionality that Core lacks. The direction is toward deprecating Hubble over time, since it duplicates data that Core already has — the team has been gradually migrating that data over to Core, a direction Heindrik also supports.
