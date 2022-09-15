import FilterByName from '.';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CharacterCard', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // <- use fake timer
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Render test', () => {
    it('Should render all elements', () => {
      const mockFn = jest.fn();
      render(<FilterByName filterCharacters={mockFn} />);

      expect(screen.getByTestId('input-text')).toBeInTheDocument();
      expect(screen.getByTestId('search-icon')).toBeInTheDocument();
      // expect this element not to be in the document at this moment
      expect(() => screen.getAllByTestId('delete-icon')).toThrow();
    });
  });
  describe('Interaction test', () => {
    it('Should call the function when the user types', async () => {
      const mockFn = jest.fn();
      render(<FilterByName filterCharacters={mockFn} />);

      const input = screen.getByTestId('input-text').querySelector('input') as HTMLInputElement;
      userEvent.type(input, 'rick');
    
      // force to run all timers 
      jest.runAllTimers();

      await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1));
      expect(screen.getByTestId('delete-icon')).toBeInTheDocument();
    });
  });
});
