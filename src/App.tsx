import { QueryClient, QueryClientProvider } from "react-query";
// import "./App.css";
import Rates from "./Rates";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Rates />
      </QueryClientProvider>
     </>
  );
}

export default App;
