import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import RealResults from './components/RealResults';
import Products from './components/Products';
import GeminiAdvisor from './components/GeminiAdvisor';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import EducationTeaser from './components/EducationTeaser';
import KnowledgeHub from './components/KnowledgeHub';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'education'>('home');

  return (
    <div className="min-h-screen bg-white text-planet-black font-sans antialiased">
      <Navbar 
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)} 
      />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <ProblemSolution />
            <RealResults />
            <Products />
            <EducationTeaser onNavigate={() => {
              setCurrentPage('education');
              window.scrollTo(0, 0);
            }} />
            <GeminiAdvisor />
            <FAQ />
          </>
        ) : (
          <KnowledgeHub onBack={() => {
            setCurrentPage('home');
            window.scrollTo(0, 0);
          }} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;