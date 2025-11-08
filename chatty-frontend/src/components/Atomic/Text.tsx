import React from "react";

interface ITextProps {
  content?: string;
  size?: string;
  weight?: string;
  color?: string;
  lineHeight?: string;
  className?: string;
}

const Text = (props: ITextProps) => {
  const { size, weight, content, lineHeight = "24px", className } = props;
  return (
    <>
      <div
        style={{
          fontSize: size,
          fontWeight: weight,
          lineHeight: lineHeight,
        }}
        className={`${className}`}
      >
        {content}
      </div>
    </>
  );
};

export default Text;
