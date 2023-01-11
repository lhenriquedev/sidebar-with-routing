import { Sidebar } from "../Sidebar";
import { SLayout, SMain } from "./styles";

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps) {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
}
