'use client';

import { useState, useEffect } from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { PlusCircle } from 'lucide-react';
import { Vortex } from '@/components/ui/vortex';

export default function TextRevealCardPage() {
  const [inputText, setInputText] = useState('');
  const [showCard, setShowCard] = useState(false);

  // Enable dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const placeholders = [
    "What's my blood pressure?",
    "When did I go to the doctor for tests?",
    "What is an ECG?"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setShowCard(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white transition-colors duration-200 overflow-hidden">
      {/* Vortex Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Vortex backgroundColor="black" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header - Now fixed */}
        <header className="fixed top-0 left-0 right-0 p-4 bg-gray-800/60 backdrop-blur-md z-50 border-b border-gray-700 transition-all duration-200">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
               Eve
              </span>
              <h2 className='text-purple-500'>by Adam</h2>
            </div>
          </div>
        </header>

        {/* Main Content - Added padding-top to account for fixed header */}
        <main className="flex-grow flex items-center justify-center pt-16 pb-16">
          <div className="w-full max-w-4xl px-4 py-8 flex flex-col items-center justify-center space-y-12">
            {/* Gradient Heading */}
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x">
             Hello! , How can I help?
            </h2>

            {/* Input Component */}
            <div className="w-full max-w-2xl">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </div>

            {/* Animated Card */}
            <AnimatePresence>
              {showCard && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                 
                      <TextGenerateEffect
                        words="You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction."
                        className="text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed text-yellow-200"
                        duration={1.0}
                      />
                      <div className="mt-4 text-right text-sm text-gray-400 italic">
                        - Bhagavad Gita 2.47
                      </div>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-4 bg-gray-800/60 backdrop-blur-md border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">
              Eve by Adam Abinsha Vahab
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}