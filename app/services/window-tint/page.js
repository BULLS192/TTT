import Link from 'next/link';
import TintVisualizer from './TintVisualizer';
import styles from './window-tint.module.css';

export const metadata = {
  title: 'Automotive Window Tint Houston',
  description: 'Automotive window tint in Houston with practical guidance on ceramic film, heat rejection, VLT, privacy, Texas tint rules, windshield film and vehicle-specific coverage.',
};

const filmFamilies = [
  {
    name: 'Dyed / color-stable',
    fit: 'Appearance and privacy at a lower entry point',
    heat: 'Basic to moderate',
    signal: 'Generally signal-safe',
    note: 'Darkness does more of the work. Performance varies widely by film line.',
  },
  {
    name: 'Carbon',
    fit: 'A darker, non-metallic look with better solar performance',
    heat: 'Moderate',
    signal: 'Signal-safe',
    note: 'A useful middle ground when appearance matters and maximum heat rejection is not the only goal.',
  },
  {
    name: 'Ceramic',
    fit: 'Daily drivers that need real Houston heat relief without going excessively dark',
    heat: 'High',
    signal: 'Signal-safe',
    note: 'Ceramic particles target infrared energy without relying on metal. Exact performance depends on the product and shade.',
  },
  {
    name: 'High-performance ceramic',
    fit: 'Windshields, large glass areas, EVs and owners prioritizing thermal comfort',
    heat: 'Highest potential',
    signal: 'Signal-safe',
    note: 'The useful upgrade is better solar performance at a shade you can still live with day and night.',
  },
];

const coverage = [
  ['Front two windows', 'Common for matching factory rear privacy glass or improving front-seat comfort.'],
  ['Sides + rear glass', 'The usual full-cabin package for sedans, coupes, trucks and SUVs.'],
  ['Windshield', 'Near-clear or light film can add meaningful heat and UV control without making the windshield look heavily tinted.'],
  ['Sunroof / panoramic roof', 'Large overhead glass can be a major source of radiant heat and may need a different film strategy than the side glass.'],
  ['Existing film removal', 'Old adhesive, failed film and rear defroster lines can materially change the labor required before new film goes on.'],
];

const faq = [
  {
    q: 'Is darker tint always cooler?',
    a: 'No. Shade and heat rejection are separate variables. A lighter high-performance ceramic film can reject more solar energy than a much darker entry-level film. Choose the shade for visibility and appearance, then compare the film performance at that shade.',
  },
  {
    q: 'What does VLT mean?',
    a: 'VLT means Visible Light Transmission: the percentage of visible light that passes through the glass and film together. Lower numbers look darker. A 20% film is darker than a 35% film.',
  },
  {
    q: 'My SUV already has dark rear glass. Do I still need film?',
    a: 'Factory privacy glass mainly changes visible light. It may not provide the same heat, infrared or UV performance as an aftermarket film. We look at the factory glass first, then decide whether matching appearance, adding thermal performance, or both makes sense.',
  },
  {
    q: 'Can you tint the windshield in Texas?',
    a: 'Texas limits colored sunscreening film on the windshield to the area above the AS-1 line, or the top five inches when there is no AS-1 line. Texas DPS also states that clear, untinted UV film is allowed anywhere on the front windshield. The final glass-and-film combination still has to comply with current law.',
  },
  {
    q: 'How long does installation take?',
    a: 'It depends on the vehicle, number and shape of the windows, film removal, rear glass complexity and whether the windshield or panoramic roof is included. A vehicle-specific quote should include an expected shop time instead of using one duration for every car.',
  },
  {
    q: 'Why can new tint look hazy or show small water pockets?',
    a: 'Installation solution remains between the film and glass while the film cures. Some temporary haze or small moisture patterns can be normal during that period. Cure time changes with film, weather and glass area; the installer should explain what is normal before vehicle handoff.',
  },
  {
    q: 'What should I avoid after tint is installed?',
    a: 'Do not roll down freshly tinted windows until the installer says the film has set sufficiently. Avoid scraping the inside surface or using abrasive cleaners. TTT will provide film-specific care guidance at handoff.',
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
              <h1>Houston heat changes the tint conversation.</h1>
              <p className={styles.heroLead}>
                Darkness is easy to see. Heat rejection, optical clarity and the way a film behaves at night are what you live with every day. TTT starts there, then works backward to the right shade and coverage for the vehicle.
              </p>
              <div className={styles.heroActions}>
                <Link href="/start" className={styles.primaryButton}>Build a tint plan →</Link>
                <a href="#shade-lab" className={styles.secondaryButton}>Compare shades</a>
              </div>
              <div className={styles.heroMeta} aria-label="Window tint priorities">
                <span>Heat</span><span>UV</span><span>Visibility</span><span>Privacy</span><span>Appearance</span>
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
              <p className={styles.kicker}>Start with the use case</p>
              <h2>What do you want the glass to do?</h2>
            </div>
            <p>
              A truck parked outside all day, a commuter with a long westbound drive, and an SUV with factory privacy glass do not need the same recommendation. The vehicle and the problem come before the film name.
            </p>
          </div>

          <div className={styles.problemRows}>
            <article>
              <span>01</span>
              <div><h3>The cabin is punishing after it sits in the sun.</h3><p>Prioritize total solar and infrared performance. Going darker is not the only way to reduce the heat you feel through the glass.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Glare is the problem, especially at certain times of day.</h3><p>Shade matters more here, but we still protect nighttime visibility. A film that looks good at noon can be tiring on an unlit road.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>You want privacy without making the vehicle feel closed in.</h3><p>We look at factory glass, interior color and the front-to-rear shade relationship so the finished vehicle looks deliberate instead of pieced together.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.shell}>
          <div className={styles.splitIntro}>
            <div>
              <p className={styles.eyebrow}>The part most people miss</p>
              <h2>VLT tells you how dark it looks. It does not tell you how well it handles heat.</h2>
            </div>
            <div className={styles.measureList}>
              <div><strong>VLT</strong><p>Visible Light Transmission. Lower percentage = darker glass.</p></div>
              <div><strong>TSER</strong><p>Total Solar Energy Rejected. A broader measure of how much solar energy the glass-and-film system rejects.</p></div>
              <div><strong>IR</strong><p>Infrared performance helps explain the radiant heat you feel on your skin. Measurement methods differ by manufacturer, so compare like with like.</p></div>
              <div><strong>UV</strong><p>Quality automotive films commonly publish very high UV rejection. We verify the actual film specification instead of treating every product as identical.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Film families</p>
            <h2>Four different ways to tint a window.</h2>
            <p>Brand matters, but construction matters first. This is the practical difference between the film categories customers see most often.</p>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.comparisonTable}>
              <thead><tr><th>Film</th><th>Best fit</th><th>Heat performance</th><th>Electronics</th><th>What to know</th></tr></thead>
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
          <p className={styles.tableFootnote}>TTT only publishes product-specific performance numbers after the actual film line is selected. Manufacturer test methods and shade-specific values can differ.</p>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className={styles.shell}>
          <div className={styles.quoteGrid}>
            <div className={styles.quoteIntro}>
              <p className={styles.kicker}>How we build the quote</p>
              <h2>Price should follow the glass, not a generic “full car” number.</h2>
              <p>The useful quote tells you exactly what glass is included, what film family is being installed, whether old film is coming off, and where the vehicle has unusually large or complex glass.</p>
              <Link href="/start" className={styles.textLink}>Request a vehicle-specific quote →</Link>
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
              <h2>Legal tint is measured through the glass and film together.</h2>
              <p>
                Texas requires the side windows immediately to the right and left of the driver to transmit at least 25% of visible light, with luminous reflectance of 25% or less. Rear side windows are exempt from the darkness restriction. Rear glass can also be unrestricted when the vehicle has qualifying outside mirrors on both sides.
              </p>
              <p>
                On the windshield, colored sunscreening film is limited to above the AS-1 line, or the top five inches when there is no AS-1 line. Texas DPS states that clear, untinted UV film is allowed anywhere on the front windshield.
              </p>
              <a className={styles.legalLink} href="https://www.dps.texas.gov/section/vehicle-inspection/window-tinting-standards" target="_blank" rel="noreferrer">Read the current Texas DPS standard ↗</a>
              <small>Rules can change. TTT verifies the current requirement when the vehicle is quoted; this page is a practical summary, not legal advice.</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>TTT tint process</p>
            <h2>Measure first. Install second.</h2>
          </div>
          <div className={styles.processLine}>
            <div><span>01</span><h3>Inspect</h3><p>Review factory glass, existing film, defroster lines, sensors, window condition and the areas being treated.</p></div>
            <div><span>02</span><h3>Select</h3><p>Choose film construction and shade around heat, visibility, privacy, appearance and the current Texas rules.</p></div>
            <div><span>03</span><h3>Prepare</h3><p>Clean the glass thoroughly and prepare the film and work area so contamination and edge quality are controlled.</p></div>
            <div><span>04</span><h3>Install</h3><p>Apply, position and finish the film with attention to edge alignment, seals, curves and the specific glass geometry.</p></div>
            <div><span>05</span><h3>Verify</h3><p>Inspect the finished glass, explain cure behavior and aftercare, and document the installed film and shade for future service.</p></div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <p className={styles.kicker}>Questions worth asking</p>
              <h2>Window tint FAQ</h2>
              <p>These are the points that usually change the recommendation, the quote, or the way the vehicle feels after the job is done.</p>
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
              <p className={styles.eyebrow}>Bring us the vehicle and the priority</p>
              <h2>We’ll help you pick the film, shade and coverage from there.</h2>
            </div>
            <Link href="/start" className={styles.lightButton}>Start a tint quote →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
