"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import type { Job } from "@/lib/jobs/jobs-data";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

type JobsMapProps = {
  jobs: Job[];
  selectedJob: Job | null;
  setSelectedJob: (job: Job) => void;
};

export function JobsMap({
  jobs,
  selectedJob,
  setSelectedJob,
}: JobsMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-98.5795, 39.8283],
      zoom: 3.2,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("load", () => {
      // Blue overlay layer
      map.addSource("blue-overlay", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-180, -85],
              [180, -85],
              [180, 85],
              [-180, 85],
              [-180, -85],
            ]],
          },
          properties: {},
        },
      });

      map.addLayer({
        id: "blue-overlay-fill",
        type: "fill",
        source: "blue-overlay",
        paint: {
          "fill-color": "#2563eb",
          "fill-opacity": 0.18,
        },
      });
    });

    mapRef.current = map;

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    const validJobs = jobs.filter(
      (job) =>
        Number.isFinite(Number(job.lng)) && Number.isFinite(Number(job.lat))
    );

    validJobs.forEach((job) => {
      const el = document.createElement("div");
      el.className = "job-marker";
      el.style.width = "16px";
      el.style.height = "16px";
      el.style.borderRadius = "9999px";
      el.style.background = "#60a5fa";
      el.style.border = "2px solid white";
      el.style.boxShadow = "0 0 12px rgba(96,165,250,0.85)";
      el.style.cursor = "pointer";

      const popup = new mapboxgl.Popup({ offset: 18 }).setHTML(`
        <div style="font-family: Arial, sans-serif; font-size: 12px; line-height: 1.4; color: #0f172a; min-width: 160px;">
          <div style="font-weight: 700; margin-bottom: 4px;">${job.type}</div>
          <div>${job.city}, ${job.state}</div>
          <div>Status: ${job.status}</div>
          <div>Revenue: $${job.revenue.toLocaleString()}</div>
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([job.lng, job.lat])
        .setPopup(popup)
        .addTo(mapRef.current!);

      el.addEventListener("click", () => {
        setSelectedJob(job);
      });

      markersRef.current.push(marker);
    });

    if (validJobs.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      validJobs.forEach((job) => bounds.extend([job.lng, job.lat]));
      mapRef.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 8,
      });
    }
  }, [jobs, setSelectedJob]);

  useEffect(() => {
    if (!mapRef.current || !selectedJob) return;

    if (
      !Number.isFinite(Number(selectedJob.lng)) ||
      !Number.isFinite(Number(selectedJob.lat))
    ) {
      return;
    }

    mapRef.current.flyTo({
      center: [selectedJob.lng, selectedJob.lat],
      zoom: 8.5,
      essential: true,
    });
  }, [selectedJob]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-slate-800">
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  );
}