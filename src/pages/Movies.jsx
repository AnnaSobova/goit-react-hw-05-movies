
import SearchForm from 'components/SearchForm/SearchForm';
import MovieGallery from 'components/GalleryList/MovieGallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { useState, useEffect } from 'react';
import { getMoviesSearch } from '../components/services/getApi';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [total, settotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (!query) {
      return () => {
        controller.abort();
      };
    }
    if (searchQuery !== query) {
      setMovies([]);
    }

    getMoviesSearch(page, query, signal)
      .then(data => {
        setMovies(prevState => [...prevState, ...data.results]);
        settotal(data.total_pages);
        setSearchQuery(query);
      })
      .catch(error => {
        console.log('Error:', error);
      });

    return () => {
      controller.abort();
    };
  }, [query, page, searchQuery]);

  const handleSubmitForm = query => {
    setPage(1);
    settotal(0);
    setSearchParams({ query: query.movieSearch });
  };

  const handleLoadMoreButton = () => {
    setPage(prevState => prevState + 1);
  };
  console.log('KWAK');
  return (
    <>
      <SearchForm initialSearchValue={query} onSubmit={handleSubmitForm} />
      {movies.length > 0 && (
        <>
          <MovieGallery movies={movies} state={{ from: location }} />
          {total !== page && <LoadMoreButton onClick={handleLoadMoreButton} />}
        </>
      )}
    </>
  );
};

export default Movies;
