import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My PDF Viewer App</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>My PDF Viewer App</p>
      </footer>
    </div>
  );
};

export default Layout;
