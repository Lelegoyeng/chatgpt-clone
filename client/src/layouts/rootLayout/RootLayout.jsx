import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider, SignIn, UserButton } from "@clerk/clerk-react";

const PUBLISHSABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHSABLE_KEY) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY");
}
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHSABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            <span> Lelegoyeng AI</span>
          </Link>
          <div className="user">
            <SignIn>
              <UserButton />
            </SignIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
