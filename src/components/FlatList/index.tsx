import React from "react";

interface FlatListProps {
  data: any;
  renderItem: (item: any) => React.ReactNode;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const FlatList = ({
  data,
  renderItem,
  style,
  containerStyle,
}: FlatListProps) => {
  return (
    <div style={containerStyle}>
      {data.map((item: any, index: number) => (
        <div key={item.id} style={style}>
          {renderItem({ item, index })}
        </div>
      ))}
    </div>
  );
};

export default FlatList;
