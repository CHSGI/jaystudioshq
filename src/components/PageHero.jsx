import { Link } from 'react-router-dom';

export default function PageHero({ title, description, breadcrumb }) {
  return (
    <header className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{breadcrumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
