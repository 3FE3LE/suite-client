import { Button } from '@repo/ui';

export default function Page() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem',
      }}
    >
      <h1
        style={{
          marginBottom: '1.25rem',
          fontSize: '3rem',
          fontWeight: 'bold',
        }}
      >
        Web
      </h1>
      <Button text="Go to native" />
    </div>
  );
}
