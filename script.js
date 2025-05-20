// Sélectionner toutes les sections
const sections = document.querySelectorAll("section");

// Créer un observer pour détecter quand une section entre dans le viewport
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter la classe "visible" pour activer l'animation
        entry.target.classList.add("visible");

        // Si l'on souhaite observer une seule fois :
        observer.unobserve(entry.target); // Stoppe l'observation
      }
    });
  },
  {
    rootMargin: "0px 0px -50px 0px",  }
);

// Appliquer l'observer à chaque section
sections.forEach(section => {
  observer.observe(section);
});