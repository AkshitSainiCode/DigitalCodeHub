export default function PageHeader({ title, text }) {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}
