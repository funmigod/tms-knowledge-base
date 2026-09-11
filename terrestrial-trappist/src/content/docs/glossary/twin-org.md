---
title: Twin Org
description: A cloned Transport organization linked to a merchant’s real Fulfillment organization.
---

A **Twin Org** is a second, cloned Transport organization created alongside a heavy [FBB](/glossary/fbb/) merchant's real Fulfillment organization. The merchant's actual business — orders, inventory, products, warehouse activity — stays in the original; the twin exists purely so heavy deliveries can be scheduled and dispatched through the modern Transport API.

The two are linked only by pointers in [Org Config](/glossary/org-config/): `fbb_fulfillment_org_id` and `hubble_organization_id`. There is no deeper structural connection.

**Why it exists.** Per ADR-0002, the modern Transport API — automated routing, package dimensioning, CSV upload — was built for Transport-type organizations, and Fulfillment and Transport orgs historically had no formal relationship at all. Migrating each merchant's real data into a proper Transport org was the correct fix, but it is a genuine data migration with real risk to merchants already running fine. Given a six-week timeline and a hard constraint of not breaking existing single-org FBB heavy functionality, the team chose not to move the data: create a lightweight linked twin instead, coordinate the two through tracking numbers and org config, and roll it out per organization behind a feature flag.

**What it costs.** The ADR lists the downside plainly — duplicate organization and shipment data. One physical shipment becomes two records: an [ECS](/glossary/ecs/) shell in the Fulfillment org, and the real shipment-with-appointment in the twin, which is the only one ops see in TMS.

It was accepted as a deliberate trade, not an end state. The broader direction is still to collapse it properly. See [Fulfilled by Bolt](/architecture/fulfilled-by-bolt/) for the full flow, and [GBP](/glossary/gbp/) for the naming collision that surrounds it.
