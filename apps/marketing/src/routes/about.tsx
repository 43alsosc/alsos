import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Om</h1>
      <p className="mt-4 text-muted-foreground">
        Kort presentasjon og bakgrunn kommer her.
      </p>
    </div>
  );
}
