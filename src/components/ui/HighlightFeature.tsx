import { motion } from 'framer-motion';
import { BiBrain } from 'react-icons/bi';

export default function HighlightFeature() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-glow" />
          <div className="relative bg-card/80 backdrop-blur-xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent p-0.5 mb-8">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <BiBrain className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Intelligent Writing
                  </span>{' '}
                  Assistance
                </h2>
                <p className="text-muted text-lg mb-8 max-w-2xl">
                  Our AI understands context and meaning, not just grammar and spelling. 
                  Get suggestions that enhance your writing style while maintaining your unique voice.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 text-white bg-gradient-to-r from-primary to-accent rounded-lg shadow-glow hover:shadow-glow-lg transition-shadow"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Animated Illustration */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-full bg-gradient-to-r from-primary/20 to-accent/20 p-1">
                    <div className="w-full h-full rounded-full bg-background/50 backdrop-blur-xl flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 animate-spin-slow" />
                    </div>
                  </div>
                  
                  {/* Orbiting Elements */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-4 h-4 rounded-full bg-primary/50 
                        animate-float`}
                      style={{
                        top: `${25 + i * 25}%`,
                        left: `${75 + Math.sin(i) * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
