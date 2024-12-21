import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*Main Container
          -VideoBackground
          -VideoTitle
        Secondary Conatiner
          -MovieList *n
          -Cards * n

        */ 
      }
    </div>
  )
}

export default Browse;
