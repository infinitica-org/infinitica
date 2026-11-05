"use client";

interface RibbonHeroProps {
  soundOn?: boolean;
  onSound?: () => void;
}

export default function RibbonHero({ soundOn = false, onSound }: RibbonHeroProps) {
  return (
    <div className="rh">
      <section className="rh-stage">
        <h1 aria-label="Building infinite products">
          <div className="rh-hl rh-l1" aria-hidden="true">
            <span className="rh-in">

ADVANCING THE FRONTIERS</span>
          </div>
          <div className="rh-hl rh-l2" aria-hidden="true">
            <span className="rh-in"> OF INTELLIGENCE.</span>
          </div>
        </h1>
        <div className="rh-cap">Products we imagine, ship and run — every single day.</div>
        <div className="rh-glow" />

        <footer className="rh-bot">
          <p>We are an AI-first technology company focused on advancing intelligent systems, conducting applied research and engineering products that solve meaningful real-world problems.</p>
        
        </footer>
      </section>
    </div>
  );
}
