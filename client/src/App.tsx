import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Home from "@/pages/home";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Toaster />
    </>
  );
}

export default App;