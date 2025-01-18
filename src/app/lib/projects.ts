import { Project } from './types'

export const projects: Project[] = [
    {
        title: "InterSystems $VECTOR Data Type in Rust",
        date: "January 2025 | Rust",
        description: "During January 2025, I worked as a team member of a project group whose goal was to implement the InterSystems $VECTOR data type in Rust. This was an unpaid internship through Tufts and I worked with an Intersystems developer on the project.",
        imageUrl: "/images/IrisVector.png",
        links: [
          { label: "", url: "https://github.com/iliketocode2/Rust-VECTOR", isGithub: true }
        ]
    },
    {
      title: "MealPlanGuru",
      date: "January 2025 | React.js, Next.js, Tailwind CSS, Neon, PostgreSQL, Resend Email",
      description: "A website designed to help students at Boston universities learn more about their meal plans.",
      imageUrl: "/images/mealplangurus.png",
      links: [
        { label: "Website", url: "https://www.mealplangurus.com/", isGithub: false },
        { label: "", url: "https://github.com/iliketocode2/mealplanguruofficial", isGithub: true }
      ]
    },
    {
      title: "LEGO SPIKE Test Rig",
      date: "Winter 2024 | HTML, JavaScript, CSS, Python, MicroPython, LEGO",
      description: "A website and physical rig to test the installation of new firmware on the LEGO SPIKE. Research project for the Tufts Center for Engineering Education and Outreach.",
      imageUrl: "/images/testRigSite.png",
      links: [
        { label: "Website", url: "https://iliketocode2.pyscriptapps.com/firmware-rig-feedback/latest/", isGithub: false },
        { label: "", url: "https://github.com/iliketocode2/Lego-Spike-Test-Rig", isGithub: true }
      ]
    },
    {
        title: "AI Mini Golf",
        date: "August 2024 | HTML, JavaScript, CSS",
        description: "A fun simulation that enables users to draw a mini golf course on a grid and then find the best path through it with a Q-learning algorithm.",
        imageUrl: "/images/mini golf interface.png",
        links: [
            { label: "Website", url: "https://iliketocode2.github.io/AI-Mini-Golf/", isGithub: false },
            { label: "", url: "https://github.com/iliketocode2/AI-Mini-Golf", isGithub: true }
        ]
    },
    {
        title: "LEGO SPIKE AI Maze",
        date: "July 2024 | HTML, JavaScript, CSS, Python, LEGO",
        description: ">As a research project for the Tufts Center for Engineering Education and Outreach, I developed a Lego labyrinth that is able to solve itself. This project integrated an openMV camera with a Lego Spike, all sending and receiving data from my computer.",
        imageUrl: "/images/MazeAndInterfaceRender.png",
        links: [
            { label: "", url: "https://github.com/iliketocode2/Lego-Spike-AI-Labyrinth", isGithub: true }
        ]
    },
    {
        title: "5276 Robotics Website",
        date: "2023 - 2024 | HTML, JavaScript, CSS",
        description: "I made this website for my school's FIRST Robotics team. It was the first major website that I actually deployed.",
        imageUrl: "/images/robotics team cover.png",
        links: [
            { label: "Website", url: "https://dshsrobotics.com/index.html", isGithub: false },
            { label: "", url: "https://github.com/5276-Dover-Sherborn-Robotcs/DSRobotics5276-Web", isGithub: true }
        ]
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
    },
    {
        title: "Pong Game",
        date: "April 2021 | JavaScript",
        description: "A pong game that I created on Code.org's app lab.",
        imageUrl: "/images/willPong1.png",
        links: [
            { label: "Pong Game", url: "https://studio.code.org/projects/applab/o0hDC9nUEVWDZsVRUaRonSjqOA-t3MYLHqWAwwaGW9U", isGithub: false },
        ],
    },
    {
        title: "Mandelbrot Fractal Generator",
        date: "May 2020 | HTML, JavaScript, CSS",
        description: "A website that generates iterations of the Mandelbrot Set with zoom capabilities.",
        imageUrl: "/images/willFractal2.png",
        links: [
            { label: "Fractal Generator", url: "https://replit.com/@iliketocode2/Wills-Fractal-Generator-v1", isGithub: false },
        ],
    },
    {
        title: "Model Rockets",
        date: "2015 - 2023 | Estes and Custom Builds",
        description: "In my spare time I enjoy building model rockets and launching them-- from double staged models to pyramid versions they're a fun summer and fall project.",
        imageUrl: "/images/rockets.jpg",
        links: []
    }
];