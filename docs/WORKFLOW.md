# DreamNova — Team Workflow
# ===========================

## THE THREE STATIONS

```
┌─────────────────────────────────────────────────────────┐
│  STATION 1: CLOUD CORE WORK (Claude.ai / Cowork)       │
│  🧠 THE BRAIN — Strategy & Architecture                │
│                                                         │
│  Role: Think, plan, generate config files               │
│  Creates: .cursorrules, CLAUDE.md, prompts, specs       │
│  Analyzes: client needs, design benchmarks              │
│  Generates: system prompts, docs, briefs                │
│  Output: files ready on Desktop folder                  │
│                                                         │
│         ↓ files deposited on Desktop ↓                  │
│                                                         │
│  STATION 2: CLAUDE CODE (Terminal Mac)                  │
│  🤖 THE HANDS — Execution & Build                      │
│                                                         │
│  Role: Read config files, execute builds                │
│  Executes: npm, git, deploy, scripts                    │
│  Creates: Next.js project, components, API routes       │
│  Tests: lint, build, lighthouse                         │
│  Interacts: filesystem, GitHub, Supabase, Vercel        │
│  Output: functional project, deployed                   │
│                                                         │
│         ↓ project opened in Cursor ↓                    │
│                                                         │
│  STATION 3: CURSOR (IDE + AI)                           │
│  🎼 THE ORCHESTRA — Polish & Inject                    │
│                                                         │
│  Role: Fine-tune, inject design, polish                 │
│  Opens: project created by Claude Code                  │
│  Injects: Stitch design exports                         │
│  Fine-tunes: CSS, animations, micro-interactions        │
│  Learns: Alexei practices here                          │
│  Output: pixel-perfect final product                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## DAILY FLOW

### Morning (08:00 - 12:00) — Deep Work
1. David reviews overnight agent outputs
2. Cloud Core Work session: plan the day's builds
3. Claude Code executes the builds
4. Alexei creates social content in parallel

### Afternoon (13:00 - 18:00) — Comms & Polish
1. Alexei does client outreach (streets + WhatsApp)
2. Cursor fine-tuning sessions
3. Design review with Stitch exports
4. David handles client calls and strategy

## FILE HANDOFF PROTOCOL
1. Cloud Core Work creates files in `Dream Nova David Alexei/` folder
2. Claude Code reads from this folder and builds
3. Cursor opens the built project for polish
4. Stitch exports go to `src/assets/` for injection

## NAMING CONVENTIONS
- Config files: UPPERCASE (CLAUDE.md, SPEC.md)
- Components: PascalCase (HeroSection.tsx)
- Utilities: camelCase (formatPrice.ts)
- Assets: kebab-case (hero-background.webp)

## GIT WORKFLOW
```bash
main          # Production (auto-deploy to Vercel)
├── dev       # Development integration
├── feature/* # Feature branches
└── hotfix/*  # Emergency fixes
```

## COMMUNICATION
- David ↔ Claude: French/English
- Alexei ↔ Claude: Hebrew
- Code: English (variables, comments, commits)
- Client-facing: Hebrew/English/French (i18n)
