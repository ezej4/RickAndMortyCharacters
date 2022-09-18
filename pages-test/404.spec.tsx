import { render, screen } from '@testing-library/react';
import Page404 from '../pages/404';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('404 page test', () => {
  describe('Render test', () => {
    it('Should render the fields with the correct values', () => {
      render(<Page404 />);

      expect(screen.getByText('Ops, Page not found')).toBeInTheDocument();
      expect(screen.getByText('The page you requested could not be found')).toBeInTheDocument();
    });
  });
});
