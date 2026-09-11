---
title: CDU
description: IKEA's term for an individual carton or package — the unit that carries a barcode and gets scanned.
---

A **CDU** is IKEA's term for an individual carton or package: the physical unit that carries a barcode and can be scanned. GoBolt adopted the word when building package-level scanning for IKEA, so "CDU-level scanning" simply means scanning each carton rather than checking off the order as a whole.

The distinction matters because IKEA orders are [heavy](/glossary/heavy-vs-parcel/) appointments, and heavy appointments historically had no package-level data at all — only item-level data. Drivers "checked" packages as picked up without scanning anything, which left IKEA with open orders showing partial pickups they could not reconcile or close.

Maverick's ADR-0001 resolved this by giving every appointment type — heavy and parcel alike — the same package data structure with real tracking numbers, rather than branching on whether an order was IKEA's. That unified structure is what lets a driver scan a CDU during [Crossdock / IPU](/glossary/ipu/) and gives IKEA the [chain of custody](/glossary/chain-of-custody/) visibility it asked for.
