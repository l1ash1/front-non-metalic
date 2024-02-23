import React from 'react';

interface CustomItemProps {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
}
const SvgComponent = (props: CustomItemProps) => {
  const { width, height } = { ...props };
  const Temp = props?.svg as React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  return <Temp width={width} height={height} />;
};

export default SvgComponent;
