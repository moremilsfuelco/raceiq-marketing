import Link from "next/link";
import Image from "next/image";
import { appStorePlaceholder, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <Image className="brand-icon" src={site.icon} alt="" width={38} height={38} />
            <span>RaceIQ</span>
          </Link>
          <p>Training plans for runners with real schedules. Coach support: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.</p>
        </div>
        <div className="footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/support">Support</Link>
          <a href={appStorePlaceholder}>App Store</a>
          <a href={site.social.instagram}>Instagram</a>
          <a href={site.social.tiktok}>TikTok</a>
        </div>
      </div>
    </footer>
  );
}
