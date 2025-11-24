# Blog Content Structure for SEO Preservation

## Recommended Folder Structure

```
/content
  /blog
    /post-1-slug.mdx
    /post-2-slug.mdx
    /post-3-slug.mdx
```

**OR** if you want to match your old Webflow URLs exactly:

```
/content
  /blog
    /2024
      /03
        /post-slug.mdx
    /2023
      /12
        /post-slug.mdx
```

## Important Notes for SEO Migration

1. **URL Structure**: Match your old Webflow URLs exactly
   - If old URLs were: `/blog/post-title`
   - Use: `app/(marketing)/blog/[slug]/page.tsx`
   - If old URLs were: `/blog/2024/03/post-title`
   - Use: `app/(marketing)/blog/[year]/[month]/[slug]/page.tsx`

2. **301 Redirects**: If URLs changed, set up redirects in `next.config.js`

3. **Metadata**: Each post should have:
   - Original title
   - Original description
   - Original publish date
   - Canonical URL (pointing to old URL if different)

4. **Sitemap**: Update `app/sitemap.ts` to include all blog posts

