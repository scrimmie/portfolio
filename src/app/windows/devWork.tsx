import BrowserWindow from '../../components/browserWindow';

export default function DevWork() {
  return (
    <div className='top-0 flex h-screen w-screen flex-col items-center justify-center bg-transparent'>
      <div className='flex h-screen w-screen flex-col items-center justify-center px-20 py-20'>
        <BrowserWindow title='david.dev'>
          <div className='flex h-full w-full flex-row items-center justify-center'>
            <p className='flex h-full w-full flex-col items-center justify-center whitespace-pre-wrap p-10 font-JetbrainsMono text-2xl text-white'>
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
            <div className='flex h-full w-full flex-row items-center justify-center p-10'></div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
}
