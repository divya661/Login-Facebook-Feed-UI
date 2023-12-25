import tw from "twin.macro";
import styled from "@emotion/styled";

type StyledListProps = {
  scrollBarWidth?: number;
};

const StyledList = styled.div<StyledListProps>`
${tw`overflow-x-hidden w-full`}
`;

const StyledListHeader = styled.div`
  ${tw`py-2`}
`;

const StyledListFooter = styled.div`
  ${tw`py-2`}
`;

const StyledListItem = styled.div`
  ${tw`box-border pb-[16px] w-full`}
  `;

export {
  StyledList,
  StyledListFooter,
  StyledListHeader,
  StyledListItem
};
export type { StyledListProps };

