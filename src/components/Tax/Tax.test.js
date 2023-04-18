import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tax } from '.';


describe('Tax Component', () => {
  it('Renders the SkeletonLoader when api call is in flight', () => {
    const { container } = render(<Tax setAlertProps={jest.fn()} />);
    expect(container.querySelector('.MuiSkeleton-root')).toBeInTheDocument();
  });

  it('Renders the ServerError component when there are errors', () => {
    const { container } = render(<Tax setAlertProps={jest.fn()} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  //  Write Tests for:

  // should display the tax table after a successful API call

  // should display the tax amount text after a successful API call
});
