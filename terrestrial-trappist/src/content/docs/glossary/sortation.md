---
title: Sortation
description: Organizing a mixed group of packages so each one reaches its correct onward destination.
---

**Sortation** is the process of taking a mixed group of packages and routing each one to its correct onward destination — a delivery zone, a departing city, or a specific van.

Done manually, it is the source of several compounding problems, which is what motivated the [BeeSort](/glossary/beesorter/) integration:

- **Mis-containerization** — packages placed on the wrong route or pallet.
- **Lost packages** — hard to find again once mis-sorted.
- **Downstream failures** — the [RTW](/glossary/rtw/) flow breaks when drivers are told to return packages that were never actually loaded for them.
- **Labour cost** — manual sorting needs dedicated warehouse staff.

GoBolt sorts the same package twice, for different reasons. At the [origin](/glossary/origin-scan/) it is sorted by market or zone, to get it onto the right line haul. At the destination it is sorted by route, to get it onto the right van. Each sort uses its own [route code](/glossary/route-code/).
