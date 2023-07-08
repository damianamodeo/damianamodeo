import { render } from '@testing-library/react';

import ChevronRight from './ChevronRight';

describe('ChevronRight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronRight />);
    expect(baseElement).toBeTruthy();
  });
});
