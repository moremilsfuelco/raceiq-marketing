import Link from "next/link";
import { appStorePlaceholder, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">R</span>
            <span>RaceIQ</span>
          </Link>
          <p>Training plans for runners with real schedules.</p>
        </div>
        <div className="footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
          <a href={appStorePlaceholder}>App Store</a>
          <a href={site.social.instagram}>Instagram</a>
          <a href={site.social.tiktok}>TikTok</a>
        </div>
      </div>
    </footer>
  );
}
