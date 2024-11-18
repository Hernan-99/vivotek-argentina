// composables/useScrollReveal.js
export function useScrollReveal(callback) {
  if (process.client) {
    import("scrollreveal").then((ScrollReveal) => {
      callback(ScrollReveal.default);
    });
  }
}
