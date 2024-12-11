import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
}