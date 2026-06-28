import { Home } from "@/pages/Home";
import { PageLoader } from "@/components/Common/PageLoader";
import { useLenis } from "@/hooks/useLenis";

function App() {
  useLenis();

  return (
    <>
      <PageLoader />
      <Home />
    </>
  );
}

export default App;
