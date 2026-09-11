---
title: Customer Booking
description: A service in which the recipient chooses their own delivery window rather than being assigned one.
---

**Customer Booking** is a service in which the recipient picks their own delivery window, rather than being given a pre-scheduled slot. It sits alongside `next_day`, `same_day`, `flex`, and `scheduled` as one of the speed-and-scheduling services — distinct from the [delivery service level](/glossary/dsl/), which controls handling rather than timing.

Two consequences follow from the customer, not GoBolt, choosing the date:

- It is always rated as [heavy](/glossary/heavy-vs-parcel/), regardless of package weight.
- It has no estimated delivery date to quote. Rates for other services carry one; customer booking returns null until the recipient actually books.

The order sits without a delivery date until the customer chooses, which is why customer-booking orders are excluded from reporting statuses that assume a scheduled date.
