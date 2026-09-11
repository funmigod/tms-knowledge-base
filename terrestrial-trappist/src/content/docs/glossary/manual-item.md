---
title: Manual Item (MI)
description: A heavy item created during physical receiving and tracked individually in the warehouse system.
---

A **Manual Item (MI)** is a heavy item created during physical receiving and tracked individually, rather than as part of a counted, SKU-based inventory line.

Manual items live in November and Providence — the warehouse systems — rather than in Core. That split matters when tracing a heavy item end to end: Core knows about the [appointment](/glossary/appointment/) that will move it, but the item record itself sits on the warehouse side.

The name reflects its origin: the item is entered by hand at receiving, because it arrived without the advance data an [ASN](/glossary/asn/) line would have supplied.
