import Link from "next/link";
import { appStorePlaceholder } from "@/lib/site";

export function Navigation() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="RaceIQ home">
          <span className="brand-mark">R</span>
          <span>RaceIQ</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/why-raceiq">Why RaceIQ</Link>
          <Link href="/founder-story">Founder Story</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/adaptive-marathon-training-plan">Guides</Link>
        </nav>
        <a className="button small" href={appStorePlaceholder}>
          App Store
        </a>
      </div>
    </header>
  );
}
