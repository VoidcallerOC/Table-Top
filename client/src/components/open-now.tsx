import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";

export function OpenNow({ className }: { className?: string }) {
  const [status, setStatus] = useState<OpenStatus>(() => getOpenStatus());

  useEffect(() => {
    const tick = () => setStatus(getOpenStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className}>
      <span className="live-dot" aria-hidden="true" />
      {status.banner}
    </span>
  );
}
