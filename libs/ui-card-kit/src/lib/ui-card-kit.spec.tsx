import { render } from '@testing-library/react';

import UiCardKit from './ui-card-kit';

describe('UiCardKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCardKit />);
    expect(baseElement).toBeTruthy();
  });
});
