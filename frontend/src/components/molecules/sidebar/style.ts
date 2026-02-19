import styled from "styled-components";

export const SidebarContainer = styled.div<{ isVisible: boolean }>`
  position: relative;
  width: ${(props) => (props.isVisible ? "150px" : "70px")};
  height: 100%;
  background-color: white;
  border-right: 1px solid #e5e5e5;
  transition: width 250ms ease-in-out;
  text-align: center;

  .arrow-sidebar {
    position: absolute;
    top: 40px;
    right: -12px;
    width: 15px;
    height: 15px;
    background-color: white;
    padding: 5px;
    border-radius: 100%;
    cursor: pointer;
    transition: 250ms;

    transform: ${(props) =>
      !props.isVisible ? "rotate(180deg)" : "rotate(0deg)"};

    &:hover {
      background-color: #ececec;
    }
  }
`;

export const Logo = styled.img`
  width: 70%;
  height: auto;
  margin: 2rem 0px 4rem 0px;
`;
