---
layout: default
title: Career Opportunities
---

<section class="page-hero vacancies-hero">
    <div class="container">
        <h1 class="page-title">Career Opportunities</h1>
        <p class="page-subtitle">Join our team and build your future with Indonesia's leading retail enterprise</p>
    </div>
</section>

<section class="vacancies-intro">
    <div class="container">
        <div class="intro-content">
            <h2>Why Work With Us?</h2>
            <p>At Kawan Baru Group, we believe in empowering our employees to reach their full potential. We offer competitive compensation, comprehensive benefits, and a supportive work environment that encourages growth and innovation.</p>
        </div>
    </div>
</section>

<section class="vacancies-listing">
    <div class="container">
        <div class="section-header">
            <h2>Open Positions</h2>
            <p>Explore opportunities across our organization</p>
        </div>

        {% if site.vacancies.size > 0 %}
        <div class="vacancy-list">
            {% for vacancy in site.vacancies %}
                {% include vacancy-card.html vacancy=vacancy %}
            {% endfor %}
        </div>
        {% else %}
        <div class="no-vacancies">
            <div class="no-vacancies-icon">🔍</div>
            <h3>No Open Positions at the Moment</h3>
            <p>We're not currently hiring, but we're always looking for talented individuals. Check back soon or send us your resume at <a href="mailto:hr@kawanbarugroup.com">hr@kawanbarugroup.com</a></p>
        </div>
        {% endif %}
    </div>
</section>

<section class="application-process">
    <div class="container">
        <div class="section-header">
            <h2>Our Hiring Process</h2>
            <p>What to expect when you apply</p>
        </div>
        <div class="process-grid">
            <div class="process-step">
                <div class="step-number">1</div>
                <h3>Apply Online</h3>
                <p>Submit your application through our career portal or via email</p>
            </div>
            <div class="process-step">
                <div class="step-number">2</div>
                <h3>Initial Screening</h3>
                <p>Our HR team reviews your application and contacts qualified candidates</p>
            </div>
            <div class="process-step">
                <div class="step-number">3</div>
                <h3>Interview</h3>
                <p>Meet with hiring managers and team members to discuss the role</p>
            </div>
            <div class="process-step">
                <div class="step-number">4</div>
                <h3>Offer & Onboarding</h3>
                <p>Receive your offer and join our team with comprehensive onboarding</p>
            </div>
        </div>
    </div>
</section>

<section class="careers-cta">
    <div class="container">
        <div class="cta-content">
            <h2>Don't See the Right Position?</h2>
            <p>We're always interested in hearing from talented professionals. Send us your resume and tell us how you can contribute to our success.</p>
            <a href="mailto:hr@kawanbarugroup.com" class="btn btn-primary btn-large">Send Your Resume</a>
        </div>
    </div>
</section>