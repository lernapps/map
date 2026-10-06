# map

The map of lernapps.net: what learners should be able to do (capability nodes), which learning apps help with it, and where apps are missing. Served at <https://lernapps.github.io/map/>.

How lernapps.net is meant to work as a platform (roles, what they exchange, the MVP) is described in the [platform design](https://lernapps.github.io/docs/platform-design/); agents read it with the skill [`skills/pdt`](https://github.com/lernapps/docs/tree/main/skills/pdt) in lernapps/docs. The app overview the design asks for (one place to find apps by topic and grade) is planned here.

The map is the only place in lernapps that links to individual apps ([ORGANIZATION.md §3.3](https://github.com/lernapps/.github/blob/main/ORGANIZATION.md#rules-across-repos)).

## Contents

| Path | Purpose |
|---|---|
| `data/capabilities/` | Capability nodes: Markdown with YAML front matter |
| `data/entries/` | Registry entries for apps (today maintained by hand; the manifest protocol replaces them, see [lernapps/.github#10](https://github.com/lernapps/.github/issues/10)) |
| `schemas/` | Zod schemas; `schemas/generated/` holds the JSON Schemas, published at `/map/schemas/` |
| `scripts/validate-data.ts` | Validates all data files against the schemas |
| `src/` | The web app (Vue 3, hash routing) |
| `e2e/` | Playwright smoke tests against the live site |

## Develop

```bash
npm ci
npm run dev             # http://localhost:5173/map/
npm run validate-data   # data against schemas
npm run check-schemas   # generated JSON Schemas in sync
npm run typecheck && npm run lint
npm run build
```

Contributing capability nodes and entries: [CONTRIBUTING.md](CONTRIBUTING.md) (German).

## Status

Moved from `mrsimpson/edugo` on 2026-09-27 with its history. The web app is still the edugo Vue SPA, which needs JavaScript. Whether the map moves to a static, JS-free stack is open: [lernapps/.github#24](https://github.com/lernapps/.github/issues/24).

## License

[MIT](LICENSE), for the code and the texts in this repo. Contributions are made under the same license.
