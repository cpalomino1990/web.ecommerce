import Script from 'next/script';

export default function Home() {
  return (
    <>
      <h1>Script Inline</h1>
      <Script id="custom-inline-script" strategy="afterInteractive">
        {`
          console.log('Script ejecutado directamente en la página');
        `}
      </Script>
    </>
  );
}