import BrowserWindow from '../../components/browserWindow';

export default function Projects() {
  return (
    <div
      className='top-0 flex h-screen flex-col items-center justify-center bg-transparent'
      id='projects'
    >
      <div className='flex h-screen w-screen flex-col items-center justify-center px-20 py-20'>
        <BrowserWindow title='projects.me'>
          <div>TEST</div>
        </BrowserWindow>
      </div>
    </div>
  );
}
