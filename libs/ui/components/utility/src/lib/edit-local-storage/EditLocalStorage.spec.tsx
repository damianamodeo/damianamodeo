import { render } from '@testing-library/react';

import EditLocalStorage from './EditLocalStorage';

describe('EditLocalStorage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditLocalStorage />);
    expect(baseElement).toBeTruthy();
  });
});
