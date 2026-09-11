---
title: Chain of Custody
description: The guarantee that every handoff of a package is scanned, recorded, and traceable.
---

**Chain of custody** is the guarantee that every handoff of a package — into a facility, onto a van, into a recipient's hands — is scanned and recorded, so the package's whereabouts can be reconstructed at any point.

Core keeps this as a series of **transit steps** against the shipping label, each one advancing the label's status: `label_created`, `label_scanned` at the [origin scan](/glossary/origin-scan/), `label_received_at_destination`, `label_out_for_delivery`, `label_delivered`, and the various return and exception states.

Gaps in the chain are not merely a reporting problem; they break downstream flows:

- Drivers who **check off** packages without scanning leave orders stuck in partial-pickup states that merchants cannot reconcile or close — the gap that motivated [CDU](/glossary/cdu/)-level scanning for [crossdock / IPU](/glossary/ipu/).
- Mis-sorted packages break [RTW](/glossary/rtw/), because a driver is asked to return something never actually loaded for them.

This is why unifying scanning and [sortation](/glossary/sortation/) is treated as one problem rather than two: each is only as trustworthy as the scan records the other produces.
