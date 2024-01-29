import BrowserWindow from '../components/browserWindow';

export default function Blog() {
  return (
    <div
      className='sticky top-0 flex h-screen flex-col items-center justify-center bg-transparent'
      id='creative'
    >
      <div className='container flex h-screen w-screen flex-col items-center justify-center p-10 py-16'>
        <BrowserWindow title='blog.me'>
          <div>TEST</div>
        </BrowserWindow>
      </div>
    </div>
  );
}
