import { Suspense } from "react";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Suspense fallback={<>[loading]</>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
