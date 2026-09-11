---
title: Zone Code (FSA)
description: A postal-code-level geographic code used for local sortation and rating.
---

A **Zone Code**, or **FSA (Forward Sortation Area)**, is a postal-code-level geographic code: the first three characters of a Canadian postal code, or a five-digit US ZIP. Core derives it from an address's postal code through Blue (`Blue::Zones::ByPostalCode`) and stores it on packages and appointments as `zone_code`.

It is deliberately finer-grained than a [Service Area](/glossary/service-area/), and that granularity decides where it is and is not useful:

- **Useful** for local sortation, where the question is which part of the city a package is going to, and for the origin side of a shipping rule, which is FSA-granular so specific pickup postal areas can be whitelisted.
- **Too granular** for sorting by market. [Air skip](/glossary/air-skip/) packages are sorted by destination service area name instead, because a dozen chutes cannot represent hundreds of FSAs.

On the destination side of rating, FSAs are grouped into [Zones](/glossary/zone/) and [Postal Area Sets](/glossary/postal-area-sets/) rather than being priced individually.
