import ISummarizedCharacter from "./summarized-character";

interface ICharacterList {
  info: {
    count: number;
    pages: number;
  };
  results: ISummarizedCharacter[];
}

export default ICharacterList;
