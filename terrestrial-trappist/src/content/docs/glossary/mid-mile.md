---
title: Mid Mile
description: The movement of goods between facilities before they enter last-mile delivery.
---

**Mid-mile delivery** is the movement of goods between warehouses, distribution centres, and other facilities, before anything enters [last-mile delivery](/glossary/last-mile/). It is the leg that gets a package to the right city.

Core models the timing of this leg as a transit-time matrix keyed on origin [service area](/glossary/service-area/), destination service area, and **transport mode** — `air_skip` for [parcel](/glossary/heavy-vs-parcel/) and `freight` for heavy. The two modes are maintained as separate grids, because the same lane takes a different number of days depending on how the goods travel, and rating resolves transit days against whichever mode the rate's category maps to.

`midmile` is also one of the service kinds a [postal area set](/glossary/postal-area-sets/) can have, and one of the values a route's [dominant delivery type](/glossary/dominant-delivery-type/) can take.
