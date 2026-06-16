import Link from "next/link";
import Image from "next/image";
import { appStorePlaceholder } from "@/lib/site";

export function Navigation() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="RaceIQ home">
          <Image className="brand-icon" src="/raceiq-icon.png" alt="" width={38} height={38} priority />
          <span>RaceIQ</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/why-raceiq">Why RaceIQ</Link>
          <Link href="/get-back-to-you">Get Back To You</Link>
          <Link href="/founder-story">Founder Story</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/support">Support</Link>
          <Link href="/runner-stories-guides">Guides</Link>
        </nav>
        <a className="button small" href={appStorePlaceholder}>
          App Store
        </a>
      </div>
    </header>
  );
}
