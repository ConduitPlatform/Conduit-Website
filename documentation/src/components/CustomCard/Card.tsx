import React from "react";
import Link from "@docusaurus/Link";
import './Card.css'
export default function Card({title, url, description}): JSX.Element {
    return (
        <div className="col col--6" style={{padding: 8}}>
            <Link className="card root-card" to={url}>
                <div className="card__body">
                    <h3>{title}</h3>
                    <p className="p-color">{description}</p>
                </div>
            </Link>
        </div>
    );
}
