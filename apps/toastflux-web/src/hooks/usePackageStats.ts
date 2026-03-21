"use client";

import { useEffect, useState } from "react";

export interface PackageStats {
  version: string;
  stars: number;
  downloads: number;
  loading: boolean;
}

export function usePackageStats() {
  const [stats, setStats] = useState<PackageStats>({
    version: "1.0.1",
    stars: 0,
    downloads: 0,
    loading: true,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch from NPM
        const npmRes = await fetch("https://registry.npmjs.org/toastflux/latest");
        const npmData = await npmRes.json();
        
        // Fetch downloads
        const dlRes = await fetch("https://api.npmjs.org/downloads/point/last-month/toastflux");
        const dlData = await dlRes.json();

        // Fetch GitHub Stats (Public API - Rate limited, so we use fallback)
        const ghRes = await fetch("https://api.github.com/repos/Rahul-Bairwa/toastflux");
        let stars = 0;
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          stars = ghData.stargazers_count;
        }

        setStats({
          version: npmData.version || "1.0.0",
          stars: stars || stats.stars,
          downloads: dlData.downloads || stats.downloads,
          loading: false,
        });
      } catch (e) {
        console.error("Failed to fetch package stats:", e);
        setStats((s) => ({ ...s, loading: false }));
      }
    }

    fetchData();
  }, []);

  return stats;
}
