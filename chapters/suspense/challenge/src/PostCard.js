export default function PostCard({ title, excerpt }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  );
}
