/**
 * content.js — single source of truth for the site.
 *
 * Everything the terminal renders (sections, status metrics, and the
 * "Ask Greg" knowledge base) lives here so copy can be edited in one
 * place. Nothing here requires anything beyond a rebuild + redeploy.
 */

export const identity = {
  name: 'GREG JONES',
  tagline: 'Building systems that compound.',
  pillars: ['Family Office', 'Venture Capital', 'Automation'],
  email: 'gregj@swsventurecap.com',
};

/** Order matters: this drives the command menu and tab order. */
export const commands = [
  { cmd: 'about',      label: '/about',      desc: 'Operator profile' },
  { cmd: 'automation', label: '/automation', desc: 'The dominant theme' },
  { cmd: 'capital',    label: '/capital',    desc: 'Capital as a system' },
  { cmd: 'principles', label: '/principles', desc: 'Operating principles' },
  { cmd: 'status',     label: '/status',     desc: 'Live system dashboard' },
  { cmd: 'contact',    label: '/contact',    desc: 'Selective access' },
  { cmd: 'ask',        label: '/ask',        desc: 'Query the operator' },
];

export const sections = {
  about: {
    title: 'ABOUT',
    body: [
      'Greg Jones operates at the intersection of capital allocation, automation, and long-horizon systems design.',
      'He leads SWS Venture Capital and manages single family office operations with a focus on leverage, compounding, and intelligent infrastructure.',
    ],
    meta: 'Operator. Allocator. Systems builder.',
  },

  automation: {
    title: 'AUTOMATION',
    body: [
      'Automation is not a feature of the operation. It is the operation.',
    ],
    lines: [
      'Manual work is technical debt.',
      'The best systems disappear.',
      'Leverage is built before it is needed.',
    ],
  },

  capital: {
    title: 'CAPITAL',
    body: [
      'Capital is not the asset. Judgment is.',
      'Systems exist to preserve, deploy, and compound both.',
    ],
  },

  principles: {
    title: 'OPERATING PRINCIPLES',
    items: [
      'Build leverage before scale.',
      'Automate the repeatable.',
      'Preserve optionality.',
      'Compound quietly.',
      'Measure what matters.',
      'Remove friction relentlessly.',
    ],
  },

  contact: {
    title: 'CONTACT',
    body: ['For exceptional founders, operators, and builders.'],
    email: 'gregj@swsventurecap.com',
  },
};

/**
 * STATUS METRICS
 * --------------
 * Phase 1: values are generated locally (deterministic baseline + gentle
 * live drift) so the dashboard feels alive without inventing absurd numbers.
 *
 * Phase 2: set `source` to an endpoint and the front-end will fetch it on
 * load, falling back to the simulated values if the request fails. The
 * expected response shape is documented in README.md (Connecting real data).
 */
export const status = {
  // Live: pulls the real dashboard.gregjones.io headline metrics from the
  // Supabase-backed public endpoint. Falls back to the `base` values below
  // if the request fails. Numbers match dashboard.gregjones.io 1:1.
  source: 'https://wsyfqadzlizhkauyfpbr.supabase.co/functions/v1/public-metrics',
  systemStatus: 'OPERATIONAL',
  metrics: [
    { key: 'active_automations',    label: 'Active automations',    base: 18,   drift: 0, format: 'int' },
    { key: 'active_agents',         label: 'Active agents',         base: 5,    drift: 0, format: 'int' },
    { key: 'executions_this_month', label: 'Executions this month', base: 41,   drift: 0, format: 'int' },
    { key: 'connected_systems',     label: 'Connected systems',     base: 23,   drift: 0, format: 'int' },
    { key: 'hours_saved_month',     label: 'Hours saved (30d)',     base: 10.1, drift: 0, format: 'dec' },
    { key: 'success_rate',          label: 'Success rate',          base: 100,  drift: 0, format: 'pct' },
  ],
};

/**
 * ASK GREG — curated knowledge base (Phase 1).
 * -------------------------------------------------------------------------
 * Constrained by design. A private interview system, not a chatbot.
 *   · No external model. No API. No keys. No tokens. No free-form generation.
 *   · Typed input is matched ONLY to the approved answers below.
 *   · Anything off-topic returns `fallback` verbatim.
 *
 * Each entry:
 *   q      — the canonical question (echoed when matched)
 *   match  — lowercase triggers. Multi-word triggers match as a phrase;
 *            single-word triggers match as a whole word (see terminal.js),
 *            so short keys like "ai" never fire inside "email".
 *   a      — the curated answer, in Greg's voice, as an array of lines.
 *
 * To add a topic: append an entry. To revise voice: edit `a`. Rebuild.
 */
export const askGreg = {
  intro: 'A private interview system. Curated responses, in Greg’s words.',
  suggestions: [
    'How do you evaluate founders?',
    'Why automation?',
    'What does leverage mean to you?',
    'How do you think about capital allocation?',
    'What do most operators miss?',
    'How do you think about AI?',
    'What kind of founders should reach out?',
    'What are you building?',
  ],
  qa: [
    {
      q: 'How do you evaluate founders?',
      match: ['evaluate founders', 'evaluate a founder', 'assess founders', 'founder', 'founders'],
      a: [
        'Rate of learning over résumé. The founders worth backing compound their own judgment faster than the market compounds capital.',
        'I look for taste in problems, intolerance for friction, and the discipline to build leverage before they need it. Charisma is noise. Velocity of good decisions is signal.',
      ],
    },
    {
      q: 'Why automation?',
      match: ['why automation', 'automation', 'automate', 'automated'],
      a: [
        'Because manual work is technical debt that compounds against you.',
        'Every repeatable task done by hand is leverage left uncollected. The best systems disappear — you stop noticing them, and the time they return does not come back.',
      ],
    },
    {
      q: 'What does leverage mean to you?',
      match: ['leverage'],
      a: [
        'Leverage is the gap between output and effort. Capital is one form. Code, systems, and reputation are stronger ones.',
        'It is built before it is needed. By the time the need is obvious, the cost to build it has already risen.',
      ],
    },
    {
      q: 'How do you think about capital allocation?',
      match: ['capital allocation', 'allocate capital', 'allocation', 'allocate', 'capital', 'deploy capital'],
      a: [
        'Capital is not the asset. Judgment is.',
        'Allocation is a sequence of reversible and irreversible decisions; the discipline is knowing which is which. The edge is not access — it is patience, and the willingness to do nothing until the asymmetry is real.',
      ],
    },
    {
      q: 'What does compounding mean to you?',
      match: ['compounding', 'compound', 'compounds', 'long term', 'long-term', 'horizon'],
      a: [
        'Compounding is what happens when you refuse to interrupt it.',
        'It rewards consistency and punishes ego. Most of the result arrives late — which is precisely why most people quit before it does. Compound quietly.',
      ],
    },
    {
      q: 'How do you think about family office operations?',
      match: ['family office', 'family-office', 'office operations', 'run the office', 'manage the family'],
      a: [
        'Like an operating system, not a ledger. Quiet, instrumented, and built to run without me in the loop.',
        'Preservation first, then compounding. The objective is not activity — it is a small number of correct decisions, protected from noise and executed without drama.',
      ],
    },
    {
      q: 'What are your operating principles?',
      match: ['operating principles', 'principles', 'principle', 'how do you operate', 'philosophy'],
      a: [
        'Six. Build leverage before scale. Automate the repeatable. Preserve optionality. Compound quietly. Measure what matters. Remove friction relentlessly.',
        'They are not slogans. They are filters — each one removes a class of bad decisions before it reaches the table.',
      ],
    },
    {
      q: 'What do most operators miss?',
      match: ['operators miss', 'most operators', 'what do operators', 'operators get wrong', 'miss', 'overlook'],
      a: [
        'They optimize the visible and ignore the structural. Friction is treated as a cost of doing business rather than a defect to be removed.',
        'And they scale before they have leverage, so they scale their problems. Quiet compounding beats loud growth almost every time.',
      ],
    },
    {
      q: 'Why do systems matter?',
      match: ['why systems', 'systems matter', 'why do systems', 'systems design', 'why build systems', 'systems'],
      a: [
        'Because willpower does not scale and memory is not a strategy.',
        'A system is a decision made once and enforced forever. It turns judgment into infrastructure — so the standard holds whether or not anyone is watching.',
      ],
    },
    {
      q: 'How do you think about AI?',
      match: ['ai', 'a.i', 'artificial intelligence', 'about ai', 'use ai', 'llm', 'llms', 'models', 'machine learning'],
      a: [
        'As leverage, not magic. It is the most powerful automation layer ever built, and it rewards those who already think in systems.',
        'The advantage will not go to those who talk about it. It goes to those who quietly wire it into how decisions get made — and keep judgment in the loop where it matters.',
      ],
    },
    {
      q: 'What kind of founders should reach out?',
      match: ['reach out', 'should i reach', 'contact you', 'work with you', 'who should reach', 'pitch you', 'get in touch'],
      a: [
        'Exceptional ones. Operators who build leverage, remove friction, and let their work speak before they do.',
        'If you are early, technical, and obsessed with systems that compound, the door is open. If you are looking for noise or validation, it is not. gregj@swsventurecap.com.',
      ],
    },
    {
      q: 'What are you building?',
      match: ['what are you building', 'building', 'working on', 'what do you build', 'what are you working'],
      a: [
        'Infrastructure for compounding — across a single family office and SWS Venture Capital.',
        'Systems that preserve optionality, remove friction, and let judgment scale without headcount. The goal is an operation that runs quietly and improves on its own cadence.',
      ],
    },
  ],
  // Returned verbatim for anything outside the approved scope.
  fallback: [
    'I can only answer questions related to Greg’s operating principles, automation, capital allocation, and systems design.',
  ],
};
