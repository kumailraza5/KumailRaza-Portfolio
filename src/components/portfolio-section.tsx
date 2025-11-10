import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, ExternalLink, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    view?: string;
  };
}

const projects: Project[] = [
 {
    id: 1,
    title: "Dux Design – Webflow Project",
    description:
      "Developed a modern, responsive website in Webflow for Dux Design, showcasing their UX/UI expertise, case studies, services, and team with clean layouts and interactive elements.",
    image: "/webflow2.png",
    category: "Webflow",
    technologies: ["Webflow", "HTML5", "CSS3", "JavaScript"],
    links: {
      view: "https://duxdesign-site.webflow.io/",
    },
  },
   {
    id: 2,
    title: "Agile by Design – Webflow Project",
    description:
      "Developed a responsive, modern website in Webflow for Agile by Design, incorporating custom layouts, CMS integration, and interactive elements to effectively showcase the client’s services and brand identity.",
    image: "/webflow1.png",
    category: "Webflow",
    technologies: ["Webflow", "HTML5", "CSS3", "JavaScript"],
    links: {
      view: "https://www.agilebydesign.com/",
    },
  },
  {
    id: 3,
    title: "Elite Motors – Luxury Car Showroom",
    description:
      "A modern and responsive Car Showroom Website built with React and Tailwind CSS, featuring smooth animations, interactive car listings, and a clean, elegant UI to showcase luxury vehicles.",
    image: "/carshowroom.png",
    category: "React",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
    links: {
      github: "https://github.com/kumailraza5/carshowroom_UI",
      view: "https://carshowroom-ws42.onrender.com/",
    },
  },
 {
    id: 4,
    title: "Wimbo – Website Project",
    description:
      "Developed a modern, responsive website for Wimbo, a social and event platform, featuring user profiles, event creation, trending videos, and community engagement.",
    image: "/framer3.png",
    category: "Webflow",
    technologies: ["Framer", "HTML5", "CSS3", "JavaScript"],
    links: {
      view: "https://wimbo.au/",
    },
  },
  {
    id: 5,
    title: "SyncSpace – Framer Project",
    description:
      "Developed a sleek, responsive website for SyncSpace using Framer, showcasing a virtual‑reality social platform built to bring people together in shared VR spaces. Features include avatar building, friend connections, group sessions, and subscription‑based pricing plans.",
    image: "/framer4.png",
    category: "Webflow",
    technologies: ["Framer", "HTML5", "CSS3", "JavaScript"],
    links: {
      view: "https://syncspace.framer.ai/",
    },
  },
 {
    id: 6,
    title: "RIGROCK L.L.C. Website Development",
    description:
      "Developed the official RIGROCK L.L.C. website using Elementor in WordPress while working at Kod El Bait. Designed a clean, responsive, and user-friendly layout to showcase their services in oil & gas, industrial equipment, and global sourcing, highlighting company profile, products, and contact information effectively.",
    image: "/rigrock.png",
    category: "Wordpress",
    technologies: [ "WordPress", "Elementor", "PHP", "HTML5", "CSS3"],
    links: {
      github: "https://your-flutterflow.com/beauty-mart",
      view: "https://rigrock.ae/",
    },
  },
   {
    id: 7,
    title: "Salon Web App",
    description:
      "A modern salon website built with React featuring client reviews, service packages, online booking, and secure payment integration for a smooth and user-friendly experience.",
    image: "/salonn.jpg",
    category: "React",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
    links: {
      github: "https://github.com/kumailraza5/Saloon_Web_UI",
      view: "https://saloon-app-kiic.onrender.com/",
    },
  },
  {
    id: 8,
    title: "Likely – Framer Project",
    description:
      "Developed a sleek, responsive website in Framer for Likely, a predictive conversion intelligence platform. The site showcases key statistics, interactive features like a live ROI calculator, service highlights, and client testimonials, all with clean layouts, modern visuals, and conversion-focused design.",
    image: "/framer1.png",
    category: "Webflow",
    technologies: ["Framer", "HTML5", "CSS3", "JavaScript"],
    links: {
      view: "https://www.likely.to/",
    },
  },
  {
    id: 9,
    title: "Xinovix – Framer Project",
    description:
      "Developed the responsive, modern website for Xinovix using Framer — a design‑forward no‑code/low‑code platform. The site features intuitive navigation, a blog section to share insights, career pages to attract talent, and clean, professional aesthetics tailored to the brand’s tech‑driven identity.",
    image: "/framer2.png",
    category: "Webflow",
    technologies: ["Framer", "HTML5", "CSS3", "JavaScript"],
    links: {
      view: "https://xinovix.framer.website/",
    },
  },
   {
    id: 10,
    title: "Bakery UI Pink Theme",
    description:
      "A charming, responsive “Bakery App” interface built with a pink-themed palette, designed to bring bakery menus to life with appetizing visuals, intuitive navigation, and delightful animations — perfect for showcasing a sweet brand experience.",
    image: "/pink.png",
    category: "React",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
    links: {
      github: "https://github.com/kumailraza5/Bakery_APP_Pink",
      view: "https://bakery-app-ui-pinktheme-1.onrender.com/",
    },
  },
  {
    id: 11,
    title: "Bakery UI Purple",
    description:
      "A charming, responsive “Bakery App” interface built with a purple-themed palette, designed to bring bakery menus to life with appetizing visuals, intuitive navigation, and delightful animations — perfect for showcasing a sweet brand experience.",
    image: "/purple.jpeg",
    category: "React",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
    links: {
      github: "https://github.com/kumailraza5/Bakery_APP_Purple",
      view: "https://bakery-app-ui-purpletheme.onrender.com/",
    },
  },
  {
    id: 12,
    title: "From The Walled Garden – WordPress Project",
    description:
      "Built a responsive online shop using Bricks Builder on WordPress for a hand‑poured artisan candle brand. The site features clean layouts, product collections, ethical ingredient messaging and an elegant eCommerce checkout.",
    image: "/wordpress2.png",
    category: "Wordpress",
    technologies: [ "WordPress", "Bricks", "JavaScript", "HTML5", "CSS3"],
    links: {
      view: "https://fromthewalledgarden.com/shop/",
    },
  },
  {
    id: 13,
    title: "Ubuntu Productions – WordPress Project",
    description:
      "Developed a responsive website for Ubuntu Productions, a creative agency, showcasing services in web design, branding, graphic design, and photography with clean layouts and modern design.",
    image: "/wordpress3.png",
    category: "Wordpress",
    technologies: [ "WordPress", "Bricks", "JavaScript", "HTML5", "CSS3"],
    links: {
      view: "https://ubuntuproductions.fi/",
    },
  },
   {
    id: 14,
    title: "BenElke – WordPress (Bricks Builder + WooCommerce) Project",
    description:
      "Developed a modern, responsive e-commerce website for BenElke using Bricks Builder on WordPress with WooCommerce integration. The site showcases home‑wares, garden, and gift products with clean product categories, easy navigation, and a seamless shopping experience.",
    image: "/wordpress4.png",
    category: "Wordpress",
    technologies: [ "WordPress", "Bricks","WooCommerce", "JavaScript", "HTML5", "CSS3"],
    links: {
      view: "https://www.benelke.com.au/",
    },
  },
  {
    id: 15,
    title: "Mivvy Creative – WordPress Project",
    description:
      "Developed a modern, responsive website for Mivvy Creative using Breakdance Builder on WordPress. The site showcases their design services, including branding, web design, and marketing materials, with clean layouts and smooth navigation.",
    image: "/wordpress5.png",
    category: "Wordpress",
    technologies: [ "WordPress", "Breakdance","WooCommerce", "JavaScript", "HTML5", "CSS3"],
    links: {
      view: "https://mivvy.co.uk/",
    },
  },
  {
    id: 16,
    title: "SAAM – WordPress (Bricks Builder) Project",
    description:
      "Developed a modern, responsive website for SAAM, Switzerland’s leading platform for autonomous mobility, using Bricks Builder on WordPress. The site highlights their vision, mission, working groups, and autonomous vehicle projects with clean layouts and intuitive navigation.",
    image: "/wordpress6.png",
    category: "Wordpress",
    technologies: [ "WordPress", "Bricks", "JavaScript", "HTML5", "CSS3"],
    links: {
      view: "https://www.saam.swiss/fr/",
    },
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ NEW: View More state
  const [showAll, setShowAll] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("portfolio");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updated =
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    setFilteredProjects(updated);
    setShowAll(false); // reset mobile view more on category change
  }, [activeFilter]);

  const filters = [
    { key: "all", label: "All" },
    { key: "React", label: "React" },
    { key: "Webflow", label: "Webflow" },
    { key: "Wordpress", label: "Wordpress" },
  ];

  // ✅ FINAL DISPLAY LIST
  const displayProjects =
    isMobile && !showAll ? filteredProjects.slice(0, 5) : filteredProjects;

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
          </motion.h2>

          {/* Filters */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-lg flex-wrap justify-center">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-md transition-all duration-300 whitespace-nowrap
                    ${
                      activeFilter === filter.key
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-600"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.category === "React" && project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github size={16} /> Code
                      </motion.a>
                    )}

                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={16} /> Demo
                      </motion.a>
                    )}

                    {project.links.view && (
                      <motion.a
                        href={project.links.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Eye size={16} /> View
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ✅ Mobile View More / View Less */}
          {isMobile && filteredProjects.length > 5 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
