---
title: Heavy vs. Parcel
description: The two delivery-type categories that decide which operational and rating flow an order follows.
---

**Heavy** and **Parcel** are the two delivery-type categories that decide which operational flow an order follows, how it is priced, and how it moves between cities.

- **Heavy** or hard-to-handle items use scheduled [appointments](/glossary/appointment/) with a fixed [time box](/glossary/timebox/), and travel between markets as `freight`.
- **Parcel** items use the faster, scan-based flow, and travel as [air skip](/glossary/air-skip/).

The classification is derived by GoBolt, never set by the merchant. Core mirrors order-service's threshold of **55 lb**, and the derivation is service-aware:

| Service | Classified as |
| --- | --- |
| `scheduled`, [`customer_booking`](/glossary/customer-booking/) | Always heavy |
| `next_day` | Heavy if any package is 55 lb or more, else parcel |
| `same_day`, `flex` | Always parcel |

Because a lane can have both a parcel and a heavy rule, a single rate request may legitimately return both — each priced from its own rule and given its own transit days.

The split also runs through the rest of the system: [postal area sets](/glossary/postal-area-sets/) have a heavy/parcel/midmile service kind, routes carry a [dominant delivery type](/glossary/dominant-delivery-type/), and heavy appointments only recently gained the package-level data that parcel always had (see [CDU](/glossary/cdu/)).
