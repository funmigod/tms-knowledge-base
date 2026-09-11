---
title: Number Masking
description: A Twilio-backed proxy that lets drivers and customers talk without exchanging real numbers.
---

**Number Masking**, or a **proxy number**, lets a driver call or text a customer without either side seeing the other's real number. Both parties talk through a temporary number provided by Twilio Proxy, which bridges the two legs of the conversation.

The two sides may see *different* proxy numbers for the same conversation — the number is per-participant, not per-session.

**Session lifetime** is 60 minutes from creation, or 15 minutes after the [appointment](/glossary/appointment/) is completed or failed, whichever comes first. Sessions are closed promptly so they stop tying up a proxy number, which is a finite pool.

Twilio is the source of truth for session state, not Core. A session that expired on Twilio's own TTL can still look open locally, so Core checks with Twilio before reusing a session and creates a fresh one if the old one is gone.
