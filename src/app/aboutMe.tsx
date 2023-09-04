import BrowserWindow from '../components/browserWindow';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className='sticky top-0 flex h-screen flex-col items-center justify-center bg-transparent'>
      <div className='container flex h-screen w-screen flex-col items-center justify-center p-10 py-16'>
        <BrowserWindow title='aboutMe.com'>
          <div className='relative z-0 flex h-full w-full flex-row items-center justify-center bg-white'>
            <div className='relative flex h-full w-full flex-row items-center justify-center p-10'>
              <Image src='/davidDapice.JPG' alt='Picture of the author' fill />
              <div className='absolute bottom-1.5 left-1.5 flex flex-col transition duration-700 ease-in-out hover:scale-105'>
                <div className='font-JetbrainsMono text-9xl text-white'>
                  David
                </div>
                <div className='font-JetbrainsMono text-9xl text-white'>
                  D&apos;Apice
                </div>
              </div>
            </div>
          </div>
          <div className='relative z-10 flex h-full w-full flex-row items-center justify-center bg-red-500'>
            <p className='flex h-full w-full flex-col items-center justify-center whitespace-pre-wrap p-10 font-JetbrainsMono text-2xl text-black'>
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
