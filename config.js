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
  buildNumber: '0.3.0 - Veertjie',
  copyright: '© 2026 · All rights reserved',
  tabs: [
    {
      id: 'about',
      label: 'About Us',
      contentHtml: `
        <h2>About Mykonos Carwash</h2>
        
        <!-- Description Card -->
        <div style="display:grid;gap:16px;margin-bottom:24px">
          <div class="content-card">
            <p style="margin:0">"Mykonos Car Wash provides three services, exterior cleaning, interior cleaning and detailing. Our services are renown in the Langebaan lagoon, attention to detail and superior cleaning results keep our customers coming back."</p>
          </div>
        </div>
        
        <!-- Logo Section -->
        <div style="text-align:center;margin-top:32px;padding:32px;background:var(--panel-bg);border:1px solid var(--border);border-radius:8px">
          <img src="logo.png" alt="Club Mykonos Logo" style="max-width:200px;width:100%;height:auto;opacity:.9">
        </div>
      `
    },
    {
      id: 'contact',
      label: 'Contact Us',
      contentHtml: `
        <h2>Contact Us</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:24px">
          <div class="content-card">
            <div style="font-size:.8rem;opacity:.6;margin-bottom:6px;font-weight:500;text-transform:uppercase;letter-spacing:.05em">Phone</div>
            <a href="tel:+27828215458" style="color:var(--accent);text-decoration:none;font-weight:500;font-size:1rem;display:block">+27 82 821 5458</a>
          </div>
          <div class="content-card">
            <div style="font-size:.8rem;opacity:.6;margin-bottom:6px;font-weight:500;text-transform:uppercase;letter-spacing:.05em">Email</div>
            <a href="mailto:christovorster60@gmail.com" style="color:var(--accent);text-decoration:none;font-weight:500;font-size:.92rem;display:block;word-break:break-all">christovorster60@gmail.com</a>
          </div>
        </div>
        <div class="content-card" style="margin-bottom:20px">
          <div style="font-size:.8rem;opacity:.6;margin-bottom:6px;font-weight:500;text-transform:uppercase;letter-spacing:.05em">Location</div>
          <p style="margin:0;font-weight:500;font-size:.92rem;line-height:1.5">Club Mykonos Resort,<br>Langebaan, South Africa</p>
          <p style="margin:8px 0 0 0;font-size:.85rem;opacity:.6">Monday 9:00 AM - 5:00 PM · Saturday 9:00 AM - 3:00 PM · Sunday 9:00 AM - 2:00 PM</p>
        </div>
        <div style="border-radius:8px;overflow:hidden;border:1px solid var(--border)">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672.1411055198346!2d18.042419063050286!3d-33.04903630654387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a9ab843b842d%3A0x994269e62a6f0598!2sMykonos%20Car%20Wash!5e0!3m2!1sen!2sza!4v1768374465540!5m2!1sen!2sza" width="100%" height="240" style="border:0" allowfullscreen="" loading="lazy"></iframe>
        </div>
      `
    }
  ]
};
