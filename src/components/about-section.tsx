import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
}

function Counter({ end, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="about-title"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/pp.jpeg"
                alt="Kumail Raza professional photo"
                className="rounded-2xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl h-[400px] w-auto object-cover"
                data-testid="about-image"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold gradient-text" data-testid="about-subtitle">
                Professional Developer
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed" data-testid="about-description-1">
I am a versatile Frontend Developer specializing in React, FlutterFlow, and WordPress, with a strong foundation in building high-performance and user-centric digital experiences. I excel at creating responsive websites and cross-platform applications that combine clean design with robust functionality. Skilled in Firebase, Firestore, and modern APIs, I focus on delivering scalable solutions with seamless integrations. My goal is to continuously grow as a professional developer by working on impactful projects that blend innovation, design, and technology to help businesses stand out in the digital world.              </p>

              {/* Stats Counter */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center" data-testid="stat-projects">
                  <div className="text-3xl font-bold gradient-text">
                    {isVisible && <Counter end={2} />}
                  </div>
                  <div className="text-gray-400">Projects</div>
                </div>

                <div className="text-center" data-testid="stat-years">
                  <div className="text-3xl font-bold gradient-text">
                    {isVisible && <Counter end={1} />}
                  </div>
                  <div className="text-gray-400">Years</div>
                </div>

                <div className="text-center" data-testid="stat-clients">
                  <div className="text-3xl font-bold gradient-text">
                    {isVisible && <Counter end={0} />}
                  </div>
                  <div className="text-gray-400">Clients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
