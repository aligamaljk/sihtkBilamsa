const USER_LOCALSTORAGE_KEY = "user-data";
const TOKEN_LOCALSTORAGE_KEY = "access-token";
const LANG_LOCALSTORAGE_KEY = "lang";

// Helper functions to manage user data in localStorage
export function getStoredUser(): any | null {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user: any): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}

// Helper functions to manage access token in localStorage

export function getStoredToken(): any | null {
  const storedToken = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  return storedToken ? JSON.parse(storedToken) : null;
}

export function setStoredToken(token: any): void {
  localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, JSON.stringify(token));
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
}

// Helper functions to manage language in localStorage

export function setLang(lang: any): void {
  localStorage.setItem(LANG_LOCALSTORAGE_KEY, JSON.stringify(lang));
}

export function getLang(): any {
  const storedLang = localStorage.getItem(LANG_LOCALSTORAGE_KEY);
  return storedLang ? JSON.parse(storedLang) : 'en';
}
