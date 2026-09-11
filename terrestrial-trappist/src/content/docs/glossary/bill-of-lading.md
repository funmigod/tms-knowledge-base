---
title: Bill of Lading (BOL)
description: The carrier document that accompanies a freight shipment and lists what is being moved.
---

A **Bill of Lading (BOL)** is the carrier document that travels with a freight shipment and records what is being moved, who is shipping it, and who is receiving it. It is the receipt and the contract of carriage in one.

BOLs appear at both ends of the warehouse in GoBolt:

- **Inbound.** When a merchant sends inventory to a GoBolt warehouse, the BOL that arrives with the truck is photographed and uploaded against the [ASN](/glossary/asn/) or the Warehouse Receiving Order. Core stores these as `bill_of_lading_images`, and Sierra exposes the upload on the ASN and WRO detail pages.
- **Outbound.** For freight shipments GoBolt does not carry itself, ops generate the BOL in Freightcom using the package summary from the shipment.

A BOL is a per-shipment document, so it is distinct from a [Proof of Delivery](/glossary/pod/), which is captured per stop at the point of handover.
