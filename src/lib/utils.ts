import { type ClassValue, clsx } from 'clsx';

// Simple class name merger (clsx-like functionality)
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Format date for display
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
