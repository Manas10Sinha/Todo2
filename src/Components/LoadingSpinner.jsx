const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border spinner"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
