import React from 'react';
import { ArrowRight, Users, Heart, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WelcomeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const highlights = [
    'Spirit-filled worship and teaching',
    'Prophetic ministry and spiritual gifts',
    'Welcoming community for all ages',
    'Life transformation through God\'s power'
  ];

  const stats = [
    { number: '20000+', label: 'Souls Touched', icon: Users },
    { number: '8+', label: 'Years of Ministry', icon: Heart },
    { number: '50+', label: 'Nations Reached', icon: Zap }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Welcome Home
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Welcome to
                <span className="block text-yellow-400">ECG TJNC USA</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are part of the global Enlightened Christian Gathering (ECG) The Jesus Nation Church (TJNC) movement, established 
                under the prophetic ministry of Major Prophet Dr. Shepherd Bushiri. Our church 
                is a place where the supernatural meets the practical, where lives are transformed 
                through the power of God.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you're seeking spiritual growth, community, or experiencing God's power 
                for the first time, you'll find a warm welcome here. We believe in the power 
                of prophecy, healing, and the transformation that comes through encountering 
                Jesus Christ.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="text-blue-900" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group">
                <span className="mr-2">Learn More About Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative mb-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/usa-flag.jpg"
                  alt="USA Flag - ECG TJNC USA Church"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-2">The Jesus Nation Church USA</h3>
                  <p className="text-gray-200 text-sm">Serving communities across the United States</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-4 text-center text-white"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-blue-900" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 p-3 rounded-full shadow-lg"
            >
              <Heart size={24} />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white text-blue-900 p-3 rounded-full shadow-lg"
            >
              <Zap size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;