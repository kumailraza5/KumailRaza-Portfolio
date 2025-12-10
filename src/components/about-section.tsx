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
            {/* Desktop / Laptop Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/pp.jpeg"
                alt="Kumail Raza professional photo"
                className="rounded-2xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl h-[400px] w-auto object-cover hidden md:block"
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
               I’m Kumail, a versatile Full Stack Developer with strong expertise in React, the MERN stack, WordPress, and FlutterFlow for cross-platform app development. I’ve successfully worked with 12+ clients, building responsive, high-performance, and user-focused digital products. From modern frontend interfaces to scalable backend systems using Firebase, Firestore, and custom APIs, I deliver complete end-to-end solutions with seamless integrations. My focus is always on clean design, smooth functionality, and reliable delivery—helping clients turn their ideas into powerful, ready-to-grow digital experiences.
              </p>

              {/* Stats Counter */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center" data-testid="stat-projects">
                  <div className="text-3xl font-bold gradient-text">
                    {isVisible && <Counter end={20} />}
                  </div>
                  <div className="text-gray-400">Projects</div>
                </div>

                <div className="text-center" data-testid="stat-years">
                  <div className="text-3xl font-bold gradient-text">
                    {isVisible && <Counter end={3} />}
                  </div>
                  <div className="text-gray-400">Years</div>
                </div>

                <div className="text-center" data-testid="stat-clients">
                  <div className="text-3xl font-bold gradient-text">
                    {isVisible && <Counter end={12} />}
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
