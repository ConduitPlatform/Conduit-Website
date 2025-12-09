import React from "react";
import Link from "@docusaurus/Link";
import './Card.css';

interface CardProps {
  title: string;
  url: string;
  description?: string;
  icon?: string;
  variant?: 'default' | 'highlighted' | 'minimal';
}

export default function Card({
  title,
  url,
  description,
  icon,
  variant = 'default'
}: CardProps): JSX.Element {
  const variantClass = variant !== 'default' ? `card--${variant}` : '';
  
  return (
    <div className="col col--6" style={{ padding: 8 }}>
      <Link className={`card root-card ${variantClass}`} to={url}>
        <div className="card__body">
          <h3 className="card__title">
            {icon && <span className="card__icon">{icon}</span>}
            {title}
          </h3>
          {description && (
            <p className="card__description">{description}</p>
          )}
        </div>
      </Link>
    </div>
  );
}

// Module card variant for grid layouts
interface ModuleCardProps {
  title: string;
  url: string;
  description: string;
  icon?: string;
}

export function ModuleCard({ title, url, description, icon }: ModuleCardProps): JSX.Element {
  return (
    <Link className="module-card" to={url}>
      <h3>
        {icon && <span>{icon}</span>}
        {title}
      </h3>
      <p>{description}</p>
    </Link>
  );
}

// Grid container for module cards
interface ModuleGridProps {
  children: React.ReactNode;
}

export function ModuleGrid({ children }: ModuleGridProps): JSX.Element {
  return <div className="module-grid">{children}</div>;
}
