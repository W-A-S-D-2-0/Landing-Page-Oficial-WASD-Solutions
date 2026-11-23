"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

function format(date: Date) {
  const day = new Intl.DateTimeFormat("es-PE", { timeZone: site.contact.timeZone, weekday: "long", day: "numeric", month: "short" }).format(date);
  const time = new Intl.DateTimeFormat("es-PE", { timeZone: site.contact.timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(date);
  return { day: day.replace(".", ""), time };
}

/** Hora local de Lima, en vivo. En el servidor muestra solo la ciudad. */
export function LimaClock({ city }: { city: string }) {
  const [now, setNow] = useState<{ day: string; time: string } | null>(null);

  useEffect(() => {
    const update = () => setNow(format(new Date()));
    update();
    const id = window.setInterval(update, 20_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span>
      {city}
      {now && (
        <>
          {" "}
          / <span style={{ textTransform: "capitalize" }}>{now.day}</span> – <time style={{ fontVariantNumeric: "tabular-nums" }}>{now.time}</time>
        </>
      )}
    </span>
  );
}
