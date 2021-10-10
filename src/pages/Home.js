import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Amit Eshore</h1>
      <p>
        <a href="http://github.com/amiteshore">GitHub</a>
      </p>
      <p>
        <a href="http://github.com/amiteshore/dotfiles">Dotfiles</a>
      </p>
      <p>
        <Link to="/arch-linux">Arch Linux Installation</Link>
      </p>
      <p>
        <Link to="/lamp-stack">Install LAMP Stack on Arch Linux</Link>
      </p>
    </main>
  );
}

export default Home;
