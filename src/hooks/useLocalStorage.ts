export const useLocalStorage = () => {
  return {
    getString(key: string): string | null {
      return localStorage.getItem(key);
    },

    saveString(key: string, value: string): void {
      localStorage.setItem(key, value);
    },

    getObject(key: string): object | undefined {
      const localStorageValue: string | null = localStorage.getItem(key);

      if (localStorageValue) {
        return JSON.parse(localStorageValue);
      }
    },

    saveObject(key: string, value: object): void {
      localStorage.setItem(key, JSON.stringify(value));
    },

    delete(key: string): void {
      localStorage.removeItem(key);
    },
  };
};
