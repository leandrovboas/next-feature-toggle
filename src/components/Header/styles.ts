import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  height: 4rem;
  border-bottom: 1px solid 1B2138;
  background: #11172B;
  ul {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 2rem;
    align-items: center;  
  }
  >p{
    color: #FFF;
    padding-right: 25rem;
    padding-left: 1rem;
  }
`;
