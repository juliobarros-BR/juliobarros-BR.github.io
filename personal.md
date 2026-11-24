---
layout: default
title: Personal Projects
description: Apps, embedded systems, and music projects.
embedded:
  - title: Programmable Christmas tree
    image: Ch_Tree.jpeg
    description: Built an ESP32-controlled prototype that synchronizes lighting with audio.
music:
  - title: Sambagasse
    image: Sambagasse.jpeg
    url: https://www.instagram.com/sambagasse/
    label: Instagram
  - title: Roda de choro de Zürich
    image: roda_choro.png
    url: https://www.instagram.com/rodadechoro.zurich/
    label: Instagram
  - title: Bugre
    image: bugre.jpg
    description: Latin ska jazz.
    url: https://www.instagram.com/bandabugre/
    label: Instagram
---

<header class="page-intro">
  <h1>Personal projects</h1>
  <p class="lead">{{ page.description }}</p>
</header>

<section class="section" aria-labelledby="ongoing-personal">
  <h2 id="ongoing-personal">Ongoing projects</h2>
  <div class="case-grid">
    <article class="case-feature" id="sambagasse">
      <div>
        <p class="eyebrow">Sambagasse</p>
        {% include copy.html file="sambagasse" %}
      </div>
      <div class="case-example">
        {% include copy.html file="sambagasse-studio" %}
      </div>
    </article>
    <article id="job-view">
      <p class="eyebrow">Job View</p>
      {% include copy.html file="job-view" %}
    </article>
    <article id="estrasse">
      <p class="eyebrow">Estrasse</p>
      {% include copy.html file="estrasse" %}
    </article>
  </div>
</section>

<section class="section" aria-labelledby="embedded">
  <h2 id="embedded">Embedded systems</h2>
  <div class="projects projects-list">
    {% for project in page.embedded %}
      {% include project.html project=project heading="h3" %}
    {% endfor %}
  </div>
</section>

<section class="section" aria-labelledby="music">
  <h2 id="music">Music</h2>
  <div class="projects">
    {% for project in page.music %}
      {% include project.html project=project heading="h3" %}
    {% endfor %}
  </div>
</section>
