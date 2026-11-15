---
layout: page
title: About me
subtitle: Infrastructure Engineer · Kubernetes & Distributed Compute · Austin, Texas
---

### Hi, I'm Chris

I'm a Certified Kubernetes Administrator and the Pipeline Technical Director at Ingenuity Studios,
where I've spent 5 years building and operating the distributed compute platform behind production
VFX. My job is making sure the infrastructure that artists and engineers rely on every day quietly
works: scheduling, environment reproducibility, deployment, and the automation in between.

### What that has looked like

I joined the render farm as a technical artist in 2021, built the automation that replaced manual
farm operations, and established the Render Wrangler role from scratch, including the runbook of
failures and fixes that became the team's operational foundation.

As Technical Lead of Render Operations I owned the scheduling layer of a heterogeneous fleet of
500+ GPU/CPU nodes running thousands of concurrent batch jobs across simultaneous productions. That
meant capacity planning, scheduler tuning, resource-aware placement, and failure triage with
auto-retry so common failures stopped reaching users. I built ieFarm, a service layer over the
Deadline scheduler API that turned job submission into a reproducible, versioned workflow, and I
hired and led a five-person operations team with on-call and incident response, so I know what it
means to be the person paged when the cluster is down.

Now, as Pipeline Technical Director, I'm modernizing how the studio builds and ships software: I
architected Rez as the studio-wide package manager so every module is versioned and deployed
independently, and led the cross-department migration with zero production downtime. I moved code
distribution from pushed git checkouts to a pull-based updater service, brought in Vault for secrets,
and gated production behind GitLab CI.

### Where I'm headed

I'm focused on **Kubernetes platform, distributed compute, and ML infrastructure** roles. A render
farm is a batch GPU cluster with different payloads: the problems are queueing, placement, failure
recovery, and keeping expensive hardware busy, which are exactly the problems of AI compute.

I learn new stacks by running them. At home I operate a k3d cluster with Argo Workflows for
DAG-orchestrated training pipelines, MLflow for experiment tracking and a model registry, and MinIO
for S3-compatible artifact storage, plus a self-hosted GPU inference node serving local LLMs over a
Tailscale mesh.

**Languages.** Python is my production language: five years of services, automation, and scheduler
integrations. Go is the language I'm actively learning, because it's what the Kubernetes ecosystem
is written in and where I want to build controllers and infrastructure tooling next.

### Certifications & education

- **Certified Kubernetes Administrator (CKA)**, CNCF / Linux Foundation, 2026
- **M.S. Visualization**, Arts, Entertainment & Media Management, Texas A&M University
- **M.Des. Procedural Art & Visual Storytelling**, Victoria University of Wellington
- **B.S. Visualization, Minor in Computer Science**, Texas A&M University

### Games

Games are still where I sharpen the craft. I've shipped eleven jam entries and prototypes in
Unreal Engine and Unity, from turn-based RPGs to browser-playable strategy games. You can play
them all on [itch.io](https://undeadknight11.itch.io/), where I go by Undead Knight.

### Get in touch

I'm based in Austin, Texas, and open to remote or hybrid roles. Find me on
[LinkedIn](https://www.linkedin.com/in/christopherkornosky/), browse
[my GitHub](https://github.com/Kornosky), or just
[send me an email](mailto:christopher.kornosky@gmail.com); I'm always happy to chat.
