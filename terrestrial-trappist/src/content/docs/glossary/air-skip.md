---
title: Air Skip
description: A package leaving its origin market by air, and the parcel transport mode of the same name.
---

An **air skip** is a package whose destination is outside the [service area](/glossary/service-area/) of the warehouse holding it. It cannot be sorted for local delivery, so it flies onward to the destination market first. `air_skip` is a flag on the appointment, surfaced to BVR and Maverick so ops and drivers can see that a stop is not a local one.

The term does double duty in Core:

- **On a package**, it means "this is leaving town" — which is why [BeeSort](/glossary/beesorter/) origin sortation uses the destination service area name as the [route code](/glossary/route-code/) for air-skip packages, instead of the local zone code it uses for everything else. The package is being sorted by market, not by neighbourhood.
- **As a transport mode**, `air_skip` is one of two entries in Core's mid-mile transit-time matrix, paired with `freight`. The matrix is keyed on origin service area, destination service area, and mode; [parcel](/glossary/heavy-vs-parcel/) rates resolve their transit days against `air_skip` and heavy rates against `freight`.

Scheduling adds a buffer for air skips, since the package has to reach the destination market before a delivery date can be honoured.
