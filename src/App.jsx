// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/login";
// // import AdminDashboard from "./AdminDashboard";
// // import useAdminCheck from "./useAdminCheck";

// // function ProtectedRoute({ children }) {
// //   const { loading, isAdmin } = useAdminCheck();
// //   if (loading) return <p>Chargement...</p>;
// //   if (!isAdmin) return <p>Accès refusé</p>;
// //   return children;
// // }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         {/* <Route path="/admin" /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={
          <>
          <AdminDashboard />
          {/* <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute> */}
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
