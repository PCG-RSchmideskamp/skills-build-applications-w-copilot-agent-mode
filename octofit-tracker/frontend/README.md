# OctoFit Tracker Frontend

## Environment configuration

`VITE_CODESPACE_NAME` must be defined so the app can reach the API at
`https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/`.
Define it in `octofit-tracker/frontend/.env.local` (see `.env.example`):

```bash
echo "VITE_CODESPACE_NAME=$CODESPACE_NAME" > octofit-tracker/frontend/.env.local
```

Restart the Vite dev server after changing it. If the variable is unset, the app falls back to
`http://localhost:8000/api/[component]/`.

API responses may be plain arrays, paginated (`{ results: [...] }`), or wrapped (`{ data: [...] }`).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
