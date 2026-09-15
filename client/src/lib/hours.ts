import { hours } from "@/data/site";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

function nyParts(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const map: Record<string, string> = {};
  for (const part of parts) {
    if (part.type !== "literal") map[part.type] = part.value;
  }

  const weekday = map.weekday ?? "Sun";
  const dayIndex = (
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const
  ).indexOf(weekday as "Sun");
  const hour = Number.parseInt(map.hour ?? "0", 10);
  const minute = Number.parseInt(map.minute ?? "0", 10);

  return {
    dayIndex: dayIndex === -1 ? now.getDay() : dayIndex,
    minutes: hour * 60 + minute,
  };
}

function formatUntil(closeMin: number) {
  const h = Math.floor(closeMin / 60);
  const suffix = h === 12 ? "12pm" : h === 0 ? "12am" : h > 12 ? `${h - 12}pm` : `${h}am`;
  if (closeMin % 60 === 0) return suffix;
  const m = String(closeMin % 60).padStart(2, "0");
  return suffix.replace(/(am|pm)$/, `:${m}$1`);
}

export type OpenStatus = {
  open: boolean;
  day: string;
  todayLabel: string;
  banner: string;
  detail: string;
};

export function getOpenStatus(now = new Date()): OpenStatus {
  const { dayIndex, minutes } = nyParts(now);
  const today = hours[dayIndex];
  const day = DAY_NAMES[dayIndex];

  if (minutes >= today.openMin && minutes < today.closeMin) {
    return {
      open: true,
      day,
      todayLabel: today.label,
      banner: `Open now · until ${formatUntil(today.closeMin)}`,
      detail: `${day} ${today.label}`,
    };
  }

  if (minutes < today.openMin) {
    return {
      open: false,
      day,
      todayLabel: today.label,
      banner: `Opens today at 10am`,
      detail: `${day} ${today.label}`,
    };
  }

  const nextIndex = (dayIndex + 1) % 7;
  const next = hours[nextIndex];
  return {
    open: false,
    day,
    todayLabel: today.label,
    banner: `Opens ${DAY_NAMES[nextIndex]} at 10am`,
    detail: `${day} ${today.label}`,
  };
}
