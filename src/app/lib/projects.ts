import { Project } from './types'

export const projects: Project[] = [
  {
      title: "C & Assembly Projects",
      date: "September 2025 - December 2025",
      description: `A collection of systems programming projects written in C and x86 assembly language. 
      These projects focused on low-level programming, memory management, performance optimization, 
      and understanding computer architecture fundamentals.`,
      imageUrl: "/images/CS40.png",
      tags: {
        technologies: ["C", "x86 assembly language"],
        categories: ["Software"]
      },
      discipline: "Computer Science",
      academicProject: true,
      slug: "c-assembly-projects",
      subProjects: [
        {
          title: "Assembly-Language Programming (RPN Calculator)",
          date: "12/8/2025",
          description: `A fully functional Reverse Polish Notation (RPN) calculator implemented entirely in Universal Machine Assembly language. The system uses a finite-state machine to process character-by-character numerical input and manages a value stack for arithmetic operations. The implementation required strictly adhering to a recommended calling convention, creating custom macro instructions, and managing low-level program sections to ensure the assembly code mirrored the behavior of a reference C implementation.`
        },
        {
          title: "Code Improvement Through Profiling",
          date: "12/1/2025",
          description: `A performance-tuning project dedicated to optimizing a Universal Machine emulator by identifying and eliminating computational bottlenecks. Using qcachegrind and valgrind, I profiled the emulator while running the "sandmark" benchmark to isolate high-latency instructions and memory access patterns. Improvements were achieved through code-tuning techniques such as reducing function-call overhead and optimizing the inner instruction-dispatch loop, resulting in measurable increases in MIPS performance`
        },
        {
          title: "A Universal Virtual Machine (UM)",
          date: "11/17/2025",
          description: `A software emulator for the "Universal Machine," a 32-bit virtual architecture featuring segmented memory and a custom instruction set. The system implements a complete execution cycle to run compiled .um binaries, managing a machine state that includes eight general-purpose registers and dynamic memory mapping. Key technical challenges included simulating 32-bit segment identifiers on a native 64-bit system and optimizing the instruction-dispatch loop to meet specific millions-of-instructions-per-second (MIPS) performance benchmarks.`
        },
        {
          title: "Analysis of AMD64 Assembly Code (The Binary Bomb)",
          date: "11/3/2025",
          description: `A reverse-engineering project focused on defusing a "binary bomb" executable by analyzing its AMD64 (x86_64) assembly code. Using the GNU Debugger (GDB) and objdump, I performed deep-dive analysis into six distinct phases of increasing complexity, identifying control-flow structures, stack frame management, and data-flow patterns. This required a precise understanding of the calling convention, register usage, and the Instruction Set Architecture (ISA) level representation of C procedures.`
        },
        {
          title: "Machine Arithmetic",
          date: "10/21/2025",
          description: `A lossy image compression tool modeled after the JPEG standard, utilizing color space transformation and discrete cosine transforms (DCT). The program converts PPM images from RGB to component video before quantizing luminance and chroma data into 32-bit codewords. A significant portion of the project involved building a robust Bitpack interface to manipulate bit-level data, requiring careful handling of two's-complement signed integers and floating-point precision6666.`
        },
        {
          title: "Locality-Optimized PPM Rotator/Reflector",
          date: "10/7/2025",
          description: `An experimental study of cache performance and memory locality through the implementation of polymorphic, blocked 2D arrays. The project focused on optimizing image rotation algorithms by comparing row-major, column-major, and block-major access patterns. Technical deliverables included a performance analysis that used cache-hit predictions and measurement tools to explain the dramatic execution-time differences caused by spatial and temporal locality in the CPU cache.`
        },
        {
          title: "Interfaces, Implementations, and Images",
          date: "9/25/2025",
          description: `A suite of data structures and applications built around custom 2D unboxed arrays (UArray2) and bit-mapped arrays (Bit2). The project demonstrates modular design through two primary applications: a Sudoku solution verifier and an "unblackedges" tool that utilizes a depth-first search (DFS) or similar traversal to remove bordering black pixels from PBM images. This assignment emphasized the design of clean function contracts, representation invariants, and polymorphic interfaces.`
        },
        {
          title: "Files, Pictures, and Interfaces",
          date: "9/15/2025",
          description: `An image restoration utility designed to recover corrupted digital images by identifying and extracting hidden data within a proprietary file format. The project involved implementing a modular readaline interface for robust input handling and building a restoration engine that uses pattern recognition to filter out "treacherous" data. This served as an introduction to managing memory with Hanson’s interfaces and developing large-scale C programs with a heavy focus on modularity and pointer arithmetic.`
        }
      ]
    },
      {
        title: "Beam Deflection Analysis - Cantilevered and Simply Supported",
        date: "December 2025",
        description: `Experimental and analytical study of beam mechanics, focusing on the 
        deflection and stress profiles of steel, aluminum, and acrylic under varying support 
        conditions. With a partner, we conducted theoretical calculations and physical 
        experiments to validate Euler-Bernoulli beam theory, specifically analyzing how 
        geometric orientation influences stiffness in acrylic rods. The study required 
        Finite Element Analysis (FEA) to correlate simulated stress distributions with 
        physical results.`,
        imageUrl: "/images/pdf_images/acrylic_polar1.jpeg",
        tags: {
          technologies: ["SOLIDWORKS FEA", "Latex"],
          categories: ["Analysis"]
        },
        discipline: "Mechanical Engineering",
        pdfUrl: "/pdfs/ME20___Project2___Maggie_Will.pdf",
        slug: "Beam-Deflection-Analysis"
      },
      {
        title: "Hip Truss Analysis",
        date: "October 2025",
        description: `Working in a group of two, this project focused on the design and 
        structural analysis of a statically determinate truss. The workflow involved 
        calculating theoretical support reactions and internal member forces using the 
        Method of Joints and Method of Sections. After performing manual calculations, 
        we constructed a physical model to experimentally verify the support reactions 
        under various loading conditions. We also validated the results by developing a 
        MATLAB script to perform the matrix analysis of the truss’s equilibrium equations.`,
        imageUrl: "/images/pdf_images/loadingcondition2.jpg",
        tags: {
          technologies: ["SOLIDWORKS FEA", "Latex", "MATLAB"],
          categories: ["Analysis"]
        },
        discipline: "Mechanical Engineering",
        pdfUrl: "/pdfs/ME20___Project1___Maggie_Will.pdf",
        slug: "Hip-Truss-Analysis"
      },
      {
        title: "FEA Analysis of a Cantilevered Beam",
        date: "October 2025",
        description: `This project focused on the fundamentals of Finite Element Analysis (FEA) 
        by simulating a copper cantilever beam under a 75 lbf load. The study involved 
        configuring boundary conditions, generating meshes, and extracting displacement 
        and von Mises stress plots. A critical component was the analytical verification 
        of the results, where FEA data was validated against Euler-Bernoulli beam theory. 
        Additionally, the study evaluated the transition from elastic to plastic deformation 
        to determine the maximum load threshold before material yield.`,
        imageUrl: "/images/pdf_images/SZ.png",
        tags: {
          technologies: ["SOLIDWORKS FEA", "Latex"],
          categories: ["Analysis"]
        },
        discipline: "Mechanical Engineering",
        pdfUrl: "/pdfs/ME10___FEA_LAB___William_Goldman.pdf",
        slug: "FEA-of-a-Cantilevered-Beam"
      },
      {
        title: "Step Stool",
        date: "December 2025",
        description: `The step ladder project was a 3-week design and build process that 
        consisted of an initial round of designs in OnShape and SOLIDWORKS, followed by 
        an FEA in SOLIDWORKS to simulate loads on the final design. The build process took 
        approximately two weeks, first done with initial testing on 1/32" and later 1/16" 
        material before completing the final build. The resulting step ladder (step stool) 
        could hold members of the building team with ease (up to 180lbs).`,
        imageUrl: "/images/ME10 Project Images/Final Project - StepLadder/Final Step.jpeg",
        images: [
          "/images/ME10 Project Images/Final Project - StepLadder/English Roller.jpeg",
          "/images/ME10 Project Images/Final Project - StepLadder/16step.jpeg",
          "/images/ME10 Project Images/Final Project - StepLadder/16side_bent.jpeg",
          "/images/ME10 Project Images/Final Project - StepLadder/16side_allfour.jpeg"
        ],
        tags: {
          technologies: ["Ironworker", "Waterjet", "Drill Press", "Hydraulic Press"],
          categories: ["Manufacturing"]
        },
        discipline: "Mechanical Engineering",
        featured: true,
        pdfUrl: "/pdfs/ME10 Final Project Report - Google Docs.pdf",
        slug: "step-stool"
      },
      {
        title: "Acrylic Phone Stand & Injection Molding",
        date: "November 2025",
        description: `This lab focused on the fundamentals of polymer processing, 
        specifically exploring the manufacturing techniques of injection molding 
        and thermal forming. I produced standardized "dogbone" test specimens for tensile
        analysis and fabricated an acrylic phone stand using localized heating.`,
        imageUrl: "/images/ME10 Project Images/Project6.1.jpeg",
        images: [
          "/images/ME10 Project Images/Project6.jpeg" 
        ],
        tags: {
          technologies: ["Injection Molding", "Strip Heater", "Instron"],
          categories: ["Manufacturing"]
        },
        discipline: "Mechanical Engineering"
      },
      {
        title: "Tea Candle Holder",
        date: "November 2025",
        description: `Using the cold saw and Ironworker, I manufactured a small tea candle
        holder! This involved the fabrication of a three-piece assembly consisting of an 
        Aluminum ring, a steel plate, and a steel stand.`,
        imageUrl: "/images/ME10 Project Images/Project5.jpeg",
        images: [
          "/images/ME10 Project Images/Project5.1.jpeg" 
        ],
        tags: {
          technologies: ["Sheet Metal Work", "Ironworker", "Cold Saw"],
          categories: ["Manufacturing"]
        },
        discipline: "Mechanical Engineering"
      },
      {
        title: "Sheet Metal Box",
        date: "October 2025",
        description: `A simple box made of 1/32" Aluminum. The goal was to practice using
        the sheet metal break, table sheet metal bender, bead roller, English Wheel, and 
        various punches and rivets.`,
        imageUrl: "/images/ME10 Project Images/Project4.jpeg",
        tags: {
          technologies: ["Sheet Metal Work"],
          categories: ["Manufacturing"]
        },
        discipline: "Mechanical Engineering"
      },
      {
        title: "Gear Sand Casting",
        date: "September 2025",
        description: `This project was an introduction to sand casting and how to design a 
        proper mold with a runner and a sprue. I chose to make a gear which was casted
        with molten pewter.`,
        imageUrl: "/images/ME10 Project Images/Project2.jpeg",
        images: [
          "/images/ME10 Project Images/Project2.1.jpeg", 
          "/images/ME10 Project Images/Project2.2.jpeg"
        ],
        tags: {
          technologies: ["Sand Casting", "Belt Sander"],
          categories: ["Manufacturing"]
        },
        discipline: "Mechanical Engineering"
      },
      {
        title: "Press Support Base",
        date: "September 2025",
        description: `This lab activity focused on developing proficiency with the horizontal and vertical bandsaws, 
        the drill press, and the belt sander. The goal was to fabricate a precision part from 
        Aluminum 6061-T6511 stock, requiring that the tolerances specified in the 
        engineering drawings were met. The final success of the project was determined by whether the finished part could 
        fit into a precision-machined gage block.`,
        imageUrl: "/images/ME10 Project Images/Project1.jpeg",
        tags: {
          technologies: ["Drill Press", "Vertical Bandsaw"],
          categories: ["Manufacturing"]
        },
        discipline: "Mechanical Engineering"
    },
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
        },
        discipline: "Computer Science"
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
      discipline: "Computer Science"
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
        academicProject: true,
        discipline: "Computer Science"
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
        academicProject: true,
        discipline: "Computer Science"
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
        },
        discipline: "Computer Science"
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
        },
        discipline: "Computer Science"
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
      featured: true,
      discipline: "Computer Science"
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
        },
        discipline: "Computer Science"
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
        },
        discipline: "Computer Science"
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
        },
        discipline: "Mechanical Engineering"
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
        },
        discipline: "Computer Science"
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
        },
        discipline: "Computer Science"
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
        },
        discipline: "Mechanical Engineering"
    }
];