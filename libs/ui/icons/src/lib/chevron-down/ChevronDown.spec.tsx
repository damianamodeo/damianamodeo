import { render } from '@testing-library/react';

import ChevronDown from './ChevronDown';

describe('ChevronDown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronDown />);
    expect(baseElement).toBeTruthy();
  });
});
