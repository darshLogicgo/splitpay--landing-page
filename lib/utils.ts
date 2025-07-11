import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTags(rawTags: string[] | undefined): string[] {
  if (!rawTags || rawTags.length === 0) return [];

  return rawTags
    .flatMap((tag) => tag.split(",")) // in case some tags are comma-separated
    .map((tag) => tag.trim().replace(/"/g, ""))
    .filter(Boolean);
}
