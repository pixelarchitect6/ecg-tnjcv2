import React from 'react';
import { Smartphone, Download, Bell, Play, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileAppPromo = () => {
  const features = [
    {
      icon: Play,
      title: 'Live Streaming',
      description: 'Watch services live or catch up later'
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Never miss important updates or events'
    },
    {
      icon: Users,
      title: 'Home Cells (Connect Groups)',
      description: 'Find and join home cells in your area'
    },
    {
      icon: Heart,
      title: 'Prayer Requests',
      description: 'Submit and pray for others in our community'
    }
  ];

  return (
    <section id="mobile-app" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
             <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Stay Connected
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Take The Jesus Nation Church
                <span className="block text-yellow-400">Experience With You</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Download our mobile app and stay connected to your church family wherever you go. 
                Access live services, connect with others, and grow in your faith journey.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                   <feature.icon className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Download className="mr-3" size={20} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Download className="mr-3" size={20} />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Phone */}
              <div className="relative z-10 bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="relative">
                    {/* Status Bar */}
                    <div className="bg-blue-900 px-6 py-4 flex justify-between items-center text-white text-sm">
                      <span className="font-semibold">ECG USA</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Live Stream Preview */}
                    <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-800">
                      <img
                        src="https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                        alt="Live Stream"
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                          LIVE
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-blue-900">Sunday Service</h3>
                        <span className="text-sm text-gray-500">247 watching</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                            <Play className="text-blue-900" size={16} />
                          </div>
                          <span className="text-sm text-gray-700">Watch Live</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="text-blue-900" size={16} />
                          </div>
                          <span className="text-sm text-gray-700">Home Cells (Connect Groups)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Heart className="text-blue-900" size={16} />
                          </div>
                          <span className="text-sm text-gray-700">Prayer Requests</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Phone */}
              <div className="absolute -right-8 top-8 z-0 bg-gray-800 rounded-[3rem] p-4 shadow-xl opacity-60 transform rotate-12">
                <div className="bg-gray-200 rounded-[2.5rem] w-64 h-[32rem]"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-16 bg-yellow-400 text-blue-900 p-3 rounded-full shadow-lg"
              >
                <Bell size={20} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 bottom-32 bg-white text-blue-900 p-3 rounded-full shadow-lg"
              >
                <Smartphone size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromo;