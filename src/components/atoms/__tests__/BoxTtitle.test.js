import React from 'react';
import { render, screen } from '@testing-library/react';
import theme from 'theme/mainTheme';
import renderWithThemeProviders from 'utils/testUtils/renderWithThemeProviders';
import BoxTitle from '../BoxTitle/BoxTitle';

describe('BoxTitle component', () => {
  it('renders heading component', () => {
    render(
      <BoxTitle data-testid="boxtitle" variant="h5" component="h1">
        Account Details
      </BoxTitle>,
    );

    expect(screen.getByTestId('boxtitle')).toBeInTheDocument();
  });

  it('has proper heading tag', () => {
    const { container } = render(
      <BoxTitle data-testid="boxtitle" variant="h5" component="h1">
        Account Details
      </BoxTitle>,
    );

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h5')).not.toBeInTheDocument();
  });

  it('has 2nd word with different font color', () => {
    renderWithThemeProviders(
      <BoxTitle data-testid="boxtitle" variant="h5" component="h1">
        Another Account Details
      </BoxTitle>,
    );

    const span = screen.getByTestId('colored');

    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('Account');
    expect(span).toHaveStyle(`color: ${theme.palette.primary.main}`);
  });
});
