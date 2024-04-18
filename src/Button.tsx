import Link from "next/link";
import React from "react";

const Button: React.FC<{ link: string; cta: string }> = ({ link, cta }) => {
  return (
    <Link href={link}>
      <button>{cta}</button>
    </Link>
  );
};

export default Button;
