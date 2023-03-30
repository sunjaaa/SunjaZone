import React from "react";
import styled from "@emotion/styled";

interface FlatListProps<T> {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: ({ item, index }: { item: T; index: number }) => JSX.Element;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  ListHeaderComponent?: React.ReactNode;
  ListFooterComponent?: React.ReactNode;
  ItemSeparatorComponent?: React.ReactNode;
  horizontal?: boolean;
}

const FlatList = <T,>({
  data,
  keyExtractor,
  renderItem,
  style,
  ListHeaderComponent,
  ListFooterComponent,
  ItemSeparatorComponent,
  containerStyle,
  horizontal = false,
}: FlatListProps<T>) => {
  return (
    <div>
      {ListHeaderComponent}
      <Container style={containerStyle} horizontal={horizontal}>
        {data.map((item: T, index: number) => (
          <div key={keyExtractor(item)} style={style}>
            {renderItem({ item, index })}
            {ItemSeparatorComponent}
          </div>
        ))}
      </Container>
      {ListFooterComponent}
    </div>
  );
};

export default FlatList;

const Container = styled.div<{ horizontal: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
`;
