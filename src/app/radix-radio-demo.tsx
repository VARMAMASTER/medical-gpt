import { motion } from "framer-motion"
import { animations } from "@/lib/animations"
import LabelDemo from "@/components/ui/LabelDemo"

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animations.slideUp}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Interactive Components
            </h1>
            <p className="text-gray-400">
              Modern UI components with smooth animations and gradient effects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-800"
            >
              <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Label Component
              </h2>
              <LabelDemo />
            </motion.div>
            
            {/* Add more component demos here */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

