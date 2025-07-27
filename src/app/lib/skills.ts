import { StackCategory } from './types'

export const stackCategories: StackCategory[] = [
  {
    title: "Operating Systems",
    items: [
      { name: "Windows", description: "Used across various development environments and projects" },
      { name: "Linux", description: "Used across various development environments and projects" },
      { name: "macOS", description: "Used across various development environments and projects" }
    ]
  },
  {
    title: "Computational & Engineering Software",
    items: [
      { name: "MATLAB", description: "Used for simulation, computation, and graphical output" }
    ]
  },
  {
    title: "Programming Languages",
    items: [
      { name: "Python", category: "General Purpose" },
      { name: "C", category: "General Purpose" },
      { name: "C++", category: "General Purpose" },
      { name: "Java", category: "General Purpose" },
      { name: "Rust", category: "General Purpose" },
      { name: "HTML", category: "Web Development" },
      { name: "CSS", category: "Web Development" },
      { name: "Tailwind CSS", category: "Web Development" },
      { name: "JavaScript", category: "Web Development" },
      { name: "TypeScript", category: "Web Development" },
      { name: "Node.js", category: "Web Development" },
      { name: "React", category: "Web Development" },
      { name: "Next.js", category: "Web Development" },
      { name: "PyScript", category: "Web Development" },
      { name: "Bash", category: "Scripting & Automation" },
      { name: "Shell Scripts", category: "Scripting & Automation" }
    ]
  },
  {
    title: "Hardware & Embedded Systems",
    items: [
      { name: "ESP32", category: "Microcontrollers & Dev Boards" },
      { name: "Arduino", category: "Microcontrollers & Dev Boards" },
      { name: "OpenMV", category: "Microcontrollers & Dev Boards" },
      { name: "Raspberry Pi", category: "Single-Board Computers" },
      { name: "UART", category: "Communication Protocols" },
      { name: "USB", category: "Communication Protocols" }
    ]
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "AWS", category: "Storage & Cloud" },
      { name: "Neon", category: "Storage & Cloud" },
      { name: "PostgreSQL", category: "Database Management" }
    ]
  },
  {
    title: "CAD & UI Tools",
    items: [
      { name: "SOLIDWORKS", category: "3D CAD & Modeling" },
      { name: "Fusion 360", category: "3D CAD & Modeling" },
      { name: "Onshape", category: "3D CAD & Modeling" },
      { name: "Shapr3D", category: "3D CAD & Modeling" },
      { name: "Figma", category: "UI & Graphics" },
      { name: "Canva", category: "UI & Graphics" }
    ]
  },
  {
    title: "Network & Communication Protocols",
    items: [
      { name: "WLAN", category: "Connection Protocols" },
      { name: "TCP Connections", category: "Connection Protocols" },
      { name: "Bluetooth (BLE)", category: "Connection Protocols" },
      { name: "Websocket API", category: "Connection Protocols" },
      { name: "IFTTT", category: "Web APIs & Data Exchange" },
      { name: "REST API", category: "Web APIs & Data Exchange" },
      { name: "JSON", category: "Web APIs & Data Exchange" },
      { name: "HTTP GET/POST", category: "Web APIs & Data Exchange" }
    ]
  },
  {
    title: "Development Tools",
    items: [
      { name: "Git", category: "Version Control" },
      { name: "GitHub", category: "Version Control" },
      { name: "GitHub Desktop", category: "Version Control" },
      { name: "Visual Studio Code", category: "IDEs & Code Editors" },
      { name: "Jupyter Notebook", category: "IDEs & Code Editors" },
      { name: "Google Colab", category: "IDEs & Code Editors" },
      { name: "PyScript.com", category: "IDEs & Code Editors" }
    ]
  },
  {
    title: "Python Libraries & Frameworks",
    items: [
      { name: "NumPy", category: "Scientific Computing" },
      { name: "Pandas", category: "Scientific Computing" },
      { name: "Matplotlib", category: "Scientific Computing" },
      { name: "PySerial", category: "Hardware/IO" }
    ]
  }
]