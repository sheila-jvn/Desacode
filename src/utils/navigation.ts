// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
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
