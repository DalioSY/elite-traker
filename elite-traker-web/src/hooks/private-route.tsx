import { Navigate } from "react-router-dom";
import { userLocalStorageKey } from "./use-user";
import { ReactNode } from "react";
import { Sidebar } from "../components/sidebar";
import { AppContainer } from "../components/app-container";

type PrivateRoutProps = {
  component: ReactNode;
};

export function PrivateRoute({ component }: PrivateRoutProps) {
  const userData = localStorage.getItem(userLocalStorageKey);

  if (!userData) {
    return <Navigate to="/entrar" />;
  }
  return (
    <>
      <AppContainer>
        <Sidebar /> {component}
      </AppContainer>
    </>
  );
}
