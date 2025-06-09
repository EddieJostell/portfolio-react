import '@testing-library/jest-dom';
import { cleanup, configure } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'vitest';
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
// /C:/Projects/home/portfolio-react/config/setup.ts
// Configure testing library


// Mock IntersectionObserver with proper interface implementation
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  
  constructor(
    private callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    if (options) {
      this.root = options.root || null;
      this.rootMargin = options.rootMargin || '0px';
      this.thresholds = Array.isArray(options.threshold) 
        ? options.threshold 
        : [options.threshold || 0];
    }
  }
  
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = (): IntersectionObserverEntry[] => [];
}

// Assign the mock class to the global object
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver
});

configure({ testIdAttribute: 'data-testid' });

afterEach(() => {
    cleanup();
  });

// Mocking global objects or functions if needed
global.fetch = vi.fn();
