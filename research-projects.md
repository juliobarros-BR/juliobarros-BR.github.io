---
layout: default
title: Research
description: Publications and projects in experimental mechanics, moisture-responsive materials, and molecular simulation.
---

<header class="page-intro">
  <h1>Research projects</h1>
  <p class="lead">{{ page.description }}</p>
</header>

<div class="projects projects-list">
  {% for project in site.data.research %}
    {% include project.html project=project heading="h2" %}
  {% endfor %}
</div>

<section class="section" aria-labelledby="ongoing-research">
  <h2 id="ongoing-research">Ongoing research</h2>
  <div class="case-grid">
    <article id="pillar-atlas">
      <h3>Wood mechanics analysis</h3>
      {% include copy.html file="wood-mechanics-analysis" %}
    </article>
  </div>
</section>

<section class="section" id="additional-research" aria-labelledby="additional-research-title">
  <h2 id="additional-research-title">Additional research</h2>
  <div class="projects projects-list">
    {% for project in site.data.additional_research %}
      {% include project.html project=project heading="h3" %}
    {% endfor %}
  </div>
</section>
