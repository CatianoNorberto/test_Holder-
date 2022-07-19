import styled from "styled-components";

export const NavigationItems = styled.ul`
  list-style: none;
  @media (min-width: 769px) {
    margin: 0;
    flex-flow: row;
  }
`;

export const BlogLink = styled.li`
  display: inline-block;
  margin: 0 10px;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 19px;
    font-family: 'Inter';

    color: #F05500;
    transition: all 0.3s ease-out;

    &:hover,
    &:active,
    &.active {
      color: #F05500;

      @media (min-width: 769px) {
        border-bottom: 2px solid #F05500;
        color: #F05500;
      }
    }

    @media (min-width: 769px) {
      margin-right: 10px;
      height: 100%;
    }
  }
`;
