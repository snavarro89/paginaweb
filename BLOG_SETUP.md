# Blog Setup Guide - Preserving SEO from Webflow

## Recommended Folder Structure

For maximum SEO preservation, put your MDX files here:

```
/content
  /blog
    /post-slug-1.mdx
    /post-slug-2.mdx
    /post-slug-3.mdx
```

**OR** if your Webflow URLs had date structure (`/blog/2024/03/post-title`):

```
/content
  /blog
    /2024
      /03
        /post-title.mdx
```

## Why This Structure?

1. **Separate from app code**: Keeps content separate from application logic
2. **Easy to manage**: All blog content in one place
3. **Version control friendly**: Easy to track changes
4. **SEO preservation**: Match your old Webflow URLs exactly

## Next Steps

1. Install MDX dependencies (see below)
2. Create dynamic route: `app/(marketing)/blog/[slug]/page.tsx`
3. Match your old Webflow URL structure exactly
4. Set up 301 redirects if URLs changed (in `next.config.js`)
5. Update sitemap to include all blog posts

## URL Matching Strategy

**If your old Webflow URLs were:**
- `/blog/post-title` → Use `app/(marketing)/blog/[slug]/page.tsx`
- `/blog/2024/03/post-title` → Use `app/(marketing)/blog/[year]/[month]/[slug]/page.tsx`
- `/blog/category/post-title` → Use `app/(marketing)/blog/[category]/[slug]/page.tsx`

**Critical**: Match the exact URL structure to preserve SEO rankings!

