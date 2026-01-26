# LadyWax - Deployment Guide

## Quick Start

The LadyWax website is built with Next.js and can be deployed to various platforms. This guide covers the recommended deployment options.

---

## Recommended: Vercel (Easiest & Free)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial LadyWax website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your `ladywax` repository
   - Vercel will auto-detect Next.js settings

3. **Configure (if needed)**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - No environment variables needed yet

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at `ladywax.vercel.app`

5. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `www.ladywax.nl` and `ladywax.nl`
   - Update DNS records as instructed
   - SSL certificate is automatic

### Auto-Deployment

Every push to `main` branch will automatically deploy to production!

---

## Alternative: Netlify

### Steps:

1. **Build Setup**

   ```bash
   # Netlify requires explicit config
   ```

2. **Create `netlify.toml`**

   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Connect GitHub repo to Netlify
   - Configure build settings
   - Deploy

---

## Production Checklist

Before going live, ensure:

### Performance

- [ ] Images optimized (WebP format, proper sizes)
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Test on slow 3G connection

### SEO

- [ ] Meta descriptions set
- [ ] Open Graph images configured
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Google Analytics added (if needed)

### Content

- [ ] All placeholder text replaced
- [ ] Contact information verified
- [ ] Phone numbers tested
- [ ] Email addresses tested
- [ ] Social media links added

### Legal

- [ ] Privacy policy page created
- [ ] Terms & conditions page created
- [ ] Cookie consent banner (if needed)
- [ ] GDPR compliance checked

### Testing

- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Tested on iOS Safari
- [ ] Tested on Android Chrome
- [ ] Booking widget works for both locations
- [ ] All links work
- [ ] Mobile menu works
- [ ] Forms submit correctly (if applicable)

### Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] All images have alt text
- [ ] Focus indicators visible

---

## Environment Variables

Currently, the site doesn't require environment variables. If you add analytics or other services later:

### Vercel

```bash
# Add in Project Settings → Environment Variables
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Local Development

Create `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## Custom Domain Setup

### 1. Purchase Domain

- Register `ladywax.nl` if not already owned
- Most registrars work (Hostnet, TransIP, etc.)

### 2. Configure DNS

For Vercel:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

For Netlify:

```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site.netlify.app
```

### 3. SSL Certificate

- Both Vercel and Netlify provide automatic SSL
- Certificate will be issued within minutes
- Force HTTPS is enabled by default

---

## Performance Optimization

### Already Implemented

✅ Next.js Image optimization
✅ Code splitting
✅ Tree shaking
✅ Minification
✅ Gzip compression

### Future Improvements

- [ ] Add CDN for images (Cloudinary, ImageKit)
- [ ] Implement service worker for offline support
- [ ] Add preloading for critical resources
- [ ] Optimize font loading strategy

---

## Monitoring

### Recommended Tools

**Vercel Analytics** (Free)

- Real-time visitor data
- Web Vitals tracking
- Built into Vercel dashboard

**Google Analytics** (Free)

- Detailed user behavior
- Conversion tracking
- Custom events

**Sentry** (Error Tracking)

- Production error monitoring
- User session replay
- Performance monitoring

---

## Maintenance

### Regular Tasks

**Weekly**

- Check broken links
- Review analytics
- Monitor error logs

**Monthly**

- Update dependencies: `npm update`
- Security audit: `npm audit`
- Performance audit: Lighthouse

**Quarterly**

- Content review
- Accessibility audit
- Mobile experience review
- Competitor analysis

---

## Rollback Procedure

If something goes wrong:

### Vercel

1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"
4. Previous version is live instantly

### Manual

```bash
git revert HEAD
git push origin main
```

---

## Backup Strategy

### Git Repository

- Primary backup (all code)
- Hosted on GitHub
- Clone accessible anytime

### Database (Future)

When admin panel is added:

- Daily automatic backups
- 30-day retention
- Download on demand

---

## Support Contacts

### Technical Issues

- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel: [vercel.com/support](https://vercel.com/support)
- GitHub: [github.com/support](https://github.com/support)

### Development Team

- Developer: [Your contact info]
- Repository: github.com/yourusername/ladywax

---

## Budget Considerations

### Vercel (Recommended)

- **Hobby Plan**: Free
  - Perfect for small business
  - Unlimited bandwidth
  - Automatic SSL
  - No credit card required

- **Pro Plan**: €20/month (if needed)
  - Team collaboration
  - Analytics included
  - Priority support

### Domain

- €10-15/year for .nl domain

### Total Monthly Cost

- **Minimum**: €1.25/month (domain only)
- **Recommended**: Free (Vercel Hobby + domain)

---

## Post-Launch

After deployment:

1. **Test Everything**
   - Book appointment widget
   - All navigation links
   - Mobile menu
   - Contact information
   - Cross-browser testing

2. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

3. **Set Up Monitoring**
   - Vercel Analytics
   - Google Analytics (if added)
   - Uptime monitoring

4. **Marketing**
   - Share on social media
   - Email announcement
   - Update Google My Business

5. **Gather Feedback**
   - Client review
   - User testing
   - Analytics review after 1 week

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check file paths are correct
- Ensure images are in `/public/images/`
- Verify Next.js Image component syntax

### Widget Not Loading

- Check iframe URL is correct
- Verify CORS settings
- Test in incognito mode

### Mobile Menu Stuck

- Check JavaScript console
- Verify Framer Motion installed
- Clear browser cache

---

Ready to deploy? Follow the Vercel steps above for the fastest deployment!
