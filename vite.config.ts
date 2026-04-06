import path from "path";
import { existsSync } from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

const auxiliaryWorkerConfigPath = path.resolve(__dirname, "./emails-service/wrangler.json");

export default defineConfig({
	  plugins: [
	    ...mochaPlugins(process.env as unknown as Parameters<typeof mochaPlugins>[0]),
	    react(),
	    !process.env.VERCEL &&
	      cloudflare(
	        existsSync(auxiliaryWorkerConfigPath)
	          ? { auxiliaryWorkers: [{ configPath: auxiliaryWorkerConfigPath }] }
	          : {},
	      ),
	  ].filter(Boolean),
	  server: {
	    allowedHosts: true,
	  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
