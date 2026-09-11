---
title: Postal Area Sets
description: Groups of postal areas that determine where a service is offered and which time boxes are available.
---

A **Postal Area Set** is a named group of postal areas belonging to one [Service Area](/glossary/service-area/). Where a [Zone](/glossary/zone/) answers "what does this cost", a postal area set answers "do we serve this at all, and when".

Each set has a **service kind** — `heavy`, `parcel`, or `midmile` — so the same geography can be offered for one kind of service and not another. Sets are joined to organizations through availability conditions, which is how service can be enabled per merchant rather than globally, and they determine which [time boxes](/glossary/timebox/) an address can book.

A set's service kind and service area are read-only once created. Postal areas must not overlap within a kind, and changing either field after the fact would silently break that guarantee.

On the rating side, an origin FSA that belongs to no postal area set is treated as a custom origin, and a destination FSA in no set available to the organization makes the address unserviceable.
