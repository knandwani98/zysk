import { BlogProps, FeatureProps, MenuProps, QuestionProps } from "@/types";

export const FeaturesData: FeatureProps[] = [
  {
    icons: "inbox",
    heading: "Share team inboxes",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icons: "zap",
    heading: "Deliver instant answers",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icons: "reports",
    heading: "Manage your team with reports",
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icons: "customers",
    heading: "Connect with customers",
    text: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icons: "tools",
    heading: "Connect the tools you already use",
    text: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icons: "love",
    heading: "Our people make the difference",
    text: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

export const CompaniesData: string[] = [
  "boltshift",
  "featherDev",
  "globalBank",
  "lightBox",
  "Nietzshe",
  "spherule",
];

export const HeaderMenuData: MenuProps[] = [
  { label: "Home" },
  { label: "Products", child: [] },
  { label: "Resources", child: [] },
  { label: "Pricing" },
];

export const FooterMenuData: MenuProps[] = [
  {
    label: "Products",
    child: [
      { label: "Overview" },
      { label: "Features" },
      { label: "Solutions", new: true },
      { label: "Tutorials" },
      { label: "Pricing" },
      { label: "Releases" },
    ],
  },
  {
    label: "Company",
    child: [
      { label: "About us" },
      { label: "Careers" },
      { label: "Press" },
      { label: "News" },
      { label: "Media Kit" },
      { label: "Contact" },
    ],
  },
  {
    label: "Resources",
    child: [
      { label: "Blog" },
      { label: "Newsletter" },
      { label: "Event" },
      { label: "Help Center" },
      { label: "Tutorials" },
      { label: "Support" },
    ],
  },
  {
    label: "Use Case",
    child: [
      { label: "Startups" },
      { label: "Enterprise" },
      { label: "Government" },
      { label: "SaaS centre" },
      { label: "Marketplaces" },
      { label: "Ecommerce" },
    ],
  },
  {
    label: "Social",
    child: [
      { label: "Twitter" },
      { label: "LinkedIn" },
      { label: "Facebook" },
      { label: "GitHub" },
      { label: "AngelList" },
      { label: "Dribble" },
    ],
  },
  {
    label: "Legal",
    child: [
      { label: "Terms" },
      { label: "Privacy" },
      { label: "Cookies" },
      { label: "Licenses" },
      { label: "Settings" },
      { label: "Contact" },
    ],
  },
];

export const BlogData: BlogProps[] = [
  {
    img: "design",
    label: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: {
      name: "Olivia Rhye",
      avatar: "olivia",
      date: "20 Jan 2024",
    },
  },
  {
    img: "product",
    label: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: {
      name: "Phoenix Baker",
      avatar: "phoenix",
      date: "19 Jan 2024",
    },
  },
  {
    img: "software",
    label: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: {
      name: "Lana Steiner",
      avatar: "lana",
      date: "18 Jan 2024",
    },
  },
];

export const QuestionsData: QuestionProps[] = [
  {
    title: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    isOpen: true,
  },
  {
    title: "Can I change my plan later?",
    answer: "",
    isOpen: false,
  },
  {
    title: "What is your cancellation policy?",
    answer: "",
    isOpen: false,
  },
  {
    title: "Can other info be added to an invoice?",
    answer: "",
    isOpen: false,
  },
  {
    title: "How does billing work?",
    answer: "",
    isOpen: false,
  },
  {
    title: "How do I change my account email?",
    answer: "",
    isOpen: false,
  },
];
