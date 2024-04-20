import { message } from "antd";
import { doSignOut } from "../../Firebase/auth";
import { setCurrentUser } from "../../services/store/reducers/user";
import { clearStoredToken, clearStoredUser, clearStoredUserProfile } from "../../services/user-storage";
import { useNavigate } from "react-router";
import { ITranslation } from "../../types";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/Hooks";

export const items = [
  {
    key: 'en',
    label: 'English'
  },
  {
    key: 'ar',
    label: 'العربية'
  }
];
export const itemsLink = [
  {
    key: '1',
    label: (
      <NavLink
        to='/bmi'
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        BMI
      </NavLink>
    )
  },
  {
    key: '2',
    label: (
      <NavLink
        to='/calories'
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Calories
      </NavLink>
    )
  },
  {
    key: '3',
    label: (
      <NavLink
        to='/articles'
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Articles
      </NavLink>
    )
  },
  {
    key: '4',
    label: (
      <NavLink
        to='/activities'
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Activities
      </NavLink>
    )
  }
];
  export const logOut = ({ t }: ITranslation) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    doSignOut()
      .then(() => {
        clearStoredToken();
        clearStoredUser();
        clearStoredUserProfile();
        dispatch(setCurrentUser(null));
        navigate('/login');
        message.success(t.LogOutMessage);
      })
      .catch((error) => {
        console.log(error);
        message.error(error.message);
      });
  };