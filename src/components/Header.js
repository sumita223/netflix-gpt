import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // Handle errors
        navigate('/error');
      });
  };

  const handleGptSearchClick = () =>{
    //Toggle GPT SEARCH
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      {/* Logo Section */}
      <img 
        className='w-44 mx-auto md:mx-0' 
        src={LOGO} 
        alt='logo' 
      />

      {/* User Controls */}
      {user && (
        <div className='flex items-center gap-4'>
          {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                  </option>
              ))}
          </select>}
          <button className="px-3 py-1 bg-purple-700 text-white text-lg rounded-md hover:bg-purple-600 transition duration-300"
          onClick={handleGptSearchClick}>
            {/*GPT Search*/}
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img 
            className='hidden md:w-12 h-12' 
            alt='usericon' 
            src={user.photoURL} 
          />
          <button 
            onClick={handleSignOut} 
            className='font-semibold text-white hover:underline'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
