import { useReveal } from '../hooks/useAnimations';

export default function Reveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  as: Tag = 'div',
  ...props
}) {
  const [ref, visible] = useReveal();
  const delayClass = delay ? `delay-${Math.min(delay, 6)}` : '';

  return (
    <Tag
      ref={ref}
      className={`${animation} ${delayClass} ${visible ? 'visible' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
