import { render } from '@testing-library/react';

import AddLocalStorageItem from './AddLocalStorageItem';

describe('AddLocalStorageItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddLocalStorageItem />);
    expect(baseElement).toBeTruthy();
  });
});
