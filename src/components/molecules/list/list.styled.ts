import styled from "@emotion/styled";

type StyledListProps = {
  scrollBarWidth?: number;
};

const StyledList = styled.div<StyledListProps>`
  overflow-x: hidden;
  width: 100%;
`;

const StyledListHeader = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledListFooter = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const StyledListItem = styled.div`
  box-sizing: border-box;
  padding-bottom: 16px;
  width: 100%;
`;

export {
  StyledList,
  StyledListFooter,
  StyledListHeader,
  StyledListItem
};
export type { StyledListProps };

