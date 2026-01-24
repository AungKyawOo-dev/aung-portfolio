import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
            Backend/Web-focused developer with over 5 years of experience building secure financial systems,
            banking platforms, and administrative dashboards. Strong background in Java, Go, and PHP backend systems.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Technical Expertise</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Backend Development</h4>
                <p className="text-white/70">
                  Java, Spring Boot, Spring Batch, Golang (Gin), PHP, Laravel, Microservices, gRPC, Hibernate, JPA
                </p>
              </div>
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Frontend Development</h4>
                <p className="text-white/70">
                  Vue.js, Vuetify, HTML5, CSS3, JavaScript, jQuery, Bootstrap
                </p>
              </div>
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Databases & Tools</h4>
                <p className="text-white/70">
                  MySQL, MongoDB, Oracle Database, PostgreSQL, Redis, Kafka, Docker, Git, SVN
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 p-8 rounded-xl border border-purple-900/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Professional Highlights</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Experience building secure financial systems and banking platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Strong background in Microservices and Distributed Systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Practical frontend experience with Vue 3 and complex admin panels</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Reliable, dedicated, and high-quality software delivery focus</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Education & Achievements Section - Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8 rounded-xl border border-purple-900/30">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div>
              <h4 className="text-xl text-purple-400 font-medium">Bachelor of Computer Science</h4>
              <p className="text-white/80 mt-1">University of Computer Studies, Meiktila</p>
              <p className="text-white/60 text-sm mt-1">December 2012 - October 2018</p>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-6 mt-10">Languages</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/80">Burmese</span>
                <span className="text-purple-400">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">English</span>
                <span className="text-purple-400">Proficient</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Japanese</span>
                <span className="text-purple-400">Daily Conversational</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8 rounded-xl border border-purple-900/30">
            <h3 className="text-2xl font-semibold text-white mb-6">Achievements & Participations</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-purple-400"></div>
                <div>
                  <p className="text-white font-medium">Mobile Application Training</p>
                  <p className="text-white/60 text-sm">Samsung Tech Institute (Nov 2016)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-purple-400"></div>
                <div>
                  <p className="text-white font-medium">Asia-Yangon Regional Programming Contest</p>
                  <p className="text-white/60 text-sm">Contestant (Dec 2017)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-purple-400"></div>
                <div>
                  <p className="text-white font-medium">Diploma in Business English</p>
                  <p className="text-white/60 text-sm">MB-Business School (Jan 2020)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

