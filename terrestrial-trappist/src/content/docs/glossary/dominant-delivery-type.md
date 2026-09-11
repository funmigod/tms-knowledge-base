---
title: Dominant Delivery Type
description: The majority delivery type across a route’s stops, used to filter routes into automated flows.
---

A **Dominant Delivery Type** is a route-level summary of what a route mostly consists of: `parcel`, `heavy`, or `midmile`. Core computes it by counting the delivery type of each appointment on the route and taking the majority. The same pass computes the route's dominant zone.

It exists because routes are mixed in practice but automation usually is not. Rather than inspecting every stop, a flow can filter on the route as a whole — [BeeSort](/glossary/beesorter/) destination sortation, for instance, collects only routes whose dominant delivery type is `parcel`.

Being a majority vote, it is a heuristic rather than a guarantee: a predominantly parcel route may still carry a heavy stop.
