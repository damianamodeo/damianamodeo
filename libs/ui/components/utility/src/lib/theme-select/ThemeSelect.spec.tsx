import { render } from '@testing-library/react';

import ThemeSelect from './ThemeSelect';

describe('ThemeSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeSelect />);
    expect(baseElement).toBeTruthy();
  });
});
