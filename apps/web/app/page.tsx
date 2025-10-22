import { Button } from '@repo/ui';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-5 text-7xl font-bold">Web</h1>

      <Button text="Go to native" />
    </div>
  );
}
