import { readFileSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const lowerHtml = html.toLowerCase();
const robots = readFileSync("dist/robots.txt", "utf8");
const sitemap = readFileSync("dist/sitemap.xml", "utf8");

const failures = [];
const assert = (condition, message) => {
  if (!condition) {
    failures.push(message);
  }
};

const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

assert(
  html.includes('<html lang="ru"'),
  'Expected Russian language marker: <html lang="ru"',
);
assert(
  html.includes('<link rel="canonical" href="https://makhanovstanislav.ru/">'),
  "Expected custom-domain homepage canonical",
);
assert(
  html.includes('"@type":["Physician","Dentist","MedicalBusiness"]'),
  "Expected Physician/Dentist/MedicalBusiness JSON-LD",
);
assert(
  html.includes('href="#about"') &&
    html.includes('href="#experience"') &&
    html.includes('href="#at-work"') &&
    html.includes('href="#contacts"'),
  "Expected original one-page navigation anchors to remain",
);
assert(
  !html.includes('id="services"') && !html.includes('id="process"') && !html.includes('id="faq"'),
  "Expected no added services/process/FAQ sections",
);
assert(
  html.includes("Связаться с доктором"),
  "Expected original contacts heading to remain",
);
assert(
  lowerHtml.includes("119048") && lowerHtml.includes("ул. усачева, 29, корп. 1"),
  "Expected Moscow address to be visible",
);
assert(
  robots.includes("Sitemap: https://makhanovstanislav.ru/sitemap.xml"),
  "Expected robots.txt to reference the custom-domain sitemap",
);
assert(sitemapUrls.length === 1, `Expected one sitemap URL, found ${sitemapUrls.length}`);
assert(
  sitemapUrls[0] === "https://makhanovstanislav.ru/",
  `Expected homepage sitemap URL, found ${sitemapUrls[0] ?? "none"}`,
);

if (failures.length > 0) {
  console.error("SEO checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("SEO checks passed.");
