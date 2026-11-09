export default function Loading() {
  return (
    <div className="grid min-h-[70svh] place-items-center">
      <p className="label flex items-center gap-2 text-muted-foreground">
        Loading
        <span aria-hidden="true" className="caret text-signal">
          ▮
        </span>
      </p>
    </div>
  );
}
