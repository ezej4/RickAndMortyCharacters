const getCharactersQuery: string = `
  query getCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

const getCharacterQuery: string = `
    query getCharacter($id: ID!){
        character(id: $id){
        id,
        name,
        status,
        species,
        type,
        gender,
        origin {
            name
        },
        location {
            name
        },
        image,
        episode {
            name,
            episode
        }
        }
    }
`;

const getAmountOfCharactersQuery: string = `
  query {
    characters{
      info{
        count, 
      },
    }
  }
  `;

export { getCharactersQuery, getCharacterQuery, getAmountOfCharactersQuery };
