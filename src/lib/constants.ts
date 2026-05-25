export const THEME = {
  colors: {
    industrial: {
      bg: "#0a0a0a",
      surface: "#1a1a1a",
      border: "#2a2a2a",
      text: "#d0d0d0",
      muted: "#666666",
      red: "#8b0000",
    },
    vox: {
      blue: "#00eeff",
      glow: "rgba(0, 238, 255, 0.4)",
      monitor: "#121212",
    }
  }
};

export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  createdAt: string;
}

export interface Chapter {
  id: string;
  bookId: string;
  title: string;
  content: string;
  order: number;
  createdAt: string;
}

export interface SocialPost {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}
