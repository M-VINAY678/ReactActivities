import FormRegistration from "./components/FormRegistration";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <>
    <ErrorBoundary>
      <FormRegistration/>
    </ErrorBoundary>
    </>
  );
}

export default App;
