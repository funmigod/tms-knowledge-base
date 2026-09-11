---
title: ECS
description: External Carrier Shipment — a shipment record for goods moving on someone else’s network.
---

An **ECS (External Carrier Shipment)** is the record Core keeps for a shipment travelling on a carrier other than GoBolt. It begins as a shell — created before a carrier or label exists — and is filled in as the shipment progresses.

Its status enum tracks that progression: `shipment_created` → `label_generated` → `awaiting_carrier` → `with_carrier`, plus cancellation and exception states. Alongside it the record holds the external platform (ShipEngine, for example), the carrier and service code, and the ship-from and ship-to addresses. A background reconciliation job re-syncs records still sitting in the early states.

An ECS can be cancelled only while it is still early — once a label is with the carrier, that option closes.

ECS also has a specific role in the [FBB heavy](/glossary/fbb/) flow: it is the shell record left in the Fulfillment organization while the real shipment, with its [appointment](/glossary/appointment/), lives in the [twin org](/glossary/twin-org/).
