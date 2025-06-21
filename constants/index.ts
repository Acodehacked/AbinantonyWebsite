import { link } from "fs";

export const EVENTS = [
    {
        "title": "MuLearn App Redesign",
        "subtitle": "Reimagining Peer-Learning with an Intuitive Experience",
        "category": ["Mobile App Design", "UI/UX Overhaul", "EdTech"],
        "image": "m12.png",
        "link": "https://mulearn.org",
        "description": "Redesigned the MuLearn mobile application to better align with its mission of fostering a peer-driven learning ecosystem. The new design focuses on improving usability, enhancing visual consistency, and enabling smoother interactions for learners engaging in micro peer groups.",
        "aim": "To craft a digital space that reflects MuLearn’s vision—an environment that encourages collaborative learning, breaks echo chambers, and liberates users from traditional learning limitations through intuitive interfaces and seamless navigation.",
        "challenges": "One of the primary challenges was preserving the core ethos of the MuLearn community while translating it into a modern digital experience. Ensuring consistency across varied content, maintaining inclusivity in design, and enhancing engagement without overwhelming users required a delicate balance.",
        "project_goals": "Deliver a minimalist yet engaging design that empowers users to explore, collaborate, and grow within the platform. Improve content discoverability, foster micro-group interactions, and support personal growth through community-driven activities.",
        "tech_stack": ["Figma", "Flutter", "Firebase", "Material Design 3"],
        "key_features": [
            "Streamlined onboarding experience",
            "Interactive dashboards for micro peer groups",
            "Progress tracking and personalized journeys",
            "Dark mode and accessibility options"
        ],
        "lessons_learned": "Designing for a value-based learning ecosystem requires deep empathy and an understanding of community dynamics. This project emphasized the importance of user feedback loops and iterative design in building meaningful educational platforms."
    }
    ,
    {
        title: "SJCET Bootcamp Website Redesign",
        subtitle: "A Modern Approach to Education Portals",
        category: ["Web Development", "UI/UX Design"],
        image: 'm1.png',
        link: 'https://iedc-sjcet.github.io',
        description: "Redesigned the official SJCET Bootcamp website using Next.js and Figma to create a seamless, modern, and responsive experience.",
        aim: "To enhance user experience by improving navigation, accessibility, and aesthetics, ensuring students and faculty can easily access resources.",
        challenges: "Ensuring seamless integration of legacy content while modernizing UI/UX, optimizing load times, and maintaining accessibility standards.",
        project_goals: "Create a user-friendly platform that facilitates easy access to bootcamp materials and updates.",
        tech_stack: ["Next.js", "Figma", "Tailwind CSS"],
        key_features: ["Modern UI/UX", "Mobile responsiveness", "Improved accessibility"],
        lessons_learned: "Balancing aesthetics with usability and accessibility to enhance the educational experience."
    },
    {
        title: "Hardhat Cloud Tech Company Website",
        subtitle: "Building the Future of Cloud Solutions",
        category: ["Full Stack Development", "Cloud Computing"],
        image: 'm2.png',
        link: 'https://hardhatcloudtech.com',
        description: "Developed a full-stack web application for Hardhat Cloud Tech, integrating advanced backend services with a sleek, user-friendly frontend.",
        aim: "To create a robust online presence for Hardhat Cloud Tech and highlight their cloud-based solutions.",
        challenges: "Ensuring scalability and security while integrating multiple backend services and APIs.",
        project_goals: "Develop a modern and scalable website that effectively showcases the company’s offerings.",
        tech_stack: ["Next.js", "Node.js", "GraphQL", "PostgreSQL"],
        key_features: ["Sleek UI/UX", "Cloud service integrations", "Secure and scalable architecture"],
        lessons_learned: "The importance of API optimization for a fast and seamless user experience."
    },
    {
        title: "Asthra Website Design",
        subtitle: "A Stunning UI/UX Experience for a Futuristic Project",
        category: ["UI/UX Design", "Web Development"],
        image: 'm3.png',
        link: 'https://asthra.in',
        description: "Designed a visually appealing and user-friendly interface for the Asthra project.",
        aim: "To deliver a futuristic web design that aligns with Asthra’s innovative vision.",
        challenges: "Incorporating modern design trends while maintaining usability and accessibility.",
        project_goals: "Create a visually striking and user-centric web experience.",
        tech_stack: ["Figma", "Adobe XD", "Next.js", "Tailwind CSS"],
        key_features: ["Advanced UI animations", "Color psychology", "Seamless navigation"],
        lessons_learned: "Understanding the importance of aligning design choices with brand identity."
    },
    {
        title: "WebcodeCreators Official Webpage",
        subtitle: "Showcasing Innovation and Expertise in Web Development",
        category: ["Company Website", "Web Development"],
        image: 'm4.png',
        link: 'https://webcodecreators.com',
        description: "Built the official website for WebcodeCreators to highlight our projects, services, and expertise.",
        aim: "To establish a professional online presence for WebcodeCreators.",
        challenges: "Ensuring the site effectively communicates the brand’s expertise and capabilities.",
        project_goals: "Develop an engaging and informative company website.",
        tech_stack: ["Next.js", "React", "Tailwind CSS"],
        key_features: ["Portfolio showcase", "Service descriptions", "Contact and inquiry forms"],
        lessons_learned: "The role of clear messaging in an effective company website."
    },
    {
        title: "Arcade Showdown Game",
        subtitle: "An Exciting Gaming Experience with Godot Engine",
        category: ["Game Development", "Logic Programming"],
        image: 'm5.png',
        link: 'https://github.com/Acodehacked/Asthra-ECS-S2-Offline-Games-Official',
        description: "Developed an arcade-style game using Godot Engine and GDScript.",
        aim: "To create a fun and engaging arcade game with multiplayer functionality.",
        challenges: "Implementing real-time multiplayer features and optimizing performance.",
        project_goals: "Deliver an exciting and competitive gaming experience.",
        tech_stack: ["Godot Engine", "GDScript", "Firebase"],
        key_features: ["Multiplayer gameplay", "Leaderboards", "Smooth animations"],
        lessons_learned: "The complexities of real-time multiplayer synchronization."
    },
    {
        title: "Hardhat Cloud Tech Dashboard",
        link: 'https://hardhatcloudtech.com',
        subtitle: "A Comprehensive Admin Panel for Cloud Services",
        category: ["Web Application", "Cloud Computing"],
        image: 'm6.png',
        description: "Built an advanced dashboard for Hardhat Cloud Tech.",
        aim: "To provide an intuitive and powerful admin interface for managing cloud services.",
        challenges: "Ensuring real-time data updates and seamless user interactions.",
        project_goals: "Develop an efficient and feature-rich admin panel.",
        tech_stack: ["Next.js", "Cloudflare", "Razorpay", "NextAuth"],
        key_features: ["Real-time service management", "Payment integration", "Secure authentication"],
        lessons_learned: "The need for optimizing admin interfaces for better workflow management."
    },
    {
        title: "ShowMyAds Dashboard",
        link: 'https://show.manolo.in',
        subtitle: "An Interactive Advertising Management Platform",
        category: ["Web Application", "Data Visualization"],
        image: 'm7.png',
        description: "Developed a dashboard for ShowMyAds with JS Charts, ShadCN components, and Framer Motion animations.",
        aim: "To provide a comprehensive platform for managing and analyzing advertising campaigns.",
        challenges: "Integrating real-time analytics and ensuring high performance while maintaining a smooth UI.",
        project_goals: "Develop a user-friendly dashboard with rich visualization and easy ad management capabilities.",
        tech_stack: ["Next.js", "JS Charts", "ShadCN", "Framer Motion"],
        key_features: ["Real-time ad analytics", "Interactive UI", "Data visualization tools"],
        lessons_learned: "Optimizing large-scale data visualization for better user experience."
    },
    {
        title: "Porukara College Official Website",
        subtitle: "A Digital Gateway for Students and Faculty",
        category: ["Web Development", "Education"],
        image: 'm10.png',
        link: 'https://porukaracollege.in',
        description: "Built the official website for Porukara College using Laravel with Inertia.js, Next.js, and React.",
        aim: "To create a central platform for students and faculty to access resources and updates.",
        challenges: "Ensuring efficient content management and an intuitive user interface for both students and faculty.",
        project_goals: "Develop a responsive and feature-rich educational website.",
        tech_stack: ["Laravel", "Inertia.js", "Next.js", "React"],
        key_features: ["Student and faculty portals", "Content management system", "Interactive event calendar"],
        lessons_learned: "The importance of modular development for maintainability in educational platforms."
    }, {
        title: "Freelix Freelance Management App",
        subtitle: "All-in-One Solution for Freelancers and Clients",
        category: ["Web Application", "Project Management"],
        image: 'm8.png',
        link: 'https://freelix-seven.vercel.app',
        description: "Created a complete freelance management platform that streamlines project collaboration, invoicing, and communication between freelancers and clients.",
        aim: "To provide an all-in-one solution for freelancers and clients to manage projects efficiently.",
        challenges: "Integrating real-time collaboration features and ensuring secure transactions.",
        project_goals: "Develop a seamless platform that simplifies freelance work management.",
        tech_stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        key_features: ["Project collaboration", "Secure payments", "Client-freelancer chat"],
        lessons_learned: "The importance of user experience in productivity-focused applications."
    },
    {
        title: "Datagrind.ai",
        subtitle: "A No-Code Platform for Seamless App Development",
        category: ["AI & Automation", "Web Development"],
        image: 'm9.png',
        link: 'https://datagrind.ai',
        description: "Developed Datagrind.ai, a platform that enables users to create apps effortlessly using Java, Python, Next.js, and GraphQL.",
        aim: "To simplify application development for non-technical users and businesses.",
        challenges: "Building a flexible, no-code environment while maintaining app performance and security.",
        project_goals: "Provide an intuitive interface for building applications without coding.",
        tech_stack: ["Java", "Python", "Next.js", "GraphQL"],
        key_features: ["Drag-and-drop interface", "AI-powered suggestions", "Cloud hosting support"],
        lessons_learned: "Balancing customization with simplicity in no-code platforms."
    },
    {
        title: "Bibliya Web App",
        subtitle: "A Unique Way to Study the Bible",
        category: ["Web Application", "Education"],
        image: 'm11.png',
        link: 'https://bibliya.in',
        description: "Developed Bibliya, a web application that allows users to study the Bible through interactive quizzes.",
        aim: "To make Bible study engaging and interactive.",
        challenges: "Creating an engaging learning experience with gamified quizzes and tracking user progress.",
        project_goals: "Develop an interactive Bible study tool with quizzes and progress tracking.",
        tech_stack: ["AWS", "Cloudflare", "S3", "Hostinger", "Next.js", "React", "PHP"],
        key_features: ["Interactive quizzes", "User progress tracking", "Cloud storage"],
        lessons_learned: "The effectiveness of gamification in educational applications."
    },
];

export const showcase = [
    {
        image: '/d1.png'
    }, {
        image: '/d2.png'
    },
    {
        image: '/d3.png'
    },
    {
        image: '/d5.png'
    },
    {
        image: '/d0.jpg'
    },
]
