import React from "react";
import styled from "@emotion/styled";

interface Props {
  label: string | React.ReactNode;
  color: string;
  size: number;
  weight: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}

const CustomText = ({ label, color, size, weight, style, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Text size={size} color={color} style={style} weight={weight}>
        {label}
      </Text>
    </Container>
  );
};

export default CustomText;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Text = styled.div<{ color: string; weight: number; size: number }>`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

CustomText.defaultProps = {
  label: "텍스트를 입력하세요.",
  color: "#000",
  size: 1.5,
  weight: 0,
};
