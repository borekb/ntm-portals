# next-transpile-modules with `portal:`

Demo of [next-transpile-modules](https://github.com/martpie/next-transpile-modules) together with Yarn 2's `portal:` protocol.

## Usage

First, initialize the `lib`:

```
cd lib
yarn
```

Then, run the app:

```
cd ../app
yarn
yarn dev
```

Verify that everything is fine by visiting `localhost:3000`.

<img width="711" alt="Screenshot" src="https://user-images.githubusercontent.com/101152/112028659-b2da1c00-8b38-11eb-99c8-0cddda7e8afd.png">

## What this shows

The `portal:` protocol sets up symlinks like this:

```
.
├── app/
│   ├── node_modules/
│   │   ├── @example/lib -> ../../../lib (symlink)
│   │   ├── react
│   │   ├── next
│   │   └── ...
│   └── pages/
│       └── index.jsx
└── lib /
    ├── node_modules/
    │   └── lodash.snakecase
    └── needs-transpilation.ts
```

The [`lib/needs-transpilation.ts`](lib/needs-transpilation.ts) needs next-transpile-modules to work, which has its configuration in [`app/next.config.js`](app/next.config.js).

`needs-transpilation.ts` furthermore depends on `lodash.snakecase` and this dependency will be installed under lib, not app, which is another place where it could go wrong.

However, as of Next.js 10.0.9 and next-transpile-modules 6.3.0, everything works correctly. 🎉
