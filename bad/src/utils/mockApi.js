import { PRODUCTS } from '../data/products';

/**
 * Simulated client-side async API with an intentional 1500ms artificial delay.
 * Crawlers fetching raw HTML or executing fast timeouts will see zero rendered product data.
 */

export function fetchAllProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...PRODUCTS]);
    }, 1500);
  });
}

export function fetchProductById(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = PRODUCTS.find((p) => p.id === productId);
      resolve(found ? { ...found } : null);
    }, 1500);
  });
}

export function fetchFeaturedProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS.slice(0, 3));
    }, 1500);
  });
}
