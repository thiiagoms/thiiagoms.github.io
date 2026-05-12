if (window.particlesJS) {
    particlesJS("particles", {
        particles: {
            number: {
                value: 65,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: "#65ffb5"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.52,
                random: true,
                animation: {
                    enable: true,
                    speed: 0.7,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#67d8ff",
                opacity: 0.22,
                width: 1
            },
            move: {
                enable: true,
                speed: 2.4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 90,
                    duration: 0.4
                },
                push: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', function () {
    const scrollTopButton = document.querySelector('.scroll-top');

    if (!scrollTopButton) {
        return;
    }

    scrollTopButton.style.display = window.pageYOffset > 200 ? 'block' : 'none';
});
