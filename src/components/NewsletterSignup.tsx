import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  if (isSubscribed) {
    return (
      <div className="text-center">
        <h4 className="text-xl font-bold text-yellow-400 mb-4">Stay Connected</h4>
        <h4 className="text-xl font-bold text-white mb-2">Welcome to our community!</h4>
        <p className="text-blue-100">You'll receive updates about upcoming events and messages.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h4 className="text-xl font-bold text-white mb-4">Stay Connected</h4>
      <p className="text-blue-100 mb-6">Subscribe to receive updates about upcoming events and messages</p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900"></div>
            ) : (
              <>
                <Mail className="mr-2" size={18} />
                Subscribe
              </>
            )}
          </button>
        </div>
        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}
      </form>
    </div>
  );
};

export default NewsletterSignup;