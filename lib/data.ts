// This module imports the JSON and exports strongly-typed data for use across the app.
import rawData from "@/data/data.json";
import type { SiteData } from "@/types/types";

const data = rawData as SiteData;

export default data;
