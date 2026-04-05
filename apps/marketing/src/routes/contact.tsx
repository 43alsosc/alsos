import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Kontakt</h1>
      <p className="mt-4 text-muted-foreground">
        Kontaktinformasjon og skjema kommer her.
      </p>
    </div>
  );
}
