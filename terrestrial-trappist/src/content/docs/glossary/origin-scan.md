---
title: Origin Scan
description: The first scan of a package at the origin facility, recorded as the label_scanned transit step.
---

An **origin scan** is the first time a package is physically scanned at the facility where it enters GoBolt's network. Core records it as a `label_scanned` [transit step](/glossary/chain-of-custody/) against the shipping label, which customers see on their tracking page as *"Package received in ⟨city⟩."*

The origin scan is a busy moment — several things hang off it:

- **Sortation.** The package's tracking number is pushed to [BeeSort](/glossary/beesorter/) immediately, paired with a [route code](/glossary/route-code/): its zone code for a local package, or the destination [service area](/glossary/service-area/) name for an [air skip](/glossary/air-skip/).
- **Scheduling.** For orders booked without a delivery date, Core defers scheduling to the origin scan and picks the date once the package is physically in hand.
- **SLA.** The scan is what starts the label's SLA clock (`sla_started_at`), against which on-track and overdue status are later calculated.

The counterpart at the other end of the line haul is the destination scan, recorded as `label_received_at_destination` — *"Package received in local facility."*
