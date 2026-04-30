"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const checkAuth = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      try {
        setUser(JSON.parse(loggedInUser));
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
    // Listen for custom login/logout events to update the UI without reloading
    window.addEventListener("auth-change", checkAuth);
    return () => window.removeEventListener("auth-change", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("auth-change"));
    router.push("/register"); // Sesuai permintaan, ke register
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Emina Logo" />
        </div>
        <ul>
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#products">Items</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          
          {!user ? (
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register" className="nav-btn">Register</Link></li>
            </>
          ) : (
            <>
              <li><button onClick={handleLogout} style={{ fontWeight: 'bold' }}>Logout</button></li>
              <li><span className="nav-btn">{user.username || user.name}</span></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}