import BrowserWindow from '../components/browserWindow';
import Image from 'next/image';

export default function Photography() {
  return (
    <div
      className='sticky top-0 flex h-screen flex-col items-center justify-center bg-transparent'
      id='photography'
    >
      <div className='container flex h-screen w-screen flex-col items-center justify-center p-10 py-16'>
        <BrowserWindow title='photography.me'>
          <div className='flex h-full w-full flex-row items-center justify-center'>
            <div className='flex h-full w-full flex-row items-center justify-center p-10'>
              <Image
                src='/davidDapice.JPG'
                alt='Picture of the author'
                width={380}
                height={380}
              />
            </div>
            <p className='flex h-full w-full flex-col items-center justify-center whitespace-pre-wrap p-10 font-JetbrainsMono text-2xl text-white'>
              {' '}
              I am a driven, passionate technologist who combines logic and
              discipline with interpersonal skills that power new thinking.
              <br /> <br /> As far back as I can remember, I&apos;ve had a
              fascination with how things work. My natural curiosity has helped
              me learn and discover
              <br />
              <br /> As a team player, I thrive on collaboration, and have an
              innate interest in the world around me — especially when
              technology can impact the lives of others.
            </p>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
}
