import { Book, Chapter, SocialPost } from "./constants";

export const MOCK_DATA = {
  books: [] as Book[],
  chapters: [] as Chapter[],
  posts: [] as SocialPost[]
};

export const dataStore = {
  getBooks: () => MOCK_DATA.books,
  addBook: (book: Book) => { MOCK_DATA.books.push(book); },
  getChapters: (bookId: string) => MOCK_DATA.chapters.filter(c => c.bookId === bookId),
  addChapter: (chapter: Chapter) => { MOCK_DATA.chapters.push(chapter); },
  getPosts: () => MOCK_DATA.posts,
  addPost: (post: SocialPost) => { MOCK_DATA.posts.unshift(post); }
};
