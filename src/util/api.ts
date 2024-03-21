import type { HjemlaEntry, HjemlaResponse } from '../types';
import { fetchFromStorage, storeInStorage } from './storage';

const getHjemlaResults = async (searchTerm: string) => {
  const searchUrl = `https://consumer-service.hjemla.no/public/locations/search?keyword=${encodeURIComponent(
    searchTerm
  )}&limit=1`;

  const result = await fetch(searchUrl);

  if (result.ok) {
    const { response }: HjemlaResponse = await result.json();
    return response;
  }
  return undefined;
};

const toUrl = (entry: HjemlaEntry) => {
  return `https://www.hjemla.no/boligkart?search=${entry.lng}_${entry.lat}_${entry.slug}_${entry.postCode}_${entry.municipality_slug}&z=16&showPanel=true&lng=${entry.lng}&lat=${entry.lat}`;
};

export const getHjemlaUrl = async (address: string) => {
  const storedUrl = fetchFromStorage(address);
  if (storedUrl) {
    return storedUrl;
  }
  const response = await getHjemlaResults(address);
  if (response.length > 0) {
    const entry = response[0];
    const href = toUrl(entry);
    storeInStorage(address, href);
    return href;
  }
  return undefined;
};
