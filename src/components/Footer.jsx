export function NepzoFooter() {
  return (
    <footer className="nz-footer">
      <div className="nz-footer-inner">
        <div className="nz-footer-brand">
          <img src="/nepzobg.png" alt="NEPZO" className="nz-footer-logo" />
          <p>Preparing kids for the real world. Future Skills. Real Learning. Lasting Impact.</p>
          <p className="nz-footer-powered">Co-powered by <a href="https://sckoolchess.com" target="_blank" rel="noopener noreferrer">SckoolChess</a></p>
        </div>

        <div className="nz-footer-links">
          <h4>Quick Links</h4>
          <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) }}>Home</a>
          <a href="#programs" onClick={(e) => { e.preventDefault(); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }) }}>Programs</a>
          <a href="#pillars" onClick={(e) => { e.preventDefault(); document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' }) }}>Pillars</a>
          <a href="#benefits" onClick={(e) => { e.preventDefault(); document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }) }}>Benefits</a>
          <a href="#why-nepzo" onClick={(e) => { e.preventDefault(); document.getElementById('why-nepzo')?.scrollIntoView({ behavior: 'smooth' }) }}>Why Nepzo</a>
        </div>

        <div className="nz-footer-contact">
          <h4>Contact</h4>
          <a href="https://sckoolchess.com/contact-us" target="_blank" rel="noopener noreferrer">Contact SckoolChess</a>
          <a href="https://sckoolchess.com" target="_blank" rel="noopener noreferrer">Visit SckoolChess.com</a>
          <div className="nz-footer-socials">
            <a href="https://x.com/sckoolchess" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src="/twitterlogo.png" alt="X" />
            </a>
            <a href="https://www.instagram.com/sckoolchess" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagramlogo.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@sckoolchess" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/youtubelogo.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className="nz-footer-bottom">
        <p>&copy; {new Date().getFullYear()} NEPZO. Co-powered by SckoolChess. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
