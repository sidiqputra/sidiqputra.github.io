---
layout: default
title: All Vacancies
---

# All Vacancies

<div class="vacancy-list">
  {% for vacancy in site.vacancies %}
    {% include vacancy-card.html vacancy=vacancy %}
  {% endfor %}
</div>