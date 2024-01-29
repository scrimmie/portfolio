export default function SplashPage() {
  return (
    <div
      className='sticky top-0 flex h-screen flex-col items-center justify-center bg-cover'
      style={{
        backgroundImage: `url('/background.jpg')`,
      }}
      id='splashPage'
    >
      <h2 className='font-JetbrainsMono text-4xl text-white'>SplashPage</h2>
      <p>Scroll Down</p>
    </div>
  );
}
