import React from "react";

interface SectionListData {
  title: string;
  data: object[];
}

interface SectionListProps {
  sections: SectionListData[];
  ListEmptyComponent: React.ReactNode;
  ListHeaderComponent?: React.ReactNode;
  ListFooterComponent?: React.ReactNode;
  ItemSeparatorComponent?: React.ReactNode;
  SecionFooterComponent?: React.ReactNode;
  keyExtractor: (item: object) => string;
  renderItem: ({ item, index }: { item: object; index: number }) => JSX.Element;
  renderSectionHeader: ({
    section,
  }: {
    section: SectionListData;
  }) => JSX.Element;
}

const SectionList = ({
  sections,
  ListEmptyComponent,
  ListHeaderComponent,
  ListFooterComponent,
  ItemSeparatorComponent,
  SecionFooterComponent,
  keyExtractor,
  renderItem,
  renderSectionHeader,
}: SectionListProps) => {
  if (sections) {
    return (
      <div>
        {ListHeaderComponent}
        {sections.map((section) => (
          <>
            <div key={section.title}>
              {renderSectionHeader({ section })}
              {section.data.map((item, index) => (
                <>
                  <div key={keyExtractor(item)}>
                    {renderItem({ item, index })}
                  </div>
                  {ItemSeparatorComponent}
                </>
              ))}
              {SecionFooterComponent}
            </div>
          </>
        ))}
        {ListFooterComponent}
      </div>
    );
  } else {
    return <div>{ListEmptyComponent}</div>;
  }
};

export default SectionList;

SectionList.defaultProps = {
  ListEmptyComponent: <div />,
};
