import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Youmi Technology - Java Backend Developer",
    description: "Developed backend services using Golang (Gin) for internal systems. Built APIs for dashboards and data-heavy features, working with MySQL, Redis, and Kafka for scalable data processing. Improved API performance and handled structured data pipelines.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Yoma Bank - Java Backend Developer",
    description: "Designed and developed backend services using Spring Boot, Spring Batch, and Microservices architecture. Managed databases including MySQL and MongoDB, and worked on performance tuning for Bill Payments.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Seattle Consulting Myanmar - Web Developer",
    description: "Developed and maintained web applications using Java, PHP, Spring Boot, Spring MVC, Laravel, and VueJs. Managed databases including MySQL, Oracle Database, and PostgreSQL. Implemented integration testing frameworks using JUnit and Mockito.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Freelance - Point System Web Admin",
    description: "Built cash-in/cash-out approval workflows, reward redemption, and point tracking. Created real-time notifications, activity logs, and a responsive dashboard UI using Vuetify 3 with sorting, filtering, and pagination.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {card.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

