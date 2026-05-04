---
layout: single
title: "Reading Notes: Designing ML Systems, Chapters 1–3"
date: 2026-05-04
categories: [reading, machine-learning]
tags: [ml-systems, chip-huyen, data-engineering, production]
author_profile: true
excerpt: "Working through Chip Huyen's take on what it actually takes to ship ML in production — and finding a lot of overlap with VFX pipeline thinking."
---

I've been working through [*Designing Machine Learning Systems*](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) by Chip Huyen. Coming from a VFX pipeline background, I expected a steep learning curve on the ML side — but the first three chapters are less about algorithms and more about *systems thinking*, which is very familiar territory.

---

## Chapter 1 — Overview of ML Systems

Huyen opens by drawing a sharp line between ML in research and ML in production. In research, you optimize for a single metric — usually accuracy on a benchmark. In production, you're juggling latency, throughput, fairness, interpretability, cost, and the fact that the world keeps changing under your model.

The framing that stuck with me: an ML system isn't just a model. It's the model *plus* the business logic, data pipelines, monitoring, serving infrastructure, and the feedback loops that keep it alive. The model is often the smallest part.

This resonated immediately. On the render farm, the "algorithm" (Deadline scheduling) is maybe 10% of the actual work. The other 90% is the plumbing — integrations, monitoring, failure handling, and the humans managing it all.

**Key question Huyen poses before adopting ML:** does your problem actually need it? ML makes sense when you need to personalize at scale, when the patterns are too complex to hand-code, or when the environment changes faster than engineers can keep up with rules. If none of those apply, a lookup table or a simple heuristic will serve you better and be far easier to debug.

---

## Chapter 2 — Introduction to ML Systems Design

This chapter lays out the four properties a production ML system needs:

- **Reliability** — correct outputs even when things go wrong
- **Scalability** — handles growth in data, traffic, and model complexity
- **Maintainability** — different people (or future you) can work on it
- **Adaptability** — can update to new data and requirements without a full rewrite

What I found useful is Huyen's insistence on starting from *business objectives*, not ML objectives. A model with 99% accuracy that doesn't move the metric your company cares about is worthless. Translating "we want to reduce churn" into a concrete ML objective (predict 30-day churn probability) is harder than it sounds and where a lot of projects go sideways.

The iterative loop she describes — project scoping → data → feature engineering → model training → evaluation → deployment → monitoring → back to data — maps almost exactly to how I think about pipeline feature development. You ship something, watch it in production, learn what's actually breaking, and iterate.

---

## Chapter 3 — Data Engineering Fundamentals

This is where the book earns its place on the shelf for me. Huyen covers:

- **Data sources** — user input, system logs, internal databases, third-party providers, each with different reliability and freshness guarantees
- **Data formats** — row-oriented (CSV, JSON) vs column-oriented (Parquet, ORC) and when each matters for read performance
- **Data storage engines** — transactional (OLTP) for writes, analytical (OLAP) for reads, and why you can't treat them the same
- **Data processing** — batch (periodic, high throughput) vs stream (continuous, low latency) and the tradeoffs between them

The data format section was an eye-opener. I've been writing pipeline tools that serialize to JSON everywhere out of convenience. Huyen makes a compelling case that for anything you're reading repeatedly at scale, columnar formats like Parquet pay for the conversion cost very quickly.

The batch vs. stream discussion maps cleanly to render farm thinking: batch processing is like a nightly render — you accumulate work and process it efficiently in bulk. Stream processing is like monitoring frame outputs in real time so you can catch a broken shader before it burns through 200 machine-hours.

---

## Takeaways Through Chapter 3

Three chapters in and the book's core argument is already clear: the bottleneck in most ML projects isn't the model, it's the data infrastructure and systems design around it. A mediocre model on clean, well-understood data will outperform a sophisticated model trained on poorly-curated data every time.

For someone coming from pipeline work, the mental model transfers well. You're still building reliable, observable systems that transform inputs into outputs — the inputs are just training examples instead of render jobs.

On to Chapter 4.
