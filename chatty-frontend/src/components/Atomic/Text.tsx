import React from "react";

interface ITextProps {
  content?: React.ReactNode;
  size?: string;
  weight?: string;
  color?: string;
  lineHeight?: string;
  className?: string;
  children?: React.ReactNode; // ✅ allow children
}

const Text: React.FC<ITextProps> = ({
  size,
  weight,
  color,
  content,
  lineHeight = "24px",
  className,
  children,
}) => {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: weight,
        color: color,
        lineHeight: lineHeight,
      }}
      className={className}
    >
      {children || content}
    </div>
  );
};

export default Text;
