export default function LoadingPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', backgroundColor: 'var(--bgColor)', zIndex: 99,
      }}
    >
      <div
        className="spinner-border"
        style={{
          width: '3rem', height: '3rem', borderColor: 'var(--textColor)', borderRightColor: 'var(--bgColor)',
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
