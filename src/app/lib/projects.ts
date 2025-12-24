import { Project } from './types'

export const projects: Project[] = [
    {
        title: "Technologies and Designs for Remote Robotics Competition",
        date: "July 2025 | MicroPython, Python, JavaScript, OpenCV, Websockets, WebRTC, Pyscript.com",
        description: "Inspired by FIRST LEGO League, this project explored and developed multiple mission-based robotics competitions using LEGO SPIKE, LEGO Science Hardware, and OpenMV cameras. Real-time Apriltag tracking (via OpenCV and Pupil-Apriltags) enabled projection of both a team's and their opponent's robot positions onto a shared field, with communication handled through WebSockets and Bluetooth protocols using PyScript.com interfaces.",
        imageUrl: "/images/Apriltag overview1.png",
        links: [
          { label: "Documentation", url: "https://fetlab.notion.site/Remote-FLL-Competition-237df3d0e05280e09622c856f06f14f7", isGithub: false },
          { label: "GitHub", url: "https://github.com/tuftsceeo/Remote-Robotics-Competition", isGithub: true }
        ],
        tags: {
          technologies: ["MicroPython", "Python", "JavaScript", "Websockets", "WebRTC", "Pyscript.com"],
          categories: ["Research", "Robotics"]
        },
        featured: true
    },
    {
        title: "Websocket Communication with ESP32s",
        date: "June 2025 | MicroPython, Python, TCP/IP, Websockets",
        description: "This project explored the feasibility of creating a direct WebSocket connection written in MicroPython from ESP32 \"Smart Motors\" to a secure JSON-based messaging system called channels, without relying on intermediary PyScript webpages.",
        imageUrl: "/images/Smart Motor Swarm img.png",
        links: [
          { label: "Documentation", url: "https://fetlab.notion.site/Smart-Motors-with-Websockets-23cdf3d0e05280e59db1ee467530549b?source=copy_link", isGithub: false },
          { label: "GitHub", url: "https://github.com/iliketocode2/Smart-Motors", isGithub: true }
        ],
        tags: {
          technologies: ["MicroPython", "Python", "TCP/IP", "Websockets"],
          categories: ["Research", "Software"]
        }
    },
    {
        title: "Gerp - Directory Search Tool",
        date: "May 2025 | C++, Data Structures, Hash Tables",
        description: "C++ implementation of a simplified Unix grep tool that recursively searches through directory structures. Features custom hash table with quadratic probing for efficient word indexing, case-sensitive and case-insensitive search modes, memory-optimized file path storage, and query processing with various commands.",
        imageUrl: "/images/gerp.png",
        links: [],
        tags: {
          technologies: ["C++"],
          categories: ["Software"]
        },
        academicProject: true
    },
    {
        title: "Satellite Orbit Simulation Toolkit",
        date: "April 2025 | MATLAB, Numerical Methods, GUI Development",
        description: "A MATLAB simulation toolkit for satellite orbital mechanics featuring multiple numerical methods (Euler, Runge-Kutta 4,5), interactive GUI for parameter selection, 3D visualization with Earth texture mapping, and orbital stability analysis. Demonstrates Newton-Raphson root finding and cubic spline interpolation.",
        imageUrl: "/images/matlab_final.png",
        links: [],
        tags: {
          technologies: ["MATLAB"],
          categories: ["Research", "Software"]
        },
        academicProject: true
    },
    {
        title: "JumboMap",
        date: "February 2025 - Present | React.js, Next.js, Typescript, Tailwind CSS, PostgreSQL, Neon",
        description: "Originally started as a Hackathon project at JumboHack 2025, the initial prototype of this site was developed by myself and a team of five others in 36 hours. Since then we have continued to expand and refine the capabilities of the website which is designed for easier navigation of events at Tufts University.",
        imageUrl: "/images/jumbomap.png",
        links: [
          { label: "Website", url: "https://jumbohack2025.vercel.app/", isGithub: false }
        ],
        tags: {
          technologies: ["React.js", "Next.js", "TypeScript", "CSS", "PostgreSQL", "Neon"],
          categories: ["Web Development"]
        },
        featured: true
    },
    {
        title: "Somerville Museum Website - JumboCode",
        date: "September 2024 - May 2025 | React.js, Next.js, JavaScript, CSS, PostgreSQL, Neon",
        description: "Working with a team of 13 other Tufts students, we developed an inventory management system for a local museum in Somerville, MA. The project was developed as part of the JumboCode organization at Tufts University.",
        imageUrl: "/images/Somerville Museum Dashboard.png",
        links: [
          { label: "Website", url: "https://somervillemuseum.vercel.app/", isGithub: false },
          { label: "GitHub", url: "https://github.com/JumboCode/somerville-museum", isGithub: true }
        ],
        tags: {
          technologies: ["React.js", "Next.js", "JavaScript", "CSS", "PostgreSQL", "Neon"],
          categories: ["Web Development"]
        }
    },
    {
        title: "InterSystems $VECTOR Data Type in Rust",
        date: "January 2025 | Rust",
        description: "During January 2025, I worked as a team member of a project group whose goal was to implement the InterSystems $VECTOR data type in Rust. This was an unpaid internship through Tufts and I worked with an Intersystems developer on the project.",
        imageUrl: "/images/IrisVector.png",
        links: [
          { label: "GitHub", url: "https://github.com/iliketocode2/Rust-VECTOR", isGithub: true }
        ],
        tags: {
          technologies: ["Rust"],
          categories: ["Research"]
        }
    },
    {
      title: "MealPlanGuru",
      date: "January 2025 | React.js, Next.js, Tailwind CSS, PostgreSQL, Neon, Resend Email",
      description: "A website designed to help students at Boston universities learn more about their meal plans.",
      imageUrl: "/images/mealplangurus.png",
      links: [
        { label: "Website", url: "https://www.mealplangurus.com/", isGithub: false },
        { label: "GitHub", url: "https://github.com/iliketocode2/mealplanguruofficial", isGithub: true }
      ],
      tags: {
        technologies: ["React.js", "Next.js", "CSS", "PostgreSQL", "Neon", "Resend Email"],
        categories: ["Web Development"]
      },
      featured: true
    },
    {
      title: "LEGO SPIKE Test Rig",
      date: "Winter 2024 | HTML, JavaScript, CSS, Python, MicroPython, LEGO",
      description: "A website and physical rig to test the installation of new firmware on the LEGO SPIKE. Research project for the Tufts Center for Engineering Education and Outreach.",
      imageUrl: "/images/testRigSite.png",
      links: [
        { label: "Website", url: "https://iliketocode2.pyscriptapps.com/firmware-rig-feedback/latest/", isGithub: false },
        { label: "GitHub", url: "https://github.com/iliketocode2/Lego-Spike-Test-Rig", isGithub: true }
      ],
      tags: {
        technologies: ["HTML", "JavaScript", "CSS", "Python", "MicroPython", "LEGO"],
        categories: ["Research"]
      }
    },
    {
        title: "AI Mini Golf",
        date: "August 2024 | HTML, JavaScript, CSS",
        description: "A fun simulation that enables users to draw a mini golf course on a grid and then find the best path through it with a Q-learning algorithm.",
        imageUrl: "/images/mini golf interface.png",
        links: [
            { label: "Website", url: "https://iliketocode2.github.io/AI-Mini-Golf/", isGithub: false },
            { label: "GitHub", url: "https://github.com/iliketocode2/AI-Mini-Golf", isGithub: true }
        ],
        tags: {
          technologies: ["HTML", "JavaScript", "CSS"],
          categories: ["Game Development"]
        }
    },
    {
        title: "LEGO SPIKE AI Maze",
        date: "July 2024 | HTML, JavaScript, CSS, Python, LEGO",
        description: "As a research project for the Tufts Center for Engineering Education and Outreach, I developed a Lego labyrinth that is able to solve itself. This project integrated an openMV camera with a Lego Spike, all sending and receiving data from my computer.",
        imageUrl: "/images/MazeAndInterfaceRender.png",
        links: [
            { label: "GitHub", url: "https://github.com/iliketocode2/Lego-Spike-AI-Labyrinth", isGithub: true }
        ],
        tags: {
          technologies: ["HTML", "JavaScript", "CSS", "Python", "LEGO"],
          categories: ["Research", "Robotics"]
        }
    },
    {
        title: "5276 Robotics Website",
        date: "2023 - 2024 | HTML, JavaScript, CSS",
        description: "I made this website for my school's FIRST Robotics team. It was the first major website that I actually deployed. The website has since be rebuilt by the team's new leadership, but the code is still buried in the original repository.",
        imageUrl: "/images/robotics team cover.png",
        links: [
            { label: "GitHub", url: "https://github.com/5276-Dover-Sherborn-Robotcs/DSRobotics5276-Web", isGithub: true }
        ],
        tags: {
          technologies: ["HTML", "JavaScript", "CSS"],
          categories: ["Web Development"]
        }
    },
    {
        title: "Hook Mechanism and Spool Design for FTC Robot",
        date: "Jan 2024 | Shapr3D",
        description: "These are some of the parts I designed for our team's robot during the 2023-24 season. The hook mechanism was able to lift the robot off the ground using a tape measure mounted inside of and controlled by this geared setup.",
        imageUrl: "/images/robot24.jpg",
        links: [
            { label: "Hook Design", url: "https://collaborate.shapr3d.com/v/ph_cqrzNmELp2-bVyTiZt", isGithub: false },
            { label: "Spool Design", url: "https://collaborate.shapr3d.com/v/ltu1S9aaVxZQYumGc5XWy", isGithub: false },
        ],
        tags: {
          technologies: ["Shapr3D"],
          categories: ["CAD/Design", "Robotics"]
        }
    },
    {
        title: "Pong Game",
        date: "April 2021 | JavaScript",
        description: "A pong game that I created on Code.org's app lab.",
        imageUrl: "/images/willPong1.png",
        links: [
            { label: "Pong Game", url: "https://studio.code.org/projects/applab/o0hDC9nUEVWDZsVRUaRonSjqOA-t3MYLHqWAwwaGW9U", isGithub: false },
        ],
        tags: {
          technologies: ["JavaScript"],
          categories: ["Game Development"]
        }
    },
    {
        title: "Mandelbrot Fractal Generator",
        date: "May 2020 | HTML, JavaScript, CSS",
        description: "A website that generates iterations of the Mandelbrot Set with zoom capabilities.",
        imageUrl: "/images/willFractal2.png",
        links: [
            { label: "Fractal Generator", url: "https://replit.com/@iliketocode2/Wills-Fractal-Generator-v1", isGithub: false },
        ],
        tags: {
          technologies: ["HTML", "JavaScript", "CSS"],
          categories: ["Web Development"]
        }
    },
    {
        title: "Model Rockets",
        date: "2015 - 2023 | Estes and Custom Builds",
        description: "In my spare time I enjoy building model rockets and launching them-- from double staged models to pyramid versions they're a fun summer and fall project.",
        imageUrl: "/images/rockets.jpg",
        links: [],
        tags: {
          technologies: [],
          categories: ["Software"]
        }
    }
];