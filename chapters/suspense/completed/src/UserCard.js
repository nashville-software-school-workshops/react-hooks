export default function UserCard({ name, title }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}
