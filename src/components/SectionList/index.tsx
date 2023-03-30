import React from "react";

export interface SectionListData<T> {
  title: string;
  data: T[];
}

export interface SectionListProps<T> {
  sections: SectionListData<T>[];
  keyExtractor: (item: T) => string;
  renderItem: ({ item, index }: { item: T; index: number }) => JSX.Element;
  renderSectionHeader: ({
    section,
  }: {
    section: SectionListData<T>;
  }) => JSX.Element;
  ListEmptyComponent?: React.ReactNode;
  ListHeaderComponent?: React.ReactNode;
  ListFooterComponent?: React.ReactNode;
  ItemSeparatorComponent?: React.ReactNode;
  SectionFooterComponent?: React.ReactNode;
}

const SectionList = <T,>({
  sections,
  keyExtractor,
  renderItem,
  renderSectionHeader,
  ListEmptyComponent = <div />,
  ListHeaderComponent,
  ListFooterComponent,
  ItemSeparatorComponent,
  SectionFooterComponent,
}: SectionListProps<T>) => {
  return (
    <div>
      {ListHeaderComponent}
      {sections.map((section) => (
        <div key={section.title}>
          {renderSectionHeader({ section })}
          {section.data.map((item, index) => (
            <div key={keyExtractor(item)}>
              {renderItem({ item, index })}
              {ItemSeparatorComponent}
            </div>
          ))}
          {SectionFooterComponent}
        </div>
      ))}
      {ListFooterComponent}
      {sections.length === 0 && ListEmptyComponent}
    </div>
  );
};

export default SectionList;
