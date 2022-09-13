interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: {
    name: string;
    episode: string;
  };
}

export default ICharacter;
