import { render } from '@testing-library/react';

import UiModalKit from './ui-modal-kit';

describe('UiModalKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiModalKit />);
    expect(baseElement).toBeTruthy();
  });
});
