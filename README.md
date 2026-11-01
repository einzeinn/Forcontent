# Forcontent: Anime × Real Science

A modular short-video production project built with Remotion, React, and TypeScript.

The workflow is designed for cloud development from a phone:
1. Build scenes and reusable components in GitHub.
2. Preview only when needed.
3. Validate the full composition.
4. Render the final MP4 after the episode is ready.

## Run in GitHub Codespaces

```bash
npm install
npm run dev
```

Open the forwarded port shown by Codespaces (usually port **3000**).

## Available compositions

- `AnimeScienceIntro`: original animated intro study.
- `Episode01`: modular 60-second episode template made from Opening, Explanation, and Closing scenes.

## Render

```bash
npm run build
```

The current build script renders `AnimeScienceIntro` to `out/anime-science-intro.mp4`.
For the modular episode template, run:

```bash
npx remotion render src/index.ts Episode01 out/episode-01.mp4
```

## Project structure

```text
src/
  components/
    Background.tsx
    Subtitle.tsx
    TextReveal.tsx
  scenes/
    Opening.tsx
    Explanation.tsx
    Closing.tsx
  compositions/
    AnimeScienceIntro.tsx
    Episode01.tsx
  Root.tsx
  index.ts
```

## Editing rules

- Keep reusable visual behavior in `components/`.
- Keep each narrative scene in its own file under `scenes/`.
- Assemble scenes and timing in `compositions/`.
- Keep scientific claims, sources, narration, and visual analogies grounded in episode research.
- Avoid heavy real-time effects in the preview. Final rendering happens after validation.

The current Episode01 scenes contain placeholder copy. They are structural scaffolding, not a finished scientific script.
