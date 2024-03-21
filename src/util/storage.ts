type HjemlaStorage = Record<string, string>;

const storeKey = 'hjemla-urls';
export const fetchFromStorage = (address: string) => {
  const storage: HjemlaStorage | undefined = JSON.parse(localStorage.getItem(storeKey));
  if (storage) {
    return storage[address];
  }
  return undefined;
};

export const storeInStorage = (address: string, href: string) => {
  const existingStorage: HjemlaStorage = JSON.parse(localStorage.getItem(storeKey)) ?? {};

  existingStorage[address] = href;

  localStorage.setItem(storeKey, JSON.stringify(existingStorage));
};
