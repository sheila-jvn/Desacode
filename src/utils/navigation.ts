// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/Desacode" },
  { name: "Products and Services", url: "/Desacode/services" },
  { name: "Contact", url: "/Desacode/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { name: "About us", url: "/Desacode" },
      { name: "Products", url: "/Desacode/services" },
      { name: "Contact", url: "/Desacode/contact" },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/desacode/",
  instagram: "https://www.instagram.com/desacodeid/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
