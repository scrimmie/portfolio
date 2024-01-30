import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  TfiHome,
  TfiUser,
  TfiFolder,
  TfiCamera,
  TfiBrushAlt,
} from 'react-icons/tfi';
import { IoCode } from 'react-icons/io5';
import { windows } from '@/app/page';
import { clsx } from 'clsx';

interface IconProps {
  label: string;
  children: ReactNode;
  onClick: (windowType: windows) => void;
  windowType: windows;
  active: boolean;
}

interface BottomBarProps {
  updateWindow: Dispatch<SetStateAction<windows>>;
  selectedWindow: windows;
}

const Icon: React.FC<IconProps> = ({
  label,
  windowType,
  onClick,
  children,
  active,
}) => {
  return (
    <a
      className='flex flex-col items-center px-2 text-gray-300'
      onClick={() => onClick(windowType)}
    >
      {children}
      <span
        className={clsx(
          'pt-2 font-JetbrainsMono text-xs',
          active && 'underline'
        )}
      >
        {label}
      </span>
    </a>
  );
};

const BottomMenuBar: React.FC<BottomBarProps> = ({
  updateWindow,
  selectedWindow,
}) => {
  return (
    <div className='fixed bottom-0 left-0 flex h-16 w-full items-center justify-center px-4 text-gray-700'>
      <div className='flex items-center space-x-4'>
        <Icon
          label='Home'
          onClick={updateWindow}
          windowType={windows.splashPage}
          active={selectedWindow === windows.splashPage}
        >
          <TfiHome />
        </Icon>
        <Icon
          label='AboutMe'
          onClick={updateWindow}
          windowType={windows.aboutMe}
          active={selectedWindow === windows.aboutMe}
        >
          <TfiUser />
        </Icon>
        <Icon
          label='Developer'
          onClick={updateWindow}
          windowType={windows.dev}
          active={selectedWindow === windows.dev}
        >
          <IoCode />
        </Icon>
        <Icon
          label='Projects'
          onClick={updateWindow}
          windowType={windows.projects}
          active={selectedWindow === windows.projects}
        >
          <TfiFolder />
        </Icon>
        <Icon
          label='Photography'
          onClick={updateWindow}
          windowType={windows.photography}
          active={selectedWindow === windows.photography}
        >
          <TfiCamera />
        </Icon>
        <Icon
          label='Creative'
          onClick={updateWindow}
          windowType={windows.creative}
          active={selectedWindow === windows.creative}
        >
          <TfiBrushAlt />
        </Icon>
      </div>
    </div>
  );
};

export default BottomMenuBar;
