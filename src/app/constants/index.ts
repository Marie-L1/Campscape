import { campsites } from "../data/campsites";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/campsites', key: 'campsites', label: 'Campsites' },
    { href: '/essentials', key: 'essentials', label: 'Outdoor Essentials' },
    { href: '/about', key: 'about', label: 'About Us' },
  ];

// CAMPSITE ROUTES
export const CAMPSITE_ROUTES = campsites.map(camp => ({
  href: `/campsites/${camp.id}`,
  key: camp.id,
  label: camp.name,
}));
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Campscape',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing Groups', 'Hiking Campscape', 'Climbing Guides', 'Fire Starting Tutorials'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'CampscapeAdmin@campscape.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };