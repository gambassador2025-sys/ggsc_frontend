import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import avatar0 from "../assets/team/avatar-0.png";
import avatar1 from "../assets/team/avatar-1.png";
import avatar2 from "../assets/team/avatar-2.png";
import avatar3 from "../assets/team/avatar-3.png";
import avatar4 from "../assets/team/avatar-4.png";
import avatar5 from "../assets/team/avatar-5.png";
import avatar6 from "../assets/team/avatar-6.png";
import avatar7 from "../assets/team/avatar-7.png";
import avatar8 from "../assets/team/avatar-8.png";

// ========================================================
// 1. DATA MODELS & INTERFACES
// ========================================================

export interface TeamMember {
  id: string;
  number: string;
  headerCategory: string;
  profileHeader: string;
  name: string;
  designation: string;
  rolePill: string;
  location: string;
  bio: string;
  recentWork: { title: string; link?: string }[];
  email: string;
  socials: { name: string; url: string }[];
  avatar: string;
  pendulumClass?: string;
}

export type GoogleColor = "blue" | "red" | "yellow" | "green";

export interface Domain {
  id: string;
  number: string;
  headerCategory: string;
  codeBadge: string;
  name: string;
  tagline: string;
  rolePill: string;
  googleColor: GoogleColor;
  description: string;
  focusAreas: string[];
  techStack: string[];
  pendulumClass: string;
  members: TeamMember[];
}

// ========================================================
// 2. MEMBER REPOSITORY (38 Distinct Core Members)
// Executive Committee: 6 Members
// Other 8 Domains: 4 Members Each
// ========================================================

// --- Executive Committee Members (6) ---
const EXEC_AARAV: TeamMember = {
  id: "exec-aarav",
  number: "# 00",
  headerCategory: "EXEC · LEAD",
  profileHeader: "PROFILE // 00",
  name: "Aarav Sharma",
  designation: "Chapter Lead & President",
  rolePill: "Chapter Lead",
  location: "Kolkata, WB",
  bio: "Guiding developer community initiatives, spearheading hackathons, and fostering Google technical mentorship at GGSC UEMK.",
  recentWork: [
    { title: "Global Tech Summit 2026" },
    { title: "Open-Source Incubator" },
  ],
  email: "aarav.sharma@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar0,
  pendulumClass: "animate-pendulum-0",
};

const EXEC_MAYA: TeamMember = {
  id: "exec-maya",
  number: "# 01",
  headerCategory: "EXEC · VP",
  profileHeader: "PROFILE // 01",
  name: "Maya Bennett",
  designation: "Vice President & Creative Director",
  rolePill: "Vice President",
  location: "Kolkata, WB",
  bio: "Directing chapter strategy, brand architecture, cross-track alignment, and institutional partnerships across University campuses.",
  recentWork: [
    { title: "Brand Identity Rebrand" },
    { title: "Motion System v2" },
  ],
  email: "maya.bennett@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar1,
  pendulumClass: "animate-pendulum-1",
};

const EXEC_ROHAN: TeamMember = {
  id: "exec-rohan",
  number: "# 02",
  headerCategory: "EXEC · TECH",
  profileHeader: "PROFILE // 02",
  name: "Rohan Mukherjee",
  designation: "Head of Technology & Cloud",
  rolePill: "Tech Lead",
  location: "Kolkata, WB",
  bio: "Supervising engineering architecture, API standards, cloud infrastructure, and developer hackathon platforms.",
  recentWork: [
    { title: "Cloud Infrastructure v3" },
    { title: "Dev Portal Architecture" },
  ],
  email: "rohan.mukherjee@ggscuemk.org",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar2,
  pendulumClass: "animate-pendulum-2",
};

const EXEC_ANANYA: TeamMember = {
  id: "exec-ananya",
  number: "# 03",
  headerCategory: "EXEC · OPS",
  profileHeader: "PROFILE // 03",
  name: "Ananya Sen",
  designation: "General Secretary & Head of Ops",
  rolePill: "General Secretary",
  location: "Kolkata, WB",
  bio: "Managing institutional governance, council budgets, venue clearances, and annual strategic milestone roadmaps.",
  recentWork: [
    { title: "Operations Blueprint 2026" },
    { title: "Multi-Track Audit" },
  ],
  email: "ananya.sen@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar3,
  pendulumClass: "animate-pendulum-3",
};

const EXEC_DEVANSH: TeamMember = {
  id: "exec-devansh",
  number: "# 04",
  headerCategory: "EXEC · EXTERNAL",
  profileHeader: "PROFILE // 04",
  name: "Devansh Kapoor",
  designation: "Director of External Affairs",
  rolePill: "External Director",
  location: "Kolkata, WB",
  bio: "Liaising with Google Developer Groups, corporate sponsors, tech leaders, and inter-university developer chapters.",
  recentWork: [
    { title: "Google Cloud Sponsorship" },
    { title: "Inter-Collegiate Summit" },
  ],
  email: "devansh.kapoor@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar4,
  pendulumClass: "animate-pendulum-4",
};

const EXEC_ISHITA: TeamMember = {
  id: "exec-ishita",
  number: "# 05",
  headerCategory: "EXEC · COMMUNITY",
  profileHeader: "PROFILE // 05",
  name: "Ishita Roy",
  designation: "Director of Student Experience",
  rolePill: "Student Director",
  location: "Kolkata, WB",
  bio: "Championing diversity in tech, student engagement programs, peer mentorship cohorts, and chapter member growth.",
  recentWork: [
    { title: "Women in Tech Cohort" },
    { title: "Peer Mentorship Wing" },
  ],
  email: "ishita.roy@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ],
  avatar: avatar5,
  pendulumClass: "animate-pendulum-5",
};

// --- 1. Web Development Members (4) ---
const WEB_ETHAN: TeamMember = {
  id: "web-ethan",
  number: "# 01",
  headerCategory: "TECH · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Ethan Vance",
  designation: "Web Development Lead",
  rolePill: "Lead Engineer",
  location: "Kolkata, WB",
  bio: "Architecting resilient distributed web platforms, reactive frontend engines, and developer tooling for community portals.",
  recentWork: [
    { title: "GGSC Chapter Portal v3" },
    { title: "Hackathon Live Dashboard" },
  ],
  email: "ethan.vance@ggscuemk.org",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar5,
  pendulumClass: "animate-pendulum-1",
};

const WEB_MARCUS: TeamMember = {
  id: "web-marcus",
  number: "# 02",
  headerCategory: "TECH · ARCHITECT",
  profileHeader: "PROFILE // 02",
  name: "Marcus Brody",
  designation: "Systems & Cloud Architect",
  rolePill: "Architect",
  location: "Kolkata, WB",
  bio: "Overseeing engineering standards, API design, high-concurrency microservices, Docker clusters, and automated deployments.",
  recentWork: [
    { title: "Edge Compute Router" },
    { title: "Compiler Toolchain v2" },
  ],
  email: "marcus.brody@ggscuemk.org",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar7,
  pendulumClass: "animate-pendulum-2",
};

const WEB_PRIYA: TeamMember = {
  id: "web-priya",
  number: "# 03",
  headerCategory: "TECH · FRONTEND",
  profileHeader: "PROFILE // 03",
  name: "Priya Nair",
  designation: "Senior Frontend Developer",
  rolePill: "Frontend Dev",
  location: "Kolkata, WB",
  bio: "Crafting responsive UI micro-interactions, accessible design systems, and fluid component hierarchies with React 19.",
  recentWork: [
    { title: "Interactive Stage UI" },
    { title: "Design System UI Lib" },
  ],
  email: "priya.nair@ggscuemk.org",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar3,
  pendulumClass: "animate-pendulum-3",
};

const WEB_KABIR: TeamMember = {
  id: "web-kabir",
  number: "# 04",
  headerCategory: "TECH · BACKEND",
  profileHeader: "PROFILE // 04",
  name: "Kabir Das",
  designation: "Backend & Database Engineer",
  rolePill: "Backend Dev",
  location: "Kolkata, WB",
  bio: "Building resilient REST & tRPC APIs, PostgreSQL relational schemas, real-time WebSockets, and authentication gateways.",
  recentWork: [{ title: "Auth Service v3" }, { title: "Realtime Vote Socket" }],
  email: "kabir.das@ggscuemk.org",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar0,
  pendulumClass: "animate-pendulum-4",
};

// --- 2. Graphics Members (4) ---
const GRAPH_NOAH: TeamMember = {
  id: "graph-noah",
  number: "# 01",
  headerCategory: "DESIGN · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Noah Williams",
  designation: "Design Lead & UI/UX Architect",
  rolePill: "Product Designer",
  location: "Kolkata, WB",
  bio: "Designing human-centered design systems, component libraries, and intuitive community platform interfaces.",
  recentWork: [{ title: "Dev Portal Redesign" }, { title: "Design Tokens v3" }],
  email: "noah.williams@ggscuemk.org",
  socials: [
    { name: "Figma", url: "https://figma.com" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar3,
  pendulumClass: "animate-pendulum-1",
};

const GRAPH_AMINA: TeamMember = {
  id: "graph-amina",
  number: "# 02",
  headerCategory: "DESIGN · 3D",
  profileHeader: "PROFILE // 02",
  name: "Amina Yusuf",
  designation: "Brand Designer & 3D Artist",
  rolePill: "Brand Designer",
  location: "Kolkata, WB",
  bio: "Transforming technical visions into recognizable visual languages, event key visuals, and 3D illustrations.",
  recentWork: [
    { title: "Global Summit 2026 3D Art" },
    { title: "Editorial Brand Book" },
  ],
  email: "amina.yusuf@ggscuemk.org",
  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar4,
  pendulumClass: "animate-pendulum-2",
};

const GRAPH_SIDDHARTH: TeamMember = {
  id: "graph-siddharth",
  number: "# 03",
  headerCategory: "DESIGN · BRAND",
  profileHeader: "PROFILE // 03",
  name: "Siddharth Joshi",
  designation: "Visual & Identity Designer",
  rolePill: "Visual Designer",
  location: "Kolkata, WB",
  bio: "Creating event identities, merchandise assets, badges, and keynote presentation collateral with modern aesthetics.",
  recentWork: [
    { title: "Summit Merch Kit" },
    { title: "Annual Visual Identity" },
  ],
  email: "siddharth.j@ggscuemk.org",
  socials: [
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar6,
  pendulumClass: "animate-pendulum-3",
};

const GRAPH_KAVYA: TeamMember = {
  id: "graph-kavya",
  number: "# 04",
  headerCategory: "DESIGN · UI/UX",
  profileHeader: "PROFILE // 04",
  name: "Kavya Verma",
  designation: "Product & Motion Designer",
  rolePill: "UI/UX Specialist",
  location: "Kolkata, WB",
  bio: "Prototyping interactive motion concepts, user journeys, micro-interactions, and accessibility testing protocols.",
  recentWork: [
    { title: "Interactive Event Map" },
    { title: "User Flow Testing" },
  ],
  email: "kavya.verma@ggscuemk.org",
  socials: [
    { name: "Figma", url: "https://figma.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar1,
  pendulumClass: "animate-pendulum-4",
};

// --- 3. Content Members (4) ---
const CONT_ADITYA: TeamMember = {
  id: "cont-aditya",
  number: "# 01",
  headerCategory: "EDITORIAL · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Aditya Sen",
  designation: "Content Lead",
  rolePill: "Editorial Lead",
  location: "Kolkata, WB",
  bio: "Directing technical documentation, workshop curricula, whitepapers, and narrative storytelling across chapter releases.",
  recentWork: [
    { title: "AI/ML Curriculum 2026" },
    { title: "GGSC Annual Chronicle" },
  ],
  email: "aditya.sen@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar2,
  pendulumClass: "animate-pendulum-1",
};

const CONT_SNEHA: TeamMember = {
  id: "cont-sneha",
  number: "# 02",
  headerCategory: "EDITORIAL · WRITER",
  profileHeader: "PROFILE // 02",
  name: "Sneha Ganguly",
  designation: "Senior Technical Writer",
  rolePill: "Tech Writer",
  location: "Kolkata, WB",
  bio: "Authoring developer step-by-step guides, API references, workshop handbooks, and code walk-throughs.",
  recentWork: [
    { title: "Cloud Study Jam Guide" },
    { title: "Open Source Primer" },
  ],
  email: "sneha.g@ggscuemk.org",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar6,
  pendulumClass: "animate-pendulum-2",
};

const CONT_TANVI: TeamMember = {
  id: "cont-tanvi",
  number: "# 03",
  headerCategory: "EDITORIAL · RESEARCH",
  profileHeader: "PROFILE // 03",
  name: "Tanvi Kulkarni",
  designation: "Research Editor & Copywriter",
  rolePill: "Research Editor",
  location: "Kolkata, WB",
  bio: "Researching emerging developer technologies, developer sentiment surveys, and drafting keynote presenter scripts.",
  recentWork: [
    { title: "WebAssembly Deep Dive" },
    { title: "Keynote Scripting Kit" },
  ],
  email: "tanvi.k@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar4,
  pendulumClass: "animate-pendulum-3",
};

const CONT_VIKRAM: TeamMember = {
  id: "cont-vikram",
  number: "# 04",
  headerCategory: "EDITORIAL · BLOGS",
  profileHeader: "PROFILE // 04",
  name: "Vikramaditya Roy",
  designation: "Community Scribe & Blogger",
  rolePill: "Tech Blogger",
  location: "Kolkata, WB",
  bio: "Documenting hackathon milestones, attendee spotlights, developer retrospectives, and publishing to Dev.to.",
  recentWork: [
    { title: "Hackathon Winners Spotlight" },
    { title: "Weekly Dev Newsletter" },
  ],
  email: "vikram.roy@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "GitHub", url: "https://github.com" },
  ],
  avatar: avatar7,
  pendulumClass: "animate-pendulum-4",
};

// --- 4. Student Operations Members (4) ---
const OPS_SOPHIA: TeamMember = {
  id: "ops-sophia",
  number: "# 01",
  headerCategory: "OPS · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Sophia Chen",
  designation: "Student Operations Director",
  rolePill: "Operations Lead",
  location: "Kolkata, WB",
  bio: "Directing hackathon logistics, speaker scheduling, resource allocation, and multi-campus event operations.",
  recentWork: [
    { title: "Hackathon Ops Engine" },
    { title: "Volunteer Dispatch System" },
  ],
  email: "sophia.chen@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar6,
  pendulumClass: "animate-pendulum-1",
};

const OPS_ARJUN: TeamMember = {
  id: "ops-arjun",
  number: "# 02",
  headerCategory: "OPS · LOGISTICS",
  profileHeader: "PROFILE // 02",
  name: "Arjun Singhania",
  designation: "Logistics & Stage Manager",
  rolePill: "Logistics Lead",
  location: "Kolkata, WB",
  bio: "Supervising hardware staging, networking bandwidth, audio-visual equipment, and auditorium seating grids.",
  recentWork: [
    { title: "Network Reliability Grid" },
    { title: "Stage AV Infrastructure" },
  ],
  email: "arjun.s@ggscuemk.org",
  socials: [{ name: "Linkedin", url: "https://linkedin.com" }],
  avatar: avatar0,
  pendulumClass: "animate-pendulum-2",
};

const OPS_DIYA: TeamMember = {
  id: "ops-diya",
  number: "# 03",
  headerCategory: "OPS · HOSPITALITY",
  profileHeader: "PROFILE // 03",
  name: "Diya Chatterjee",
  designation: "Speaker & Delegate Liaison",
  rolePill: "Speaker Concierge",
  location: "Kolkata, WB",
  bio: "Managing speaker hospitality, jury coordination, travel itineraries, and VIP guest accommodations.",
  recentWork: [
    { title: "Speaker Concierge Portal" },
    { title: "Jury Briefing Kit" },
  ],
  email: "diya.c@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar3,
  pendulumClass: "animate-pendulum-3",
};

const OPS_FARHAN: TeamMember = {
  id: "ops-farhan",
  number: "# 04",
  headerCategory: "OPS · INVENTORY",
  profileHeader: "PROFILE // 04",
  name: "Farhan Akhtar",
  designation: "Resources & Inventory Manager",
  rolePill: "Inventory Manager",
  location: "Kolkata, WB",
  bio: "Tracking swag inventory, badge disbursements, cloud credit allocation, and hardware testing kits.",
  recentWork: [
    { title: "Realtime Inventory Tracker" },
    { title: "Swag Distribution Flow" },
  ],
  email: "farhan.a@ggscuemk.org",
  socials: [{ name: "Linkedin", url: "https://linkedin.com" }],
  avatar: avatar5,
  pendulumClass: "animate-pendulum-4",
};

// --- 5. Social Media Members (4) ---
const SOC_ZARA: TeamMember = {
  id: "soc-zara",
  number: "# 01",
  headerCategory: "MEDIA · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Zara Patel",
  designation: "Social Media & Campaigns Lead",
  rolePill: "Social Lead",
  location: "Kolkata, WB",
  bio: "Driving chapter digital visibility, organic social campaigns, influencer collaborations, and event buzz.",
  recentWork: [
    { title: "Summit Viral Campaign" },
    { title: "Monthly Dev Spotlight" },
  ],
  email: "zara.patel@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar8,
  pendulumClass: "animate-pendulum-1",
};

const SOC_RITIK: TeamMember = {
  id: "soc-ritik",
  number: "# 02",
  headerCategory: "MEDIA · CAMPAIGNS",
  profileHeader: "PROFILE // 02",
  name: "Ritik Mehra",
  designation: "Digital Campaign Strategist",
  rolePill: "Campaign Strategist",
  location: "Kolkata, WB",
  bio: "Analyzing engagement metrics, designing conversion funnels, and optimizing developer registration announcements.",
  recentWork: [
    { title: "Hackathon Registration Surge" },
    { title: "Tech Trend Threads" },
  ],
  email: "ritik.m@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar2,
  pendulumClass: "animate-pendulum-2",
};

const SOC_MEERA: TeamMember = {
  id: "soc-meera",
  number: "# 03",
  headerCategory: "MEDIA · VISUAL",
  profileHeader: "PROFILE // 03",
  name: "Meera Iyer",
  designation: "Social Content Creator",
  rolePill: "Content Creator",
  location: "Kolkata, WB",
  bio: "Producing snappy motion snippets, interactive polls, carousel graphics, and real-time event updates.",
  recentWork: [
    { title: "Speaker Card Carousels" },
    { title: "Live Tweet Storm Kit" },
  ],
  email: "meera.i@ggscuemk.org",
  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar1,
  pendulumClass: "animate-pendulum-3",
};

const SOC_NIKHIL: TeamMember = {
  id: "soc-nikhil",
  number: "# 04",
  headerCategory: "MEDIA · ANALYTICS",
  profileHeader: "PROFILE // 04",
  name: "Nikhil Sharma",
  designation: "Community Analytics Specialist",
  rolePill: "Analytics Specialist",
  location: "Kolkata, WB",
  bio: "Monitoring impression curves, audience demographics, follower growth, and benchmark reporting for sponsors.",
  recentWork: [
    { title: "Quarterly Reach Report" },
    { title: "Audience Demographics v2" },
  ],
  email: "nikhil.s@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar7,
  pendulumClass: "animate-pendulum-4",
};

// --- 6. Cinematography Members (4) ---
const CINE_LEO: TeamMember = {
  id: "cine-leo",
  number: "# 01",
  headerCategory: "PRODUCTION · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Leo Carter",
  designation: "Cinematography & Video Lead",
  rolePill: "Production Lead",
  location: "Kolkata, WB",
  bio: "Directing cinematic event films, motion typography, and technical narratives documenting developer breakthroughs.",
  recentWork: [
    { title: "Chapter Aftermovie 2026" },
    { title: "Kinetic Typography Kit" },
  ],
  email: "leo.carter@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar2,
  pendulumClass: "animate-pendulum-1",
};

const CINE_KUNAL: TeamMember = {
  id: "cine-kunal",
  number: "# 02",
  headerCategory: "PRODUCTION · CAMERA",
  profileHeader: "PROFILE // 02",
  name: "Kunal Ghosh",
  designation: "Director of Photography",
  rolePill: "Lead DP",
  location: "Kolkata, WB",
  bio: "Operating prime cinema camera rigs, lighting set-pieces, multi-cam live switching, and audio capture.",
  recentWork: [
    { title: "Keynote Multi-Cam Stream" },
    { title: "Cinema Lighting Grid" },
  ],
  email: "kunal.g@ggscuemk.org",
  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar0,
  pendulumClass: "animate-pendulum-2",
};

const CINE_TRISHA: TeamMember = {
  id: "cine-trisha",
  number: "# 03",
  headerCategory: "PRODUCTION · POST",
  profileHeader: "PROFILE // 03",
  name: "Trisha Roy",
  designation: "Senior Video Editor & Colorist",
  rolePill: "Senior Editor",
  location: "Kolkata, WB",
  bio: "Editing dynamic sequence cuts, grading DaVinci Resolve color profiles, and mastering crisp Dolby audio.",
  recentWork: [
    { title: "Teaser Trailer Color Grade" },
    { title: "Developer Reel 4K" },
  ],
  email: "trisha.r@ggscuemk.org",
  socials: [{ name: "Linkedin", url: "https://linkedin.com" }],
  avatar: avatar4,
  pendulumClass: "animate-pendulum-3",
};

const CINE_SAMIR: TeamMember = {
  id: "cine-samir",
  number: "# 04",
  headerCategory: "PRODUCTION · MOTION",
  profileHeader: "PROFILE // 04",
  name: "Samir Das",
  designation: "Motion Graphics & VFX Artist",
  rolePill: "Motion Artist",
  location: "Kolkata, WB",
  bio: "Animating kinetic intro bumpers, title lower-thirds, logo stingers, and visual effects for all video content.",
  recentWork: [{ title: "Stream Overlay HUD" }, { title: "3D Intro Stinger" }],
  email: "samir.d@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar5,
  pendulumClass: "animate-pendulum-4",
};

// --- 7. PR & Outreach Members (4) ---
const PR_RADHIKA: TeamMember = {
  id: "pr-radhika",
  number: "# 01",
  headerCategory: "OUTREACH · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Radhika Singhal",
  designation: "PR & Strategic Alliances Lead",
  rolePill: "Outreach Lead",
  location: "Kolkata, WB",
  bio: "Forging corporate sponsorships, securing tech partnerships, negotiating cloud perks, and university alliances.",
  recentWork: [
    { title: "Enterprise Sponsor Deck" },
    { title: "Inter-Campus Chapter Bridge" },
  ],
  email: "radhika.s@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar1,
  pendulumClass: "animate-pendulum-1",
};

const PR_VARUN: TeamMember = {
  id: "pr-varun",
  number: "# 02",
  headerCategory: "OUTREACH · SPONSORS",
  profileHeader: "PROFILE // 02",
  name: "Varun Chawla",
  designation: "Corporate Sponsorship Manager",
  rolePill: "Sponsor Manager",
  location: "Kolkata, WB",
  bio: "Managing sponsor deliverables, booth allocations, branding compliance, and tech sponsor career fairs.",
  recentWork: [
    { title: "Sponsor Booth Layout 2026" },
    { title: "Perk Disbursement Sheet" },
  ],
  email: "varun.c@ggscuemk.org",
  socials: [{ name: "Linkedin", url: "https://linkedin.com" }],
  avatar: avatar7,
  pendulumClass: "animate-pendulum-2",
};

const PR_APARNA: TeamMember = {
  id: "pr-aparna",
  number: "# 03",
  headerCategory: "OUTREACH · MEDIA",
  profileHeader: "PROFILE // 03",
  name: "Aparna Bose",
  designation: "Media Relations & Press Officer",
  rolePill: "Press Officer",
  location: "Kolkata, WB",
  bio: "Drafting press statements, media press kits, managing journalist invites, and local newspaper features.",
  recentWork: [
    { title: "Press Release Hub" },
    { title: "University Media Coverage" },
  ],
  email: "aparna.b@ggscuemk.org",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar6,
  pendulumClass: "animate-pendulum-3",
};

const PR_HARSH: TeamMember = {
  id: "pr-harsh",
  number: "# 04",
  headerCategory: "OUTREACH · COMMUNITY",
  profileHeader: "PROFILE // 04",
  name: "Harshvardhan Rao",
  designation: "Campus Ambassador Director",
  rolePill: "Ambassador Lead",
  location: "Kolkata, WB",
  bio: "Orchestrating campus ambassador networks across 20+ partner colleges for hackathon outreach and roadshows.",
  recentWork: [
    { title: "Ambassador Network 2026" },
    { title: "Inter-College Roadshow" },
  ],
  email: "harsh.rao@ggscuemk.org",
  socials: [{ name: "Linkedin", url: "https://linkedin.com" }],
  avatar: avatar0,
  pendulumClass: "animate-pendulum-4",
};

// --- 8. Volunteer Members (4) ---
const VOL_AYUSH: TeamMember = {
  id: "vol-ayush",
  number: "# 01",
  headerCategory: "COMMUNITY · LEAD",
  profileHeader: "PROFILE // 01",
  name: "Ayush Tiwari",
  designation: "Volunteer Lead",
  rolePill: "Volunteer Lead",
  location: "Kolkata, WB",
  bio: "Leading the 50+ student volunteer force, assigning floor duties, conducting orientation drills, and crowd flows.",
  recentWork: [
    { title: "Volunteer Playbook 2026" },
    { title: "Floor Crisis Response" },
  ],
  email: "ayush.t@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
  avatar: avatar8,
  pendulumClass: "animate-pendulum-1",
};

const VOL_POOJA: TeamMember = {
  id: "vol-pooja",
  number: "# 02",
  headerCategory: "COMMUNITY · HELPDESK",
  profileHeader: "PROFILE // 02",
  name: "Pooja Hegde",
  designation: "Help-Desk & Triage Coordinator",
  rolePill: "Help-Desk Lead",
  location: "Kolkata, WB",
  bio: "Directing student help-desks, registration desk badge printing, query resolution, and lost-and-found.",
  recentWork: [
    { title: "Fast-Track Check-In Desk" },
    { title: "Attendee FAQ Dispatch" },
  ],
  email: "pooja.h@ggscuemk.org",
  socials: [{ name: "Linkedin", url: "https://linkedin.com" }],
  avatar: avatar3,
  pendulumClass: "animate-pendulum-2",
};

const VOL_NEEL: TeamMember = {
  id: "vol-neel",
  number: "# 03",
  headerCategory: "COMMUNITY · PEER",
  profileHeader: "PROFILE // 03",
  name: "Neel Majumdar",
  designation: "Peer Mentorship Supervisor",
  rolePill: "Peer Supervisor",
  location: "Kolkata, WB",
  bio: "Connecting first-time hackathon builders with senior domain mentors for real-time debugging and code reviews.",
  recentWork: [
    { title: "Peer Debug Sprint" },
    { title: "Mentor Matching Desk" },
  ],
  email: "neel.m@ggscuemk.org",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
  ],
  avatar: avatar2,
  pendulumClass: "animate-pendulum-3",
};

const VOL_SIMRAN: TeamMember = {
  id: "vol-simran",
  number: "# 04",
  headerCategory: "COMMUNITY · WELFARE",
  profileHeader: "PROFILE // 04",
  name: "Simran Kaur",
  designation: "Volunteer Welfare & Community Lead",
  rolePill: "Welfare Lead",
  location: "Kolkata, WB",
  bio: "Recognizing volunteer contributions, orchestrating certificates of merit, meals, and welfare throughout builds.",
  recentWork: [
    { title: "Volunteer Welfare Kit" },
    { title: "Certificate Portal 2026" },
  ],
  email: "simran.k@ggscuemk.org",
  socials: [
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ],
  avatar: avatar4,
  pendulumClass: "animate-pendulum-4",
};

// ========================================================
// 3. DOMAINS CONFIGURATION (Strict Order as Requested)
// Top: Executive Committee (6 Members)
// Row 1: Web Dev, Graphics, Content, Student Operations (4 each)
// Row 2: Social Media, Cinematography, PR / Outreach, Volunteer (4 each)
// ========================================================

const LEAD_DOMAIN: Domain = {
  id: "exec-committee",
  number: "# 00",
  headerCategory: "DOMAIN // EXECUTIVE",
  codeBadge: "EC-00",
  name: "Executive Committee",
  tagline: "Strategic Governance & Chapter Vision",
  rolePill: "Executive Board",
  googleColor: "blue",
  description:
    "Spearheading chapter strategy, international Google relations, high-impact hackathons, and institutional compliance across all technical tracks at UEMK.",
  focusAreas: [
    "Annual Strategic Roadmap",
    "Global Google Partnership",
    "Track Governance & Quality",
  ],
  techStack: [
    "Leadership",
    "Event Direction",
    "Chapter Strategy",
    "Gov Relations",
  ],
  pendulumClass: "animate-pendulum-0",
  members: [
    EXEC_AARAV,
    EXEC_MAYA,
    EXEC_ROHAN,
    EXEC_ANANYA,
    EXEC_DEVANSH,
    EXEC_ISHITA,
  ],
};

const ROW_DOMAINS: Domain[] = [
  // First Row (1-4)
  {
    id: "web-dev",
    number: "# 01",
    headerCategory: "DOMAIN // ENGINEERING",
    codeBadge: "WD-01",
    name: "Web Development",
    tagline: "Reactive Platforms & Cloud Systems",
    rolePill: "Software Eng",
    googleColor: "blue",
    description:
      "Architecting reactive web platforms, cloud microservices, interactive hackathon registries, and open-source developer toolkits with high standards of performance and accessibility.",
    focusAreas: [
      "Full-Stack Reactive Apps",
      "Real-time State Engines",
      "Cloud Deployment & CI/CD",
    ],
    techStack: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind",
      "Docker",
    ],
    pendulumClass: "animate-pendulum-1",
    members: [WEB_ETHAN, WEB_MARCUS, WEB_PRIYA, WEB_KABIR],
  },
  {
    id: "graphics",
    number: "# 02",
    headerCategory: "DOMAIN // CREATIVE",
    codeBadge: "DS-02",
    name: "Graphics",
    tagline: "Design Systems & 3D Visual Art",
    rolePill: "Design Lab",
    googleColor: "red",
    description:
      "Crafting human-centered UI/UX design systems, bespoke 3D assets, identity guidelines, and key visual assets that define the distinguished aesthetic benchmark of GGSC.",
    focusAreas: [
      "Design Token Libraries",
      "3D Isometric Renders",
      "Keynote Presentation Art",
    ],
    techStack: ["Figma", "Blender", "Illustrator", "Spline", "Photoshop"],
    pendulumClass: "animate-pendulum-2",
    members: [GRAPH_NOAH, GRAPH_AMINA, GRAPH_SIDDHARTH, GRAPH_KAVYA],
  },
  {
    id: "content",
    number: "# 03",
    headerCategory: "DOMAIN // EDITORIAL",
    codeBadge: "ED-03",
    name: "Content",
    tagline: "Technical Scribes & Curriculum",
    rolePill: "Editorial Lab",
    googleColor: "yellow",
    description:
      "Authoring comprehensive technical articles, workshop curricula, developer release notes, and insightful retrospective blogs that articulate community breakthroughs.",
    focusAreas: [
      "Technical Documentation",
      "Developer Workshop Curricula",
      "Chapter Retrospective Blogs",
    ],
    techStack: [
      "Markdown",
      "Notion",
      "Dev.to",
      "Grammarly",
      "Technical Research",
    ],
    pendulumClass: "animate-pendulum-3",
    members: [CONT_ADITYA, CONT_SNEHA, CONT_TANVI, CONT_VIKRAM],
  },
  {
    id: "student-ops",
    number: "# 04",
    headerCategory: "DOMAIN // OPERATIONS",
    codeBadge: "OP-04",
    name: "Student Operations",
    tagline: "Event Logistics & Ground Execution",
    rolePill: "Operations Hub",
    googleColor: "green",
    description:
      "Coordinating on-the-ground hackathon logistics, speaker hospitality, venue infrastructure, registration pipelines, and multi-track timetable synchronizations.",
    focusAreas: [
      "Hackathon Logistics Engine",
      "Speaker & Judge Onboarding",
      "Institutional Compliance",
    ],
    techStack: ["Google Workspace", "Jira", "Eventbrite", "Airtable", "Slack"],
    pendulumClass: "animate-pendulum-4",
    members: [OPS_SOPHIA, OPS_ARJUN, OPS_DIYA, OPS_FARHAN],
  },

  // Second Row (5-8)
  {
    id: "social-media",
    number: "# 05",
    headerCategory: "DOMAIN // MEDIA",
    codeBadge: "SM-05",
    name: "Social Media",
    tagline: "Digital Pulse & Global Campaigns",
    rolePill: "Communications",
    googleColor: "blue",
    description:
      "Driving engagement across global developer networks, curating viral tech drops, managing institutional handles, and amplifying chapter milestones to global audiences.",
    focusAreas: [
      "Multi-channel Campaigns",
      "Technical Infographics",
      "Community Polls & Threads",
    ],
    techStack: ["LinkedIn", "X/Twitter", "Instagram", "Buffer", "Canva"],
    pendulumClass: "animate-pendulum-5",
    members: [SOC_ZARA, SOC_RITIK, SOC_MEERA, SOC_NIKHIL],
  },
  {
    id: "cinematography",
    number: "# 06",
    headerCategory: "DOMAIN // PRODUCTION",
    codeBadge: "CN-06",
    name: "Cinematography",
    tagline: "Motion Film & Storytelling",
    rolePill: "Cinema Studio",
    googleColor: "red",
    description:
      "Producing cinematic aftermovies, high-framerate documentary recaps, motion graphic trailers, and developer spotlight interviews that capture the raw energy of builds.",
    focusAreas: [
      "Cinematic Event Documentaries",
      "Motion Graphic Teasers",
      "Studio Audio/Visual Rigs",
    ],
    techStack: [
      "DaVinci Resolve",
      "Premiere Pro",
      "After Effects",
      "Sony Cinema",
    ],
    pendulumClass: "animate-pendulum-6",
    members: [CINE_LEO, CINE_KUNAL, CINE_TRISHA, CINE_SAMIR],
  },
  {
    id: "pr-outreach",
    number: "# 07",
    headerCategory: "DOMAIN // OUTREACH",
    codeBadge: "PR-07",
    name: "PR & Outreach",
    tagline: "Strategic Alliances & Industry Grants",
    rolePill: "Strategic Guild",
    googleColor: "green",
    description:
      "Forging strategic alliances with industry leaders, tech sponsors, venture incubators, and peer student clubs to secure prizes, mentorship, and cloud credits.",
    focusAreas: [
      "Corporate Sponsorships",
      "Inter-College Partnerships",
      "Keynote Speaker Outreach",
    ],
    techStack: [
      "Pitch Decks",
      "CRM Portals",
      "Outreach Pipelines",
      "Liaison Kits",
    ],
    pendulumClass: "animate-pendulum-7",
    members: [PR_RADHIKA, PR_VARUN, PR_APARNA, PR_HARSH],
  },
  {
    id: "volunteer",
    number: "# 08",
    headerCategory: "DOMAIN // COMMUNITY",
    codeBadge: "VL-08",
    name: "Volunteer",
    tagline: "Peer Mentorship & Attendee Triage",
    rolePill: "Volunteer Corps",
    googleColor: "yellow",
    description:
      "Mobilizing student volunteers to facilitate workshop help-desks, crowd routing, registration triage, and peer coding assistance during all major chapter assemblies.",
    focusAreas: [
      "Peer Coding Help-Desks",
      "Registration Floor Triage",
      "New Member Onboarding",
    ],
    techStack: [
      "Discord",
      "Mentorship Roster",
      "Ground Coordination",
      "Check-in Desk",
    ],
    pendulumClass: "animate-pendulum-8",
    members: [VOL_AYUSH, VOL_POOJA, VOL_NEEL, VOL_SIMRAN],
  },
];

// ========================================================
// 4. BESPOKE PRECISION VECTOR EMBLEMS (High-Craft Line Art)
// Zero AI Clipart — Precision Technical Vector Geometry
// ========================================================

function DomainEmblem({ domain }: { domain: Domain }) {
  const renderInsignia = () => {
    switch (domain.id) {
      case "exec-committee":
        return (
          // Executive Chapter Astrolabe & Leadership Crest Seal
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Outer Cardinal Azimuth Dial with Degree Marks */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#213960"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="1 3"
            />
            <circle
              cx="50"
              cy="50"
              r="41"
              stroke="#213960"
              strokeWidth="1.2"
              strokeOpacity="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#4285F4"
              strokeWidth="1"
              strokeOpacity="0.4"
            />

            {/* Cardinal Degree Ticks (0, 90, 180, 270) */}
            <path
              d="M50 5V11 M50 89V95 M5 50H11 M89 50H95"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18 18L22 22 M78 78L82 82 M18 82L22 78 M78 22L82 18"
              stroke="#213960"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />

            {/* Octagram Dual-Tone Leadership Star with Gold & Navy Facets */}
            <path
              d="M50 14L54 36L75 25L64 46L86 50L64 54L75 75L54 64L50 86L46 64L25 75L36 54L14 50L36 46L25 25L46 36Z"
              fill="url(#exec-facet-gradient)"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Inner Core Compass Rose & Google Blue Jewel Bearing */}
            <circle
              cx="50"
              cy="50"
              r="12"
              fill="#0A1623"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="5" fill="#4285F4" />
            <circle cx="50" cy="50" r="2" fill="#FFFFFF" />

            {/* Precision Optical Hairlines */}
            <line
              x1="28"
              y1="50"
              x2="72"
              y2="50"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeOpacity="0.6"
            />
            <line
              x1="50"
              y1="28"
              x2="50"
              y2="72"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeOpacity="0.6"
            />

            <defs>
              <linearGradient
                id="exec-facet-gradient"
                x1="14"
                y1="14"
                x2="86"
                y2="86"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFF2A3" />
                <stop offset="30%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#1B3154" />
                <stop offset="100%" stopColor="#0A1623" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "web-dev":
        return (
          // Distributed Cloud Architecture & Layered Silicon Compiler
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Background Perspective Grid */}
            <path
              d="M15 35L50 15L85 35L50 55Z"
              stroke="#4285F4"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              strokeDasharray="2 2"
            />
            <path
              d="M15 65L50 45L85 65L50 85Z"
              stroke="#4285F4"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              strokeDasharray="2 2"
            />

            {/* Isometric Platform 3 (Base Cloud Tier) */}
            <path
              d="M22 68L50 52L78 68L50 84Z"
              fill="#E8F1FC"
              stroke="#4285F4"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M22 68V74L50 90L78 74V68"
              stroke="#174EA6"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            {/* Vertical Data Bus Traces */}
            <path
              d="M30 63V47 M70 63V47 M50 52V36"
              stroke="#4285F4"
              strokeWidth="1.2"
              strokeDasharray="2 1.5"
            />

            {/* Isometric Platform 2 (Microservices Engine Tier) */}
            <path
              d="M25 48L50 34L75 48L50 62Z"
              fill="#FFFFFF"
              stroke="#174EA6"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M25 48V52L50 66L75 52V48"
              stroke="#174EA6"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            {/* Floating Top Core: Monospaced Syntax Gateway < / > */}
            <g transform="translate(0, -6)">
              <rect
                x="36"
                y="22"
                width="28"
                height="20"
                rx="4"
                fill="#0A1623"
                stroke="#4285F4"
                strokeWidth="1.5"
              />
              <path
                d="M42 30L39 32L42 34"
                stroke="#4285F4"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58 30L61 32L58 34"
                stroke="#4285F4"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M52 27L48 37"
                stroke="#34A853"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </g>

            {/* Logic Bus Status Indicators */}
            <circle cx="34" cy="50" r="2" fill="#EA4335" />
            <circle cx="50" cy="59" r="2" fill="#FBBC05" />
            <circle cx="66" cy="50" r="2" fill="#34A853" />
          </svg>
        );

      case "graphics":
        return (
          // Logarithmic Golden Ratio Spiral & Precision Vector Drafting Engine
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Coordinate Crosshairs and Alignment Grid */}
            <line
              x1="12"
              y1="50"
              x2="88"
              y2="50"
              stroke="#EA4335"
              strokeWidth="0.8"
              strokeOpacity="0.25"
            />
            <line
              x1="50"
              y1="12"
              x2="50"
              y2="88"
              stroke="#EA4335"
              strokeWidth="0.8"
              strokeOpacity="0.25"
            />
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#213960"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="3 3"
            />
            <circle
              cx="50"
              cy="50"
              r="24"
              stroke="#EA4335"
              strokeWidth="1"
              strokeOpacity="0.3"
            />

            {/* Mathematical Golden Ratio Spiral Arc */}
            <path
              d="M50 50C50 44 46 40 40 40C32 40 26 46 26 54C26 66 36 76 50 76C68 76 82 62 82 44C82 22 64 8 42 8"
              stroke="#EA4335"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Drafting Vector Pen Tangent Line & Anchors */}
            <line
              x1="26"
              y1="74"
              x2="74"
              y2="26"
              stroke="#213960"
              strokeWidth="1.2"
              strokeDasharray="2 2"
            />

            {/* Anchor Points with Direction Control Handles */}
            <rect
              x="23"
              y="71"
              width="6"
              height="6"
              fill="#FFFFFF"
              stroke="#0A1623"
              strokeWidth="1.6"
            />
            <rect
              x="71"
              y="23"
              width="6"
              height="6"
              fill="#FFFFFF"
              stroke="#0A1623"
              strokeWidth="1.6"
            />
            <circle
              cx="42"
              cy="8"
              r="3"
              fill="#EA4335"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />

            {/* Chiseled Technical Stylus Nib */}
            <path
              d="M44 44L56 32L62 38L50 50L44 51L44 44Z"
              fill="#0A1623"
              stroke="#D4AF37"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <circle cx="54" cy="40" r="1.2" fill="#FFFFFF" />
          </svg>
        );

      case "content":
        return (
          // Precision Typographical Architecture & Chiseled Fountain Pen Nib
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Typographical Editorial Baseline Grid */}
            <line
              x1="16"
              y1="24"
              x2="84"
              y2="24"
              stroke="#FBBC05"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="2 2"
            />
            <line
              x1="16"
              y1="40"
              x2="84"
              y2="40"
              stroke="#FBBC05"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              x1="16"
              y1="56"
              x2="84"
              y2="56"
              stroke="#FBBC05"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              x1="16"
              y1="72"
              x2="84"
              y2="72"
              stroke="#FBBC05"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="2 2"
            />

            {/* Elegant Typographic Ampersand Serif Ligature Structure */}
            <path
              d="M38 72C28 72 22 66 22 58C22 49 28 44 35 40C31 34 31 28 35 24C38 20 44 20 48 24C52 28 50 36 44 42L58 64C63 70 70 72 76 72"
              stroke="#0A1623"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeOpacity="0.75"
            />

            {/* Precision Technical Fountain Pen Nib */}
            <g transform="translate(10, -4)">
              <path
                d="M56 22L72 38L62 68L50 82L38 68L28 38L44 22H56Z"
                fill="url(#content-gold-nib)"
                stroke="#B06000"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              {/* Nib Breathing Hole & Slit */}
              <circle cx="50" cy="54" r="3" fill="#0A1623" />
              <line
                x1="50"
                y1="57"
                x2="50"
                y2="82"
                stroke="#0A1623"
                strokeWidth="1.5"
              />
            </g>

            <defs>
              <linearGradient
                id="content-gold-nib"
                x1="28"
                y1="22"
                x2="72"
                y2="82"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFF8D6" />
                <stop offset="50%" stopColor="#F9AB00" />
                <stop offset="100%" stopColor="#B06000" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "student-ops":
        return (
          // Dual-Gear Chronometer & Event Logistics Telemetry Hub
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Concentric Radar Sweeping Calibration Rings */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="#34A853"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="2 3"
            />
            <circle
              cx="50"
              cy="50"
              r="32"
              stroke="#34A853"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
            <line
              x1="50"
              y1="6"
              x2="50"
              y2="94"
              stroke="#34A853"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="3 3"
            />
            <line
              x1="6"
              y1="50"
              x2="94"
              y2="50"
              stroke="#34A853"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="3 3"
            />

            {/* Primary Precision Mechanical Cog (12 Teeth) */}
            <path
              d="M50 26L53 29H57L61 28L63 32L67 33L67 37L71 40L69 44L72 47V53L69 56L71 60L67 63L67 67L63 68L61 72L57 71H53L50 74L47 71H43L39 72L37 68L33 67V63L29 60L31 56L28 53V47L31 44L29 40L33 37V33L37 32L39 28L43 29H47L50 26Z"
              fill="#E6F4EA"
              stroke="#1E8E3E"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            {/* Inner Telemetry Core & Directional Pivot Cross */}
            <circle
              cx="50"
              cy="50"
              r="14"
              fill="#0A1623"
              stroke="#34A853"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="5" fill="#34A853" />

            {/* Cardinal Node Hubs */}
            <circle
              cx="50"
              cy="18"
              r="3"
              fill="#FFFFFF"
              stroke="#0D652D"
              strokeWidth="1.5"
            />
            <circle
              cx="82"
              cy="50"
              r="3"
              fill="#FFFFFF"
              stroke="#0D652D"
              strokeWidth="1.5"
            />
            <circle
              cx="50"
              cy="82"
              r="3"
              fill="#FFFFFF"
              stroke="#0D652D"
              strokeWidth="1.5"
            />
            <circle
              cx="18"
              cy="50"
              r="3"
              fill="#FFFFFF"
              stroke="#0D652D"
              strokeWidth="1.5"
            />
          </svg>
        );

      case "social-media":
        return (
          // Geodesic Network Sphere & High-Frequency Broadcast Waveform
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Outer Broadcast Pulse Waves */}
            <circle
              cx="50"
              cy="46"
              r="42"
              stroke="#4285F4"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
            <circle
              cx="50"
              cy="46"
              r="32"
              stroke="#4285F4"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <circle
              cx="50"
              cy="46"
              r="22"
              stroke="#4285F4"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />

            {/* Geodesic Orbital Rings */}
            <ellipse
              cx="50"
              cy="46"
              rx="42"
              ry="16"
              stroke="#174EA6"
              strokeWidth="1"
              strokeOpacity="0.3"
              transform="rotate(-20 50 46)"
            />
            <ellipse
              cx="50"
              cy="46"
              rx="42"
              ry="16"
              stroke="#174EA6"
              strokeWidth="1"
              strokeOpacity="0.3"
              transform="rotate(20 50 46)"
            />

            {/* Central Broadcast Node & RF Mast */}
            <path
              d="M42 78L50 46L58 78"
              stroke="#0A1623"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="44"
              y1="68"
              x2="56"
              y2="68"
              stroke="#0A1623"
              strokeWidth="1.6"
            />
            <line
              x1="46"
              y1="58"
              x2="54"
              y2="58"
              stroke="#0A1623"
              strokeWidth="1.6"
            />

            {/* Apex Signal Node */}
            <circle
              cx="50"
              cy="46"
              r="7"
              fill="#0A1623"
              stroke="#4285F4"
              strokeWidth="2"
            />
            <circle cx="50" cy="46" r="3" fill="#4285F4" />

            {/* Constellation Satellites */}
            <circle
              cx="20"
              cy="38"
              r="3.5"
              fill="#FFFFFF"
              stroke="#4285F4"
              strokeWidth="1.5"
            />
            <circle
              cx="80"
              cy="38"
              r="3.5"
              fill="#FFFFFF"
              stroke="#4285F4"
              strokeWidth="1.5"
            />
            <circle
              cx="28"
              cy="62"
              r="3"
              fill="#FFFFFF"
              stroke="#174EA6"
              strokeWidth="1.5"
            />
            <circle
              cx="72"
              cy="62"
              r="3"
              fill="#FFFFFF"
              stroke="#174EA6"
              strokeWidth="1.5"
            />
          </svg>
        );

      case "cinematography":
        return (
          // 35mm Anamorphic Cinema Lens Iris & Calibrated Aperture Blades
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Outer Lens Barrel with Calibrated Focus Ticks */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#213960"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <circle
              cx="50"
              cy="50"
              r="41"
              stroke="#EA4335"
              strokeWidth="1.4"
              strokeOpacity="0.4"
            />
            <path
              d="M50 4V8 M96 50H92 M50 96V92 M4 50H8"
              stroke="#EA4335"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18 18L21 21 M82 82L79 79 M18 82L21 79 M82 18L79 21"
              stroke="#213960"
              strokeWidth="1.4"
            />

            {/* Anamorphic 2.39:1 Framing Guideline Rect */}
            <rect
              x="18"
              y="34"
              width="64"
              height="32"
              rx="2"
              stroke="#213960"
              strokeWidth="0.8"
              strokeOpacity="0.3"
              strokeDasharray="2 2"
            />

            {/* Mechanical 9-Blade Circular Diaphragm Aperture */}
            <circle
              cx="50"
              cy="50"
              r="31"
              fill="#FFFFFF"
              stroke="#0A1623"
              strokeWidth="2"
            />
            <path
              d="M50 20L64 36 M64 36L68 56 M68 56L54 70 M54 70L34 68 M34 68L22 52 M22 52L28 32 M28 32L48 20"
              stroke="#EA4335"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M58 24L69 44 M69 44L63 65 M63 65L42 71 M42 71L26 59 M26 59L26 38 M26 38L42 22"
              stroke="#A50E0E"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />

            {/* Central Optical Core Focal Aperture */}
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="#0A1623"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="4" fill="#EA4335" />
            <circle cx="52" cy="48" r="1.5" fill="#FFFFFF" />
          </svg>
        );

      case "pr-outreach":
        return (
          // Interlocking Alliance Torus Rings & Strategic Nexus Bridge
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Radial Convergence Guides */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="#34A853"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
            <circle
              cx="50"
              cy="50"
              r="34"
              stroke="#34A853"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              x1="10"
              y1="50"
              x2="90"
              y2="50"
              stroke="#213960"
              strokeWidth="1"
              strokeOpacity="0.25"
            />

            {/* Interlocking Dual Alliance Rings (University & Industry) */}
            <circle cx="40" cy="50" r="22" stroke="#1E8E3E" strokeWidth="2.5" />
            <circle cx="60" cy="50" r="22" stroke="#0A1623" strokeWidth="2.5" />

            {/* Central Strategic Convergence Nexus (Golden Handshake) */}
            <path
              d="M50 36L58 45L50 54L42 45Z"
              fill="#D4AF37"
              stroke="#FFF2A3"
              strokeWidth="1.2"
            />
            <path
              d="M50 46L58 55L50 64L42 55Z"
              fill="#34A853"
              stroke="#0D652D"
              strokeWidth="1.2"
            />

            {/* Expansion Terminal Nodes */}
            <circle
              cx="18"
              cy="50"
              r="3.5"
              fill="#FFFFFF"
              stroke="#1E8E3E"
              strokeWidth="2"
            />
            <circle
              cx="82"
              cy="50"
              r="3.5"
              fill="#FFFFFF"
              stroke="#0A1623"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="18"
              r="3.5"
              fill="#FFFFFF"
              stroke="#D4AF37"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="82"
              r="3.5"
              fill="#FFFFFF"
              stroke="#34A853"
              strokeWidth="2"
            />
          </svg>
        );

      case "volunteer":
        return (
          // Guiding Beacon & Cornerstone Mentorship Shield
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Concentric Guidance & Warmth Rings */}
            <circle
              cx="50"
              cy="46"
              r="44"
              stroke="#FBBC05"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              strokeDasharray="2 3"
            />
            <circle
              cx="50"
              cy="46"
              r="34"
              stroke="#FBBC05"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />

            {/* Mentorship Ascension Chevrons (Upward Lift) */}
            <path
              d="M30 68L50 52L70 68"
              stroke="#F29900"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34 76L50 62L66 76"
              stroke="#0A1623"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Supportive Architectural Hands / Shield Arch */}
            <path
              d="M22 52C22 72 40 84 50 86C60 84 78 72 78 52C78 36 64 26 50 26C36 26 22 36 22 52Z"
              stroke="#0A1623"
              strokeWidth="1.8"
              strokeOpacity="0.4"
              strokeDasharray="3 2"
            />

            {/* Central Diamond Guiding Beacon Flame */}
            <path
              d="M50 20C50 20 62 34 62 44C62 51 57 56 50 56C43 56 38 51 38 44C38 34 50 20 50 20Z"
              fill="url(#volunteer-beacon-gradient)"
              stroke="#B06000"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="45" r="4" fill="#FFFFFF" />

            <defs>
              <linearGradient
                id="volunteer-beacon-gradient"
                x1="38"
                y1="20"
                x2="62"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFF2A3" />
                <stop offset="50%" stopColor="#FBBC05" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-[148px] rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#213960]/12 shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_2px_8px_rgba(33,57,96,0.06)] my-1 flex items-center justify-center transition-all duration-300 group-hover:border-[#213960]/25 group-hover:shadow-[inset_0_1px_3px_rgba(255,255,255,1),0_4px_14px_rgba(33,57,96,0.1)]">
      {/* Precision Corner Alignment Reticle Marks (+) */}
      <span className="absolute top-1.5 left-2 text-[8px] font-mono text-royal/40 select-none">
        +
      </span>
      <span className="absolute top-1.5 right-2 text-[8px] font-mono text-royal/40 select-none">
        +
      </span>
      <span className="absolute bottom-1.5 left-2 text-[8px] font-mono text-royal/40 select-none">
        +
      </span>
      <span className="absolute bottom-1.5 right-2 text-[8px] font-mono text-royal/40 select-none">
        +
      </span>

      {/* Subtle Micro-grid Watermark */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#213960 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Vector Emblem Centerpiece */}
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-108 drop-shadow-xs">
        {renderInsignia()}
      </div>
    </div>
  );
}

// ========================================================
// 5. METALLIC CLAMP COMPONENT
// Fastened centered over the card's brass punch aperture
// ========================================================

function CardClamp({ id, prefix }: { id: string; prefix: string }) {
  const gradientId = `clip-${prefix}-${id}`;

  return (
    <div className="relative -mt-1 flex flex-col items-center z-20 pointer-events-none">
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        className="filter drop-shadow-[0_2px_4px_rgba(10,22,35,0.35)]"
      >
        <defs>
          <linearGradient
            id={`${gradientId}-gold`}
            x1="0"
            y1="0"
            x2="22"
            y2="26"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="25%" stopColor="#F9E076" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6718" />
          </linearGradient>
          <linearGradient
            id={`${gradientId}-brass`}
            x1="0"
            y1="0"
            x2="10"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FDEAA2" />
            <stop offset="100%" stopColor="#7A5600" />
          </linearGradient>
        </defs>

        <circle
          cx="11"
          cy="7"
          r="5.5"
          stroke={`url(#${gradientId}-gold)`}
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="11" cy="7" r="2.8" fill="#4A3403" opacity="0.3" />

        <rect
          x="5"
          y="11"
          width="12"
          height="13"
          rx="2.5"
          fill={`url(#${gradientId}-gold)`}
        />
        <circle cx="11" cy="17.5" r="2.2" fill={`url(#${gradientId}-brass)`} />
        <circle cx="11" cy="17.5" r="1" fill="#3D2900" />
      </svg>
    </div>
  );
}

// ========================================================
// 6. DOMAIN HANGING CARD (Hangs on Wires, NO FLIP, Opens Modal)
// Executive Physical Pass Material & Tactile Click Response
// ========================================================

interface DomainHangingCardProps {
  domain: Domain;
  nodeX: number;
  nodeY: number;
  stringLength: number;
  zIndex: number;
  prefix: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onOpenModal: (domain: Domain) => void;
}

function DomainHangingCard({
  domain,
  nodeX,
  nodeY,
  stringLength,
  zIndex,
  prefix,
  onMouseEnter,
  onMouseLeave,
  onOpenModal,
}: DomainHangingCardProps) {
  return (
    <div
      className={`absolute top-0 flex flex-col items-center ${domain.pendulumClass}`}
      style={{
        left: `${nodeX}px`,
        top: `${nodeY}px`,
        width: 0,
        zIndex,
        transformOrigin: "top center",
        willChange: "transform",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Individual Vertical Hanging String: Braided Metallic Gold */}
      <div
        className="w-[2px] bg-gradient-to-b from-[#C59B27] via-[#FDEAA2] to-[#B88728] shadow-[0_1px_3px_rgba(180,130,30,0.4)]"
        style={{
          height: `${stringLength}px`,
          transform: "translateZ(0)",
        }}
      />

      {/* Metallic Clip Fastened Centered over Card Top */}
      <CardClamp id={domain.id} prefix={prefix} />

      {/* Static Domain Card: NO FLIP, Executive Card Stock, Opens Modal on Click */}
      <div
        className="relative -mt-2 cursor-pointer select-none font-card-ui group transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        style={{
          width: "214px",
          height: "308px",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        onClick={() => onOpenModal(domain)}
        role="button"
        tabIndex={0}
        aria-label={`View ${domain.name} team members (${domain.members.length} members)`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenModal(domain);
          }
        }}
      >
        <div className="w-full h-full rounded-[20px] p-3.5 flex flex-col justify-between bg-[#FCFBF9] border border-[#213960]/15 shadow-[0_4px_6px_-1px_rgba(10,22,35,0.06),0_16px_32px_-8px_rgba(10,22,35,0.14),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(33,57,96,0.05)] ring-1 ring-[#D8D1C6]/40 overflow-hidden group-hover:shadow-[0_8px_16px_-2px_rgba(10,22,35,0.08),0_24px_44px_-10px_rgba(10,22,35,0.22)] transition-shadow duration-300">
          {/* Top Physical Punch Slot with Brass Eyelet Grommet */}
          <div className="w-9 h-2 rounded-full bg-[#EAE5DA] border border-[#C59B27]/40 shadow-inner mx-auto -mt-1 mb-0.5 flex items-center justify-center">
            <div className="w-5 h-0.5 rounded-full bg-[#0A1623]/25" />
          </div>

          {/* Precision Vector Emblem Stage (Replaces generic AI icons) */}
          <DomainEmblem domain={domain} />

          {/* Domain Title */}
          <div className="px-0.5 py-0.5 relative z-10">
            <h3 className="text-[15px] font-extrabold text-[#0A1623] tracking-tight leading-snug truncate">
              {domain.name}
            </h3>
          </div>

          {/* Bottom Action: Member Count Pill & EXPLORE Button */}
          <div className="border-t border-[#213960]/10 pt-2 flex items-center justify-between relative z-10">
            <span className="px-2 py-0.5 rounded bg-[#213960]/8 text-[#213960] text-[8px] font-mono font-bold tracking-wide">
              {domain.members.length} MEMBERS
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(domain);
              }}
              className="px-2.5 py-1 rounded-lg bg-[#0A1623] text-white hover:bg-[#213960] text-[8.5px] font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1 shadow-xs hover:shadow group/btn hover:scale-105 active:scale-95 cursor-pointer"
              title={`View ${domain.name} team members`}
              aria-label={`View ${domain.name} team members`}
            >
              <span>EXPLORE</span>
              <svg
                className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================================
// 7. MEMBER HANGING CARD (Hangs on Modal Wires, 3D FLIP ANIMATION)
// 100% Retained Interactive Front & Back Flip Functionality
// ========================================================

function LucideLinkedin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface MemberHangingCardProps {
  member: TeamMember;
  nodeX: number;
  nodeY: number;
  stringLength: number;
  isFlipped: boolean;
  zIndex: number;
  prefix: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggleFlip: () => void;
  onFlipToFront: () => void;
  onFlipToBack: () => void;
}

function MemberHangingCard({
  member,
  nodeX,
  nodeY,
  stringLength,
  isFlipped,
  zIndex,
  prefix,
  onMouseEnter,
  onMouseLeave,
  onToggleFlip,
  onFlipToFront,
  onFlipToBack,
}: MemberHangingCardProps) {
  const linkedinUrl =
    member.socials.find((s) => s.name.toLowerCase() === "linkedin")?.url ||
    "https://linkedin.com";

  return (
    <div
      className={`absolute top-0 flex flex-col items-center ${member.pendulumClass || "animate-pendulum-0"}`}
      style={{
        left: `${nodeX}px`,
        top: `${nodeY}px`,
        width: 0,
        zIndex,
        transformOrigin: "top center",
        willChange: "transform",
      }}
    >
      {/* Individual Vertical Hanging String: Braided Metallic Gold */}
      <div
        className="w-[2px] bg-gradient-to-b from-[#C59B27] via-[#FDEAA2] to-[#B88728] shadow-[0_1px_3px_rgba(180,130,30,0.4)]"
        style={{
          height: `${stringLength}px`,
          transform: "translateZ(0)",
        }}
      />

      {/* Metallic Clip Fastened Centered over Card Top */}
      <CardClamp id={member.id} prefix={prefix} />

      {/* 3D Card Flipper Container with 1200px Perspective */}
      <div
        className="relative -mt-2 select-none font-card-ui group"
        style={{
          width: "214px",
          height: "308px",
          perspective: "1200px",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="w-full h-full relative transition-transform duration-700 preserve-3d"
          style={{
            transform: isFlipped
              ? "rotateY(180deg) translateZ(0)"
              : "rotateY(0deg) translateZ(0)",
            transitionTimingFunction: "cubic-bezier(0.34, 1.25, 0.64, 1)",
            willChange: "transform",
          }}
        >
          {/* ========================================================
              MEMBER CARD FRONT FACE
              ======================================================== */}
          <div className="absolute inset-0 w-full h-full rounded-[20px] p-3.5 flex flex-col justify-between backface-hidden bg-[#FCFBF9] border border-[#213960]/15 shadow-[0_4px_6px_-1px_rgba(10,22,35,0.06),0_16px_32px_-8px_rgba(10,22,35,0.14),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(33,57,96,0.05)] ring-1 ring-[#D8D1C6]/40 overflow-hidden">
            {/* Upper Interactive Area: Punch slot, Avatar, Name & Designation */}
            <div
              className="flex-1 flex flex-col justify-between cursor-pointer"
              onMouseEnter={onMouseEnter}
              onClick={onToggleFlip}
              role="button"
              tabIndex={0}
              aria-label={`Team member card for ${member.name}, click to view full credentials`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onToggleFlip();
                }
              }}
            >
              {/* Top Physical Punch Slot with Brass Eyelet Grommet */}
              <div className="w-9 h-2 rounded-full bg-[#EAE5DA] border border-[#C59B27]/40 shadow-inner mx-auto -mt-1 mb-0.5 flex items-center justify-center">
                <div className="w-5 h-0.5 rounded-full bg-[#0A1623]/25" />
              </div>

              {/* Avatar Headshot Area with Polished Bezel Ring */}
              <div className="relative w-full h-[150px] rounded-xl overflow-hidden bg-gradient-to-br from-[#F5F2EB] to-[#E9E4D8] border border-[#213960]/12 my-1 shadow-inner">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-115 origin-top transition-transform duration-500 group-hover:scale-120"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              {/* Member Name & Designation */}
              <div className="px-0.5 relative z-10 pb-1">
                <h3 className="text-[14.5px] font-extrabold text-[#0A1623] tracking-tight leading-snug truncate">
                  {member.name}
                </h3>
                <p className="text-[9.5px] font-medium text-[#2E5085] mt-0.5 leading-tight truncate">
                  {member.designation}
                </p>
              </div>
            </div>

            {/* Bottom Non-Flipping Area: Horizontal Divider Line & Action Bar (Front Face Only) */}
            <div
              className="border-t border-[#213960]/10 pt-2 flex items-center justify-between relative z-10 cursor-default select-none"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-white/90 hover:bg-[#0077B5] text-[#213960] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#213960]/15 shadow-2xs hover:shadow hover:scale-110 active:scale-95 cursor-pointer group/lnk"
                title={`View ${member.name} on LinkedIn`}
                aria-label={`${member.name} LinkedIn profile`}
              >
                <LucideLinkedin className="w-3.5 h-3.5 transition-transform group-hover/lnk:scale-110" />
              </a>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onFlipToBack();
                }}
                className="px-2.5 py-1 rounded-lg bg-[#0A1623] text-white hover:bg-[#213960] text-[8.5px] font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1 shadow-xs hover:shadow group/btn hover:scale-105 active:scale-95 cursor-pointer"
                title="Click to flip card"
                aria-label={`View full profile of ${member.name}`}
              >
                <span>VIEW</span>
                <svg
                  className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ========================================================
              MEMBER CARD BACK FACE (Full Profile Details & Return Button)
              ======================================================== */}
          <div
            className="absolute inset-0 w-full h-full rounded-[20px] p-3.5 flex flex-col justify-between backface-hidden bg-gradient-to-br from-[#FAF8F5] via-[#F4F1EA] to-[#EAE5DA] border border-[#213960]/20 shadow-[0_4px_6px_-1px_rgba(10,22,35,0.06),0_16px_32px_-8px_rgba(10,22,35,0.18),inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-[#D8D1C6]/50 overflow-hidden"
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            {/* Top Physical Punch Slot with Brass Eyelet Grommet */}
            <div className="w-9 h-2 rounded-full bg-[#EAE5DA] border border-[#C59B27]/40 shadow-inner mx-auto -mt-1 mb-0.5 flex items-center justify-center relative z-10">
              <div className="w-5 h-0.5 rounded-full bg-[#0A1623]/25" />
            </div>

            {/* Flip back to front button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onFlipToFront();
              }}
              className="absolute top-2.5 right-3 w-7 h-7 rounded-full bg-white/90 hover:bg-[#0A1623] text-[#0A1623] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-115 active:scale-90 shadow-2xs border border-[#213960]/15 cursor-pointer group/btn z-20"
              title="Flip back to front"
              aria-label="Flip card back to front"
            >
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:-rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </button>

            {/* Profile Miniature Card */}
            <div className="flex items-center gap-2 pt-0.5">
              <div className="w-10 h-10 rounded-full border border-[#213960]/20 overflow-hidden flex-shrink-0 shadow-xs bg-white">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-115 origin-top"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-[12px] font-extrabold text-[#0A1623] leading-tight truncate">
                  {member.name}
                </h4>
                <p className="text-[9px] text-[#2E5085] font-medium leading-tight truncate">
                  {member.designation}
                </p>
                <div className="flex items-center gap-1 text-[8px] text-[#213960]/70 font-mono mt-0.5">
                  <svg
                    className="w-2.5 h-2.5 text-[#2E5085] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="truncate">{member.location}</span>
                </div>
              </div>
            </div>

            {/* Member Bio */}
            <p className="text-[9.5px] text-[#0A1623]/85 leading-relaxed">
              {member.bio}
            </p>

            <div className="w-full h-[1px] bg-[#213960]/10 my-0.5" />

            {/* Recent Highlights */}
            <div className="space-y-1 pb-1">
              <span className="text-[7.5px] font-bold tracking-widest text-[#213960]/60 uppercase font-mono block">
                FLAGSHIP PROJECTS
              </span>
              <div className="space-y-1.5">
                {member.recentWork.map((work, wIdx) => (
                  <div
                    key={wIdx}
                    className="flex items-center justify-between text-[8.5px] font-semibold text-[#0A1623] truncate group/item"
                  >
                    <span className="truncate">{work.title}</span>
                    <svg
                      className="w-2.5 h-2.5 text-[#2E5085] flex-shrink-0 ml-1 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================================
// 8. CABLE RIG COMPONENTS FOR MAIN SECTION DOMAIN CARDS
// ========================================================

// Top Featured Single Domain Card Setup: Compact Catenary Wire
interface SingleCardRigProps {
  domain: Domain;
  prefix: string;
  scale: number;
  isMobile?: boolean;
  zIndex?: number;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onOpenModal: (domain: Domain) => void;
}

function SingleCardRig({
  domain,
  prefix,
  scale,
  isMobile = false,
  zIndex = 20,
  onMouseEnter,
  onMouseLeave,
  onOpenModal,
}: SingleCardRigProps) {
  const stageWidth = isMobile ? 280 : 440;
  const stageHeight = isMobile ? 470 : 495;
  const leftBracketX = isMobile ? 16 : 20;
  const rightBracketX = isMobile ? 264 : 420;
  const centerX = isMobile ? 140 : 220;
  const nodeY = 40;
  const stringLength = 84;

  const cablePath = isMobile
    ? "M 16 32 Q 78 42 140 40 Q 202 42 264 32"
    : "M 20 32 Q 120 42 220 40 Q 320 42 420 32";

  return (
    <div
      className="relative flex items-center justify-center overflow-visible mx-auto"
      style={{
        width: `${stageWidth * scale}px`,
        height: `${stageHeight * scale}px`,
      }}
    >
      <div
        className="absolute top-0 overflow-visible select-none"
        style={{
          width: `${stageWidth}px`,
          height: `${stageHeight}px`,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {/* Main Royal Blue Cable with Golden Brackets */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
        >
          <defs>
            <filter
              id={`drop-shadow-${prefix}`}
              x="-5%"
              y="-10%"
              width="110%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#0A1623"
                floodOpacity="0.3"
              />
            </filter>

            <linearGradient
              id={`bracket-gold-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7A5600" />
            </linearGradient>

            <linearGradient
              id={`cable-blue-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#2E5085" />
              <stop offset="50%" stopColor="#1B3154" />
              <stop offset="100%" stopColor="#0E1D33" />
            </linearGradient>
          </defs>

          {/* Cable Shadow */}
          <path
            d={cablePath}
            fill="none"
            stroke="rgba(10,22,35,0.22)"
            strokeWidth="3.2"
            strokeLinecap="round"
            transform="translate(0, 3)"
          />

          {/* Cable Body: Royal Blue */}
          <path
            d={cablePath}
            fill="none"
            stroke={`url(#cable-blue-${prefix})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Fine highlight thread */}
          <path
            d={cablePath}
            fill="none"
            stroke="#6898D8"
            strokeWidth="0.6"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Left Wall Bracket: Polished Golden Brass */}
          <g transform={`translate(${leftBracketX - 4}, 18)`}>
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#bracket-gold-${prefix})`}
              filter={`url(#drop-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Right Wall Bracket: Polished Golden Brass */}
          <g transform={`translate(${rightBracketX - 5}, 18)`}>
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#bracket-gold-${prefix})`}
              filter={`url(#drop-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Center Suspension Ring */}
          <circle
            cx={centerX}
            cy={nodeY}
            r="3.5"
            fill="none"
            stroke={`url(#bracket-gold-${prefix})`}
            strokeWidth="2"
          />
        </svg>

        {/* Lead Centered Domain Card */}
        <DomainHangingCard
          domain={domain}
          nodeX={centerX}
          nodeY={nodeY}
          stringLength={stringLength}
          zIndex={zIndex}
          prefix={prefix}
          onMouseEnter={() => onMouseEnter(domain.id)}
          onMouseLeave={() => onMouseLeave(domain.id)}
          onOpenModal={onOpenModal}
        />
      </div>
    </div>
  );
}

// Desktop Row Component: 4 domain cards hanging on 1 cable (1040px virtual width)
interface DesktopRowProps {
  domains: Domain[];
  prefix: string;
  scale: number;
  hoveredCard: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onOpenModal: (domain: Domain) => void;
}

function DesktopRowRig({
  domains,
  prefix,
  scale,
  hoveredCard,
  onMouseEnter,
  onMouseLeave,
  onOpenModal,
}: DesktopRowProps) {
  const stringLengths = prefix === "d2" ? [90, 70, 94, 74] : [72, 96, 72, 96];
  const desktopNodes = [
    {
      domain: domains[0],
      nodeX: 145,
      nodeY: 36,
      stringLength: stringLengths[0],
    },
    {
      domain: domains[1],
      nodeX: 395,
      nodeY: 42,
      stringLength: stringLengths[1],
    },
    {
      domain: domains[2],
      nodeX: 645,
      nodeY: 38,
      stringLength: stringLengths[2],
    },
    {
      domain: domains[3],
      nodeX: 895,
      nodeY: 35,
      stringLength: stringLengths[3],
    },
  ];

  const stageWidth = 1040;
  const stageHeight = 495;
  const cablePath = "M 20 32 Q 270 48 520 44 Q 770 48 1020 32";

  return (
    <div
      className="relative flex items-center justify-center overflow-visible mx-auto"
      style={{
        width: `${stageWidth * scale}px`,
        height: `${stageHeight * scale}px`,
      }}
    >
      <div
        className="absolute top-0 overflow-visible select-none"
        style={{
          width: `${stageWidth}px`,
          height: `${stageHeight}px`,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
        >
          <defs>
            <filter
              id={`drop-shadow-${prefix}`}
              x="-5%"
              y="-10%"
              width="110%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#0A1623"
                floodOpacity="0.3"
              />
            </filter>

            <linearGradient
              id={`bracket-gold-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7A5600" />
            </linearGradient>

            <linearGradient
              id={`cable-blue-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#2E5085" />
              <stop offset="50%" stopColor="#1B3154" />
              <stop offset="100%" stopColor="#0E1D33" />
            </linearGradient>
          </defs>

          {/* Cable Shadow */}
          <path
            d={cablePath}
            fill="none"
            stroke="rgba(10,22,35,0.22)"
            strokeWidth="3.2"
            strokeLinecap="round"
            transform="translate(0, 3)"
          />

          {/* Cable Body: Royal Blue */}
          <path
            d={cablePath}
            fill="none"
            stroke={`url(#cable-blue-${prefix})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Fine highlight thread */}
          <path
            d={cablePath}
            fill="none"
            stroke="#6898D8"
            strokeWidth="0.6"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Left Wall Bracket */}
          <g transform="translate(16, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#bracket-gold-${prefix})`}
              filter={`url(#drop-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Right Wall Bracket */}
          <g transform="translate(1015, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#bracket-gold-${prefix})`}
              filter={`url(#drop-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Suspension Rings on Cable */}
          {desktopNodes.map((n, idx) => (
            <circle
              key={idx}
              cx={n.nodeX}
              cy={n.nodeY}
              r="3.5"
              fill="none"
              stroke={`url(#bracket-gold-${prefix})`}
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* The 4 Hanging Domain Cards */}
        {desktopNodes.map((n, idx) => {
          const isHovered = hoveredCard === n.domain.id;
          const cardZ = isHovered ? 40 : 20 + idx;
          return (
            <DomainHangingCard
              key={n.domain.id}
              domain={n.domain}
              nodeX={n.nodeX}
              nodeY={n.nodeY}
              stringLength={n.stringLength}
              zIndex={cardZ}
              prefix={prefix}
              onMouseEnter={() => onMouseEnter(n.domain.id)}
              onMouseLeave={() => onMouseLeave(n.domain.id)}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </div>
    </div>
  );
}

// Mobile Row Component: 2 domain cards hanging on 1 cable (520px virtual width)
interface MobileRowProps {
  domainA: Domain;
  domainB: Domain;
  prefix: string;
  scale: number;
  hoveredCard: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onOpenModal: (domain: Domain) => void;
}

function MobileRowRig({
  domainA,
  domainB,
  prefix,
  scale,
  hoveredCard,
  onMouseEnter,
  onMouseLeave,
  onOpenModal,
}: MobileRowProps) {
  const stringLengths =
    prefix === "m3"
      ? [84, 66]
      : prefix === "m4"
        ? [88, 70]
        : prefix === "m2"
          ? [66, 88]
          : [68, 90];

  const mobileNodes = [
    { domain: domainA, nodeX: 122, nodeY: 36, stringLength: stringLengths[0] },
    { domain: domainB, nodeX: 348, nodeY: 42, stringLength: stringLengths[1] },
  ];

  const stageWidth = 470;
  const stageHeight = 470;
  const cablePath = "M 16 32 Q 125 44 235 42 Q 345 44 454 32";

  return (
    <div
      className="relative flex items-center justify-center overflow-visible mx-auto"
      style={{
        width: `${stageWidth * scale}px`,
        height: `${stageHeight * scale}px`,
      }}
    >
      <div
        className="absolute top-0 overflow-visible select-none"
        style={{
          width: `${stageWidth}px`,
          height: `${stageHeight}px`,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
        >
          <defs>
            <filter
              id={`drop-shadow-${prefix}`}
              x="-5%"
              y="-10%"
              width="110%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#0A1623"
                floodOpacity="0.3"
              />
            </filter>

            <linearGradient
              id={`bracket-gold-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7A5600" />
            </linearGradient>

            <linearGradient
              id={`cable-blue-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#2E5085" />
              <stop offset="50%" stopColor="#1B3154" />
              <stop offset="100%" stopColor="#0E1D33" />
            </linearGradient>
          </defs>

          {/* Cable Shadow */}
          <path
            d={cablePath}
            fill="none"
            stroke="rgba(10,22,35,0.22)"
            strokeWidth="3.2"
            strokeLinecap="round"
            transform="translate(0, 3)"
          />

          {/* Cable Body: Royal Blue */}
          <path
            d={cablePath}
            fill="none"
            stroke={`url(#cable-blue-${prefix})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Fine highlight thread */}
          <path
            d={cablePath}
            fill="none"
            stroke="#6898D8"
            strokeWidth="0.6"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Left Wall Bracket */}
          <g transform="translate(12, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#bracket-gold-${prefix})`}
              filter={`url(#drop-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Right Wall Bracket */}
          <g transform="translate(449, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#bracket-gold-${prefix})`}
              filter={`url(#drop-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Suspension Rings on Cable */}
          {mobileNodes.map((n, idx) => (
            <circle
              key={idx}
              cx={n.nodeX}
              cy={n.nodeY}
              r="3.5"
              fill="none"
              stroke={`url(#bracket-gold-${prefix})`}
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* The 2 Hanging Domain Cards */}
        {mobileNodes.map((n, idx) => {
          const isHovered = hoveredCard === n.domain.id;
          const cardZ = isHovered ? 40 : 20 + idx;
          return (
            <DomainHangingCard
              key={n.domain.id}
              domain={n.domain}
              nodeX={n.nodeX}
              nodeY={n.nodeY}
              stringLength={n.stringLength}
              zIndex={cardZ}
              prefix={prefix}
              onMouseEnter={() => onMouseEnter(n.domain.id)}
              onMouseLeave={() => onMouseLeave(n.domain.id)}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </div>
    </div>
  );
}

// ========================================================
// 9. MEMBER CABLE RIGS (Used Inside Domain Popup Modal)
// ========================================================

// 4 Members on 1 Desktop Cable (1040px virtual width)
interface MemberRowRig4Props {
  members: TeamMember[];
  prefix: string;
  scale: number;
  flippedMembers: Record<string, boolean>;
  hoveredMember: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onToggleFlip: (id: string) => void;
  onFlipToFront: (id: string) => void;
  onFlipToBack: (id: string) => void;
}

function MemberRowRig4({
  members,
  prefix,
  scale,
  flippedMembers,
  hoveredMember,
  onMouseEnter,
  onMouseLeave,
  onToggleFlip,
  onFlipToFront,
  onFlipToBack,
}: MemberRowRig4Props) {
  const stringLengths = [74, 96, 72, 94];
  const desktopNodes = [
    {
      member: members[0],
      nodeX: 145,
      nodeY: 36,
      stringLength: stringLengths[0],
    },
    {
      member: members[1],
      nodeX: 395,
      nodeY: 42,
      stringLength: stringLengths[1],
    },
    {
      member: members[2],
      nodeX: 645,
      nodeY: 38,
      stringLength: stringLengths[2],
    },
    {
      member: members[3],
      nodeX: 895,
      nodeY: 35,
      stringLength: stringLengths[3],
    },
  ];

  const stageWidth = 1040;
  const stageHeight = 495;
  const cablePath = "M 20 32 Q 270 48 520 44 Q 770 48 1020 32";

  return (
    <div
      className="relative flex items-center justify-center overflow-visible mx-auto"
      style={{
        width: `${stageWidth * scale}px`,
        height: `${stageHeight * scale}px`,
      }}
    >
      <div
        className="absolute top-0 overflow-visible select-none"
        style={{
          width: `${stageWidth}px`,
          height: `${stageHeight}px`,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
        >
          <defs>
            <filter
              id={`mod-shadow-${prefix}`}
              x="-5%"
              y="-10%"
              width="110%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#0A1623"
                floodOpacity="0.3"
              />
            </filter>
            <linearGradient
              id={`mod-gold-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7A5600" />
            </linearGradient>
            <linearGradient
              id={`mod-blue-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#2E5085" />
              <stop offset="50%" stopColor="#1B3154" />
              <stop offset="100%" stopColor="#0E1D33" />
            </linearGradient>
          </defs>

          <path
            d={cablePath}
            fill="none"
            stroke="rgba(10,22,35,0.22)"
            strokeWidth="3.2"
            strokeLinecap="round"
            transform="translate(0, 3)"
          />
          <path
            d={cablePath}
            fill="none"
            stroke={`url(#mod-blue-${prefix})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d={cablePath}
            fill="none"
            stroke="#6898D8"
            strokeWidth="0.6"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Left Wall Bracket */}
          <g transform="translate(16, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#mod-gold-${prefix})`}
              filter={`url(#mod-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Right Wall Bracket */}
          <g transform="translate(1015, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#mod-gold-${prefix})`}
              filter={`url(#mod-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Suspension Rings on Cable */}
          {desktopNodes.map((n, idx) => (
            <circle
              key={idx}
              cx={n.nodeX}
              cy={n.nodeY}
              r="3.5"
              fill="none"
              stroke={`url(#mod-gold-${prefix})`}
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* The 4 Hanging Member Cards (with 3D Flip) */}
        {desktopNodes.map((n, idx) => {
          const isFlipped = !!flippedMembers[n.member.id];
          const isHovered = hoveredMember === n.member.id;
          const cardZ = isHovered ? 60 : isFlipped ? 50 : 20 + idx;
          return (
            <MemberHangingCard
              key={n.member.id}
              member={n.member}
              nodeX={n.nodeX}
              nodeY={n.nodeY}
              stringLength={n.stringLength}
              isFlipped={isFlipped}
              zIndex={cardZ}
              prefix={prefix}
              onMouseEnter={() => onMouseEnter(n.member.id)}
              onMouseLeave={() => onMouseLeave(n.member.id)}
              onToggleFlip={() => onToggleFlip(n.member.id)}
              onFlipToFront={() => onFlipToFront(n.member.id)}
              onFlipToBack={() => onFlipToBack(n.member.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

// 3 Members on 1 Desktop Cable (880px virtual width) - Used in 2 rows for 6-member Executive Committee
interface MemberRowRig3Props {
  members: TeamMember[];
  prefix: string;
  scale: number;
  flippedMembers: Record<string, boolean>;
  hoveredMember: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onToggleFlip: (id: string) => void;
  onFlipToFront: (id: string) => void;
  onFlipToBack: (id: string) => void;
}

function MemberRowRig3({
  members,
  prefix,
  scale,
  flippedMembers,
  hoveredMember,
  onMouseEnter,
  onMouseLeave,
  onToggleFlip,
  onFlipToFront,
  onFlipToBack,
}: MemberRowRig3Props) {
  const stringLengths = [74, 94, 76];
  const desktopNodes = [
    {
      member: members[0],
      nodeX: 180,
      nodeY: 36,
      stringLength: stringLengths[0],
    },
    {
      member: members[1],
      nodeX: 440,
      nodeY: 42,
      stringLength: stringLengths[1],
    },
    {
      member: members[2],
      nodeX: 700,
      nodeY: 36,
      stringLength: stringLengths[2],
    },
  ];

  const stageWidth = 880;
  const stageHeight = 495;
  const cablePath = "M 20 32 Q 230 46 440 42 Q 650 46 860 32";

  return (
    <div
      className="relative flex items-center justify-center overflow-visible mx-auto"
      style={{
        width: `${stageWidth * scale}px`,
        height: `${stageHeight * scale}px`,
      }}
    >
      <div
        className="absolute top-0 overflow-visible select-none"
        style={{
          width: `${stageWidth}px`,
          height: `${stageHeight}px`,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
        >
          <defs>
            <filter
              id={`mod-shadow-${prefix}`}
              x="-5%"
              y="-10%"
              width="110%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#0A1623"
                floodOpacity="0.3"
              />
            </filter>
            <linearGradient
              id={`mod-gold-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7A5600" />
            </linearGradient>
            <linearGradient
              id={`mod-blue-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#2E5085" />
              <stop offset="50%" stopColor="#1B3154" />
              <stop offset="100%" stopColor="#0E1D33" />
            </linearGradient>
          </defs>

          <path
            d={cablePath}
            fill="none"
            stroke="rgba(10,22,35,0.22)"
            strokeWidth="3.2"
            strokeLinecap="round"
            transform="translate(0, 3)"
          />
          <path
            d={cablePath}
            fill="none"
            stroke={`url(#mod-blue-${prefix})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d={cablePath}
            fill="none"
            stroke="#6898D8"
            strokeWidth="0.6"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Left Wall Bracket */}
          <g transform="translate(16, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#mod-gold-${prefix})`}
              filter={`url(#mod-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Right Wall Bracket */}
          <g transform="translate(855, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#mod-gold-${prefix})`}
              filter={`url(#mod-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Suspension Rings on Cable */}
          {desktopNodes.map((n, idx) => (
            <circle
              key={idx}
              cx={n.nodeX}
              cy={n.nodeY}
              r="3.5"
              fill="none"
              stroke={`url(#mod-gold-${prefix})`}
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* The 3 Hanging Member Cards (with 3D Flip) */}
        {desktopNodes.map((n, idx) => {
          const isFlipped = !!flippedMembers[n.member.id];
          const isHovered = hoveredMember === n.member.id;
          const cardZ = isHovered ? 60 : isFlipped ? 50 : 20 + idx;
          return (
            <MemberHangingCard
              key={n.member.id}
              member={n.member}
              nodeX={n.nodeX}
              nodeY={n.nodeY}
              stringLength={n.stringLength}
              isFlipped={isFlipped}
              zIndex={cardZ}
              prefix={prefix}
              onMouseEnter={() => onMouseEnter(n.member.id)}
              onMouseLeave={() => onMouseLeave(n.member.id)}
              onToggleFlip={() => onToggleFlip(n.member.id)}
              onFlipToFront={() => onFlipToFront(n.member.id)}
              onFlipToBack={() => onFlipToBack(n.member.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

// 2 Members on 1 Mobile Cable (520px virtual width) - Used in 2 or 3 rows on mobile modal
interface MemberMobileRowRig2Props {
  memberA: TeamMember;
  memberB: TeamMember;
  prefix: string;
  scale: number;
  flippedMembers: Record<string, boolean>;
  hoveredMember: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onToggleFlip: (id: string) => void;
  onFlipToFront: (id: string) => void;
  onFlipToBack: (id: string) => void;
}

function MemberMobileRowRig2({
  memberA,
  memberB,
  prefix,
  scale,
  flippedMembers,
  hoveredMember,
  onMouseEnter,
  onMouseLeave,
  onToggleFlip,
  onFlipToFront,
  onFlipToBack,
}: MemberMobileRowRig2Props) {
  const stringLengths = [74, 96];
  const stageWidth = 470;
  const stageHeight = 450;
  const mobileNodes = [
    { member: memberA, nodeX: 122, nodeY: 36, stringLength: stringLengths[0] },
    { member: memberB, nodeX: 348, nodeY: 42, stringLength: stringLengths[1] },
  ];
  const cablePath = "M 16 32 Q 125 44 235 42 Q 345 44 454 32";

  return (
    <div
      className="relative flex items-center justify-center overflow-visible mx-auto"
      style={{
        width: `${stageWidth * scale}px`,
        height: `${stageHeight * scale}px`,
      }}
    >
      <div
        className="absolute top-0 overflow-visible select-none"
        style={{
          width: `${stageWidth}px`,
          height: `${stageHeight}px`,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
        >
          <defs>
            <filter
              id={`mod-shadow-${prefix}`}
              x="-5%"
              y="-10%"
              width="110%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                floodColor="#0A1623"
                floodOpacity="0.3"
              />
            </filter>
            <linearGradient
              id={`mod-gold-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7A5600" />
            </linearGradient>
            <linearGradient
              id={`mod-blue-${prefix}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#2E5085" />
              <stop offset="50%" stopColor="#1B3154" />
              <stop offset="100%" stopColor="#0E1D33" />
            </linearGradient>
          </defs>

          <path
            d={cablePath}
            fill="none"
            stroke="rgba(10,22,35,0.22)"
            strokeWidth="3.2"
            strokeLinecap="round"
            transform="translate(0, 3)"
          />
          <path
            d={cablePath}
            fill="none"
            stroke={`url(#mod-blue-${prefix})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d={cablePath}
            fill="none"
            stroke="#6898D8"
            strokeWidth="0.6"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Left Wall Bracket */}
          <g transform="translate(12, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#mod-gold-${prefix})`}
              filter={`url(#mod-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Right Wall Bracket */}
          <g transform="translate(449, 18)">
            <rect
              x="0"
              y="0"
              width="9"
              height="28"
              rx="2.5"
              fill={`url(#mod-gold-${prefix})`}
              filter={`url(#mod-shadow-${prefix})`}
            />
            <circle cx="4.5" cy="6" r="1.6" fill="#4A3403" />
            <circle cx="4.5" cy="22" r="1.6" fill="#4A3403" />
            <circle
              cx="4.5"
              cy="14"
              r="3.5"
              fill="none"
              stroke="#FFF2A3"
              strokeWidth="1.5"
            />
          </g>

          {/* Suspension Rings on Cable */}
          {mobileNodes.map((n, idx) => (
            <circle
              key={idx}
              cx={n.nodeX}
              cy={n.nodeY}
              r="3.5"
              fill="none"
              stroke={`url(#mod-gold-${prefix})`}
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* The 2 Hanging Member Cards (with 3D Flip) */}
        {mobileNodes.map((n, idx) => {
          const isFlipped = !!flippedMembers[n.member.id];
          const isHovered = hoveredMember === n.member.id;
          const cardZ = isHovered ? 60 : isFlipped ? 50 : 20 + idx;
          return (
            <MemberHangingCard
              key={n.member.id}
              member={n.member}
              nodeX={n.nodeX}
              nodeY={n.nodeY}
              stringLength={n.stringLength}
              isFlipped={isFlipped}
              zIndex={cardZ}
              prefix={prefix}
              onMouseEnter={() => onMouseEnter(n.member.id)}
              onMouseLeave={() => onMouseLeave(n.member.id)}
              onToggleFlip={() => onToggleFlip(n.member.id)}
              onFlipToFront={() => onFlipToFront(n.member.id)}
              onFlipToBack={() => onFlipToBack(n.member.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

// ========================================================
// 10. POPUP MODAL FOR DOMAIN TEAM MEMBERS
// Full Hanging Cable Rig for Both Desktop & Mobile
// ========================================================

interface DomainTeamModalProps {
  domain: Domain | null;
  onClose: () => void;
}

function DomainTeamModal({ domain, onClose }: DomainTeamModalProps) {
  const [flippedMembers, setFlippedMembers] = useState<Record<string, boolean>>(
    {},
  );
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [modalWidth, setModalWidth] = useState(1040);
  const bodyRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Measure modal body container width dynamically to scale cables
  useEffect(() => {
    if (!domain) return;
    const updateWidth = () => {
      if (bodyRef.current) {
        setModalWidth(bodyRef.current.clientWidth);
      }
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    if (bodyRef.current) ro.observe(bodyRef.current);
    return () => ro.disconnect();
  }, [domain]);

  // Lock background scroll when modal is active, dismiss on Escape key, suppress navbar
  useEffect(() => {
    if (domain) {
      document.documentElement.classList.add("team-modal-active", "modal-open");
      document.body.classList.add("team-modal-active", "modal-open");

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.documentElement.classList.remove(
          "team-modal-active",
          "modal-open",
        );
        document.body.classList.remove("team-modal-active", "modal-open");
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [domain, onClose]);

  // Prevent background touch scrolling on mobile when dragging outside modal box
  useEffect(() => {
    const el = backdropRef.current;
    if (!el || !domain) return;

    const preventBackdropTouchMove = (e: TouchEvent) => {
      if (e.target === el) {
        e.preventDefault();
      }
    };

    el.addEventListener("touchmove", preventBackdropTouchMove, {
      passive: false,
    });
    return () => {
      el.removeEventListener("touchmove", preventBackdropTouchMove);
    };
  }, [domain]);

  if (!domain) return null;

  // Flip interactions strictly for member cards inside the modal
  const handleToggleFlip = (id: string) => {
    setFlippedMembers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFlipToFront = (id: string) => {
    setFlippedMembers((prev) => ({ ...prev, [id]: false }));
  };

  const handleFlipToBack = (id: string) => {
    setFlippedMembers((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseEnter = (id: string) => {
    // Only trigger hover on devices that truly support fine pointer hover (desktop/laptop)
    // This prevents synthetic mouseenter on touchscreens from conflicting with tap/click!
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover)").matches
    ) {
      return;
    }
    setHoveredMember(id);
    setFlippedMembers((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id?: string) => {
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover)").matches
    ) {
      return;
    }
    setHoveredMember(null);
    if (id) {
      setFlippedMembers((prev) => ({ ...prev, [id]: false }));
    } else {
      setFlippedMembers({});
    }
  };

  // Scales for desktop and mobile cable rigs inside modal
  const modalScale4 = Math.min(1, Math.max(0.48, (modalWidth - 48) / 1040));
  const modalScale3 = Math.min(1, Math.max(0.48, (modalWidth - 48) / 880));
  const modalMobileScale = Math.min(
    0.85,
    Math.max(0.6, (modalWidth - 20) / 470),
  );

  const modalContent = (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[999] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-[#0A1623]/80 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
      style={{ touchAction: "none" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[92dvh] sm:max-h-[94vh] flex flex-col bg-gradient-to-b from-[#FAF8F5] via-[#F5F2EB] to-[#ECE7DE] rounded-2xl sm:rounded-3xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(10,22,35,0.45),0_0_0_1px_rgba(33,57,96,0.12)] overflow-hidden font-card-ui animate-in zoom-in-95 duration-200 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Prominent Cross Icon */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 border-b border-royal/10 bg-white/70 backdrop-blur-sm relative z-20 flex-shrink-0">
          <div className="min-w-0 pr-2">
            <h3 className="text-base sm:text-2xl font-extrabold text-royal-navy tracking-tight leading-tight truncate">
              {domain.name} Team
            </h3>
            <p className="text-[10px] sm:text-[11px] font-medium text-royal-accent font-mono truncate">
              {domain.members.length} Core Members
            </p>
          </div>

          {/* Prominent Cross Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-royal text-royal-navy hover:text-white flex items-center justify-center transition-all duration-200 hover:rotate-90 shadow-sm border border-royal/10 cursor-pointer shrink-0"
            title="Close team view"
            aria-label="Close team modal"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body with Dedicated Visible Custom Scrollbar */}
        <div
          ref={bodyRef}
          className="flex-1 overflow-y-scroll overflow-x-hidden p-2.5 sm:p-6 flex flex-col items-center justify-start w-full select-none modal-custom-scrollbar overscroll-contain"
          style={{
            touchAction: "pan-y",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* ========================================================
              DESKTOP VIEW: Hanging Cable Rig
              Visible on >= md (768px+)
              ======================================================== */}
          <div className="hidden md:flex flex-col items-center gap-6 sm:gap-8 w-full py-4">
            {domain.members.length === 6 ? (
              // Executive Committee: 6 Members split across 2 horizontal suspension cables (3 + 3)
              <div className="flex flex-col items-center gap-8 w-full">
                <MemberRowRig3
                  members={domain.members.slice(0, 3)}
                  prefix={`mod-${domain.id}-r1`}
                  scale={modalScale3}
                  flippedMembers={flippedMembers}
                  hoveredMember={hoveredMember}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleFlip={handleToggleFlip}
                  onFlipToFront={handleFlipToFront}
                  onFlipToBack={handleFlipToBack}
                />
                <MemberRowRig3
                  members={domain.members.slice(3, 6)}
                  prefix={`mod-${domain.id}-r2`}
                  scale={modalScale3}
                  flippedMembers={flippedMembers}
                  hoveredMember={hoveredMember}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleFlip={handleToggleFlip}
                  onFlipToFront={handleFlipToFront}
                  onFlipToBack={handleFlipToBack}
                />
              </div>
            ) : (
              // All 8 regular domains: 4 Members on 1 continuous suspension cable
              <MemberRowRig4
                members={domain.members}
                prefix={`mod-${domain.id}`}
                scale={modalScale4}
                flippedMembers={flippedMembers}
                hoveredMember={hoveredMember}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onToggleFlip={handleToggleFlip}
                onFlipToFront={handleFlipToFront}
                onFlipToBack={handleFlipToBack}
              />
            )}
          </div>

          {/* ========================================================
              MOBILE VIEW: Hanging Cable Rig (2 Members per Suspension Cable)
              Visible on < md (under 768px)
              Full physical wiring setup with cables, brackets, strings & clamps
              ======================================================== */}
          <div className="flex md:hidden flex-col items-center gap-6 w-full py-2">
            {domain.members.length === 6 ? (
              // Executive Committee: 3 cables of 2 members
              <>
                <MemberMobileRowRig2
                  memberA={domain.members[0]}
                  memberB={domain.members[1]}
                  prefix={`mod-m1-${domain.id}`}
                  scale={modalMobileScale}
                  flippedMembers={flippedMembers}
                  hoveredMember={hoveredMember}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleFlip={handleToggleFlip}
                  onFlipToFront={handleFlipToFront}
                  onFlipToBack={handleFlipToBack}
                />
                <MemberMobileRowRig2
                  memberA={domain.members[2]}
                  memberB={domain.members[3]}
                  prefix={`mod-m2-${domain.id}`}
                  scale={modalMobileScale}
                  flippedMembers={flippedMembers}
                  hoveredMember={hoveredMember}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleFlip={handleToggleFlip}
                  onFlipToFront={handleFlipToFront}
                  onFlipToBack={handleFlipToBack}
                />
                <MemberMobileRowRig2
                  memberA={domain.members[4]}
                  memberB={domain.members[5]}
                  prefix={`mod-m3-${domain.id}`}
                  scale={modalMobileScale}
                  flippedMembers={flippedMembers}
                  hoveredMember={hoveredMember}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleFlip={handleToggleFlip}
                  onFlipToFront={handleFlipToFront}
                  onFlipToBack={handleFlipToBack}
                />
              </>
            ) : (
              // Regular domains: 2 cables of 2 members
              <>
                <MemberMobileRowRig2
                  memberA={domain.members[0]}
                  memberB={domain.members[1]}
                  prefix={`mod-m1-${domain.id}`}
                  scale={modalMobileScale}
                  flippedMembers={flippedMembers}
                  hoveredMember={hoveredMember}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleFlip={handleToggleFlip}
                  onFlipToFront={handleFlipToFront}
                  onFlipToBack={handleFlipToBack}
                />
                <MemberMobileRowRig2
                  memberA={domain.members[2]}
                  memberB={domain.members[3]}
                  prefix={`mod-m2-${domain.id}`}
                  scale={modalMobileScale}
                  flippedMembers={flippedMembers}
                  hoveredMember={hoveredMember}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleFlip={handleToggleFlip}
                  onFlipToFront={handleFlipToFront}
                  onFlipToBack={handleFlipToBack}
                />
              </>
            )}
          </div>
        </div>

        {/* Modal Bottom Footer Hint */}
        <div className="px-4 py-2 sm:py-2.5 border-t border-royal/10 bg-white/50 text-center text-[9px] sm:text-[10px] text-royal/70 font-medium flex-shrink-0">
          Hover or tap any card to flip front/back for full profile · Click ✕ or
          anywhere outside to return
        </div>
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    return createPortal(modalContent, document.body);
  }
  return modalContent;
}

// ========================================================
// 11. MAIN TEAM SECTION COMPONENT
// ========================================================

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeDomainModal, setActiveDomainModal] = useState<Domain | null>(
    null,
  );

  // Measure container width dynamically for desktop and mobile rigs
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const desktopScale = Math.min(1, Math.max(0.5, (containerWidth - 48) / 1040));
  const mobileScale = Math.min(
    0.85,
    Math.max(0.6, (containerWidth - 16) / 470),
  );

  const handleMouseEnter = (id: string) => setHoveredCard(id);
  const handleMouseLeave = () => setHoveredCard(null);

  const handleOpenModal = (domain: Domain) => {
    setActiveDomainModal(domain);
  };

  const handleCloseModal = () => {
    setActiveDomainModal(null);
  };

  return (
    <section
      id="team"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-center items-center px-2 sm:px-6 py-12 relative overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-royal-accent/5 via-sky-200/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-10 z-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider uppercase text-royal-dark">
          Our Team
        </h2>
        <div className="w-24 h-1.5 bg-royal mx-auto mt-2.5 rounded-full" />
        <p className="text-xs sm:text-sm text-royal/70 uppercase tracking-widest mt-2 font-medium">
          Domains & Dedicated Minds Behind GGSC UEMK
        </p>
      </div>

      {/* Main Hanging Wire Rig Container */}
      <div
        ref={containerRef}
        className="w-full max-w-6xl mx-auto flex items-center justify-center overflow-hidden my-auto py-2"
      >
        {/* ========================================================
            1. DESKTOP VIEW: Top Lead Single Card + 2 Rows of 4 cards
            Visible on >= md (768px+)
            ======================================================== */}
        <div className="hidden md:flex flex-col items-center gap-6 sm:gap-8 w-full">
          {/* Top Featured Single Card: Executive Committee */}
          <SingleCardRig
            domain={LEAD_DOMAIN}
            prefix="d0"
            scale={desktopScale}
            isMobile={false}
            zIndex={hoveredCard === LEAD_DOMAIN.id ? 40 : 20}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />

          {/* Row 1: Web Dev, Graphics, Content, Student Operations */}
          <DesktopRowRig
            domains={ROW_DOMAINS.slice(0, 4)}
            prefix="d1"
            scale={desktopScale}
            hoveredCard={hoveredCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />

          {/* Row 2: Social Media, Cinematography, PR / Outreach, Volunteer */}
          <DesktopRowRig
            domains={ROW_DOMAINS.slice(4, 8)}
            prefix="d2"
            scale={desktopScale}
            hoveredCard={hoveredCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />
        </div>

        {/* ========================================================
            2. MOBILE VIEW: Top Lead Single Card + 4 Rows of 2x2 cards
            Visible on < md (under 768px)
            All cards scaled to identical uniform dimensions and enlarged
            ======================================================== */}
        <div className="flex md:hidden flex-col items-center gap-6 sm:gap-8 w-full max-w-lg mx-auto">
          {/* Top Featured Single Card: Executive Committee */}
          <SingleCardRig
            domain={LEAD_DOMAIN}
            prefix="m0"
            scale={mobileScale}
            isMobile={true}
            zIndex={hoveredCard === LEAD_DOMAIN.id ? 40 : 20}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />

          {/* Mobile Row 1: Web Dev & Graphics */}
          <MobileRowRig
            domainA={ROW_DOMAINS[0]}
            domainB={ROW_DOMAINS[1]}
            prefix="m1"
            scale={mobileScale}
            hoveredCard={hoveredCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />

          {/* Mobile Row 2: Content & Student Operations */}
          <MobileRowRig
            domainA={ROW_DOMAINS[2]}
            domainB={ROW_DOMAINS[3]}
            prefix="m2"
            scale={mobileScale}
            hoveredCard={hoveredCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />

          {/* Mobile Row 3: Social Media & Cinematography */}
          <MobileRowRig
            domainA={ROW_DOMAINS[4]}
            domainB={ROW_DOMAINS[5]}
            prefix="m3"
            scale={mobileScale}
            hoveredCard={hoveredCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />

          {/* Mobile Row 4: PR / Outreach & Volunteer */}
          <MobileRowRig
            domainA={ROW_DOMAINS[6]}
            domainB={ROW_DOMAINS[7]}
            prefix="m4"
            scale={mobileScale}
            hoveredCard={hoveredCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onOpenModal={handleOpenModal}
          />
        </div>
      </div>

      {/* Domain Team Members Popup Modal */}
      <DomainTeamModal domain={activeDomainModal} onClose={handleCloseModal} />
    </section>
  );
}
