---
title: Zone
description: A named group of postal areas used as the destination side of a rating rule.
---

A **Zone** is a named group of postal areas, used to price shipments without maintaining a rate for every individual postal code.

In Core's `Transport::` rate cards, a zone is specifically the **destination** side of a shipping rule. The asymmetry is intentional: the origin side of a rule is [FSA](/glossary/fsa/)-granular, because ops whitelist specific pickup postal areas, while the destination side is zone-only, because pricing is set by area rather than by street. Zones are also filtered by category, so a lane can be priced differently for [parcel](/glossary/heavy-vs-parcel/) and heavy.

Zone and rate data has historically lived in Hubble's Rate Service, and is being moved into Core's `Transport::` domain so there is one source of truth. See [Postal Area Sets](/glossary/postal-area-sets/) for the closely related grouping that governs availability rather than price.
