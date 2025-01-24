'use client'
import { projects } from '@/app/lib/projects';

export default function Home() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "Rust", "Java"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React.js", "Next.js"]
    },
    {
      category: "Engineering",
      skills: ["Robotics", "SOLIDWORKS", "OnShape", "Fusion360"]
    }
  ];

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <section className="w-full max-w-4xl mx-auto text-center py-8">
            <h1  
              className="text-[clamp(3rem,6vw,9rem)] font-bold font-mono bg-gradient-to-r from-[rgb(13,169,216)] to-[rgb(23,196,7)] text-transparent bg-clip-text uppercase leading-[1.1] mb-4 w-full text-center"
            >
              William <br className="sm:hidden" />
              Goldman
            </h1>
          </section>

          <div className="w-full max-w-4xl mx-auto space-y-8 mb-12 pb-12 border-b border-gray-300 dark:border-gray-700">
            <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-200 text-center">
              Hi, I&apos;m Will! I am a freshman at Tufts University studying mechanical engineering and computer science. 
              I love STEM-related topics such as website design, aerospace engineering, and robotics. 
              I have experience programming with Python 2.7 and 3, C++, Rust, Java, HTML, CSS, JavaScript, 
              Typescript, and Swift. In my free time, I love to watch Chelsea FC and go skiing!
            </p>
          </div>

          <section className="flex flex-col md:flex-row w-full max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
            {/* Featured Projects Section */}
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Featured Projects</h2>
              <div className="flex space-x-6 overflow-x-auto pb-4">
                {projects.slice(1, 3).map((project, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md relative"
                  >
                    <div className="relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 flex items-end p-3">
                        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.date}</p>
                    </div>
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex">
                      {project.links?.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center hover:bg-black/10 transition-colors"
                        >
                          {link.isGithub ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                              <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Skills</h2>
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-4 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full transition-all hover:scale-105"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}