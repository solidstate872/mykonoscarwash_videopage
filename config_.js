// Editable site configuration.
// Duplicate/adjust this file for each deployment; the page reads values from here.
window.SITE_CONFIG = {
  landing: {
    // Text on the landing line: "Welcome to theVideopage™ of "<name>""
    propertyName: 'Mykonos Carwash',
    brand: 'theVideopage',
    brandSuffix: 'TM'
  },
  video: {
    src: 'mykonoscarwash.mp4',
    poster: 'logo.png'
  },
  qr: {
    // URL opened from the QR code and the modal "Proceed" action
    url: 'https://solidstate872.github.io/comingsoon/'
  },
  infoButtonLabel: 'Info',
  buildNumber: '0.2.1',
  copyright: '© 2026 · All rights reserved',
  tabs: [
    {
      id: 'about',
      label: 'About Us',
      contentHtml: `
        <h2 style="margin-bottom:20px;font-size:1.8rem;background:linear-gradient(135deg, var(--accent), var(--accent-dark));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">About Mykonos Carwash</h2>
        <div style="display:grid;gap:16px;margin-bottom:20px">
          <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 4px 16px rgba(0,0,0,0.06);border-top:3px solid var(--accent);transition:transform .2s,box-shadow .2s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.06)'">
            <p lang="af" style="margin:0;line-height:1.6;color:#444;font-size:.95rem">"Mykonos Car Wash provides three services, exterior cleaning, interior cleaning and detailing. Our services are renown in the Langebaan lagoon, attention to detail and superior cleaning results keep our customers coming back.."</p>
          </div>
        <div style="text-align:center;margin-top:28px;padding:24px;background:linear-gradient(135deg, rgba(38,166,255,0.05), rgba(38,166,255,0.01));border-radius:12px">
          <img src="logo.png" alt="Club Mykonos Logo" style="max-width:220px;width:100%;height:auto;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.1))">
        </div>
      `
    },
    {
      id: 'contact',
      label: 'Contact Us',
      contentHtml: `
        <h2 style="margin-bottom:20px;font-size:1.8rem;background:linear-gradient(135deg, var(--accent), var(--accent-dark));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Contact Us</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px">
          <div style="background:linear-gradient(135deg, rgba(38,166,255,0.1), rgba(38,166,255,0.05));border-radius:10px;padding:14px 16px;box-shadow:0 3px 12px rgba(0,0,0,0.06);transition:all .2s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 18px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 3px 12px rgba(0,0,0,0.06)'">
            <div style="font-size:.85rem;color:#666;margin-bottom:6px;font-weight:600">Phone</div>
            <a href="tel:+27664697838" style="color:var(--accent);text-decoration:none;font-weight:700;font-size:1rem;display:block" onmouseover="this.style.color='var(--accent-dark)'" onmouseout="this.style.color='var(--accent)'">+27 82 821 5458</a>
          </div>
          <div style="background:linear-gradient(135deg, rgba(38,166,255,0.1), rgba(38,166,255,0.05));border-radius:10px;padding:14px 16px;box-shadow:0 3px 12px rgba(0,0,0,0.06);transition:all .2s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 18px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 3px 12px rgba(0,0,0,0.06)'">
            <div style="font-size:.85rem;color:#666;margin-bottom:6px;font-weight:600">Email</div>
            <a href="mailto:christovorster60@gmail.com" style="color:var(--accent);text-decoration:none;font-weight:700;font-size:.92rem;display:block;word-break:break-all" onmouseover="this.style.color='var(--accent-dark)'" onmouseout="this.style.color='var(--accent)'">christovorster60@gmail.com</a>
          </div>
        </div>
        <div style="background:linear-gradient(135deg, rgba(38,166,255,0.08), rgba(38,166,255,0.02));border-radius:10px;padding:14px 16px;margin-bottom:20px;border-left:3px solid var(--accent);box-shadow:0 3px 12px rgba(0,0,0,0.06)">
          <div style="font-size:.85rem;color:#666;margin-bottom:6px;font-weight:600">Location</div>
          <p style="margin:0;font-weight:600;font-size:.92rem;line-height:1.4">Club Mykonos Resort,<br>Langebaan, South Africa</p>
          <p style="margin:8px 0 0 0;font-size:.85rem;color:#888">Monday = 9:00 AM - 5:00 PM · Saterday 9:00 AM - 3:00 PM · Sunday 9:00 AM - 2:00 PM</p>
        </div>
        <div class="mapWrapper" style="border-radius:10px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,.1);border:2px solid rgba(38,166,255,0.2)">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672.1411055198346!2d18.042419063050286!3d-33.04903630654387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a9ab843b842d%3A0x994269e62a6f0598!2sMykonos%20Car%20Wash!5e0!3m2!1sen!2sza!4v1768374465540!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      `
    }
  ]
};
