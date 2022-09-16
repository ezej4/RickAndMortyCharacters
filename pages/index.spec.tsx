import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  characterListMock,
  characterListMockEmpty,
  characterListMockSecondPage,
} from '../test-utils/mocks';
import * as characterService from '../services/characters';
import ListPage from '.';
import { ISummarizedCharacter } from '../entities';

jest.mock('../services/characters');

const mockGetCharacters = (
  response: ISummarizedCharacter[],
  count: number = 1,
  pages: number = 1
) => {
  return (characterService.getCharacters as jest.Mock).mockResolvedValueOnce({
    info: {
      count,
      pages,
    },
    results: response,
  });
};

describe('ListPage integration test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('User interaction tests', () => {
    describe('Pagination test', () => {
      describe('When the user click on the next button', () => {
        it('Should render the next page', async () => {
          // step 1 mock the service to return the second page of characters
          mockGetCharacters(characterListMockSecondPage.results);
          // step 2 render the component with the first page of characters
          render(<ListPage data={characterListMock} />);
          // step 3 search for the next button
          // -- warning here! the data-testid provided here is from the material-ui library
          const nextButton = screen.getByTestId('NavigateNextIcon');
          // step 4 click on the next button
          userEvent.click(nextButton);

          // step 5 expect the view to render the second page of characters
          await waitFor(() => {
            characterListMockSecondPage.results.forEach((character) => {
              expect(screen.getByText(character.name)).toBeInTheDocument();
            });
          });
        });
      });
    });

    describe('Search a character', () => {
      describe('When the character exist', () => {
        it('Should render the character searched ', async () => {
          // step 1 select a test case
          const testCharacter: ISummarizedCharacter = characterListMock.results[0];
          // step 2 mock the service for when the user type something, the service returns the character mocked
          mockGetCharacters([testCharacter]);
          // step 3 render the component with an empty list
          render(<ListPage data={characterListMockEmpty} />);
          // step 4 select the element to interact with
          const filterInput = screen
            .getByTestId('input-text')
            .querySelector('input') as HTMLInputElement;
          // step 5 interact with the element
          userEvent.type(filterInput, testCharacter.name);

          // step 6 force to run all timers
          jest.runAllTimers();

          // step 7 wait for the input to be updated
          await waitFor(() => {
            expect(filterInput.value).toBe(testCharacter.name);
          });
          // step 8 wait for updating the view
          await waitFor(() => expect(screen.getByText(testCharacter.name)).toBeInTheDocument());
        });
      });

      describe('Clear the search', () => {
        it('Should render the initial list', async () => {
          const testCharacter: ISummarizedCharacter = characterListMock.results[0];

          mockGetCharacters([testCharacter]);
          render(<ListPage data={characterListMockEmpty} />);
          const filterInput = screen
            .getByTestId('input-text')
            .querySelector('input') as HTMLInputElement;
          userEvent.type(filterInput, testCharacter.name);

          jest.runAllTimers();

          await waitFor(() => {
            expect(filterInput.value).toBe(testCharacter.name);
          });

          await waitFor(() => {
            expect(filterInput.value).toBe(testCharacter.name);
          });

          /* the above code is the same as the previous test
          / but now we are going to clear the search and 
          /  we expect to see the initial list
          */
          const deleteIcon = screen.getByTestId('delete-icon');
          userEvent.click(deleteIcon);

          await waitFor(() => expect(screen.getByText('No Results')).toBeInTheDocument());
        });
      });

      describe('When the character does not exist', () => {
        it('Should render the empty state ', async () => {
          const testCharacter: ISummarizedCharacter = characterListMock.results[0];
          // note that we are mocking the service to return an empty list
          mockGetCharacters([]);
          render(<ListPage data={characterListMockEmpty} />);
          const filterInput = screen
            .getByTestId('input-text')
            .querySelector('input') as HTMLInputElement;
          userEvent.type(filterInput, testCharacter.name);

          jest.runAllTimers();

          await waitFor(() => {
            expect(filterInput.value).toBe(testCharacter.name);
          });
          await waitFor(() => expect(screen.getByText('No Results')).toBeInTheDocument());
        });
      });
    });
  });
});
