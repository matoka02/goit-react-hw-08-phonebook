const { useSelector } = require("react-redux");
const { selectIsLoggedIn, selectIsRefreshing, selectUser } = require("store/auth/selectors");

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

export default useAuth;
