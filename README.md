# The Shadow Pack

![Pack icon](./textures/pack.png)

A texture/resource pack for any version of Minecraft that I use

## Changes to vanilla

- every GUI interface is black with 1 pixel white borders

## Setup

install dependencies:

```sh
npm install # or pnpm install, yarn [install]
```

and build:

```sh
npm run build # or pnpm build, yarn build
```

This will create packs for Minecraft:

- `pre-1.6` (aka Texture Pack)

These packs will be located in the `out` directory

## Utilities

for some scripts you need to create a `.env` in the repository:

```env
PRE16_INSTANCES=<texturepacks-path-1>:<texturepacks-path-2>:<texturepacks-path-n>
```

- `publish`/`publish.ps1`: build & create zip files for each version
- `copy`/`copy.ps1`: copy the output to the respective version's texture path provided in `.env`
