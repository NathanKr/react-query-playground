// import "./App.css";
import Posts from "./posts";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
    </>
  );
}

export default App;
