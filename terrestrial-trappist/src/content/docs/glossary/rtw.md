---
title: Return to Warehouse (RTW)
description: The flow that brings undelivered packages back to a facility at the end of a route.
---

**Return to Warehouse (RTW)** is what happens to packages a driver could not deliver. When parcel appointments on a route fail, Core automatically creates a single extra appointment sending the driver back to a facility to hand those packages over.

The RTW appointment is a real appointment with a deliberately generic shape: `job_type: custom` with `job_subtype: return_to_warehouse`, a business customer segment, standard [delivery service level](/glossary/dsl/), and a wide 09:00–21:00 window on the route's own date. Core picks the destination facility by proximity, using the location where the failed packages were last scanned in (`label_received_at_destination`).

Because it is a depot stop rather than a customer stop, Core excludes it from a route's `routed_appointments`, and BVR gives it its own details pane rather than rendering it like a delivery.

RTW is the flow most sensitive to bad [chain of custody](/glossary/chain-of-custody/) data. If sortation put a package on the wrong route, the driver is told to return a package they never received, and the RTW stop cannot be completed cleanly — one of the failure modes that motivated automating [sortation](/glossary/sortation/).
