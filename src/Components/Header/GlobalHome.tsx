import { NavLink } from "react-router-dom";;

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