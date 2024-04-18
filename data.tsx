import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Dimitri React Resume',
  description: "Site built with React, Next.js and Typescrpt by Dimitri",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Dimtiri Gopaul.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Trinidad based aspiring<strong className="text-stone-100"> Full Stack Software Engineer</strong>, currently working
        as an  <strong className="text-stone-100">Freelance Entrepreneur</strong> helping research, build or implement modern, mobile-responsive webiste, and applications that 
        assisting individuals and small businesses alike to stay update in an ever-connected online.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me <strong className="text-stone-100">Swimming</strong>,
        playing my <strong className="text-stone-100">clarinet</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Trinbadago Islands</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Couv, BC', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Trinidadian / Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Emerging Technologies, Motorcycles, Clarinet, Fortnite', Icon: SparklesIcon},
    {label: 'Study', text: 'St.Marys College, University of West Indies', Icon: AcademicCapIcon},
    {label: 'Current Employment', text: 'Republic Bank', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 7.2,
      }
    ],
  },
  {
    name: 'Administrative Knowledge',
    skills: [
      {
        name: 'Microsoft Word',
        level: 10,
      },
      {
        name: 'Microsoft Excel',
        level: 10,
      },
      {
        name: 'Visual Basic (Microsoft)',
        level: 8,
      },
      {
        name: 'Microsoft Access',
        level: 6,
      },
      {
        name: 'Microsoft PowerPoint',
        level: 6,
      },
    ]
  },
  {
    name: 'Frontend Development',
    skills: [      
      {
        name: 'Flutter',
        level: 5,
      },
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 4,
      },
      {
        name: 'Oracle-SQL',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 2,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Rust',
        level: 2,
      },
      {
        name: 'Golang',
        level: 1,
      },
      {
        name: 'Oracle-SQL',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 7,
      },
      {
        name: 'Swift',
        level: 1,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2019 -Present',
    location: 'University of The West Indies',
    title: 'Bsc. Information Technology',
    content: <p>Earning a Bachelor of Science in Information Technology, I am continuously cultivating a deep understanding 
                of computer science and software development. My studies are allowing me to explore various facets of IT,
                from programming and database management to network security and systems analysis. 
                This rigorous program is continuously refining my technical expertise while also encouraging creative problem-solving and innovation.
                I remain passionate about leveraging technology to drive progress and am eager to contribute to cutting-edge projects that shape the future.
              </p>
  },
  {
    date: 'May 2019',
    location: 'St.Marys College',
    title: 'Graduated A-Levels',
    content: <p><strong className="text-stone-100">The Old Boys of White and Blue! </strong>Achieved a solid foundation in business-related disciplines
                through A-Levels coursework in Business, Accounting, and Economics. Enhanced my analytical and critical thinking skills through in-depth studies,
                which have equipped me with a strong understanding of financial principles and economic theory.
                Additionally, my coursework in Caribbean Studies and Communication Studies broadened my perspective on cultural and societal dynamics,
                fostering a comprehensive worldview and exceptional communication skills.
              </p>,
  },
  {
    date: 'May 2016',
    location: 'St. Marys College',
    title: 'Graduated CXC Level',
    content: <p>Successfully completed my CXC-level diploma with a diverse set of subjects, including Business, Accounting,
                and Economics, which honed my ability to understand financial systems and market trends.
                My studies in Information Technology and Technical Drawing fueled my interest in design and technological innovation,
                providing me with practical skills in software and systems development.
                A strong foundation in Mathematics and English Language further enhanced my problem-solving abilities and communication skills,
                making me a versatile and adaptable learner.
              </p>,
  },  
];

export const experience: TimelineItem[] = [
  {
    date: 'Febuary 2022 - Present',
    location: 'Republic Bank',
    title: 'Clerical Assistant II',
    content: (
      <p>
        In my current role as a customer service agent at a local bank, I am actively assisting customers by providing reliable, up-to-date information
        and troubleshooting mobile and internet banking issues. Through clear communication and problem-solving, I am supporting clients and ensuring their
        banking experience is smooth and efficient.
      </p>
    ),
  },
  
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Keep in touch.',
  description: 'Lets connect! Im always open to discussing exciting opportunities, collaborating on innovative projects, and sharing insights on the latest in tech.',
  items: [
    {
      type: ContactType.Email,
      text: 'gopaul.dimitri@gmail.com',
      href: 'mailto:gopaul.dimitri@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Exchange Housing, Couva, Trinidad',
      href: 'https://maps.app.goo.gl/XEkVzfG72zDeEXtr6',
    },
    {
      type: ContactType.Instagram,
      text: '@dimitr___iii',
      href: 'https://www.instagram.com/dimitr___iii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==/',
    },
    {
      type: ContactType.Github,
      text: 'dimitri@omnitech.dev',
      href: 'https://github.com/omnitechvisions',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/omnitechvisions'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: '#'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: '#'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/dimitr___iii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==/'},
  {label: 'Twitter', Icon: TwitterIcon, href: '#'},
];
