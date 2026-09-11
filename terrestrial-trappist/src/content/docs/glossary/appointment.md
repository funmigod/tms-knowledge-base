---
title: Appointment
description: A scheduled delivery or pickup stop — GoBolt’s original unit of last-mile scheduling.
---

An **Appointment** is a scheduled delivery or pickup stop. It is GoBolt's original, SecondCloset-era unit of last-mile scheduling, and still the record ops work with in BVR and drivers work through in Maverick.

An appointment carries a **job type** describing what the stop is for:

| Job type | What happens |
| --- | --- |
| `delivery` | A normal delivery to a recipient |
| `cross_dock_delivery` | A delivery out of a crossdock flow |
| [`inventory_pick_up`](/glossary/ipu/) | Collecting inventory from a merchant |
| `reverse_logistics` | Collecting goods coming back |
| `return_to_sender` | Returning goods to the merchant |
| `custom` | Anything else, refined by a job subtype — [`return_to_warehouse`](/glossary/rtw/) being the main one |

Alongside the job type it carries a [delivery service level](/glossary/dsl/), an [air skip](/glossary/air-skip/) flag, and a link to the [time box](/glossary/timebox/) that fixes its date, window, and [service area](/glossary/service-area/).

Appointments are scheduled; the parcel flow is scan-based and faster. That difference is the root of the [heavy versus parcel](/glossary/heavy-vs-parcel/) split, and of the friction the [twin org](/glossary/twin-org/) arrangement works around.
