'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { Showreel } from '@/components/Showreel';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { CreativeProcess } from '@/components/CreativeProcess';
import { EditingToolkit } from '@/components/EditingToolkit';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { VideoModal } from '@/components/VideoModal';
import { Project } from '@/data/projects';

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Video Editing');

  const handleOpenProjectModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
  };

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] flex flex-col relative selection:bg-[#D7FF64] selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => {
          const contact = document.querySelector('#contact');
          contact?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section - With integrated large player and 4-card slider */}
      <Hero />

      {/* Selected Work Portfolio Grid with Filter System */}
      <SelectedWork onSelectProject={handleOpenProjectModal} />

      {/* Official 60s Showreel Player */}
      <Showreel />

      {/* About Aditya Kumar & Narrative Philosophy */}
      <About />

      {/* Professional Post-Production Services */}
      <Services onSelectService={handleSelectService} />

      {/* 4-Step Creative Workflow Timeline */}
      <CreativeProcess />

      {/* Editing Suite Hardware & Software Toolkit */}
      <EditingToolkit />

      {/* Contact Form & Collaboration Channel */}
      <Contact preselectedService={preselectedService} />

      {/* Footer */}
      <Footer />

      {/* Accessible Universal Video Player Dialog */}
      <VideoModal
        key={activeProject?.id}
        project={activeProject}
        isOpen={isModalOpen}
        onClose={handleCloseProjectModal}
      />
    </main>
  );
}
