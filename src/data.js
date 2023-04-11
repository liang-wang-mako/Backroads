import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 1, href: '#services', text: 'services' },
  { id: 1, href: '#tours', text: 'tours' }
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' }
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolot sit amet consectetur adipisicing elite. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Endless Hiking',
    text: 'Lorem ipsum dolot sit amet consectetur adipisicing elite. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'Amazing Comfort',
    text: 'Lorem ipsum dolot sit amet consectetur adipisicing elite. Asperiores, officia.',
  }
]

export const tours = [
  {
    id: 1,
    image: tour1,
    title: 'Tibet Adventure',
    date: 'august 26th, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'China',
    duration: 5,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    title: 'best of java',
    date: 'october 1th, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'Indonesia',
    duration: 11,
    price: 2200,
  },
  {
    id: 3,
    image: tour3,
    title: 'explore hong kong',
    date: 'september 15th, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'China',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    image: tour4,
    title: 'explore hong kong',
    date: 'september 15th, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'Kenya',
    duration: 20,
    price: 3300,
  },
]
