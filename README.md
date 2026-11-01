# Anime Science Motion

Anime-inspired science storytelling videos built with Remotion, React, and TypeScript.

## Run in GitHub Codespaces

```bash
npm install
npm run dev
```

When Remotion Studio starts, open the forwarded port shown by Codespaces (usually port **3000**).

## Render an MP4

```bash
npm run build
```

The output is written to `out/anime-science-intro.mp4`.

## Project structure

```text
public/
  images/
  audio/
  fonts/
src/
  compositions/
    AnimeScienceIntro.tsx
  components/
  scenes/
  Root.tsx
  index.ts
```

The starter composition is a 1080x1920 vertical video at 30 FPS, with a 60-second timeline. Replace the placeholder intro with researched scenes, original visuals, narration, and sound design as the first episode is developed.
