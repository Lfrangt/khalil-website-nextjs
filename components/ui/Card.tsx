import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = true, style, onClick }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 card-shadow ${
        hover ? 'hover:card-shadow-hover hover:-translate-y-1' : ''
      } transition-all duration-300 ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
