import {
  AddSportType,
  LangsType,
  ProfileGoal,
  userProfileType
} from '../../types';

const USER_LOCALSTORAGE_KEY = 'user-data';
const TOKEN_LOCALSTORAGE_KEY = 'access-token';
const LANG_LOCALSTORAGE_KEY = 'lang';
const PROFILE_USER = 'profile';
const ADD_SPORT = 'add-sport';
const PROFILE_Goel = 'profile-goal';

// Helper functions to manage user data in localStorage
export function getStoredUser(): string | undefined {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : undefined;
}

export function setStoredUser(user: string): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}

// Helper functions to manage  PROFILE_USER data in localStorage
export function getStoredUserProfile(): userProfileType | undefined {
  const storedUserProfile = localStorage.getItem(PROFILE_USER);
  return storedUserProfile ?
      JSON.parse(storedUserProfile)
    : undefined;
}

export function setStoredUserProfile(profile: userProfileType): void {
  localStorage.setItem(PROFILE_USER, JSON.stringify(profile));
}

export function clearStoredUserProfile(): void {
  localStorage.removeItem(PROFILE_USER);
}
// Helper functions to manage  PROFILE_Goel data in localStorage
export function getStoredUserProfileGoal(): ProfileGoal | undefined {
  const storedUserProfile = localStorage.getItem(PROFILE_Goel);
  return storedUserProfile ?
      JSON.parse(storedUserProfile)
    : undefined;
}

export function setStoredUserProfileGoal(
  profileGoal: ProfileGoal
): void {
  localStorage.setItem(PROFILE_Goel, JSON.stringify(profileGoal));
}

export function clearStoredUserProfileGoal(): void {
  localStorage.removeItem(PROFILE_Goel);
}
// Helper functions to manage  ADD_SPORT data in localStorage
export function getStoredAddSport(): AddSportType[] | undefined {
  const storedAddSport = localStorage.getItem(ADD_SPORT);
  return storedAddSport ? JSON.parse(storedAddSport) : undefined;
}

export function setStoredAddSport(AddSport: AddSportType[]): void {
  localStorage.setItem(ADD_SPORT, JSON.stringify(AddSport));
}

export function clearStoredAddSport(): void {
  localStorage.removeItem(ADD_SPORT);
}

// Helper functions to manage access token in localStorage

export function getStoredToken(): string | undefined {
  const storedToken = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  return storedToken ? JSON.parse(storedToken) : undefined;
}

export function setStoredToken(token: string): void {
  localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, JSON.stringify(token));
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
}

// Helper functions to manage language in localStorage

export function setLang(lang: string): void {
  localStorage.setItem(LANG_LOCALSTORAGE_KEY, JSON.stringify(lang));
}

export function getLang(): LangsType | undefined {
  const storedLang = localStorage.getItem(LANG_LOCALSTORAGE_KEY);
  return storedLang ? JSON.parse(storedLang) : 'en';
}
