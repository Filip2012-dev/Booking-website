import { THEME, Book, Chapter, SocialPost } from "./constants";

// Global mock state to simulate a backend/persistent store
export const MOCK_DATA = {
  books: [
    {
      id: "1",
      title: "The God of Overus",
      description: "Sergey Taboritsky's rise to power and the assassination of Loji.",
      coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
      author: "Sergey Taboritsky",
      createdAt: "2024-05-20",
    },
    {
      id: "2",
      title: "Archangelic Fallout",
      description: "Technology from other universes leaking into Overus.",
      coverImage: "https://images.unsplash.com/photo-1533972751724-9135a8410a4c?auto=format&fit=crop&q=80&w=400",
      author: "Philip IV",
      createdAt: "2024-05-22",
    }
  ] as Book[],

  chapters: [
    {
      id: "1",
      bookId: "1",
      title: "The Ascension of Sergey",
      content: "The world was infinitely large, but Sergey's ambition was larger...",
      order: 1,
      createdAt: "2024-05-20",
    },
    {
      id: "2",
      bookId: "1",
      title: "Loji's Final Performance",
      content: "The stage was bathed in a sickly violet glow...",
      order: 2,
      createdAt: "2024-05-21",
    }
  ] as Chapter[],

  posts: [
    {
      id: "1",
      author: "Sergey Taboritsky",
      content: "The infinitely large Earth of Overus is now under my absolute control.",
      timestamp: "2 hours ago",
      likes: 1242,
    }
  ] as SocialPost[]
};

// In a real app, these would be API calls
export const dataStore = {
  getBooks: () => MOCK_DATA.books,
  addBook: (book: Book) => { MOCK_DATA.books.push(book); },
  getChapters: (bookId: string) => MOCK_DATA.chapters.filter(c => c.bookId === bookId),
  addChapter: (chapter: Chapter) => { MOCK_DATA.chapters.push(chapter); },
  getPosts: () => MOCK_DATA.posts,
  addPost: (post: SocialPost) => { MOCK_DATA.posts.unshift(post); }
};
