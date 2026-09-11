---
title: Crossdock / IPU
description: A receiving flow that sorts cartons for onward transport without putting them into storage.
---

**Crossdock / IPU (Inventory Pick Up)** is a flow in which cartons are collected or received and sorted straight onto their onward transport, without ever being put into long-term storage. `inventory_pick_up` is a job type on the [appointment](/glossary/appointment/), so a crossdock collection is a stop on a driver's route like any other.

Because the goods move through in one motion, there is no put-away or pick to create a record — which made IPU the weakest link in GoBolt's [chain of custody](/glossary/chain-of-custody/). Drivers checked cartons off as collected without scanning them, leaving merchants with orders showing partial pickups they could not close.

IKEA's request for package-level [CDU](/glossary/cdu/) scanning during crossdock operations is what drove Maverick to adopt real package data for heavy appointments.
