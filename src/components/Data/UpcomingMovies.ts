// Define the Movie interface
export interface Movie {
  id: number;
  name: string;
  image: string;
  description:string;
  releaseDate: string;
  tag: string;
  type1: string;
  type2: string;
  type3: string;
}

// Define the array of upcoming movies
const UpcomingMovies: Movie[] = [
  {
    id: 1,
    name: "The Matrix: Resurrections",
    image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/The%20Matrix%20Resurrections.png?raw=true",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Action"
  },
  {
    id: 2,
    name: "Resident Evil: Welcome to Raccoon City",
    image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/Picture.png?raw=true",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Comedy"
  },
  {
    id: 3,
    name: "Sword Art Online: Progressive - Aria of a Starless Night",
    image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/Sword%20Art%20Online_%20Progressive%20-%20Aria%20of%20a%20Starless%20Night.png?raw=true",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Drama"
  },
  {
    id: 4,
    name: "Chhelo Divas",
    image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/chhelo_divas.jpg?raw=true",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Drama"
  },
  {
    id: 5,
    name: "khichdi 1",
    image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/khichdi.jpg?raw=true",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Drama"
  },
  // {
  //   id: 6,
  //   name: "Chal Jivi Laiye ",
  //   image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/Chaal-Jeevi-Laiye-Gujarati-Movie.jpg?raw=true",
  //   releaseDate: "08 Nov 2021 | TIX ID",
  //   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
  //   type1: "XXI",
  //   type2: "CGV",
  //   type3: "Cinépolis",
  //   tag: "Drama"
  // },
];


export default UpcomingMovies;
