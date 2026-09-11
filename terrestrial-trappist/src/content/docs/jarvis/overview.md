---
title: Jarvis
description: An overview of GoBolt's eCommerce and ERP integration service.
---

> Jarvis is not managed by Team Minipod. It is owned and managed by Team Airpod.

- **Repository:** [SecondCloset/jarvis](https://github.com/SecondCloset/jarvis)
- **Production API docs:** [jarvis.gobolt.com/apipie](https://jarvis.gobolt.com/apipie)
- **Preprod API docs:** [jarvis-preprod.gobolt.com/apipie](https://jarvis-preprod.gobolt.com/apipie)
- **Staging API docs:** [jarvis.stg5.gobolt.com/apipie](https://jarvis.stg5.gobolt.com/apipie)
- **Type of application:** Backend service
- **Primary language:** Ruby
- **Deployed on:** Kubernetes + ArgoCD, backed by a PostgreSQL database

---

## What is Jarvis?

Jarvis is GoBolt's eCommerce, shopping cart, and ERP integration service. It connects external vendor platforms and customer systems with GoBolt's internal operational systems.

The service processes incoming orders by polling external platforms and receiving webhooks. It translates those inbound events into GoBolt's internal workflows and sends order, inventory, shipment, label, and status updates to downstream systems, primarily Core.

Jarvis also receives updates from internal GoBolt systems and publishes translated events back to external third-party platforms. It is a core integration layer for keeping merchant, carrier, warehouse, and transportation systems aligned.

---

## Jarvis and Hubble (BoxKnight)

Jarvis was introduced specifically to integrate GoBolt's systems following the acquisition of BoxKnight (later renamed [Hubble](/hubble/overview/)). When an order is created in Hubble, Hubble calls Jarvis, which pushes that order and creates the corresponding record on the [Core](/backend-services/core/) (monolith) or [Sierra](/frontend-services/sierra/) side.

Earlier system flows had a limitation here: Jarvis routed all incoming appointments under a single, generic BoxKnight organization on the Core side, rather than under each individual merchant's own organization. That obscured per-merchant tracking, and is part of what led to the duplicate-organization issues described in [Fulfilled by Bolt](/architecture/fulfilled-by-bolt/).

In both the [Fulfilled by Merchant](/architecture/fulfilled-by-merchant/) flow and the unified parcel/heavy routing workflows, Jarvis is the bridge: it takes order data from Hubble and establishes the corresponding tracking, shipments, and appointments in Core.

---

## What does Jarvis handle?

- Inbound order and inventory events from external platforms
- Outbound shipment, ASN, label, and order status updates
- Webhook ingestion and event processing
- Sidekiq background jobs for polling and integration workflows
- Communication between external commerce systems and Core
- Integration monitoring, validation, and reprocessing workflows

## Active integration areas

Jarvis supports integrations across platforms such as Shopify, IKEA CAD, IKEA Trunkline, BoxKnight, Best Buy, Skubana, Narvar, Netsuite, ChannelAdvisor, OrderDesk, ShipStation, Orderful, Warehouse, Cyclr, and other merchant or carrier systems.

## Operational notes

Jarvis relies heavily on Sidekiq workers, event records, webhook requests, and integration-specific workflows. When troubleshooting, engineers commonly inspect Sidekiq queues, failed events, integration-specific Slack channels, API docs, and downstream Core behavior.
