import * as React from "react";
import styled from "react-emotion";

interface ITypography {
  children?: any;
  className?: any;
  headlineMapping?: any;
  variant?: any;
  color?: string;
  align?: string;
  onClick?: any;
}

interface IProps {
  theme?: any;
  align?: string;
  color: string;
}

const DefaultComponent = styled("span")`
  color: ${(props: IProps) => props.theme.colors[props.color]};
  text-align: ${(props: IProps) => props.align};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Typography: React.SFC<ITypography> = props => {
  const { children, headlineMapping, variant } = props;

  const headline = headlineMapping[variant];

  const Component = DefaultComponent.withComponent(headline);

  return <Component {...props}>{children}</Component>;
};

Typography.defaultProps = {
  align: "inherit",
  color: "main",
  headlineMapping: {
    body1: "p",
    body2: "aside",
    headline: "h1",
    subheading: "h3",
    title: "h2"
  }
};

export default Typography;
