---
title: Surcharge
description: An additional fee applied on top of a base shipping or freight rate.
---

A **surcharge** is an additional fee applied on top of a base shipping rate — the mechanism carriers use to cover variable, unexpected, or specialized costs that fall outside standard point-to-point transportation.

In GoBolt the term is in transition. Hubble's rate model carries a `surcharge` field directly on a merchant's shipping rule, applied per lane. Core's v2 rate cards renamed that field to `price`, because it had come to mean "the rule's base amount" rather than a genuine add-on.

A proper **accessorial catalog** — named, reusable surcharges such as liftgate or residential fees, priced per rule — is deliberately out of scope for the current rate-card work and scheduled as a separate piece of work. Until it lands, a lane's extra costs are folded into its base pricing rather than itemized.
