/* ============================================================
   CATAWBA HOME IMPROVEMENT LLC
   components.js — Shared nav and footer injection
   Usage: add <script src="../js/components.js"></script> before </body>
   For root pages: use <script src="js/components.js"></script>
   ============================================================ */

(function () {

  /* Detect path depth for relative links */
  const isSubpage = window.location.pathname.includes('/pages/');
  const root = isSubpage ? '../../' : './';
  const pagesRoot = isSubpage ? '../' : './pages/';

  /* ── Navigation HTML ──────────────────────────────────────── */
  const navHTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">
      Catawba Home Improvement
      <span>LLC · Roanoke Valley</span>
    </a>

    <ul class="nav-menu" id="navMenu" role="menubar">
      <li role="none">
        <a href="${root}index.html" class="nav-link" role="menuitem">Home</a>
      </li>
      <li class="nav-dropdown" role="none">
        <a href="${pagesRoot}services/index.html" class="nav-link" role="menuitem">
          Services ▾
        </a>
        <div class="nav-dropdown-menu">
          <a href="${pagesRoot}services/deck-repair.html"  class="nav-dropdown-item">Deck Repair &amp; Carpentry</a>
          <a href="${pagesRoot}services/drywall.html"      class="nav-dropdown-item">Drywall Repair</a>
          <a href="${pagesRoot}services/flooring.html"     class="nav-dropdown-item">Flooring Installation</a>
          <a href="${pagesRoot}services/painting.html"     class="nav-dropdown-item">Interior Painting</a>
        </div>
      </li>
      <li role="none">
        <a href="${pagesRoot}service-area.html" class="nav-link" role="menuitem">Service Area</a>
      </li>
      <li role="none">
        <a href="${pagesRoot}about.html" class="nav-link" role="menuitem">About</a>
      </li>
      <li role="none">
        <a href="${pagesRoot}contact.html" class="nav-link" role="menuitem">Contact</a>
      </li>
      <!-- Mobile only CTA -->
      <li role="none" class="nav-cta-mobile" style="display:none;">
        <a href="${pagesRoot}contact.html" class="nav-cta-mobile" style="display:block;margin-top:12px;text-align:center;background:var(--brass);color:var(--slate);padding:14px;border-radius:4px;font-weight:700;">Request an Estimate</a>
      </li>
    </ul>

    <a href="${pagesRoot}contact.html" class="nav-cta">Request an Estimate</a>

    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  /* ── Footer HTML ──────────────────────────────────────────── */
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          Catawba Home Improvement
          <span>LLC · Virginia Class C HIC</span>
        </div>
        <p>Quality residential repairs and improvements for homeowners across the Roanoke Valley. Licensed, insured, and owner-operated.</p>
        <div class="footer-lic">
          Virginia Class C HIC · Fully Insured<br>
          catawbahomeimprovements.com
        </div>
      </div>

      <div class="footer-col">
        <h5>Services</h5>
        <a href="${pagesRoot}services/deck-repair.html">Deck Repair &amp; Carpentry</a>
        <a href="${pagesRoot}services/drywall.html">Drywall Repair</a>
        <a href="${pagesRoot}services/flooring.html">Flooring Installation</a>
        <a href="${pagesRoot}services/painting.html">Interior Painting</a>
        <a href="${pagesRoot}services/index.html">All Services</a>
      </div>

      <div class="footer-col">
        <h5>Service Area</h5>
        <p>Roanoke</p>
        <p>Salem</p>
        <p>Daleville</p>
        <p>Troutville</p>
        <p>Catawba</p>
        <p>Craig County · New Castle</p>
      </div>

      <div class="footer-col">
        <h5>Contact</h5>
        <a href="tel:+15402307245">(540) 230-7245</a>
        <p>info@catawbahomeimprovements.com</p>
        <a href="${pagesRoot}contact.html">Request an Estimate →</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} Catawba Home Improvement LLC. All rights reserved.</p>
    <p>Serving Roanoke · Salem · Daleville · Troutville · Catawba · Craig County</p>
  </div>
</footer>`;

  /* ── Inject ───────────────────────────────────────────────── */
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = navHTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

})();
