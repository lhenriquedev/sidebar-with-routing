import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StudentsPage } from "./pages/StudentsPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="students" element={<StudentsPage />} />
    </Routes>
  );
}
