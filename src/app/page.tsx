'use client'
import { projects } from '@/app/lib/projects';
import Image from 'next/image';

export default function Home() {
  const featuredProjectTitles = [
    "Technologies and Designs for Remote Robotics Competition",
    "MealPlanGuru"
  ];
  const featuredProjects = projects.filter(project => 
    featuredProjectTitles.includes(project.title)
  );

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <section className="w-full max-w-4xl mx-auto text-center py-8">
            <h1  
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono uppercase leading-tight mb-4 w-full text-center"
              style={{
                background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 197, 94))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              William <br className="sm:hidden" />
              Goldman
            </h1>
          </section>

          <div className="w-full max-w-6xl mx-auto mb-12 pb-12 border-b border-gray-300 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
              <div className="lg:w-[75%]">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 text-center lg:text-left">
                    Hi, I&apos;m Will! I&apos;m a sophomore at Tufts University studying Mechanical Engineering and Computer Science. 
                    In addition to my studies, I work as a research technology intern at Tufts Technology Services (TTS) 
                    and I serve as the captain of the Tufts CubeSat team, where I lead a group of students in designing and building a small satellite. 
                    Some of my current interests include web development, cybersecurity, aerospace engineering, and robotics.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 text-center lg:text-left">
                    I learn quickly and enjoy working with others, or independently on smaller projects. 
                    I&apos;ve worked across the full stack on web-based projects and have recently been building systems that connect software and hardware 
                    through UART, BLE, and serial connection. 
                    On the mechanical side, I&apos;ve led a competition robotics team (FTC Team 5276), contributing to CAD modeling, 
                    machining, simulation, and systems integration in addition to my current work as the CubeSat lead.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 text-center lg:text-left">
                    In my free time, I enjoy watching Chelsea FC, building with LEGO, and skiing whenever I get the chance. 
                    Feel free to reach out if you&apos;d like to collaborate on a project or just chat about tech, engineering, or anything else!
                  </p>
                </div>
              </div>

              <div className="lg:w-[25%]">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Featured Projects</h2>
                <div className="space-y-4">
                  {featuredProjects.map((project, index) => (
                    <div 
                      key={index} 
                      className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md relative"
                    >
                      <div className="relative">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={400}
                          height={112}
                          className="w-full h-28 object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 flex items-end p-3">
                          <h3 className="text-white text-base font-semibold">{project.title}</h3>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400">{project.date}</p>
                      </div>
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex">
                        {project.academicProject ? (
                          <div className="flex-1 flex items-center justify-center p-2">
                            <div className="text-white text-xs text-center">
                              <div className="mb-1">Academic Project</div>
                              <div>Contact for details</div>
                            </div>
                          </div>
                        ) : (
                        
                        project.links?.map((link, linkIndex) => (
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
                        ))
                      )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}