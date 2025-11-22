const championsData = {
    "Ahri": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        role: "Maga / Asesina (Mid)",
        story: "Ahri es una Vastaya capaz de manipular la magia y las emociones. Es una depredadora que drena la esencia vital de sus víctimas."
    },
    "Yasuo": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
        role: "Luchador (Mid / Top)",
        story: "Yasuo es un espadachín del viento acusado injustamente de la muerte de su maestro. Su habilidad con la espada es incomparable, capaz de cortar el aire y los proyectiles."
    },
    "Jinx": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
        role: "Tiradora (ADC)",
        story: "Jinx es una criminal lunática de Zaun obsesionada con hacer estallar todo lo que encuentra a su paso, viviendo para sembrar el caos sin pensar en las consecuencias."
    },
    "Zed": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
        role: "Asesino (Mid / Jungla)",
        story: "Zed domina las sombras y lidera la Orden de la Sombra usando técnicas prohibidas para proteger Jonia. Sus sombras son letales copias de sí mismo."
    },
    "Lux": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
        role: "Maga / Soporte (Mid / Soporte)",
        story: "Lux es una maga luminosa de Demacia capaz de manipular la luz a su favor. A pesar de la prohibición de la magia en su tierra natal, ella usa sus poderes para inspirar a otros."
    },
    "Ezreal": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
        role: "Tirador (ADC / Mid)",
        story: "Ezreal es un explorador brillante y arrogante que domina artefactos mágicos antiguos. Usa un guantelete para lanzar potentes ráfagas de energía."
    },
    "Darius": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
        role: "Luchador (Top)",
        story: "Darius, la Mano de Noxus, es un guerrero sin igual que lidera las legiones de Noxus. Lucha sin piedad por la grandeza de su imperio."
    },
    "Riven": {
        img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",
        role: "Luchadora (Top)",
        story: "Riven es una guerrera exiliada que busca redención. Aunque su espada rúnica está rota, sigue siendo una combatiente formidable y rápida."
    }
};

const championModal = document.getElementById("championModal");
const closeModalBtn = document.getElementById("close-modal-btn");
const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open'); 
});

document.querySelectorAll('.champ').forEach(champElement => {
    champElement.addEventListener('click', () => {
        const name = champElement.getAttribute('data-name');
        const champ = championsData[name];

        if (champ) {
            document.getElementById("modalName").innerText = name;
            document.getElementById("modalImg").src = champ.img;
            document.getElementById("modalRole").innerText = `Rol: ${champ.role}`;
            document.getElementById("modalStory").innerText = champ.story;

            championModal.style.display = "flex";
        }
    });
});

function closeModal() {
    championModal.style.display = "none";
}

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === championModal) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    sections.forEach(section => {
        section.style.opacity = '0'; 
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    setTimeout(() => {
        sections.forEach(section => {
            if (section.style.opacity === '0') {
                section.style.opacity = '1';
            }
        });
    }, 1000); 
});