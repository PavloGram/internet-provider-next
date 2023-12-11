import styled, { css } from "styled-components";

export const HeaderMenu = styled.div`
  display: none;
  z-index: 40;
  font-weight: 700;
  width: 740px;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding: 16px;
    padding-left: 0;
    position: fixed;
    top: 100px;
    right: 50%;
    transform: translateX(50%);
    background: white;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    ${(props) =>
      props.$scroll &&
      css`
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        color: white;
      `}
  }
  @media screen and (min-width: 1024px) {
    width: 960px;
  }
  @media screen and (min-width: 1280px) {
    width: 1140px;
  }
`;
// hidden z-40 md:flex font-bold w-[740px] lg:w-[960px] xl:w-[1140px]
// justify-between p-4 pl-0 fixed right-[50%] translate-x-[50%] rounded items-center
