import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? '#0EE7B7' : '#C4C4C4'};
    transition: 0.5s;
    &:hover {
      color: ${props =>
        props.isActive
          ? '#0DD7B7'
          : '#344B5B'};
    }
  }
`;