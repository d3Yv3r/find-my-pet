import { Outlet } from "react-router-dom";
import Header from "@/components/header";

function App() {
  return (
    <main className="flex flex-col gap-4 mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
