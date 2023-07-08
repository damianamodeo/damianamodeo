/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown } from '@damianamodeo/ui/icons';

export function App() {
  return (
    <div>
      <h1>Proclaimer</h1>
    </div>
  );
}

export default App;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: any;

  beforeEach(async () => {
    render = (await import('@testing-library/react')).render;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome theocratic-software-proclaimer/gi)).toBeTruthy();
  });
}
