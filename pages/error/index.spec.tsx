import { render, screen } from '@testing-library/react';
import ErrorPage from '.';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Detail', () => {
  describe('Render test', () => {
    it('Should render the fields with the correct values', () => {
      render(<ErrorPage />);

      expect(screen.getByText('Ops, Something went wrong')).toBeInTheDocument();
      expect(
        screen.getByText('Feel free to contact us if the problem continues')).toBeInTheDocument();
    });
  });
});
