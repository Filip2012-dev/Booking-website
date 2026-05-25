export const THEME = {
  colors: {
    brutalist: {
      bg: "#1a1a1a",
      surface: "#2a2a2a",
      border: "#3f3f3f",
      text: "#e0e0e0",
      muted: "#888888",
    },
    crystal: {
      primary: "#00f2ff",
      secondary: "#008891",
      glow: "rgba(0, 242, 255, 0.5)",
    },
    regime: {
      gold: "#ffd700",
      crimson: "#990000",
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
