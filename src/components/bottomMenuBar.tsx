import React, { ReactNode } from 'react';
import {
  TfiHome,
  TfiUser,
  TfiFolder,
  TfiCamera,
  TfiBrushAlt,
} from 'react-icons/tfi';
import { IoCode } from 'react-icons/io5';

interface IconProps {
  label: string;
  children: ReactNode;
  href: string;
}

const Icon: React.FC<IconProps> = ({ label, href, children }) => {
  return (
    <a className='flex flex-col items-center px-2 text-gray-300' href={href}>
      {children}
      <span className='pt-2 font-JetbrainsMono text-xs'>{label}</span>
    </a>
  );
};

const BottomMenuBar: React.FC = () => {
  return (
    <div className='fixed bottom-0 left-0 flex h-16 w-full items-center justify-center px-4 text-gray-700'>
      <div className='flex items-center space-x-4'>
        <Icon label='Home' href='#splashPage'>
          <TfiHome />
        </Icon>
        <Icon label='AboutMe' href='#aboutMe'>
          <TfiUser />
        </Icon>
        <Icon label='Developer' href='#developer'>
          <IoCode />
        </Icon>
        <Icon label='Projects' href='#projects'>
          <TfiFolder />
        </Icon>
        <Icon label='Photography' href='#photography'>
          <TfiCamera />
        </Icon>
        <Icon label='Creative' href='#creative'>
          <TfiBrushAlt />
        </Icon>
      </div>
    </div>
  );
};

export default BottomMenuBar;
