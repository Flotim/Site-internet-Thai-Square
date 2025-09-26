
const footerHTML = `
<footer>
  <a href="index.html" class="footer_logo_link">
    <img
      class="footer_logo"
      src="./assets/logo horizontal_vert.png"
      alt="logo du thai square"
    />
  </a>
  <div class="footer_social-media">
    <a href="tel:+33 05 63 55 40 19"
      ><img
        class="footer_social-media-icon footer_social-media-phone"
        src="./assets/phone-solid.svg"
        alt="numéro de téléphone thai square"
      />
    </a>
    <a href="https://www.facebook.com/thaisquarealbi/"
      ><img
        class="footer_social-media-icon social-media-facebook"
        src="./assets/square-facebook-brands-solid.svg"
        alt="facebook de thai square"
      />
    </a>
    <a
      href="https://www.instagram.com/explore/locations/1412406309058947/thai-square-restau/"
      ><img
        class="footer_social-media-icon social-media-instagram"
        src="./assets/instagram-brands-solid (1).svg"
        alt="instagram de thai square"
      />
    </a>
  </div>
  <div class="footer_text">
    <p class="nom">&copy; 2023 Thaï Square restau, tous droits réservés</p>
    <div class="footer-links-container">
        <a href="mentions-legales.html" class="footer-link">Mentions Légales</a>
        <a href="politique-de-confidentialite.html" class="footer-link">Gestion des cookies</a>
    </div>
    <p class="credit"> Créé par <a target="blank" href="https://www.timeo-bugarel.fr/" class="footer-link">Timéo Bugarel</a></p>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
