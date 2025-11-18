---
layout: default
title: Home
---

<section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <div class="hero-text">
            <h1 class="hero-title">Build Your Future with {{ site.title }}</h1>
            <p class="hero-subtitle">{{ site.company_description }}</p>
            <div class="hero-cta">
                <a href="{{ "/vacancies" | relative_url }}" class="btn btn-primary">Explore Careers</a>
                <a href="#about" class="btn btn-secondary">Learn More</a>
            </div>
        </div>
    </div>
</section>

<section class="stats-highlight">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">🏢</div>
                <div class="stat-number">50+</div>
                <div class="stat-label">Retail Locations</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">👥</div>
                <div class="stat-number">2000+</div>
                <div class="stat-label">Team Members</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📈</div>
                <div class="stat-number">15 Years</div>
                <div class="stat-label">Of Excellence</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">⭐</div>
                <div class="stat-number">5+</div>
                <div class="stat-label">Retail Sectors</div>
            </div>
        </div>
    </div>
</section>

<section class="featured-vacancies">
    <div class="container">
        <div class="section-header">
            <h2>Current Opportunities</h2>
            <p>Join our team and be part of Indonesia's leading retail enterprise</p>
        </div>
        <div class="vacancy-list">
            {% for vacancy in site.vacancies limit:3 %}
                {% include vacancy-card.html vacancy=vacancy %}
            {% endfor %}
        </div>
        <div class="section-cta">
            <a href="{{ "/vacancies" | relative_url }}" class="btn btn-large">View All Vacancies</a>
        </div>
    </div>
</section>

<section class="why-join">
    <div class="container">
        <div class="section-header">
            <h2>Why Join Kawan Baru Group?</h2>
            <p>We offer more than just a job - we offer a career with purpose</p>
        </div>
        <div class="benefits-grid">
            <div class="benefit-card">
                <div class="benefit-icon">🎓</div>
                <h3>Career Development</h3>
                <p>Continuous learning opportunities and clear career progression paths</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">💼</div>
                <h3>Competitive Benefits</h3>
                <p>Comprehensive health coverage, performance bonuses, and employee discounts</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">🌟</div>
                <h3>Inclusive Culture</h3>
                <p>Diverse and supportive work environment where everyone belongs</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">🚀</div>
                <h3>Innovation Driven</h3>
                <p>Work with cutting-edge retail technology and innovative solutions</p>
            </div>
        </div>
    </div>
</section>

<section id="about" class="about-us">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2>About Kawan Baru Group</h2>
                <p>Kawan Baru Group is a dynamic and innovative retail conglomerate headquartered in Indonesia. Founded in 2010, we have rapidly grown to become one of the country's leading retail enterprises, with a strong presence across multiple sectors.</p>
                <p>At Kawan Baru Group, we're not just retailers; we're your new friends in making everyday life better, more convenient, and more enjoyable. Join us in our journey to revolutionize the retail experience in Indonesia!</p>
                <div class="about-features">
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Industry-leading retail solutions</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Commitment to employee growth</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Sustainable business practices</span>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <div class="image-placeholder">
                    <span>🏪</span>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="testimonials">
    <div class="container">
        <div class="section-header">
            <h2>What Our Team Says</h2>
            <p>Hear from employees who have built their careers with us</p>
        </div>
        <div class="testimonial-grid">
            <div class="testimonial-card">
                <div class="testimonial-quote">"Joining Kawan Baru Group was the best career decision I've made. The opportunities for growth are endless!"</div>
                <div class="testimonial-author">
                    <div class="author-name">Sarah Wijaya</div>
                    <div class="author-role">Store Manager, Jakarta</div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-quote">"The company truly values its employees. I've been able to advance my career while maintaining work-life balance."</div>
                <div class="testimonial-author">
                    <div class="author-name">Ahmad Rahman</div>
                    <div class="author-role">Regional Sales Director</div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-quote">"Great team culture and innovative environment. Every day brings new challenges and learning opportunities."</div>
                <div class="testimonial-author">
                    <div class="author-name">Diana Kusuma</div>
                    <div class="author-role">Marketing Specialist</div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="contact">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <h2>Get In Touch</h2>
                <p>Ready to start your journey with us? We'd love to hear from you!</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <div>
                            <strong>Email</strong>
                            <a href="mailto:info@kawanbaru.com">info@kawanbaru.com</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📱</span>
                        <div>
                            <strong>Phone</strong>
                            <a href="tel:+622112345678">+62 21 1234 5678</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <div>
                            <strong>Address</strong>
                            <span>Jakarta, Indonesia</span>
                        </div>
                    </div>
                </div>
                <div class="social-links">
                    <a href="#" class="social-icon" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" class="social-icon" aria-label="Instagram">Instagram</a>
                    <a href="#" class="social-icon" aria-label="Facebook">Facebook</a>
                </div>
            </div>
            <div class="contact-cta">
                <h3>Ready to Apply?</h3>
                <p>Browse our current openings and find your perfect role</p>
                <a href="{{ "/vacancies" | relative_url }}" class="btn btn-primary btn-large">View Open Positions</a>
            </div>
        </div>
    </div>
</section>