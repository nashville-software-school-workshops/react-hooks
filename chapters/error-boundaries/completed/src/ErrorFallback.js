export default function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div className="error-container">
      <h2>Error. Please Try Again Later</h2>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}