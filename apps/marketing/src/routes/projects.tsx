import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Arbeid</h1>
      <p className="mt-4 text-muted-foreground">
        Utvalgte prosjekter og case-studier kommer her.
      </p>
    </div>
  );
}
