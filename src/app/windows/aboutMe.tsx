import BrowserWindow from '../../components/browserWindow';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div
      className='top-0 flex h-screen w-screen flex-col items-center justify-center bg-transparent'
      id='aboutMe'
    >
      <div className='flex h-screen w-screen flex-col items-center justify-center px-20 py-20'>
        <BrowserWindow title='aboutMe.com'>
          <div className='relative flex h-full w-full flex-row'>
            <div className='absolute inset-0'>
              <Image
                src='/DavidDapice2.JPG'
                alt='Picture of the author'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='relative w-1/2'></div>
            <div className='relative w-1/2 p-20'>
              <p
                className='text-md flex h-full w-full flex-col items-center justify-center whitespace-pre-wrap  rounded-md border border-gray-100 bg-gray-900 bg-opacity-10 bg-clip-padding p-10
 font-JetbrainsMono text-white backdrop-blur-md backdrop-filter'
              >
                <br /> <br /> I am a driven, passionate technologist who
                combines logic and discipline with interpersonal skills that
                power new thinking.
                <br /> <br /> As far back as I can remember, I&apos;ve had a
                fascination with how things work. My natural curiosity has
                helped me learn and discover
                <br />
                <br /> As a team player, I thrive on collaboration, and have an
                innate interest in the world around me — especially when
                technology can impact the lives of others.
              </p>
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
}
