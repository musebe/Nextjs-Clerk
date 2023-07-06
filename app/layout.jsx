import "@styles/globals.css";
import Nav from "@components/Nav";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export const metadata = {
  title: "Clerk",
  description: "Getting started with Clerk",
};


const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <div className="main">
            <div className="gradient"/>
        </div>

        <main className="app">
            <Nav />
            {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  )
}

export default RootLayout
