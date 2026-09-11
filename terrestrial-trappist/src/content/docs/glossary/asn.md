---
title: ASN
description: A merchant’s advance declaration that inventory is inbound to a GoBolt warehouse.
---

An **ASN (Advance Shipping Notice)** is a merchant's advance declaration that inventory is on its way to a GoBolt warehouse. It is created before anything physically arrives, so the warehouse can plan dock time and receiving labour.

The record carries both sides of the expectation and reconciles them:

- **Expected**: arrival date, pallet and box quantities, packing options, container size, PO and reference numbers, destination facility.
- **Actual**: arrival date, received pallet and box quantities, and `qty_over_received` / `qty_under_received` flags when the two do not match.

An ASN moves through a status lifecycle from `draft` to submitted to completed, and its type distinguishes a routine `replenishment` from other inbound reasons. The [bill of lading](/glossary/bill-of-lading/) that arrives with the truck is uploaded against it as images.

An ASN concerns goods coming **into** a warehouse. Goods leaving for a customer are an [appointment](/glossary/appointment/); goods sorted straight through without storage are a [crossdock / IPU](/glossary/ipu/).
