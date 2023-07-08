import { render } from '@testing-library/react';

import OpenSourceAttribution from './OpenSourceAttribution';

describe('OpenSourceAttribution', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OpenSourceAttribution />);
    expect(baseElement).toBeTruthy();
  });
});
