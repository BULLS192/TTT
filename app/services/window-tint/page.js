import Link from 'next/link';
import TintVisualizer from './TintVisualizer';
import styles from './window-tint.module.css';

export const metadata = {
  title: 'Automotive Window Tint in Houston',
  description: 'Automotive window tint for Houston drivers, selected around heat rejection, glare, visibility, privacy, glass coverage and current Texas requirements.',
};

const filmFamilies = [
  {
    name: 'Dyed / color-stable',
    fit: 'A clean, darker appearance when privacy and budget matter most',
    heat: 'Entry-level',
    signal: 'Non-metallic',
    note: 'A good film can look excellent, but darkness does more of the work than thermal performance. Product quality matters.',
  },
  {
    name: 'Carbon',
    fit: 'A deeper, non-reflective look with a step up in solar performance',
    heat: 'Moderate',
    signal: 'Non-metallic',
    note: 'A sensible middle ground for drivers who want appearance, privacy and better heat control without moving to ceramic.',
  },
  {
    name: 'Ceramic',
    fit: 'Daily drivers where heat control matters as much as appearance',
    heat: 'High',
    signal: 'Non-metallic',
    note: 'Ceramic films can deliver strong heat performance without forcing you into an excessively dark shade. Exact results depend on the film and VLT.',
  },
  {
    name: 'High-performance ceramic',
    fit: 'Windshields, large glass areas and vehicles where cabin comfort is the priority',
    heat: 'Highest potential',
    signal: 'Non-metallic',
    note: 'The value is not simply “more tint.” It is more solar control at a shade you can still live with every day.',
  },
];

const coverage = [
  ['Front two windows', 'Useful when you want the front glass to visually match factory rear privacy glass or simply want better front-seat comfort.'],
  ['Sides + rear glass', 'The normal starting point for a complete cabin treatment on sedans, coupes, trucks and SUVs.'],
  ['Windshield', 'Near-clear or lightly shaded film can improve solar control across the largest piece of glass in the vehicle without making the windshield look heavily tinted.'],
  ['Sunroof / panoramic roof', 'A large roof panel can put a surprising amount of radiant heat directly above the cabin. It deserves its own film decision.'],
  ['Existing film removal', 'Old film, adhesive, bubbling and rear-defroster lines all affect the amount of labor required before a clean new installation can begin.'],
];

const faq = [
  {
    q: 'Is darker tint always cooler?',
    a: 'No. Shade and heat rejection are different things. A lighter high-performance film can control more solar energy than a much darker entry-level film. Pick the shade for visibility, privacy and appearance; then compare performance within that shade.',
  },
  {
    q: 'What does VLT actually mean?',
    a: 'VLT is Visible Light Transmission: the percentage of visible light that passes through the glass-and-film combination. Lower numbers look darker. The important detail is that your factory glass already has a VLT, so the finished result is not simply the number printed on the film box.',
  },
  {
    q: 'My SUV already has dark rear glass. Why add film?',
    a: 'Factory privacy glass mainly changes how much visible light passes through. It does not automatically provide the same solar, infrared or UV performance as an aftermarket film. Sometimes the goal is to match the front. Sometimes it is to improve the rear. Sometimes it is both.',
  },
  {
    q: 'Can the windshield be tinted in Texas?',
    a: 'Texas limits colored sunscreening film on the windshield to the area above the AS-1 line, or the top five inches when there is no AS-1 line. Texas DPS also states that clear, untinted UV film is allowed anywhere on the front windshield. We treat windshield film as a separate decision because visibility and legality matter more there than anywhere else on the vehicle.',
  },
  {
    q: 'How long does a tint job take?',
    a: 'There is no useful one-size-fits-all answer. Vehicle size, number of windows, rear-glass shape, old-film removal, panoramic glass and windshield work all change the job. Your quote should include an expected shop time for your vehicle rather than a generic promise.',
  },
  {
    q: 'Why can fresh tint look slightly hazy?',
    a: 'Installation solution remains between the film and glass while the film cures. Temporary haze or small moisture patterns can be normal during that period. What is normal depends on the film, weather and glass area, so we explain the expected cure behavior at handoff.',
  },
  {
    q: 'What should I avoid after installation?',
    a: 'Do not roll down freshly tinted windows until the film has had enough time to set. Avoid scraping the interior surface and skip abrasive cleaners. We will give you the care instructions that match the film actually installed on your vehicle.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function WindowTintPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Services / Window Tint</p>
              <h1>Tint should make the cabin better, not just the glass darker.</h1>
              <p className={styles.heroLead}>
                Houston sun can turn a parked vehicle into an oven. The right film helps manage that heat without forcing you into glass that is darker than you actually want. We match the film, shade and coverage to the vehicle — and to how you drive it.
              </p>
              <div className={styles.heroActions}>
                <Link href="/start" className={styles.primaryButton}>Build my tint plan →</Link>
                <a href="#shade-lab" className={styles.secondaryButton}>See the shades</a>
              </div>
              <div className={styles.heroMeta} aria-label="Window tint priorities">
                <span>Heat</span><span>Glare</span><span>Visibility</span><span>Privacy</span><span>Appearance</span>
              </div>
            </div>
            <div id="shade-lab" className={styles.heroVisual}>
              <TintVisualizer />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.editorialSection}>
        <div className={styles.shell}>
          <div className={styles.sectionLeadGrid}>
            <div>
              <p className={styles.kicker}>Start with the problem</p>
              <h2>What are you trying to fix?</h2>
            </div>
            <p>
              Tint is not one product with five darkness settings. A truck that lives outside, a commuter staring into the afternoon sun and an SUV with factory privacy glass all start from different problems.
            </p>
          </div>

          <div className={styles.problemRows}>
            <article>
              <span>01</span>
              <div><h3>The seats are hot, the steering wheel is hot, and the A/C has work to do.</h3><p>Start with solar performance. A darker film may change how the vehicle looks, but a better-performing film is what changes how much heat comes through the glass.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Afternoon glare is brutal — but you still drive at night.</h3><p>Shade matters here, but so does restraint. We want enough tint to calm the glare without making an unlit road or dark parking lot harder to see.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>You want privacy, but you also want the vehicle to look factory-clean.</h3><p>We look at the original glass, the interior color and the front-to-rear shade balance so the finished vehicle looks intentional rather than patched together.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.shell}>
          <div className={styles.splitIntro}>
            <div>
              <p className={styles.eyebrow}>Shade is not performance</p>
              <h2>A darker number does not automatically mean a cooler cabin.</h2>
            </div>
            <div className={styles.measureList}>
              <div><strong>VLT</strong><p>How much visible light gets through. Lower percentage = darker appearance.</p></div>
              <div><strong>TSER</strong><p>Total Solar Energy Rejected. A broader look at how much solar energy the glass-and-film system keeps out.</p></div>
              <div><strong>IR</strong><p>Infrared performance helps describe the radiant heat you feel through the glass. Compare numbers carefully because test methods can differ between brands.</p></div>
              <div><strong>UV</strong><p>UV protection matters for occupants and interior materials. We use the published specification for the actual film instead of assuming every product performs the same.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Film construction</p>
            <h2>Pick the film first. Then pick how dark you want it.</h2>
            <p>The material doing the work matters more than the label on the shade chart. These are the four film families you are most likely to encounter.</p>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.comparisonTable}>
              <thead><tr><th>Film</th><th>Where it makes sense</th><th>Heat control</th><th>Construction</th><th>The practical difference</th></tr></thead>
              <tbody>
                {filmFamilies.map((film) => (
                  <tr key={film.name}>
                    <th scope="row">{film.name}</th>
                    <td>{film.fit}</td>
                    <td>{film.heat}</td>
                    <td>{film.signal}</td>
                    <td>{film.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.tableFootnote}>We will publish exact performance numbers only for film lines TTT actually installs. Shade-specific values and manufacturer test methods can differ.</p>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className={styles.shell}>
          <div className={styles.quoteGrid}>
            <div className={styles.quoteIntro}>
              <p className={styles.kicker}>A quote should be specific</p>
              <h2>You should know exactly which glass you are paying to tint.</h2>
              <p>“Full car” sounds simple until one shop includes the windshield, another does not, and neither mentions the panoramic roof or the old film that has to come off first. We would rather scope the glass properly and price the actual job.</p>
              <Link href="/start" className={styles.textLink}>Get a vehicle-specific tint quote →</Link>
            </div>
            <div className={styles.coverageList}>
              {coverage.map(([title, body], index) => (
                <div className={styles.coverageItem} key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.legalSection}>
        <div className={styles.shell}>
          <div className={styles.legalPanel}>
            <div className={styles.legalNumber}>25%</div>
            <div className={styles.legalCopy}>
              <p className={styles.eyebrow}>Texas passenger-vehicle tint</p>
              <h2>Texas measures the finished glass — not the number printed on the film.</h2>
              <p>
                The side windows immediately to the right and left of the driver must transmit at least 25% of visible light, with luminous reflectance of 25% or less. Rear side windows are exempt from the darkness restriction. Rear glass can also be unrestricted when the vehicle has qualifying outside mirrors on both sides.
              </p>
              <p>
                On the windshield, colored sunscreening film is limited to above the AS-1 line, or the top five inches when there is no AS-1 line. Texas DPS states that clear, untinted UV film is allowed anywhere on the front windshield.
              </p>
              <a className={styles.legalLink} href="https://www.dps.texas.gov/section/vehicle-inspection/window-tinting-standards" target="_blank" rel="noreferrer">Read the current Texas DPS standard ↗</a>
              <small>Tint rules can change, and factory glass affects the final VLT. We verify the current requirement when we quote the vehicle. This summary is not legal advice.</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>How TTT approaches tint</p>
            <h2>A clean result starts before the film ever touches the glass.</h2>
          </div>
          <div className={styles.processLine}>
            <div><span>01</span><h3>Inspect</h3><p>Check the factory glass, existing film, defroster lines, seals, sensors and the condition of every window in scope.</p></div>
            <div><span>02</span><h3>Select</h3><p>Choose the film and shade around heat, glare, privacy, nighttime visibility, appearance and current Texas requirements.</p></div>
            <div><span>03</span><h3>Prepare</h3><p>Get the glass and work area clean enough that dust, old adhesive and contamination do not become part of the finished job.</p></div>
            <div><span>04</span><h3>Install</h3><p>Fit and finish the film around the actual geometry of the glass, seals and edges rather than treating every vehicle like the same template.</p></div>
            <div><span>05</span><h3>Verify</h3><p>Inspect the finished work, explain cure behavior and care, and document what film and shade went on the vehicle.</p></div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <p className={styles.kicker}>Before you choose a shade</p>
              <h2>The questions that actually matter.</h2>
              <p>These are the details that tend to change the recommendation, the quote or the way you feel about the tint six months after it is installed.</p>
            </div>
            <div className={styles.faqList}>
              {faq.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.shell}>
          <div className={styles.finalCtaInner}>
            <div>
              <p className={styles.eyebrow}>The easy way to start</p>
              <h2>Tell us the vehicle. Tell us what bothers you. We’ll recommend the rest.</h2>
            </div>
            <Link href="/start" className={styles.lightButton}>Build my tint quote →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
