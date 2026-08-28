---
layout: page
title: About me
subtitle: DevOps · SRE · Platform Engineer · Austin, Texas
---

### Hi, I'm Chris

I'm a pipeline technical director at Ingenuity Studios, where I've spent 4+ years operating the
distributed compute infrastructure behind production VFX and building the platform tooling on top
of it. Job scheduling, package management, deployment, secrets, monitoring, and the on-call that
keeps it all honest.

VFX turns out to be an unforgiving place to learn reliability. Render jobs are expensive, delivery
dates do not move, and when the farm stops, several departments stop with it.

### What that has looked like

I joined the render farm as a technical artist in 2021, wrote the Python automation that replaced
manual farm operations, and established the Render Wrangler role from scratch, including the
runbooks that became the team's operational foundation.

As Technical Lead of Render Operations I owned reliability for a 500+ node distributed render farm
running concurrent productions. I extended Deadline, the distributed job scheduler underneath it
all, along with its ShotGrid integration: queue management, prioritization, monitoring, and retry
logic. I hired and led a five-person operations team, ran the weekly standups, and built our
on-call rotation and incident-response process from nothing, so I know what it means to be the
person paged when production is down. I also closed the observability gaps around the farm:
automated job-failure alerting that compiled the details and routed them to the right owners, a
self-service status page so producers could watch their own jobs without learning new software,
and an issues wiki with the teaching to go with it.

Now, as Pipeline Technical Director, I work on the platform itself. I architected and deployed Rez
as the studio-wide package manager, giving every department reproducible and independently
versioned environments, and led the cross-department migration with zero production downtime. I
replaced push-based code distribution with a pull-based updater service, so machines converge on
the intended version themselves instead of waiting to be pushed to. I moved secrets behind the
Vault API, and put Ruff and mypy in the path to production.

Under most of it sat MongoDB: Deadline, our PDQ deployments, and our internal action system all
ran on it. Interfacing through PyMongo taught me the unglamorous operational fundamentals, like
data preparation and putting indexes on the fields you actually query.

### Where I'm headed

I'm focused on **DevOps, site reliability, and platform engineering** roles. Most of what I do
already maps onto that work under different names: a render farm is a compute fleet, Deadline is a
distributed job scheduler, Rez solves the same dependency isolation problem as containers, and
pull-based deployment is the same convergence model that modern GitOps tooling uses.

I'm currently learning Kubernetes and studying for the **CKA**, which formalizes the orchestration
concepts I have been applying with different tools for years. MLflow is next on my list, since the
ML-platform space is where a lot of this infrastructure work is heading.

### Education

- **M.S. Visualization**, Arts, Entertainment & Media Management, Texas A&M University
- **M.Des. Procedural Art & Visual Storytelling**, Victoria University of Wellington
- **B.S. Visualization, Minor in Computer Science**, Texas A&M University

Certified in VEX in Houdini and Procedural Modeling for Production in Houdini.

### Games

Games are still where I sharpen the craft. I've shipped eleven jam entries and prototypes in
Unreal Engine and Unity, from turn-based RPGs to browser-playable strategy games. You can play
them all on [itch.io](https://undeadknight11.itch.io/), where I go by Undead Knight.

### Get in touch

I'm based in Austin, Texas, and open to remote or hybrid roles. Find me on
[LinkedIn](https://www.linkedin.com/in/christopherkornosky/), browse
[my GitHub](https://github.com/Kornosky), or just
[send me an email](mailto:christopher.kornosky@gmail.com); I'm always happy to chat.
