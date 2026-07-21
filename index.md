---
layout: default
title: Home
---

<section class="hero">
    <div class="container hero-content">
        <div class="hero-text">
            <p class="hero-prompt">$ whoami</p>
            <h1 class="hero-title">Muhammad Sidiq Putra</h1>
            <p class="hero-role">DevOps / Infrastructure Engineer</p>
            <p class="hero-subtitle">6+ years in DevOps, 10+ years in infrastructure. Cloud, Kubernetes, CI/CD, and self-hosted data platforms at scale.</p>
            <div class="hero-cta">
                <a href="mailto:{{ site.email }}" class="btn btn-primary">Email Me</a>
                <a href="#experience" class="btn btn-secondary">View Experience</a>
            </div>
        </div>
    </div>
</section>

<section class="stats-highlight">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">OPS</div>
                <div class="stat-number">6+ Years</div>
                <div class="stat-label">DevOps Engineering</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">SYS</div>
                <div class="stat-number">10+ Years</div>
                <div class="stat-label">Infrastructure</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">CLD</div>
                <div class="stat-number">1000+</div>
                <div class="stat-label">Servers Managed (AWS/GCP)</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">CRT</div>
                <div class="stat-number">4</div>
                <div class="stat-label">Certifications</div>
            </div>
        </div>
    </div>
</section>

<section id="about" class="about-us">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2>Profile</h2>
                <p>Passionate engineer with 6+ years of experience as a DevOps engineer and more than 10 years in infrastructure. Hands-on with cloud infrastructure (GCP and AWS), CI/CD tools (Jenkins, Ansible, ArgoCD, GitHub Actions, GitLab CI), self-hosted databases (PostgreSQL, MySQL, Elasticsearch, MongoDB), cache servers (Redis), message brokers (RabbitMQ, Kafka, Redpanda), load balancers (HAProxy, Nginx), and monitoring tools (Grafana, Prometheus, New Relic, Datadog).</p>
                <div class="about-features">
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Managed production Kubernetes on OpenShift, Amazon EKS, and Docker Swarm</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Led cross-cloud migration from AWS to GCP</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Migrated legacy monolith deployments to fully automated CI/CD pipelines</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Led FinOps initiatives to optimize cloud spending</span>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <div class="terminal-window">
                    <div class="terminal-titlebar">
                        <span class="terminal-dot red"></span>
                        <span class="terminal-dot yellow"></span>
                        <span class="terminal-dot green"></span>
                    </div>
                    <div class="terminal-body">
                        <p><span class="prompt">$</span> kubectl get nodes</p>
                        <p class="comment">NAME      STATUS   ROLE</p>
                        <p class="comment">node-01   Ready    control-plane</p>
                        <p class="comment">node-02   Ready    worker</p>
                        <p><span class="prompt">$</span> terraform apply</p>
                        <p class="comment">Apply complete! Resources: 12 added</p>
                        <p><span class="prompt">$</span> argocd app sync platform</p>
                        <p class="comment">Synced &#8594; Healthy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="experience" class="experience">
    <div class="container">
        <div class="section-header">
            <h2>Work Experience</h2>
            <p>14 years across systems engineering, DevOps, and platform leadership</p>
        </div>
        <div class="job-list">
            <div class="job-card">
                <div class="job-head">
                    <div>
                        <h3>DevOps Engineer</h3>
                        <p class="job-company">SQE (Squantum Engine)</p>
                    </div>
                    <span class="job-dates">Jan 2026 - Present</span>
                </div>
                <ul>
                    <li>Manage cloud infrastructure and Kubernetes workloads for production services</li>
                    <li>Build and maintain CI/CD pipelines for automated deployment</li>
                    <li>Implement infrastructure as code and monitoring/alerting for platform reliability</li>
                </ul>
            </div>

            <div class="job-card">
                <div class="job-head">
                    <div>
                        <h3>Sr. Platform Engineer</h3>
                        <p class="job-company">Kawan Lama Group, Jakarta, Indonesia</p>
                    </div>
                    <span class="job-dates">2024 - Present</span>
                </div>
                <ul>
                    <li>Managed production Kubernetes clusters on OpenShift (on-premise), Amazon EKS, and Docker Swarm</li>
                    <li>Migrated legacy applications to Kubernetes</li>
                    <li>Managed Redpanda message broker and optimized cloud spending</li>
                    <li>Built CI/CD deployment pipelines with GitHub Workflow, ArgoCD, and Ansible</li>
                    <li>Managed monitoring and alerting with Grafana and Victoria Metrics</li>
                </ul>
            </div>

            <div class="job-card">
                <div class="job-head">
                    <div>
                        <h3>DevOps Lead</h3>
                        <p class="job-company">astronauts.id, Jakarta, Indonesia</p>
                    </div>
                    <span class="job-dates">2022 - 2024</span>
                </div>
                <ul>
                    <li>Built production-ready GCP infrastructure from scratch</li>
                    <li>Transformed manual monolith deployments into fully automated continuous delivery pipelines using Jenkins, Ansible, and Packer</li>
                    <li>Architected end-to-end CI/CD for Kubernetes-native applications with Jenkins and ArgoCD</li>
                    <li>Deployed and configured Cloudflare WAF; supported monolith-to-microservices transition</li>
                    <li>Established highly available self-hosted PostgreSQL (Patroni), Redis, and MongoDB infrastructure</li>
                    <li>Implemented Debezium for change data capture (CDC)</li>
                    <li>Led FinOps initiatives to optimize cloud spending</li>
                    <li>Deployed Datadog for APM/logging and built monitoring with Grafana and Prometheus</li>
                </ul>
            </div>

            <div class="job-card">
                <div class="job-head">
                    <div>
                        <h3>DevOps Lead</h3>
                        <p class="job-company">tiket.com, Jakarta, Indonesia</p>
                    </div>
                    <span class="job-dates">2017 - 2022</span>
                </div>
                <ul>
                    <li>Managed large-scale infrastructure across AWS and GCP — 1000+ servers on CentOS and Ubuntu</li>
                    <li>Supported monolith-to-microservices transformation and led AWS-to-GCP cross-cloud migration</li>
                    <li>Migrated VM-based workloads to containerized Kubernetes environments</li>
                    <li>Implemented monitoring with New Relic, Zabbix, ELK Stack, Scalyr, and Percona Monitoring and Management</li>
                    <li>Built CI/CD with Jenkins and Ansible for VMs, and Jenkins, Kaniko, and ArgoCD for Kubernetes</li>
                    <li>Implemented Infrastructure as Code with Terraform</li>
                    <li>Ran self-hosted MongoDB, MySQL, Redis, RabbitMQ, Kafka, Elasticsearch, and HAProxy</li>
                    <li>Developed automation scripts in Bash and Python</li>
                </ul>
            </div>

            <div class="job-card">
                <div class="job-head">
                    <div>
                        <h3>System Engineer</h3>
                        <p class="job-company">tiket.com, Jakarta, Indonesia</p>
                    </div>
                    <span class="job-dates">2012 - 2017</span>
                </div>
                <ul>
                    <li>Supported project delivery; installed and configured Linux/Windows servers, VMware VMs, and databases</li>
                    <li>Set up and configured monitoring with Zabbix</li>
                    <li>Configured network devices (Cisco, Juniper switches)</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section id="skills" class="why-join">
    <div class="container">
        <div class="section-header">
            <h2>Skills</h2>
            <p>Tools and platforms used in production</p>
        </div>
        <div class="benefits-grid">
            <div class="benefit-card">
                <div class="benefit-icon">K8S</div>
                <h3>Cloud & Containers</h3>
                <p>Kubernetes, Docker, OpenShift, Amazon EKS, Docker Swarm, GCP, AWS</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">CI</div>
                <h3>CI/CD & IaC</h3>
                <p>Jenkins, ArgoCD, Ansible, Terraform, Packer, GitHub Actions, GitLab CI</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">DB</div>
                <h3>Data & Messaging</h3>
                <p>PostgreSQL (Patroni), MySQL, MongoDB, Elasticsearch, Redis, Kafka, RabbitMQ, Redpanda</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">OBS</div>
                <h3>Monitoring & Observability</h3>
                <p>Grafana, Prometheus, Victoria Metrics, Datadog, New Relic, ELK Stack, Zabbix</p>
            </div>
        </div>
    </div>
</section>

<section id="projects" class="testimonials">
    <div class="container">
        <div class="section-header">
            <h2>Projects</h2>
            <p>Infrastructure and DevOps work delivered for</p>
        </div>
        <div class="testimonial-grid">
            <div class="testimonial-card">
                <div class="testimonial-quote">lapakgaming.com</div>
                <div class="testimonial-author">Infrastructure & DevOps</div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-quote">Hijra Group</div>
                <div class="testimonial-author">Infrastructure & DevOps</div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-quote">Kompas Gramedia (Growth Center)</div>
                <div class="testimonial-author">Infrastructure & DevOps</div>
            </div>
        </div>
    </div>
</section>

<section class="mission-vision">
    <div class="container">
        <div class="mv-grid">
            <div class="mv-card">
                <div class="mv-icon">EDU</div>
                <h3>Education</h3>
                <p>Bachelor of Information Technology, BINUS University (2008 - 2012) — GPA 3.04 / 4.0</p>
            </div>
            <div class="mv-card">
                <div class="mv-icon">CRT</div>
                <h3>Certifications</h3>
                <p>CCNA (2013) · RHCE (2014) · VCP 6 (2016) · CKA (2023)</p>
            </div>
            <div class="mv-card">
                <div class="mv-icon">LNG</div>
                <h3>Languages</h3>
                <p>English</p>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="contact">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <h2>Get In Touch</h2>
                <p>Open to DevOps and infrastructure engineering opportunities.</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <span class="contact-icon">@</span>
                        <div>
                            <strong>Email</strong>
                            <a href="mailto:{{ site.email }}">{{ site.email }}</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">&#9656;</span>
                        <div>
                            <strong>Location</strong>
                            <span>{{ site.address }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-cta">
                <h3>Let's Talk</h3>
                <p>Reach out about DevOps, platform, or infrastructure roles</p>
                <a href="mailto:{{ site.email }}" class="btn btn-primary btn-large">Email Me</a>
            </div>
        </div>
    </div>
</section>
