import { Navigate } from "react-router-dom";

function ProtectedRoute({ isSuccess, children }) {
  if (!isSuccess) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;