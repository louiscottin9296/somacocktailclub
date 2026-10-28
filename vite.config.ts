import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Carousel photos: add/remove photos in the "SOMA-carousel-photos" folder next to this
// project. They are copied into src/assets/carousel automatically whenever the preview
// starts (and live while it runs), so they get pushed to GitHub with the rest of the site.
// When that folder doesn't exist (e.g. on the hosting server), nothing happens.
const CAROUSEL_SOURCE = path.resolve(__dirname, "../SOMA-carousel-photos");
const CAROUSEL_TARGET = path.resolve(__dirname, "src/assets/carousel");
const IMAGE_RE = /\.(jpe?g|png|webp)$/i;

function syncCarousel() {
  if (!fs.existsSync(CAROUSEL_SOURCE)) return;
  fs.mkdirSync(CAROUSEL_TARGET, { recursive: true });
  const wanted = fs.readdirSync(CAROUSEL_SOURCE).filter((f) => IMAGE_RE.test(f));
  for (const file of fs.readdirSync(CAROUSEL_TARGET)) {
    if (IMAGE_RE.test(file) && !wanted.includes(file)) fs.unlinkSync(path.join(CAROUSEL_TARGET, file));
  }
  for (const file of wanted) {
    const src = path.join(CAROUSEL_SOURCE, file);
    const dest = path.join(CAROUSEL_TARGET, file);
    const s = fs.statSync(src);
    if (!fs.existsSync(dest) || fs.statSync(dest).size !== s.size || fs.statSync(dest).mtimeMs < s.mtimeMs) {
      fs.copyFileSync(src, dest);
    }
  }
}

function carouselSync(): Plugin {
  return {
    name: "soma-carousel-sync",
    buildStart() {
      syncCarousel();
    },
    configureServer() {
      syncCarousel();
      if (!fs.existsSync(CAROUSEL_SOURCE)) return;
      let timer: NodeJS.Timeout | undefined;
      fs.watch(CAROUSEL_SOURCE, () => {
        clearTimeout(timer);
        timer = setTimeout(syncCarousel, 500);
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [carouselSync(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
