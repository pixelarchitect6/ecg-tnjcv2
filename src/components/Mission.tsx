import React from 'react';
import { Target, Eye, Heart, Globe } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Mission, Vision & Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives and communities through the prophetic power of the Gospel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To raise a people that are passionate and committed to the spiritual and socioeconomic 
              transformation of society through the preaching of the Gospel of Jesus Christ under the 
              prophetic grace and anointing given to Major Prophet Dr. Shepherd Bushiri.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-4">
                <Eye className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the leading, living and dynamic prophetic church demonstrating the love, 
              power and compassion of Jesus Christ globally.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Love, Kindness & Compassion</h4>
              <p className="text-gray-600 text-sm">Demonstrating Christ's love in all we do</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-900" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Factual & Fairness in Treatment</h4>
              <p className="text-gray-600 text-sm">Treating everyone with justice and truth</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Mutual Respect & Tolerance</h4>
              <p className="text-gray-600 text-sm">Honoring diversity and unity in Christ</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-blue-900" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Team Spirit & Unity</h4>
              <p className="text-gray-600 text-sm">Working together as one body in Christ</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Excellence & Professionalism</h4>
              <p className="text-gray-600 text-sm">Pursuing excellence in all we do</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-900" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Commitment to Duty & Service</h4>
              <p className="text-gray-600 text-sm">Serving God and others faithfully</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Integrity & Honesty</h4>
              <p className="text-gray-600 text-sm">Walking in truth and righteousness</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-blue-900" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Accountability & Honesty</h4>
              <p className="text-gray-600 text-sm">Taking responsibility with transparency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;