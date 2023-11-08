import { ReactNode } from "react";
import Sidebar from "@/components/university/sidebar";

type UniversityLayoutProps = {
  children: ReactNode;
};

export default function UniversityLayout({ children }: UniversityLayoutProps) {
  return (
    <>
    <div className="flex">
      <Sidebar />
      {children}
      </div>
      
    </>
  );
}
