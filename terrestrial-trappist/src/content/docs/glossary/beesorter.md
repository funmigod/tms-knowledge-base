---
title: BeeSort
description: The automated parcel sorter GoBolt integrates with for high-throughput package sortation.
---

**BeeSort** is an automated parcel sorting machine. Packages are fed onto a conveyor, their barcodes are scanned, and the machine drops each one into the [chute](/glossary/chute/) assigned to its [route code](/glossary/route-code/) — at up to 15,000 packages per hour.

The integration is deliberately direct: Core talks to the BeeSort Cloud API itself rather than going through November, so the transport integration is not coupled to the fulfillment one already running on the shared machine.

The exchange is simple. Before sorting, Core pushes tracking-number-to-route-code mappings (`{ ShipmentNumber: "87FFPL112K", RouteCode: "YVR" }`), BeeSort Cloud syncs them down to the device, and an operator assigns each route code to a physical chute on the machine's own UI. During sorting the device resolves codes locally, so it keeps running regardless of network conditions.

Core drives it in two modes:

- **Origin sort** pushes each package in real time, immediately after its [origin scan](/glossary/origin-scan/).
- **Destination sort** works in waves. Ops select the zones for a wave in Providence, and Core maps the routes in those zones to chutes and pushes only the packages belonging to them.

Devices are configured per facility, each with its own chute count and reserved leftover chutes.
