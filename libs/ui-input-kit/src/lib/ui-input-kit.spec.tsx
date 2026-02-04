import { render } from '@testing-library/react';

import UiInputKit from './ui-input-kit';

describe('UiInputKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiInputKit />);
    expect(baseElement).toBeTruthy();
  });
});
