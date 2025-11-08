import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400" data-testid="copyright">
            &copy; 2022 Kumail Raza. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
