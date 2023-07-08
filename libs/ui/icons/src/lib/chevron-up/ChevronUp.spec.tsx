import { render } from '@testing-library/react';

import ChevronUp from './ChevronUp';

describe('ChevronUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronUp />);
    expect(baseElement).toBeTruthy();
  });
});
