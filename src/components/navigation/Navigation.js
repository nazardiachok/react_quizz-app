import { NavLink } from "react-router-dom";
import "./Navigation.css";
import styled from "styled-components";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <StyledNavlink to="/home">
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </StyledNavlink>
        </li>
        <li className="navigation__list-item">
          <StyledNavlink to="/bookmarked">
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
            </svg>
          </StyledNavlink>
        </li>
        <li className="navigation__list-item">
          <StyledNavlink to="/create">
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </StyledNavlink>
        </li>
        <li className="navigation__list-item">
          <StyledNavlink to="/profile">
            <svg className="navigation__icon" viewBox="0 0 24 24">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
            </svg>
          </StyledNavlink>
        </li>
      </ul>
    </nav>
  );
}

const StyledNavlink = styled(NavLink)`
  background: transparent;
  border: none;
  font-size: 1em;
  padding: 1.5em 0.5em;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: gray;
    opacity: 0.5;
    cursor: pointer;
  }
  &.active {
    background-color: grey;
  }
`;
export default Navigation;
