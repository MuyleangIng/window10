import {
  Folder,
  Mail,
  Briefcase,
  Code,
  User,
  Phone,
  GraduationCap,
  Award,
  Info,
  Github,
  Linkedin,
  Instagram,
  Calculator,
  FileText,
  Palette,
  Settings,
} from "lucide-react"

// Only show these 4 icons on the desktop (3 portfolio + Chrome)
export const desktopApps = [
  {
    id: "projects",
    name: "Projects",
    icon: <Code size={32} color="#0078d7" />,
  },
  {
    id: "github",
    name: "GitHub",
    icon: <Github size={32} color="#333" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <Linkedin size={32} color="#0A66C2" />,
  },
  {
    id: "chrome",
    name: "Chrome",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#4285F4" />
        <circle cx="24" cy="24" r="8" fill="white" />
        <path d="M24 12L42 12" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <path d="M6 12L12 12" stroke="#EA4335" strokeWidth="8" strokeLinecap="round" />
        <path d="M10 32L16 18" stroke="#FBBC05" strokeWidth="8" strokeLinecap="round" />
        <path d="M32 18L38 32" stroke="#34A853" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
          fill="#007ACC"
        />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          fill="#FF0000"
        />
      </svg>
    ),
  },
]

// Portfolio-related apps for the Start Menu
const portfolioApps = [
  {
    id: "personal-info",
    name: "Personal Info",
    icon: <User size={24} color="#0078d7" />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <Phone size={24} color="#0078d7" />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <Briefcase size={24} color="#0078d7" />,
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap size={24} color="#0078d7" />,
  },
  {
    id: "certifications",
    name: "Certifications",
    icon: <Award size={24} color="#0078d7" />,
  },
  {
    id: "additional-info",
    name: "Additional Info",
    icon: <Info size={24} color="#0078d7" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram size={24} color="#E4405F" />,
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: <Calculator size={24} color="#0078d7" />,
  },
  {
    id: "notepad",
    name: "Notepad",
    icon: <FileText size={24} color="#0078d7" />,
  },
  {
    id: "paint",
    name: "Paint",
    icon: <Palette size={24} color="#0078d7" />,
  },
  {
    id: "settings",
    name: "Settings",
    icon: <Settings size={24} color="#0078d7" />,
  },
]

// Essential Windows apps to keep in the Start Menu
const essentialWindowsApps = [
  {
    id: "file-explorer",
    name: "File Explorer",
    icon: <Folder size={24} color="#0078d7" />,
  },
  {
    id: "mail",
    name: "Mail",
    icon: <Mail size={24} color="#0078d7" />,
  },
]

// Combine portfolio apps and essential Windows apps for the Start Menu
export const allApps = [...desktopApps, ...portfolioApps, ...essentialWindowsApps]
