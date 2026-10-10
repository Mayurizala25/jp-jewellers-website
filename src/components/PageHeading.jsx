export default function PageHeading({ title, introduction, eyebrow = "J P JEWELLERS", align = "left" }) {
  return (
    <div className={`page-heading${align === "center" ? " centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-heading">{title}</h1>
      {introduction && <p className="page-introduction">{introduction}</p>}
    </div>
  );
}
