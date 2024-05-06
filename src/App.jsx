import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col gap-4">
      <Outlet />
    </main>
  );
}

export default App;
