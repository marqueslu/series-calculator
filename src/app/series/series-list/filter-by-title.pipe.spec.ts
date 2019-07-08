import { FilterByTitlePipe } from './filter-by-title.pipe';
import { Serie } from 'src/app/core';

describe('FilterByTitlePipe', () => {
  let pipe: FilterByTitlePipe;
  const series: Serie[] = [
    {
      id: '1',
      imdbId: 'tt0944947',
      title: 'Game of Thrones',
      numberOfSeasons: 8,
      releaseDate: '2011-11-06'
    },
    {
      id: '2',
      imdbId: 'tt6226232',
      title: 'Young Sheldon',
      numberOfSeasons: 4,
      releaseDate: '2018-03-26'
    }
  ];
  beforeEach(() => {
    pipe = new FilterByTitlePipe();
  });

  it('Giving a title should return an especific serie', () => {
      expect(pipe.transform(series, 'game')).toEqual([
        {
          id: '1',
          imdbId: 'tt0944947',
          title: 'Game of Thrones',
          numberOfSeasons: 8,
          releaseDate: '2011-11-06'
        }])
  });

  it('Giving an invalid name should return an empty array', () => {
      expect(pipe.transform(series, 'invalidTitle')).toEqual([]);
  })
});
