'use client'

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <section className="w-full max-w-4xl mx-auto text-center py-12">
          <h1  
            className="text-[clamp(3rem,6vw,9rem)] font-bold font-mono bg-gradient-to-r from-[rgb(13,169,216)] to-[rgb(23,196,7)] text-transparent bg-clip-text uppercase leading-[1.1] mb-4 w-full text-center"
          >
            William <br className="sm:hidden" />
            Goldman
          </h1>
          </section>

          <div className="w-full max-w-4xl mx-auto space-y-12">
            <p className="text-xl leading-relaxed dark:text-white">
              Hi, I'm Will! I am a freshman at Tufts University studying mechanical engineering and computer science. 
              I love STEM related topics such as website design, aerospace engineering, and robotics. 
              I have experience programming with Python 2.7 and 3, C++, Rust, Java, HTML, CSS, JavaScript, 
              Typescript, and Swift. In my free time I love to watch Chelsea FC and go skiing!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}