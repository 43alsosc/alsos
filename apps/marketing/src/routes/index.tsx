import { Button } from "@alsos/ui/components/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <p className="text-sm font-medium text-neutral-500">Marketing</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Under utvikling
      </h1>
      <p className="max-w-xl text-base text-neutral-600">
        Siden er midlertidig utilgjengelig mens det blir bygget.
      </p>
      <Button variant="default" size="lg" disabled>
        Kommer snart
      </Button>
    </main>
  );
}
