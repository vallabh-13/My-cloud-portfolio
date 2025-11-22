// Neural Network Animation (Siri-like purple effect)
        const canvas = document.getElementById('neuralCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 80;
        const connectionDistance = 150;
        const mouse = { x: null, y: null, radius: 150 };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        const angle = Math.atan2(dy, dx);
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= Math.cos(angle) * force * 2;
                        this.y -= Math.sin(angle) * force * 2;
                    }
                }
            }

            draw() {
                ctx.fillStyle = 'rgba(167, 139, 250, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            connectParticles();
            requestAnimationFrame(animate);
        }

        init();
        animate();

        // Mouse move effect
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });

        // Particle Nebula Effect
        const nebulaCanvas = document.getElementById('particleNebula');
        const nebulaCtx = nebulaCanvas.getContext('2d');
        
        nebulaCanvas.width = window.innerWidth;
        nebulaCanvas.height = window.innerHeight;

        const nebulaParticles = [];
        const nebulaCount = 150;

        class NebulaParticle {
            constructor() {
                this.x = Math.random() * nebulaCanvas.width;
                this.y = Math.random() * nebulaCanvas.height;
                this.size = Math.random() * 3 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = this.getColor();
            }

            getColor() {
                const colors = [
                    'rgba(124, 58, 237,',  // Purple
                    'rgba(167, 139, 250,', // Light purple
                    'rgba(79, 70, 229,',   // Indigo
                    'rgba(139, 92, 246,',  // Violet
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > nebulaCanvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > nebulaCanvas.height) this.speedY *= -1;

                // Pulsing opacity
                this.opacity += Math.sin(Date.now() * 0.001) * 0.001;
                if (this.opacity < 0.1) this.opacity = 0.1;
                if (this.opacity > 0.7) this.opacity = 0.7;
            }

            draw() {
                nebulaCtx.fillStyle = `${this.color} ${this.opacity})`;
                nebulaCtx.shadowBlur = 20;
                nebulaCtx.shadowColor = this.color + ' 0.8)';
                nebulaCtx.beginPath();
                nebulaCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                nebulaCtx.fill();
                nebulaCtx.shadowBlur = 0;
            }
        }

        function initNebula() {
            nebulaParticles.length = 0;
            for (let i = 0; i < nebulaCount; i++) {
                nebulaParticles.push(new NebulaParticle());
            }
        }

        function connectNebulaParticles() {
            for (let i = 0; i < nebulaParticles.length; i++) {
                for (let j = i + 1; j < nebulaParticles.length; j++) {
                    const dx = nebulaParticles[i].x - nebulaParticles[j].x;
                    const dy = nebulaParticles[i].y - nebulaParticles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = (1 - distance / 150) * 0.15;
                        nebulaCtx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
                        nebulaCtx.lineWidth = 0.5;
                        nebulaCtx.beginPath();
                        nebulaCtx.moveTo(nebulaParticles[i].x, nebulaParticles[i].y);
                        nebulaCtx.lineTo(nebulaParticles[j].x, nebulaParticles[j].y);
                        nebulaCtx.stroke();
                    }
                }
            }
        }

        function animateNebula() {
            nebulaCtx.clearRect(0, 0, nebulaCanvas.width, nebulaCanvas.height);
            
            nebulaParticles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            connectNebulaParticles();
            requestAnimationFrame(animateNebula);
        }

        initNebula();
        animateNebula();

        window.addEventListener('resize', () => {
            nebulaCanvas.width = window.innerWidth;
            nebulaCanvas.height = window.innerHeight;
            initNebula();
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navLinks.classList.remove('active');
                }
            });
        });

        // Scroll reveal animation
        const reveals = document.querySelectorAll('.reveal');
        
        function checkReveal() {
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 100;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', checkReveal);
        checkReveal();

        // Hide earth horizon when scrolling past hero section
        const earthContainer = document.querySelector('.earth-container');
        const heroSection = document.querySelector('.hero');

        function checkEarthVisibility() {
            if (heroSection && earthContainer) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition > heroBottom - window.innerHeight) {
                    earthContainer.style.opacity = '0';
                    earthContainer.style.pointerEvents = 'none';
                } else {
                    earthContainer.style.opacity = '1';
                }
            }
        }

        window.addEventListener('scroll', checkEarthVisibility);
        checkEarthVisibility();

        // Custom notification function
        function showNotification(title, message, type = 'success') {
            const notification = document.getElementById('notificationToast');
            const titleElement = notification.querySelector('.notification-title');
            const messageElement = notification.querySelector('.notification-message');
            const iconElement = notification.querySelector('.notification-icon svg');

            // Set content
            titleElement.textContent = title;
            messageElement.textContent = message;

            // Set icon based on type
            if (type === 'success') {
                notification.classList.remove('error');
                iconElement.innerHTML = `
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                `;
            } else if (type === 'error') {
                notification.classList.add('error');
                iconElement.innerHTML = `
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                `;
            }

            // Show notification
            notification.classList.remove('hide');
            notification.classList.add('show');

            // Auto hide after 5 seconds
            setTimeout(() => {
                closeNotification();
            }, 5000);
        }

        function closeNotification() {
            const notification = document.getElementById('notificationToast');
            notification.classList.remove('show');
            notification.classList.add('hide');

            // Reset after animation
            setTimeout(() => {
                notification.classList.remove('hide');
            }, 400);
        }

        // Contact form with AJAX submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showNotification(
                        'Message Sent Successfully!',
                        "Thank you for reaching out! I'll get back to you within 24-48 hours.",
                        'success'
                    );
                    contactForm.reset();
                } else {
                    showNotification(
                        'Submission Failed',
                        'There was a problem submitting your form. Please try again or email me directly.',
                        'error'
                    );
                }
            } catch (error) {
                showNotification(
                    'Network Error',
                    'Could not connect to the server. Please check your internet connection and try again.',
                    'error'
                );
            }
        });
