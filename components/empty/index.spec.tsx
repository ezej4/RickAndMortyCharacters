import Empty from '.';
import { render, screen } from '@testing-library/react';
import configs from '../../configs';

const { emptyImage } = configs;

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Empty', () => {
  describe('Render test', () => {
    it('Should render all elements', () => {
      const title = 'testTitle';
      render(<Empty title={title} />);

      const image = screen.getByRole('img');
      const imageUrl = emptyImage;

      expect(screen.getByText(title)).toBeInTheDocument();

      expect(image).toHaveAttribute('src', imageUrl);
    });
  });
});
