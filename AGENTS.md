# AGENTS.md — aaronrss.github.io

> Generado por **agent-bootstraps** perfil `dev-service` (v0.1.0).  
> Hub multi-runtime: Grok · Claude · Codex · Deepcode · AGY · Kimi · …

## Rol

Landing pública **Astro** (`aaronrss.github.io`): portfolio, blog (MDX) y contacto. UI intencional, contenido y SEO/RSS/sitemap; build verde (`astro build`). Repo **público** (GitHub Pages) — no forzar private.

## Entrada de sesión

1. Leer este archivo y `CLAUDE.md` si existe.
2. Detectar stack (package.json, pyproject, go.mod, build.gradle, …) y comandos de test/lint del README.
3. No inventar convenciones: si no están documentadas, proponer y preguntar.
4. Skills de **misión** (si hay): `.agents/skills/`. Oficio global: `~/.agents/skills/`.

## Sets activos

- **`base`**: Higiene mínima multi-runtime: diagnosticar, verificar, handoff. No es full-stack.
  - Skills globales esperadas: `diagnosing-bugs`, `check-work`, `handoff`
- **`eng-quality`**: Calidad de ingeniería: TDD y review.
  - Skills globales esperadas: `tdd`, `code-review`
- **`frontend`**: UI web: diseño, shadcn, React/Next performance, a11y guidelines.
  - Skills globales esperadas: `frontend-design`, `shadcn`, `vercel-react-best-practices`, `vercel-composition-patterns`, `web-design-guidelines`

## Ruteo tarea → skill (oficio)

| Tarea | Skill global esperada |
|-------|------------------------|
| Algo roto / regresión | `diagnosing-bugs` |
| Feature con comportamiento | `tdd` |
| Revisar diff/PR | `code-review` |
| Verificar antes de cerrar | `check-work` |
| Cerrar / cambiar de agente | `handoff` |
| Skill adicional del set | `frontend-design` |
| Skill adicional del set | `shadcn` |
| Skill adicional del set | `vercel-react-best-practices` |
| Skill adicional del set | `vercel-composition-patterns` |
| Skill adicional del set | `web-design-guidelines` |

## Reglas

- Español en comunicación con el usuario; código/commits en el idioma del repo.
- Sin secretos en Git ni transcripts (tokens, ~/.config/gandalf/*, API keys).
- Al abrir sesión: leer AGENTS.md más cercano; no explorar a ciegas.
- Si algo falla: skill diagnosing-bugs. Antes de dar por hecho: check-work si aplica.
- Al cerrar tema multi-sesión o cambiar de agente: handoff.
- Skills de oficio viven en ~/.agents/skills (globales); skills de misión solo en .agents/skills del repo.
- Cambios de comportamiento: preferir test primero (tdd) cuando el stack lo permita.
- Antes de merge o cierre de feature: code-review ambicioso (simplificar, no solo lint).
- No inventar umbrales de calidad: usar los del repo (CI, fitness, AGENTS).
- UI nueva: frontend-design (intencional, no plantilla genérica).
- Stack shadcn: skill shadcn antes de inventar componentes.
- React/Next: vercel-react-best-practices y composition-patterns cuando toque refactor/perf.
- Antes de entregar UI: web-design-guidelines (a11y/UX checklist).

## Anti-usos

- No mezclar con vault/gobierno Gandalf salvo que la tarea sea de sistema.
- No copiar skills de cliente a catálogo global.
- No commitear secretos ni `.env` con credenciales.

## Runtime notes

- Skills de repo: **`.agents/skills/<name>/SKILL.md`** (hub interoperable).
- Claude: ver `.claude/skills/` (symlinks al hub si se aplicó adapter).
- Matriz validada: `system/agents-bootstrap/docs/runtime-matrix.md` en el host.
