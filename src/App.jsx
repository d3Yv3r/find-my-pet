import { Outlet } from "react-router-dom";
import Menu from "@/components/menu";

function App() {
  return (
    <>
      <Menu />
      <main className="flex flex-col mx-auto gap-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
