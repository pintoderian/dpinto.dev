'use client';

import Header from './components/header';
import Sidebar from './components/sidebar';
import AboutMe from './components/about-me';
import Experiences from './components/experiences';
import Skills from './components/skills';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <Sidebar />
        <div className="info-content flex flex-col gap-4 py-14">
          <AboutMe />
          <Experiences />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
}
