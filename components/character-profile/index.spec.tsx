import CharacterProfile from '.';
import { render, screen } from '@testing-library/react';
import { characterMock } from '../../test-utils/mocks';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('CharacterProfile', () => {
  describe('Render test', () => {
    it('Should render the fields with the correct values', () => {
      render(<CharacterProfile character={characterMock} />);
      const image = screen.getByRole('img');
      const imageUrl = characterMock.image;

      expect(screen.getByText(characterMock.name)).toBeInTheDocument();
      expect(screen.getByText(characterMock.gender)).toBeInTheDocument();
      expect(screen.getByText(characterMock.status)).toBeInTheDocument();
      expect(screen.getByText(characterMock.species)).toBeInTheDocument();
      expect(screen.getByText(characterMock.origin.name)).toBeInTheDocument();
      expect(screen.getByText(characterMock.location.name)).toBeInTheDocument();

      expect(image).toHaveAttribute('src', imageUrl);
      expect(image).toHaveAttribute('alt', characterMock.name);

      characterMock.episode.forEach((episode) => {
        expect(screen.getByText(episode.name)).toBeInTheDocument();
        expect(screen.getByText(episode.episode)).toBeInTheDocument();
      });
    });
  });
});
