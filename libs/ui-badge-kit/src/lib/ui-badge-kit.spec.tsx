import { render } from '@testing-library/react';

import UiBadgeKit from './ui-badge-kit';

describe('UiBadgeKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiBadgeKit />);
    expect(baseElement).toBeTruthy();
  });
});
