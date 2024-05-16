import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <main className="flex flex-col gap-4 mx-auto">
        <Header />
        <Outlet />
      </main>
    </ChakraProvider>
  );
}

export default App;
