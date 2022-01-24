import React from "react";
import Link from "@docusaurus/Link";

export default function Card({ title, url, description }): JSX.Element {
  return (
    <div className="col col--6" style={{ padding: 6 }}>
      <Link className="card" to={url} style={{ height: "100%" }}>
        <div className="card__body">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
