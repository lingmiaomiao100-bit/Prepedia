import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicList from './pages/TopicList';
import TopicDetail from './pages/TopicDetail';
import FAQ from './pages/FAQ';
import About from './pages/About';
import { Category } from './types';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route 
              path="/disasters" 
              element={
                <TopicList 
                  category={Category.DISASTER} 
                  title="Disaster Guide" 
                  description="Comprehensive information on natural and man-made disasters. Learn causes, effects, and crucial safety protocols."
                  basePath="/disasters"
                />
              } 
            />
            <Route path="/disasters/:id" element={<TopicDetail />} />

            <Route 
              path="/health-risks" 
              element={
                <TopicList 
                  category={Category.HEALTH} 
                  title="Health Risks" 
                  description="A guide to common health threats, symptoms, and prevention strategies. Stay healthy and informed."
                  basePath="/health-risks"
                />
              } 
            />
            <Route path="/health-risks/:id" element={<TopicDetail />} />

            <Route path="/faqs" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;