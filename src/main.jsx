import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/main.scss';
import Layout from './components/Layout/Layout';
import App from './App.jsx';
import Project from './pages/Project/Project.jsx';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/projets/:slug" element={<Project />} />
          <Route path="/projets" element={<Navigate to="/#projets" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);