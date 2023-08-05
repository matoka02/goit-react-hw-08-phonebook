import useAuth from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UseMenu/UseMenu';
import AuthNav from 'components/AuthNav/AuthNav';

import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;