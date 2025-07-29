import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} <strong>VerseVault</strong>. All rights reserved.</p>
      <p>
        <a href="https://github.com/Sachiprajapati/VerseVault" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="/about"> About</a> | 
        <a href="/submit"> Submit</a>
      </p>
    </footer>
  );
}
