import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-[#F7F8FA]">

      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 lg:ml-72">

        <Header setOpen={setOpen} />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}