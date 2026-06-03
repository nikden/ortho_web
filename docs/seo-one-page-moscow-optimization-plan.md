# One-Page SEO Optimization Plan for Moscow

## Goal

Improve crawl/index basics and local Moscow signals for the existing one-page Astro site without changing the visible page structure or rewriting existing copy.

## Implementation Checklist

- [x] Keep the original one-page route structure with only `/`.
- [x] Keep the original visible section order: about, experience, photos, contacts, footer.
- [x] Keep the original navigation anchors: `#about`, `#experience`, `#at-work`, `#contacts`.
- [x] Keep existing visible text unchanged, except address details added to contacts and footer.
- [x] Change the canonical custom domain to `https://makhanovstanislav.ru/`.
- [x] Update Astro `site` config for `https://makhanovstanislav.ru`.
- [x] Update Open Graph image URL to the custom domain.
- [x] Update `robots.txt` to reference `https://makhanovstanislav.ru/sitemap.xml`.
- [x] Update `sitemap.xml` to contain only `https://makhanovstanislav.ru/`.
- [x] Add visible Moscow address details to the contacts section.
- [x] Add visible Moscow address details to the footer.
- [x] Keep local business JSON-LD for the one-page site.
- [x] Add an automated generated-output check with `npm run check:seo`.
- [ ] Verify the custom domain in Yandex Webmaster.
- [ ] Set site region to Moscow in Yandex Webmaster.
- [ ] Submit the sitemap in Yandex Webmaster.
- [ ] Verify the custom domain in Google Search Console.
- [ ] Submit the sitemap in Google Search Console.
- [ ] Align Yandex Business and Google Business Profile data with the same name, phone, address, hours, and website.
- [ ] Validate structured data with Google and Yandex validation tools after deployment.

## Deliberately Not Implemented

- [ ] New service sections: omitted because the current requirement is to keep the original site structure.
- [ ] New process section: omitted because the current requirement is to keep the original site structure.
- [ ] New FAQ section and FAQ schema: omitted because no visible FAQ section remains.
- [ ] Visible copy rewrite: omitted because the current requirement is to keep texts unchanged.
- [ ] Privacy page or new legal route: omitted because the current requirement is to keep the one-page structure.

## Verification

Run these commands after changes:

```bash
npm run build
npm run check:seo
```

Expected result: build completes, and the SEO check confirms the custom domain, sitemap/robots, original anchors, absence of newly added sections, local business schema, and visible Moscow address.
