// Service type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

// Project type
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'product' | 'prototype' | 'consultancy' | 'hardware' | 'iot';
  image: string;
  tags: string[];
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

// API response type
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Navigation link type
export interface NavLink {
  label: string;
  href: string;
}

// Team member type
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

// Value/feature type
export interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
