---
title: Time Box / Time Window
description: The dated, capacity-bounded scheduling window an appointment is booked into.
---

A **Time Box**, or **Time Window**, is the scheduling window an [appointment](/glossary/appointment/) is booked into. It is a real record rather than a pair of timestamps on the appointment: a time box belongs to a [Service Area](/glossary/service-area/), has a base date, a start and end, its own timezone, and a capacity — `capacity_count` against `capacity_maximum` — which is what stops a market being oversold.

Heavy deliveries use a fixed four-window model:

- 10 a.m.–1 p.m.
- 1–4 p.m.
- 4–7 p.m.
- 7–10 p.m.

The modern Transport API assumes a single 9 a.m.–9 p.m. window. That mismatch is the reason heavy deliveries could not simply be moved onto the newer scheduling model, and is part of what the [twin org](/glossary/twin-org/) arrangement works around.

Because the time box carries the service area, it is also how [BeeSort](/glossary/beesorter/) origin sortation resolves a package's market for its [route code](/glossary/route-code/).
