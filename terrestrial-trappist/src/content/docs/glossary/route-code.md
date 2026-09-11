---
title: Route Code
description: The identifier BeeSort resolves to decide which physical chute a package belongs in.
---

A **Route Code** is the value [BeeSort](/glossary/beesorter/) looks up when a package's barcode is scanned, to decide which [chute](/glossary/chute/) it belongs in. Core pushes it paired with the package's tracking number; the operator maps each code to a physical chute on the machine.

What the code actually contains depends on which sort is running, because the two sorts are answering different questions:

| Sort | Route code | The question being answered |
| --- | --- | --- |
| **Origin**, local package | [Zone code (FSA)](/glossary/fsa/) | Which part of this city? |
| **Origin**, [air skip](/glossary/air-skip/) | [Service area](/glossary/service-area/) name | Which city is this leaving for? |
| **Destination** | Route number | Which van tomorrow morning? |

The route code is a sortation concept only. It is not stored on the package — it is derived at push time from the appointment, its time box, and its route.
