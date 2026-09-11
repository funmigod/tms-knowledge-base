---
title: Delivery Service Level (DSL)
description: The handling level of a delivery — how far into the building the driver takes it.
---

A **Delivery Service Level (DSL)** is the handling level of a delivery: how much the driver actually does on arrival. Values include `standard` (Threshold in BVR), `to_the_door`, `white_glove`, and `room_of_choice`, each with a one-person variant.

Many values still carry a `second_closet_` prefix — `second_closet_white_glove` and so on — retained from the company's name before GoBolt. Newer `Transport::` code uses the clean names without the prefix.

DSL is easy to confuse with **service**, and the two are orthogonal:

| | What it controls | Examples |
| --- | --- | --- |
| **Service** | Speed and scheduling | `next_day`, `same_day`, `flex`, `scheduled`, [`customer_booking`](/glossary/customer-booking/) |
| **Delivery service level** | Handling on arrival | `standard`, `to_the_door`, `white_glove`, `room_of_choice` |

In Core's rate cards these are priced independently and both always apply. When no handling level is requested, rating defaults to `to_the_door`.
