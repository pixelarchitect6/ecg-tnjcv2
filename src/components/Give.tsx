import React, { useState } from 'react';
import { CreditCard, DollarSign, Heart, Shield, Repeat, TrendingUp, Smartphone, Bitcoin } from 'lucide-react';

const Give = () => {
  const [giveType, setGiveType] = useState('tithe');

  return (
    <section id="give" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Give & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generosity enables us to advance God's kingdom and transform lives through the Gospel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Giving Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Make a Donation</h3>
            
            {/* Giving Type */}
            <div className="mb-6">
              <label className="text-gray-700 font-semibold mb-3 block">Giving Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => setGiveType('tithe')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    giveType === 'tithe' 
                      ? 'border-blue-900 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <DollarSign className="mx-auto mb-2" size={24} />
                  <span className="font-semibold">Tithe</span>
                </button>
                <button
                  onClick={() => setGiveType('offering')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    giveType === 'offering' 
                      ? 'border-blue-900 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <Heart className="mx-auto mb-2" size={24} />
                  <span className="font-semibold">Offering</span>
                </button>
                <button
                  onClick={() => setGiveType('seed')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    giveType === 'seed' 
                      ? 'border-blue-900 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <DollarSign className="mx-auto mb-2" size={24} />
                  <span className="font-semibold">Seed</span>
                </button>
                <button
                  onClick={() => setGiveType('building')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    giveType === 'building' 
                      ? 'border-blue-900 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <Heart className="mx-auto mb-2" size={24} />
                  <span className="font-semibold">Building Fund</span>
                </button>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://www.eservicepayments.com/cgi-bin/vanco_ver3.vps?appver3=x1a8uAgje-8dTfwGAicT4jfYGSQ2YUK1meeOWlRPxdl1YzobNDOqExusiAiLTuMtBEhf8dxhk4vd5sYxhZbntY9OLO7Dg8yDfJe-osqoHKPelRMIUQO1ws0MDmjSxQn1qcPvZJD84MxDRx5JAFwT7g==', '_blank')}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
            >
              <CreditCard className="mr-2" size={20} />
              Give Now
            </button>

            <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
              <Shield className="mr-2" size={16} />
              Secure SSL Encryption
            </div>
          </div>

          {/* Impact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-900 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Ministry Expansion</h4>
                    <p className="text-blue-100">Supporting the growth of ECG USA and reaching more souls for Christ</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-900 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Community Outreach</h4>
                    <p className="text-blue-100">Funding programs that transform lives and communities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-900 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Global Missions</h4>
                    <p className="text-blue-100">Supporting prophetic ministry and evangelism worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Other Ways to Give</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Repeat className="text-blue-900 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Recurring Giving</h4>
                    <p className="text-gray-600">Set up automatic monthly donations</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="text-blue-900 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Bank Transfer</h4>
                    <p className="text-gray-600">Direct bank account transfer</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="text-blue-900 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">In-Person</h4>
                    <p className="text-gray-600">Give during Sunday services</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="text-blue-900 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Donate Stocks & Bonds</h4>
                    <p className="text-gray-600">Transfer securities for tax benefits</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Smartphone className="text-blue-900 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Text to Give</h4>
                    <p className="text-gray-600">Text "Give 100" to +1 (844) 579-1003</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Bitcoin className="text-blue-900 mr-4" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Donate Crypto</h4>
                    <p className="text-gray-600">Bitcoin, Ethereum, XRP and other cryptocurrencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Give;