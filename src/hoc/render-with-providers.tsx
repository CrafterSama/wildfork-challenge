import ChakraProviders from '@/providers/chakra-provider';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  render(ui, {
    wrapper: ({ children }) => <ChakraProviders>{children}</ChakraProviders>,
    ...options,
  });

export * from '@testing-library/react';
export { renderWithProviders };
