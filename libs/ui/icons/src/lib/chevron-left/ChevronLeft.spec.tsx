import { render } from '@testing-library/react';

import ChevronLeft from './ChevronLeft';

describe('ChevronLeft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronLeft />);
    expect(baseElement).toBeTruthy();
  });
});
