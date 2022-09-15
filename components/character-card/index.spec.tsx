import CharacterCard from '.';
import { render, screen } from '@testing-library/react';
import { characterMock } from '../../test-utils/mocks';

describe('CharacterCard', () => {
  describe('Render test', () => {
    it('Should render the fields with the correct values', () => {
      render(<CharacterCard character={characterMock} />);
      const image = screen.getByRole('img');
      const imageUrl = characterMock.image;

      expect(screen.getByText(characterMock.name)).toBeInTheDocument();

      expect(image).toHaveAttribute('src', imageUrl);
      expect(image).toHaveAttribute('alt', characterMock.name);
      expect(screen.getByRole('link')).toHaveAttribute('href', `/detail/${characterMock.id}`);
    });
  });
});
