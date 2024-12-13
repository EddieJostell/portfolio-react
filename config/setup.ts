import '@testing-library/jest-dom/extend-expect';
import { cleanup, configure } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'vitest';
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
// /C:/Projects/home/portfolio-react/config/setup.ts
// Configure testing library
configure({ testIdAttribute: 'data-test-id' });

afterEach(() => {
    cleanup();
  });

// Mocking global objects or functions if needed
global.fetch = vi.fn();
