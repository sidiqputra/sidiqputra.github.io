---
layout: default
title: Home
---

# Welcome to {{ site.company_name }}

{{ site.company_description }}

## Featured Vacancies

<div class="vacancy-list">
  {% for vacancy in site.data.vacancies limit:3 %}
    {% include vacancy-card.html vacancy=vacancy %}
  {% endfor %}
</div>

[View All Vacancies](/vacancies)