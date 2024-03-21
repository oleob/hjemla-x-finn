/// <reference types="svelte" />
import App from './App.svelte';
import { getHjemlaUrl } from './util/api';

const init = async () => {
  const address = document.querySelector('[data-testid="object-address"]')?.textContent;

  if (address) {
    const url = await getHjemlaUrl(address);

    if (address) {
      const container = document.querySelector('[data-testid="object-details"]')?.firstChild as HTMLElement;
      if (container) {
        new App({
          target: container,
          props: {
            url
          }
        });
      }
    } else {
      console.log('container not found');
    }
  }
};

init();
