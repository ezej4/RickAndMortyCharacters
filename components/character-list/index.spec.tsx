import CharacterList from '.';
import { render, screen } from '@testing-library/react';
import { characterListMock } from '../../test-utils/mocks';

describe('CharacterCard', () => {
  describe('Render test', () => {
    it('Should render all cards', () => {
      render(<CharacterList characters={characterListMock.results} />);
      
      characterListMock.results.forEach((character) => {
        expect(screen.getByText(character.name)).toBeInTheDocument();
      });
    });
  });
});
