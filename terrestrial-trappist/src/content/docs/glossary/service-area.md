---
title: Service Area
description: A named geographic market, identified by airport code, that anchors routes, time boxes, and zones.
---

A **Service Area** is a named geographic market — effectively a city GoBolt operates in. Service areas are identified by airport code: `yyz`, `yvr`, `yow`, `yul`, `yyc`, `yeg`, `ywg`, `lax`, `nyc`, `hou`, `mia`, `atl`.

A service area is more than a label. It carries the market's address, timezone, list of facilities, and its delivery boundaries — a standard boundary, an extended boundary, and a separate parcel boundary, since parcel and heavy do not necessarily serve the same footprint. [Time boxes](/glossary/timebox/), [postal area sets](/glossary/postal-area-sets/), and hubs all hang off it.

It sits one level above the [zone code (FSA)](/glossary/fsa/): a service area is the city, an FSA is a neighbourhood within it. Which of the two is used depends on the question — [origin sortation](/glossary/origin-scan/) sorts [air skips](/glossary/air-skip/) by service area because they are leaving the city, and local packages by FSA because they are staying in it.
