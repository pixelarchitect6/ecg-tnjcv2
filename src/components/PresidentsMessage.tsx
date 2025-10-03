import React from 'react';
import { Crown, Quote, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PresidentsMessage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="presidents-message" ref={ref} className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            A Word from Our Leader
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Message from Our
            <span className="block text-yellow-400">President & Founder</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Single Column Layout with Wrapped Text */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative"
            >
              <Quote className="text-yellow-400 mb-6" size={48} />
              
              {/* President's Image - Responsive Layout */}
              <div className="float-left mr-0 md:mr-8 mb-6 relative w-full md:w-80">
                <div className="w-full md:w-80 h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto">
                  <img
                    src="/major-2.jpeg"
                    alt="Major Prophet Dr. Shepherd Bushiri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Crown className="text-blue-900" size={20} />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="hidden md:block absolute -left-4 top-16 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg"
                >
                  <Heart size={20} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="hidden md:block absolute -right-4 bottom-16 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg"
                >
                  <Globe size={20} />
                </motion.div>
              </div>
              
              {/* Message Content - Wraps around image */}
              <div className="text-blue-100 leading-relaxed">
                <p className="text-lg mb-6">
                  Enlightened Christian Gathering Church (ECG) The Jesus Nation Church (TJNC) is a modern congregation of Christ – centered believers celebrating God through the Prophetic, Healing and Deliverance Ministries. It is a home to millions across the globe who seek to hear God speaking today. ECG is led by founder and General Overseer Prophet Shepherd Bushiri (Major One).
                </p>
                <p className="text-lg mb-6">
                  Through deliverance, healing, miracles, wonders and teaching the deep things of God, the ministry at ECG TJNC is definitely responding to the world to set the captives free from the oppression and the bondage of the devil.
                </p>
                <p className="text-lg mb-6">
                  We are more than a church, we are a family, where every race and class is accommodated, where the DNA of God declares each of us as citizens of heaven, lives are transformed and miracles and testimonies are the order of the day as demons and challenges are confronted and conquered; in our family we don't stress!
                </p>
                <p className="text-lg mb-6">
                  Our mission extends beyond the walls of our church buildings. We are committed to transforming communities through practical demonstrations of God's love, providing hope to the hopeless, and bringing healing to the broken-hearted. Every service is an opportunity to encounter the living God and experience His miraculous power.
                </p>
                <p className="text-lg mb-8">
                  Join us as we continue to advance God's kingdom on earth, raising up a generation that will carry the torch of faith into the future. Together, we are building something eternal – a legacy of faith, hope, and love that will impact generations to come.
                </p>
              </div>
              
              {/* Clear float and add attribution */}
              <div className="clear-both mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Crown className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-yellow-400">Major Prophet Dr. Shepherd Bushiri</p>
                    <p className="text-blue-200">President & Founder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Crown className="text-yellow-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Prophetic Ministry</h3>
              <p className="text-blue-100 text-sm">Operating in powerful prophetic gifts and revelations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Heart className="text-yellow-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Global Impact</h3>
              <p className="text-blue-100 text-sm">Transforming lives across nations and continents</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Globe className="text-yellow-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Biblical Foundation</h3>
              <p className="text-blue-100 text-sm">Deep understanding of God's Word and principles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresidentsMessage;