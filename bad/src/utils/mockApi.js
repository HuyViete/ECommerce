import { PRODUCTS } from '../data/products';

/**
 * Simulated client-side async API with intentional bottlenecks:
 * 1. Synchronous CPU-blocking Long Task (>700ms) simulating bloated client-side SPA hydration & tracker loops.
 * 2. Asynchronous 1500ms delay: scrapers fetching raw HTML without headless execution see zero product text.
 */

function blockMainThread(durationMs = 700) {
  const start = performance.now();
  while (performance.now() - start < durationMs) {
    // Heavy synchronous computation that monopolizes the JavaScript single thread
    Math.sqrt(Math.random() * 1000000);
  }
}

export function fetchAllProducts() {
  blockMainThread(400);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...PRODUCTS]);
    }, 1500);
  });
}

export function fetchProductById(productId) {
  blockMainThread(650);
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = PRODUCTS.find((p) => p.id === productId);
      resolve(found ? { ...found } : null);
    }, 1500);
  });
}

export function fetchFeaturedProducts() {
  blockMainThread(500);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS.slice(0, 3));
    }, 1500);
  });
}
