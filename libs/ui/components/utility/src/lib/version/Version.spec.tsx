import { render } from '@testing-library/react';

import Version from './Version';

describe('Version', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Version />);
    expect(baseElement).toBeTruthy();
  });
});
