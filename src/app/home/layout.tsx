import { ReactNode } from "react";
import Sidebar from '@/components/home/sidebar'

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}