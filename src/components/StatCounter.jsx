import { useReveal, useCounter } from '../hooks/useAnimations';

export default function StatCounter({ value, suffix, display, label }) {
  const [ref, visible] = useReveal();
  const count = useCounter(value, suffix, visible);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{value !== null ? count : display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
