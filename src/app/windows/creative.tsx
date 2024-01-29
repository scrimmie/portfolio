import BrowserWindow from '../../components/browserWindow';

export default function Creative() {
  return (
    <div className='top-0 flex h-screen flex-col items-center justify-center bg-transparent'>
      <div className='container flex h-screen w-screen flex-col items-center justify-center p-10 py-16'>
        <BrowserWindow title='creative.me'>
          <div>Creative</div>
        </BrowserWindow>
      </div>
    </div>
  );
}
