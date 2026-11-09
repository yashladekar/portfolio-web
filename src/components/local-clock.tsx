"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const subscribe = (onStoreChange: () => void) => {
  const id = setInterval(onStoreChange, 1000);
  return () => clearInterval(id);
};

const getSnapshot = () => Math.floor(Date.now() / 1000);

const formatTime = (seconds: number) =>
  formatter.format(new Date(seconds * 1000));

export function LocalClock() {
  const seconds = useSyncExternalStore(subscribe, getSnapshot, () => null);

  return (
    <time className="tabular-nums">
      {seconds === null ? "--:--:--" : formatTime(seconds)}
    </time>
  );
}
