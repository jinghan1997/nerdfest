# MRI NerdFest static website

This is a clean, mobile-responsive static rebuild of the public Google Sites content for `mrinerdfest.org`.

## Files

- `index.html`
- `event-schedule.html`
- `organizers.html`
- `speakers-and-mentors.html`
- `venue-and-hotel.html`
- `sponsorships.html`
- `past-event.html`
- `style.css`
- `script.js`
- `/images`

## Important image note

The layout and image slots are ready, but this environment could not directly download the original Google-hosted images from `lh3.googleusercontent.com`. The `/images` folder therefore contains named SVG placeholders.

To preserve the original images:
1. Open the original Google Site in a browser where the images load.
2. Right-click each image and save it.
3. Replace the corresponding SVG file in `/images`.
4. Update the image filename in the HTML if you save it as `.png`, `.jpg`, or `.webp`.


## Custom domain
To use `www.myowncustomdomain.org`:
1. In GitHub Pages settings, set custom domain:
   `www.myowncustomdomain.org`
2. At your DNS provider(namecheap), add:
   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io
3. Enable `Enforce HTTPS` after GitHub verifies the domain.

For root domain `myowncustomdomain.org`, add GitHub Pages A records:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

