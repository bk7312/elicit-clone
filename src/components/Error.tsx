import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h2 className="text-lg">Error</h2>
        <p className="font-mono">
          {error.status} - {error.statusText}
        </p>
      </>
    );
  }
  return (
    <>
      <p className="font-mono">Unknown Error</p>
    </>
  );
}
