# Construction Budget Calculator

> A small web app that gives you a realistic first cost estimate for a
> construction or renovation project in Portugal, in a few seconds.

![screenshot](public/screenshot.png)

## The problem it solves

Anyone thinking about building a house, renovating an apartment or extending
a property runs into the same question right at the start:

> **"How much is this going to cost me?"**

Before talking to architects, engineers or builders — and before committing
to anything — people need a realistic number just to know if the project is
even feasible. The problem is that most online calculators either ask for way
too much information, or spit out a single flat value per m² that has almost
nothing to do with reality.

This app gives you that first number in a few seconds, and it tries to be
honest about what it is: **an early-stage estimate, with a margin of
uncertainty**. You pick the type of work, the area, the level of finishes and
the region, and the app returns:

- a total cost, with VAT, fees and licensing already included
- a probable range (−10% / +15%) instead of a single fake-precise number
- a breakdown of where the money is going (structure, finishes, services…)
- the effective cost per m² for your specific combination

It is not a replacement for a proper quotation from a professional. It is the
number you need *before* asking for one.

## Who it is for

- **Private owners** that are exploring a project and need a reality check
  before moving forward
- **Small developers** that want a quick sanity check on a plot or building
- **Real-estate agents** that need a rough renovation number for a listing

## Features

- Four types of work: new construction, light renovation, deep renovation
  and extension
- Four finish levels: economic, medium, high and premium
- Regional adjustment for 11 areas in Portugal (mainland, Madeira, Azores)
- Cost breakdown by work package (structure, envelope, finishes, services,
  exterior, miscellaneous)
- Fees, licensing and VAT included in the final number
- Area-based discount that reflects economy of scale on larger projects

## Tech stack

- **Next.js 14** with the App Router
- **React 18**
- **Tailwind CSS** for styling
- Plain **JavaScript** — no TypeScript, no heavy tooling
- Runs on a **Node.js** server

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build and run in production mode:

```bash
npm run build
npm start
```

## Project structure

```
app/
  api/estimate/route.js   POST endpoint that returns the estimate
  layout.js               root layout
  page.js                 main page (form + results)
  globals.css             Tailwind entry + base styles
components/
  CalculatorForm.js       the input form
  ResultCard.js           total, stats and breakdown
  Breakdown.js            per-package cost bars
lib/
  pricing.js              reference values (CYPE-based)
  calculator.js           all the math lives here
```

The pricing logic is deliberately isolated in `lib/`. That way the reference
values can be updated (or swapped for a different data source) without
touching any UI code.

## Notes on the numbers

The base values come from the CYPE reference tables and from market averages
observed in Portugal for 2025/2026. They already include:

- construction cost (labour + materials)
- typical project and site-management fees (≈ 8%)
- licensing and administrative costs (≈ 3%)
- VAT at 23%

Because every project is different — terrain, access, specific materials,
special works — the result is always presented as a range, not a single
number. Treat it as a reality check, not as a quotation.

## Roadmap

- [ ] Save estimates to local storage and compare scenarios side by side
- [ ] Export the result as a PDF one-pager
- [ ] Add a few pre-filled "real-world" scenarios (T2 in Lisbon, countryside
      house renovation, etc.)
- [ ] Multi-language support (English / Spanish)

## License

MIT
