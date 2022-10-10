import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";

export const routes = [
  {
    path: '',
    element: <HomePage />,
    exact: true
  },
  {
    path: '/user-details/:userLogin',
    element: <UserDetailPage />,
    exact: true
  }
]