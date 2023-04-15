import { useState, useEffect } from "react";

import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (window.location.pathname === "/") setActivePage("Home");
    if (window.location.pathname === "/contact") setActivePage("Contact");
    if (window.location.pathname === "/about") setActivePage("About");
  }, []);

  return (
    <>
      <div
        className={isSidebarOpen ? "sidebar-menu-cross" : "sidebar-icon"}
        onClick={handleSidebar}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={isSidebarOpen ? "sidebar" : "sidebar-hidden"}>
        <ul className="sidebar-menu-items">
          <li
            className={
              activePage === "Home" ? "sidebar-item active" : "sidebar-item"
            }
          >
            <a href="/">Home</a>
          </li>
          <li
            className={
              activePage === "Contact" ? "sidebar-item active" : "sidebar-item"
            }
          >
            <a href="contact">Contact</a>
          </li>
          <li
            className={
              activePage === "About" ? "sidebar-item active" : "sidebar-item"
            }
          >
            <a href="about">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
