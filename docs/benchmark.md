# Benchmark: language learning and online-course websites

Research date: 24 July 2026. This benchmark reviews current public experiences and identifies reusable product patterns—not brand assets, copy, or protected design elements.

## Platforms reviewed

| Platform | Hero and structure | Calls to action | Trust and course presentation | Student area and mobile patterns |
| --- | --- | --- | --- | --- |
| [Duolingo](https://www.duolingo.com/learn) | Immediate, universal promise; product starts quickly and a learning path makes progress visible. The experience emphasizes short, repeatable actions. | High-contrast “get started” path with very little decision overhead. | Research-backed methodology, recognizable progress mechanics, streaks, and friendly feedback create confidence. | The learning path is the product; large tap targets, one dominant action, and strong state changes suit mobile use. |
| [Babbel](https://www.babbel.com/about-us?locale=en) | Positions language as a route to real-world connection, then expands into app lessons, podcasts, games, and conversation practice. | Outcome-led onboarding invites learners to choose a goal and commitment. | Scale metrics, linguistic expertise, research references, and a “personal coach” framing balance authority with warmth. | Guided, self-paced lessons live in one clear hub; short formats and visible next steps reduce effort on small screens. |
| [Busuu](https://www.busuu.com/en-US) | “Real life” leads the message, followed by a course selector, quantified scale, differentiators, community proof, and testimonials. | Free-start CTA is repeated near major decision points. | Trustpilot, learner counts, CEFR framing, community interactions, and real-speaker feedback are layered progressively. | Progress, review, and community feedback are separated into easy-to-scan modules with compact mobile cards. |
| [Lingoda](https://www.lingoda.com/en/) | Leads with certified teachers and structured live learning, then uses tabs to explain classroom, curriculum, teachers, and practice. | Free-trial framing reduces the risk of a teacher-led product. | Certified teachers, CEFR alignment, class ratings, and concrete class-volume metrics make a premium offer credible. | Booking, class access, practice, and reports are treated as distinct jobs; clear labels and short sections aid mobile scanning. |
| [Preply](https://preply.com/) | Human tutor choice is the product: search and matching are introduced immediately, with personalization as the main benefit. | Tutor discovery starts before a long explanation, creating useful momentum. | Tutor profiles, qualifications, ratings, pricing, availability, and learner reviews answer risk questions close to selection. | Filtered discovery and profile cards prioritize the information needed to choose and schedule from a phone. |
| [Memrise](https://www.memrise.com/) | Immersion and native-speaker video distinguish the offer; product demonstration is more persuasive than abstract claims. | A quick start is paired with a clear view of what practice feels like. | Real-speaker content and concrete practice modes support authenticity. | Video-led cards, short exercises, and a focused next action translate naturally to mobile. |

## Cross-platform findings

### Hero messaging

- The strongest heroes promise an applied outcome: speak in real situations, connect, or build confidence.
- One primary action consistently outperforms presenting a large catalog first.
- A visible product moment—lesson path, tutor card, conversation, or classroom—makes an intangible learning service concrete.

### Page structure and conversion

- Effective sequences move from promise → benefits → method → offer → human or social proof → final CTA.
- Repeating the same primary CTA after key sections is clearer than inventing multiple competing actions.
- Three-step explanations are common because they lower perceived complexity.

### Trust building

- Mature products use real scale, ratings, research, teacher credentials, and authentic student stories.
- A new platform should not imitate mature scale. Founder credibility, transparent sample labels, specific methodology, and clear expectations are more honest early-stage trust signals.
- Evidence belongs near the claim or decision it supports.

### Course presentation

- Level, format, time commitment, and practical outcome are the fastest way to make an offer understandable.
- Cards work well for comparison, but each should lead with a distinct learner need rather than merely a level number.
- CEFR terminology is useful when paired with plain-language ability statements.

### Student-area positioning

- The best dashboards answer “what should I do next?” before showing a full library.
- Progress, next lesson, upcoming live activity, materials, and teacher messages are strong first-version modules.
- Community and teacher contact are differentiators for a human-led platform.

### Mobile experience

- Sticky access to the primary action, large touch targets, short cards, and a one-column content flow are standard.
- Decorative visuals should simplify or disappear on small screens while the main message and next action stay above the fold.
- Menus need explicit expanded state, keyboard operation, and visible focus.

## Decisions for Habla Go

1. **Positioning:** Lead with “Speak Spanish. Open your world.” and support it with explicit relevance to students in Brazil and the United States.
2. **Identity:** Use confident blue and energetic pink with cream, ink, yellow, and soft periwinkle neutrals. A conversation card and Colombian sun motif make the hero ownable without stock imagery.
3. **Human differentiation:** Put Natalia and José at the center of the method. Until official photography exists, use clearly identified editorial placeholders rather than generated “real” portraits.
4. **Conversion path:** Use one waitlist/start CTA throughout, plus a secondary method anchor. The current mail link is an intentional prototype placeholder.
5. **Course clarity:** Show sample courses with CEFR level, format, duration, and ability-based outcomes. Every sample is explicitly labelled.
6. **Ethical proof:** Do not fabricate reviews. Testimonial cards explain exactly that they are placeholders for future verified stories.
7. **Member prototype:** Prioritize current progress and the next lesson, then expose recordings, downloads, activities, and announcements as modular mock-data cards.
8. **Internationalization:** Keep one typed content dictionary with Spanish as the default and natural Brazilian Portuguese and US English variants. Persist the chosen language across routes.
9. **Responsive behavior:** Reduce hero decoration on phones, stack comparison cards, expose a keyboard-accessible mobile menu, and maintain minimum 42–52px primary controls.
10. **Motion and accessibility:** Use restrained float, waveform, marquee, and hover motion; disable it via `prefers-reduced-motion`; preserve semantic headings and visible focus styles.

## Sources

- [Duolingo learning experience](https://www.duolingo.com/learn)
- [Duolingo method](https://www.duolingo.com/efficacy)
- [Babbel product and company overview](https://www.babbel.com/about-us?locale=en)
- [Busuu homepage](https://www.busuu.com/en-US)
- [Busuu methodology overview](https://www.busuu.com/en/about)
- [Lingoda online language classes](https://www.lingoda.com/en/)
- [Preply tutor marketplace](https://preply.com/)
- [Memrise language learning](https://www.memrise.com/)
