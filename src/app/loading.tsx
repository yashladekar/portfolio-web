export default function Loading() {
  return (
    <div className="grid min-h-[70svh] place-items-center">
      <p className="label flex items-center gap-3 text-muted">
        Loading
        <span aria-hidden="true" className="caret size-3 bg-accent" />
      </p>
    </div>
  );
}
