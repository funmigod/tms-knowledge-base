---
title: Proof of Delivery (POD)
description: The signature and photographic evidence captured when a driver completes a delivery.
---

**Proof of Delivery (POD)** is the evidence a driver captures at the moment of handover: a recipient signature where one is required, and one or more verification photographs of the delivered package.

The data lives on the completion record in [Blue](/backend-services/blue/), which stores `verification_images` alongside flags for when those images are unusable (`are_verification_images_invalid` and the reasons why). Whether a signature is required at all is a property of the order (`signature_required`), driven by the merchant's configuration and the [delivery service level](/glossary/dsl/).

The same record is read by two different audiences:

- **Customers** see it in Galileo, on the tracking page for their delivery.
- **Operations** see it in BVR, on the appointment's delivery panel, where the verification images render as a carousel.

POD closes out a single stop. It is the last link in the [chain of custody](/glossary/chain-of-custody/) that began at the [origin scan](/glossary/origin-scan/).
