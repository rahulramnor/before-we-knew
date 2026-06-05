/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  illustration: string; // Theme description for visuals
  extraDetail: string; // Detailed memory prose (interactive expandable)
  quote: string;
}

export interface Memory {
  id: string;
  text: string;
  date?: string;
  tag?: string;
}

export interface Nickname {
  name: string;
  meaning: string;
}

export interface Collectible {
  id: string;
  name: string;
  icon: string; // Lucide icon string name
  sectionId: string;
  found: boolean;
  hint: string;
  foundStory: string;
}

export interface MemoryObject {
  id: string;
  emoji: string;
  name: string;
  date: string;
  story: string;
  details?: string;
  shadowColor?: string;
}

export interface SecretArchiveNote {
  title: string;
  content: string;
  date: string;
}
