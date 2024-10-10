---
layout: default
title: Home
---

<section class="hero">
    <div class="container">
        <h1>Welcome to {{ site.title }}</h1>
        <p>{{ site.company_description }}</p>
    </div>
</section>

<section class="featured-vacancies">
    <div class="container">
        <h2>Featured Vacancies</h2>
        <div class="vacancy-list">
            {% for vacancy in site.vacancies limit:3 %}
                {% include vacancy-card.html vacancy=vacancy %}
            {% endfor %}
        </div>
        <a href="{{ "/vacancies" | relative_url }}" class="btn">View All Vacancies</a>
    </div>
</section>

<section id="about" class="about-us">
    <div class="container">
        <h2>About Us</h2>
        {% include_relative kawan-baru-group-description.md %}
    </div>
</section>

<section id="contact" class="contact">
    <div class="container">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries or opportunities.</p>
        <p>Email: info@kawanbaru.com</p>
        <p>Phone: +62 21 1234 5678</p>
    </div>
</section>