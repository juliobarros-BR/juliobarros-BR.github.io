---
layout: default
title: Home
---

<section class="hero" aria-labelledby="intro">
  <div class="hero-copy">
    <p class="eyebrow">Switzerland</p>
    <h1 id="intro">Júlio Amando de Barros</h1>
    <p class="profile-role">Physicist · Experiments, modelling and scientific computing</p>
    <div class="lead">{% include copy.html file="home-intro" %}</div>
    <div class="actions">
      <a class="button" href="#work">Explore my research</a>
      <a class="text-link" href="{{ '/cv.html' | relative_url }}">View CV</a>
    </div>
  </div>
  <figure class="portrait">
    <img src="{{ '/assets/images/portrait.webp' | relative_url }}" width="760" height="1013" alt="Júlio Amando de Barros" fetchpriority="high">
  </figure>
</section>

<section class="section" id="work" aria-labelledby="selected-research">
  <div class="section-heading">
    <h2 id="selected-research">Selected research</h2>
    <a class="text-link" href="{{ '/research-projects.html' | relative_url }}">View all research</a>
  </div>
  <div class="projects projects-list profile-research">
    {% for project in site.data.research limit:3 %}
      {% include project.html project=project heading="h3" %}
    {% endfor %}
  </div>
</section>

<section class="section" aria-labelledby="ongoing-home">
  <div class="section-heading">
    <h2 id="ongoing-home">Ongoing projects</h2>
  </div>
  <div class="case-grid">
    <article>
      <h3><a href="{{ '/personal.html#sambagasse' | relative_url }}">Sambagasse</a></h3>
      <p>An app for coordinating the work behind a Zürich samba band, from finance and production to the design studio.</p>
    </article>
    <article>
      <h3><a href="{{ '/research-projects.html#pillar-atlas' | relative_url }}">Wood mechanics analysis</a></h3>
      {% include copy.html file="wood-mechanics-analysis" %}
    </article>
  </div>
</section>
