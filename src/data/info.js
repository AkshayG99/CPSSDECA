// Central Peel DECA Website Data
// Edit this file to update website content easily

export const siteInfo = {
  title: "Central Peel DECA",
  subtitle: "The Best Business Club... Ever",
  description: "DECA is a prominent student organization that prepares emerging high school leaders in Marketing, Finance, Hospitality, and Business Administration. Operating within high schools internationally, DECA provides students with experiential learning opportunities, competitions, and networking events that enhance their skills in areas such as problem-solving, teamwork, and effective communication.",
  tagline: "Exciting Business Adventures for Central Peel Students",
  instagram: "https://www.instagram.com/cpss.deca/?hl=en",
  email: "cpssdeca@gmail.com"
};

export const executives = {
  presidents: [
    { name: "Keerat", role: "President" },
    { name: "Akshay", role: "President" }
  ],
  leadership: [
    { name: "Kusali", role: "Media Coordinator" },
    { name: "Yashvi", role: "Media Coordinator" },
    { name: "Ved", role: "Secretary" }
  ],
  clusters: {
    finance: {
      director: { name: "Sarah", role: "Director" },
      trainers: [
        { name: "Gurleen", role: "Trainer" },
        { name: "Shrerya", role: "Trainer" },
        { name: "Param", role: "Trainer" }
      ]
    },
    marketing: {
      directors: [
        { name: "Kaavya", role: "Director" },
        { name: "Aswin", role: "Director" }
      ],
      trainers: [
        { name: "Dhanvi", role: "Trainer" },
        { name: "Teena", role: "Trainer" }
      ]
    },
    businessAdmin: {
      director: { name: "Hersh", role: "Director" },
      trainers: [
        { name: "Neha", role: "Trainer" },
        { name: "Imaan", role: "Trainer" }
      ]
    },
    hospitality: {
      director: { name: "Sia", role: "Director" },
      trainers: [
        { name: "Aarav", role: "Trainer" },
        { name: "Sumeher", role: "Trainer" }
      ]
    }
  }
};

export const clusters = {
  marketing: {
    name: "Marketing",
    description: "Explore the dynamic world of marketing through hands-on competitions and real-world scenarios. Learn about digital marketing, brand management, consumer behavior, and market research.",
    icon: "📈",
    color: "bg-blue-600",
    events: [
      "Marketing Mix Challenge",
      "Brand Development Workshop",
      "Social Media Strategy Competition",
      "Consumer Research Project"
    ],
    resources: [
      {
        title: "Marketing Fundamentals Guide",
        link: "#",
        description: "Essential marketing concepts and strategies"
      },
      {
        title: "Digital Marketing Toolkit",
        link: "#",
        description: "Tools and resources for online marketing"
      },
      {
        title: "Case Study Collection",
        link: "#",
        description: "Real marketing case studies and analysis"
      }
    ],
    competitions: [
      "Advertising Campaign",
      "Marketing Communications",
      "Marketing Management",
      "Public Relations Campaign"
    ]
  },
  businessAdmin: {
    name: "Business Administration & Entrepreneurship",
    description: "Develop essential business skills and entrepreneurial mindset. Learn about business operations, leadership, innovation, and startup development.",
    icon: "💼",
    color: "bg-indigo-600",
    events: [
      "Business Plan Competition",
      "Entrepreneurship Workshop",
      "Leadership Summit",
      "Innovation Challenge"
    ],
    resources: [
      {
        title: "Business Plan Template",
        link: "#",
        description: "Step-by-step guide to creating a business plan"
      },
      {
        title: "Entrepreneurship Resources",
        link: "#",
        description: "Tools and guides for aspiring entrepreneurs"
      },
      {
        title: "Leadership Development",
        link: "#",
        description: "Resources for developing leadership skills"
      }
    ],
    competitions: [
      "Business Operations Research",
      "Entrepreneurship Promotion",
      "Human Resources Management",
      "Business Law & Ethics"
    ]
  },
  hospitality: {
    name: "Hospitality & Tourism",
    description: "Discover the exciting world of hospitality and tourism management. Learn about customer service, event planning, travel industry, and hospitality operations.",
    icon: "🏨",
    color: "bg-purple-600",
    events: [
      "Hotel Management Simulation",
      "Event Planning Workshop",
      "Tourism Marketing Challenge",
      "Customer Service Excellence"
    ],
    resources: [
      {
        title: "Hospitality Management Guide",
        link: "#",
        description: "Comprehensive guide to hospitality operations"
      },
      {
        title: "Event Planning Toolkit",
        link: "#",
        description: "Resources for successful event management"
      },
      {
        title: "Tourism Industry Insights",
        link: "#",
        description: "Latest trends in tourism and travel"
      }
    ],
    competitions: [
      "Hotel & Lodging Management",
      "Restaurant & Food Service Management",
      "Travel & Tourism Marketing",
      "Quick Serve Restaurant Management"
    ]
  },
  finance: {
    name: "Finance",
    description: "Master the fundamentals of finance and investment. Learn about financial planning, investment strategies, banking, and economic analysis.",
    icon: "💰",
    color: "bg-green-600",
    events: [
      "Investment Challenge",
      "Financial Planning Workshop",
      "Stock Market Simulation",
      "Banking & Credit Seminar"
    ],
    resources: [
      {
        title: "Financial Planning Basics",
        link: "#",
        description: "Introduction to personal and business finance"
      },
      {
        title: "Investment Strategies",
        link: "#",
        description: "Guide to different investment approaches"
      },
      {
        title: "Economic Analysis Tools",
        link: "#",
        description: "Tools for economic research and analysis"
      }
    ],
    competitions: [
      "Financial Consulting",
      "Personal Financial Literacy",
      "Banking & Financial Services",
      "Business Finance"
    ]
  }
};

export const testimonials = [
  {
    name: "Amnoor Dhaliwal",
    grade: "Grade 11",
    quote: "DECA has given me incredible opportunities to develop my business skills and connect with like-minded peers. The competitions have challenged me to think critically and present confidently.",
    image: `/images/testimonials/amnoor.jpg`
  },
  {
    name: "Aswin Sivakumar",
    grade: "Grade 10",
    quote: "Joining DECA was one of the best decisions I made in high school. The workshops and events have prepared me for my future career in business.",
    image: `/images/testimonials/aswin.jpg`
  },
  {
    name: "Anonymous Student",
    grade: "Grade 9",
    quote: "DECA welcomed me with open arms and helped me discover my passion for entrepreneurship. The supportive community makes learning fun and engaging.",
    image: `/images/testimonials/anonymous.jpg`
  }
];

export const memories = [
  {
    title: "DECA Provincials 2024",
    image: `/images/memories/provincials2024.jpg`,
    description: "Our team competing at the provincial level"
  },
  {
    title: "Business Workshop",
    image: `/images/memories/workshop.jpg`,
    description: "Interactive learning session with industry professionals"
  },
  {
    title: "Team Building Event",
    image: `/images/memories/teambuilding.jpg`,
    description: "Building stronger connections within our DECA family"
  },
  {
    title: "Awards Ceremony",
    image: `/images/memories/awards.jpg`,
    description: "Celebrating our members' achievements"
  },
  {
    title: "Networking Event",
    image: `/images/memories/networking.jpg`,
    description: "Connecting with business leaders and alumni"
  },
  {
    title: "Competition Prep",
    image: `/images/memories/prep.jpg`,
    description: "Intensive preparation sessions for upcoming competitions"
  }
];

export const contact = {
  email: "cpssdeca@gmail.com",
  instagram: "@cpss.deca",
  school: "Central Peel Secondary School",
  address: "300 Vodden St E, Brampton, ON L6V 1N2",
  meetingTime: "Tuesdays and Thursdays, 3:30 PM - 4:30 PM",
  room: "Room 201"
};
