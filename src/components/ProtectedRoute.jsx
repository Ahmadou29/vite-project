import { Navigate } from "react-router-dom";
import useAdminCheck from "./useAdminCheck";

export default function ProtectedRoute({ children }) {
  const { loading, isAdmin } = useAdminCheck();

  if (loading) return <p>Chargement...</p>;
  if (!isAdmin) return <Navigate to="/" />; // redirection vers login

  return children;
}
