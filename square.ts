type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';

type Square = `${File}${Rank}`;

export default Square;
