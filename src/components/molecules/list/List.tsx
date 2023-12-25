import _map from "lodash/map";
import type { ReactNode } from "react";
import { Fragment } from "react";

import {
  StyledList,
  StyledListFooter,
  StyledListHeader,
  StyledListItem,
  StyledListProps
} from "./list.styled";

type ListProps<T> = {
  dataSource: T[];
  renderFooter?: () => ReactNode;
  renderHeader?: () => ReactNode;
  renderItem: (item: T) => ReactNode;
} & StyledListProps;

type ListItemProps = {
  children: ReactNode;
  id: string | number;
};

type ListHeaderProps = {
  children: ReactNode;
};

type ListFooterProps = {
  children: ReactNode;
};

function List<T>({
  dataSource = [],
  renderFooter,
  renderHeader,
  renderItem
}: ListProps<T>) {
  return (
    <StyledList>
      {renderHeader?.()}
      {_map(dataSource, renderItem)}
      {renderFooter?.()}
    </StyledList>
  );
}

const ListItem = ({ children, id }: ListItemProps) => {

  return (
    <Fragment key={id}>
      <StyledListItem>{children}</StyledListItem>
    </Fragment>
  );
};

const ListHeader = ({ children }: ListHeaderProps) => (
  <StyledListHeader>{children}</StyledListHeader>
);

const ListFooter = ({ children }: ListFooterProps) => (
  <StyledListFooter>{children}</StyledListFooter>
);

List.Header = ListHeader;
List.Item = ListItem;
List.Footer = ListFooter;

export { List };
