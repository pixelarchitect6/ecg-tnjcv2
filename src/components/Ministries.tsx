import React from 'react';
import { Users, Heart, Zap, Baby, BookOpen, Globe } from 'lucide-react';

const Ministries = () => {
  const ministries = [
    {
      icon: Users,
      title: "Youth Magnet",
      description: "Empowering young people to walk in their prophetic destiny and leadership calling.",
      color: "from-blue-900 to-blue-700"
    },
    {
      icon: Heart,
      title: "Women on Fire",
      description: "Building women of virtue, purpose, and spiritual strength in the Lord.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Zap,
      title: "Iron Men",
      description: "Raising Godly men who lead with integrity and prophetic authority.",
      color: "from-blue-900 to-blue-700"
    },
    {
      icon: Baby,
      title: "Prophetic Giants",
      description: "Nurturing the next generation in the knowledge and power of God.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      description: "Deep biblical study combined with prophetic insights and revelation.",
      color: "from-blue-900 to-blue-700"
    },
    {
      icon: Globe,
      title: "Evangelism & Missions",
      description: "Taking the Gospel to the cities and local communities in the USA through prophetic evangelism.",
      color: "from-yellow-400 to-yellow-500"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Ministries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your place in God's kingdom through our various ministry opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${ministry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ministry.icon className={ministry.color.includes('yellow') ? 'text-blue-900' : 'text-white'} size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{ministry.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{ministry.description}</p>
              
              <button className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center">
                Learn More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const locationsSection = document.getElementById('locations');
              if (locationsSection) {
                locationsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ministries;