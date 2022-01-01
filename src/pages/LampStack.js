import { Helmet } from "react-helmet-async";

function LampStack() {
  return (
    <>
      <Helmet>
        <title>Install LAMP Stack on Arch Linux - Amit Eshore</title>
      </Helmet>
      <main>
        <h1>Install LAMP Stack on Arch Linux</h1>
        <p className="date">October 10, 2021</p>
        <p>
          <b>L</b>inux, <b>A</b>pache, <b>M</b>ariaDB/<b>M</b>ySQL and <b>P</b>
          HP
        </p>
        <h2>Installation</h2>
        <hr />
        <pre>$ sudo pacman -S apache mariadb php php-apache</pre>
        <h2>Configuration</h2>
        <hr />
        <h3>Apache</h3>
        <p>
          Config file: <code>/etc/httpd/conf/httpd.conf</code>
        </p>
        <p>
          Default serving directory: <code>/srv/http</code>
        </p>
        <p>Comment the line:</p>
        <pre>LoadModule mpm_event_module modules/mod_mpm_event.so</pre>
        <p>Uncomment the line:</p>
        <pre>#LoadModule mpm_prefork_module modules/mod_mpm_prefork.so</pre>
        <p>
          Place this at the end of the <code>LoadModule</code> list:
        </p>
        <pre>
          LoadModule php_module modules/libphp.so <br />
          AddHandler php-script .php
        </pre>
        <p>
          Place this at the end of the <code>Include</code> list:
        </p>
        <pre>Include conf/extra/php_module.conf</pre>
        <p>
          Restart <code>httpd.service</code> to apply changes.
        </p>
        <h3>MySQL/MariaDB</h3>
        <p>
          Config file: <code>/etc/my.cnf</code>
        </p>
        <p>Run:</p>
        <pre>
          $ mariadb-install-db --user=mysql --basedir=/usr
          --datadir=/var/lib/mysql
          <br />$ mariadb-secure-installation
        </pre>
        <p>
          Then{" "}
          <a href="https://wiki.archlinux.org/title/MariaDB#Configuration">
            Login as root, create new user and grant privileges.
          </a>
        </p>
        <h3>PHP</h3>
        <p>
          Config file: <code>/etc/php/php.ini</code>
        </p>
        <p>Change timezone and enable display errors to debug code:</p>
        <pre>
          date.timezone = Asia/Kolkata
          <br />
          display_errors = On
        </pre>
        <p>Uncomment the lines:</p>
        <pre>
          extension=mysqli
          <br />
          extension=pdo_mysql
        </pre>
        <h2>Optional</h2>
        <hr />
        <h3>Use custom directory to develop my projects</h3>
        <p>
          Change <code>DocumentRoot "/srv/http"</code> and{" "}
          <code>&lt;Directory "/srv/http"&gt;</code> in apache config so that I
          can use any directory to develop my project instead of the default{" "}
          <code>/srv/http</code> directory (below both lines should have the
          same path):
        </p>
        <pre>
          DocumentRoot "/home/amit/project"
          <br />
          &lt;Directory "/home/amit/project"&gt;
        </pre>
        <p>
          Add <strong>execution permission to others</strong> for the{" "}
          <code>DocumentRoot</code> directory and and its parent directories so
          that apache can get there:
        </p>
        <pre>
          $ chmod o+x ~
          <br />
          $ chmod o+x ~/project
          <br />$ chmod -R o+x ~/project
        </pre>
        <p>
          Restart <code>httpd.service</code> to apply changes.
        </p>
      </main>
    </>
  );
}

export default LampStack;
