---
layout: page
title: About me
subtitle: MLOps & Pipeline Engineer · Austin, Texas
---

### Hi, I'm Chris

I'm a pipeline technical director at Ingenuity Studios, where I've spent 4+ years building and
operating the distributed compute infrastructure behind production VFX. My job is making sure the
software that artists and engineers rely on every day quietly works: package management, job
scheduling, deployment, and the automation in between.

### What that has looked like

I joined the render farm as a technical artist in 2021, wrote the Python automation that replaced
manual farm operations, and established the Render Wrangler role from scratch, including the
runbooks that became the team's operational foundation.

As Technical Lead of Render Operations I ran a 500+ node distributed render farm across concurrent
productions and high-priority deadlines, directing enhancements to Deadline (a distributed job
scheduler) and its ShotGrid integration. I hired and led a five-person render team, ran the weekly
standups, and built our on-call and incident-response process, so I know what it means to be the
person paged when production is down. I also built the tools around the farm: a ShotGrid priority
page that let producers watch their jobs without learning new software, automated failure
notifications that compiled the data and routed it to the right people, an issues wiki, and the
teaching to go with it.

Now, as Pipeline Technical Director, I'm modernizing the studio's pipeline: I architected and
deployed Rez as the studio-wide package manager and led the cross-department migration with zero
production downtime. I overhauled code distribution from pushed git checkouts to a pull-based
updater service, brought in Vault for token security, and put Ruff and mypy in front of production
so quality is enforced before anything ships.

Under most of it sat MongoDB: Deadline, our PDQ deployments, and our action system all ran on it,
and interfacing through PyMongo taught me the unglamorous fundamentals that transfer straight to
ML data work, like data preparation and putting indexes on the fields you actually query.

### Where I'm headed

I'm focused on **MLOps, ML engineering, and AI engineering** roles. The infrastructure I run is one
analogy away from an ML platform: a render farm is a compute cluster, Deadline is a job scheduler,
and Rez applies the same isolation principles as conda environments. I'm actively studying the ML
side (PyTorch, scikit-learn, NumPy, pandas, and Chip Huyen's books), and I already put LLMs to work
as engineering partners; I used one to research and stress-test the Rez migration plan before it
touched production.

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
