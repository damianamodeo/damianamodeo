import { render } from '@testing-library/react';

import ChevronSort from './ChevronSort';

describe('ChevronSort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronSort />);
    expect(baseElement).toBeTruthy();
  });
});
