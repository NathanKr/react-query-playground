// import "./App.css";
import Posts from "./posts";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Posts />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
