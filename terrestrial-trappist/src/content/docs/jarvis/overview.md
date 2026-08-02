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

---

## What is Jarvis?

Jarvis is GoBolt's eCommerce, shopping cart, and ERP integration service. It connects external vendor platforms and customer systems with GoBolt's internal operational systems.

The service processes incoming orders by polling external platforms and receiving webhooks. It translates those inbound events into GoBolt's internal workflows and sends order, inventory, shipment, label, and status updates to downstream systems, primarily Core.

Jarvis also receives updates from internal GoBolt systems and publishes translated events back to external third-party platforms. It is a core integration layer for keeping merchant, carrier, warehouse, and transportation systems aligned.

---

## What does Jarvis handle?

- Inbound order and inventory events from external platforms
- Outbound shipment, ASN, label, and order status updates
- Webhook ingestion and event processing
- Sidekiq background jobs for polling and integration workflows
- Communication between external commerce systems and Core
- Integration monitoring, validation, and reprocessing workflows

## Active integration areas

Jarvis supports integrations across platforms such as Shopify, IKEA CAD, IKEA Trunkline, Boxknight, Best Buy, Skubana, Narvar, Netsuite, ChannelAdvisor, OrderDesk, ShipStation, Orderful, Warehouse, Cyclr, and other merchant or carrier systems.

## Operational notes

Jarvis relies heavily on Sidekiq workers, event records, webhook requests, and integration-specific workflows. When troubleshooting, engineers commonly inspect Sidekiq queues, failed events, integration-specific Slack channels, API docs, and downstream Core behavior.
