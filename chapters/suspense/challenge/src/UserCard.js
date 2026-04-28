// Simulate a slow, heavy dependency to show the value of lazy loading
await new Promise((resolve) => setTimeout(resolve, 3000));

export default function UserCard({ name, title }) {
  
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}
