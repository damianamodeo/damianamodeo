import { render } from '@testing-library/react';

import Editlocalstorage from './Editlocalstorage';

describe('Editlocalstorage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Editlocalstorage />);
    expect(baseElement).toBeTruthy();
  });
});
