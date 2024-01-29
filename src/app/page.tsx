'use client';
import BottomMenuBar from '@/components/bottomMenuBar';
import AboutMe from './windows/aboutMe';
import DevWork from './windows/devWork';
import Photography from './windows/photography';
import Projects from './windows/projects';
import SplashPage from './windows/splashPage';
import { useState } from 'react';
import Creative from './windows/creative';

export enum windows {
  splashPage = 'splashPage',
  aboutMe = 'aboutMe',
  dev = 'dev',
  projects = 'projects',
  photography = 'photography',
  creative = 'creative',
}

export default function Home() {
  const [selectedWindow, setSelectedWindow] = useState(windows.splashPage);

  const getWindow = (window: windows) => {
    switch (window) {
      case windows.aboutMe: {
        return <AboutMe />;
      }
      case windows.dev: {
        return <DevWork />;
      }
      case windows.projects: {
        return <Projects />;
      }
      case windows.photography: {
        return <Photography />;
      }
      case windows.creative: {
        return <Creative />;
      }
      default: {
        return <SplashPage />;
      }
    }
  };
  return (
    <div
      className='top-0 flex h-screen flex-col items-center justify-center bg-cover'
      style={{
        backgroundImage: `url('/background.jpg')`,
      }}
    >
      {/* make each page look like a corresponding web page (aka camera menu for photography) */}
      {getWindow(selectedWindow)}
      <BottomMenuBar
        updateWindow={setSelectedWindow}
        selectedWindow={selectedWindow}
      />
    </div>
  );
}
