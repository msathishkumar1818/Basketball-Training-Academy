/**
 * VORTEX BASKETBALL ACADEMY - GLOBAL CORE JAVASCRIPT
 * Handles: Loader, Dark/Light Mode (#000000 pure black), RTL/LTR,
 * Click-only Home Dropdown, Mobile Drawer & Accordion,
 * Scroll-to-Top, Active Navigation state.
 */

(function () {
  'use strict';

  // --- 1. THEME CONTROLLER (Strict #000000 Dark Mode) ---
  const THEME_KEY = 'vortex_theme_pref';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    // Default to dark mode for elite athletic aesthetic, or use saved preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'dark');

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeAria(initialTheme === 'dark');
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, newTheme);
    updateThemeAria(isDark);
  }

  function updateThemeAria(isDark) {
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    themeButtons.forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });
  }

  // --- 2. DIRECTION CONTROLLER (RTL / LTR) ---
  const DIR_KEY = 'vortex_dir_pref';

  function initDirection() {
    const savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
    document.documentElement.setAttribute('dir', savedDir);
    updateDirLabels(savedDir);
  }

  function toggleDirection() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', nextDir);
    localStorage.setItem(DIR_KEY, nextDir);
    updateDirLabels(nextDir);
  }

  function updateDirLabels(dir) {
    const dirButtons = document.querySelectorAll('.rtl-toggle-btn');
    dirButtons.forEach(btn => {
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR Mode' : 'Switch to RTL Mode');
      const textSpan = btn.querySelector('.dir-label');
      if (textSpan) {
        textSpan.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
    });
  }

  // --- 3. PAGE LOADER ---
  function initLoader() {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const dismissLoader = () => {
      loader.classList.add('is-loaded');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 450);
    };

    if (document.readyState === 'complete') {
      setTimeout(dismissLoader, 200);
    } else {
      window.addEventListener('load', () => setTimeout(dismissLoader, 180));
      // Failsafe timeout
      setTimeout(dismissLoader, 1800);
    }
  }

  // --- 4. CLICK-ONLY HOME DROPDOWN (DESKTOP) ---
  function initDropdown() {
    const dropdownItem = document.querySelector('.nav-dropdown-item');
    const dropdownBtn = document.querySelector('.nav-dropdown-btn');

    if (!dropdownItem || !dropdownBtn) return;

    dropdownBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dropdownItem.classList.toggle('is-open');
      dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when clicking anywhere outside
    document.addEventListener('click', function (e) {
      if (!dropdownItem.contains(e.target)) {
        dropdownItem.classList.remove('is-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdownItem.classList.contains('is-open')) {
        dropdownItem.classList.remove('is-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
        dropdownBtn.focus();
      }
    });
  }

  // --- 5. MOBILE DRAWER & ACCORDION ---
  function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle-btn');
    const mobileClose = document.querySelector('.mobile-close-btn');
    const mobileDrawer = document.querySelector('.mobile-menu-drawer');
    const mobileBackdrop = document.querySelector('.mobile-menu-backdrop');
    const accordionBtn = document.querySelector('.mobile-accordion-btn');
    const accordionGroup = document.querySelector('.mobile-accordion-group');
    const allDrawerNavLinks = document.querySelectorAll('.mobile-menu-drawer a:not(.mobile-accordion-btn)');

    if (!mobileDrawer) return;

    function openMobileMenu() {
      mobileDrawer.classList.add('is-open');
      if (mobileBackdrop) mobileBackdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMobileMenu() {
      mobileDrawer.classList.remove('is-open');
      if (mobileBackdrop) mobileBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      closeAccordion();
    }

    function closeAccordion() {
      if (!accordionBtn || !accordionGroup) return;
      accordionGroup.classList.remove('is-open');
      accordionBtn.setAttribute('aria-expanded', 'false');
      const icon = accordionBtn.querySelector('.accordion-chevron');
      if (icon) icon.style.transform = 'rotate(0deg)';
    }

    if (mobileToggle) {
      mobileToggle.addEventListener('click', openMobileMenu);
    }
    if (mobileClose) {
      mobileClose.addEventListener('click', closeMobileMenu);
    }
    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Auto-close drawer whenever any nav item or sub-link is clicked
    allDrawerNavLinks.forEach(link => {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    // Mobile Home Accordion (Click only)
    if (accordionBtn && accordionGroup) {
      accordionBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = accordionGroup.classList.toggle('is-open');
        accordionBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        const icon = accordionBtn.querySelector('.accordion-chevron');
        if (icon) {
          icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      });

      document.addEventListener('click', function (e) {
        if (!accordionGroup.contains(e.target)) {
          closeAccordion();
        }
      });
    }

    // Escape key closes mobile drawer
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // Auto-close mobile drawer on window resize to desktop viewport
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1025) {
        if (mobileDrawer.classList.contains('is-open') || (mobileBackdrop && mobileBackdrop.classList.contains('is-active'))) {
          closeMobileMenu();
        }
      }
    });
  }

  // --- 6. SCROLL TO TOP & STICKY HEADER SHADOW ---
  function initScrollHelpers() {
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    const siteHeader = document.querySelector('.site-header');

    window.addEventListener('scroll', function () {
      const scrollPos = window.scrollY;

      // Scroll to top visibility
      if (scrollTopBtn) {
        if (scrollPos > 300) {
          scrollTopBtn.classList.add('is-visible');
        } else {
          scrollTopBtn.classList.remove('is-visible');
        }
      }

      // Header scrolled state
      if (siteHeader) {
        if (scrollPos > 20) {
          siteHeader.classList.add('is-scrolled');
        } else {
          siteHeader.classList.remove('is-scrolled');
        }
      }
    }, { passive: true });

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // --- 7. ACTIVE NAVIGATION HIGHLIGHT ---
  function initActiveNav() {
    const rawPath = window.location.pathname;
    let currentPage = rawPath.substring(rawPath.lastIndexOf('/') + 1) || 'index.html';

    // Map root to index.html
    if (currentPage === '' || currentPage === '/') {
      currentPage = 'index.html';
    }

    // Update Desktop Nav
    const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link, .nav-dropdown-menu .dropdown-link');
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === currentPage || href.endsWith(currentPage))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
        // If it's inside dropdown, highlight parent
        const parentDropdown = link.closest('.nav-dropdown-item');
        if (parentDropdown) {
          const parentBtn = parentDropdown.querySelector('.nav-dropdown-btn');
          if (parentBtn) parentBtn.classList.add('active');
        }
      }
    });

    // Update Mobile Nav
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-sub-link');
    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isCurrentPage = href && (href === currentPage || href.endsWith(currentPage));
      link.classList.toggle('active', Boolean(isCurrentPage));
      if (isCurrentPage) {
        link.setAttribute('aria-current', 'page');
        const parentAccordion = link.closest('.mobile-accordion-group');
        if (parentAccordion) {
          parentAccordion.classList.add('is-open');
          const parentBtn = parentAccordion.querySelector('.mobile-accordion-btn');
          if (parentBtn) {
            parentBtn.classList.add('active');
            parentBtn.setAttribute('aria-expanded', 'true');
            const icon = parentBtn.querySelector('.accordion-chevron');
            if (icon) icon.style.transform = 'rotate(180deg)';
          }
        }
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  // --- 8. GLOBAL EVENT BINDING ---
  function initControls() {
    // Theme toggle buttons (desktop + mobile drawer)
    const themeBtns = document.querySelectorAll('.theme-toggle-btn');
    themeBtns.forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // RTL toggle buttons (desktop + mobile drawer)
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      btn.addEventListener('click', toggleDirection);
    });
  }

  // --- 9. AUTH PORTAL TAB & PASSWORD TOGGLE ---
  function initAuthPortal() {
    const tabBtns = document.querySelectorAll('.auth-tab-btn');
    const tabPanels = document.querySelectorAll('.auth-tab-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        this.classList.add('active');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });

    const passToggles = document.querySelectorAll('.password-toggle-eye');
    passToggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
        const input = this.parentElement.querySelector('input');
        if (input) {
          const isPassword = input.type === 'password';
          input.type = isPassword ? 'text' : 'password';
          this.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        }
      });
    });
  }

  // --- 10. DASHBOARD PORTAL TAB SWITCHER (NO PAGE JUMP) ---
  function initDashboardPortalTabs() {
    const sidebarLinks = document.querySelectorAll('.portal-app-sidebar .portal-menu-item');
    const tabPanels = document.querySelectorAll('.portal-tab-content');

    if (!sidebarLinks.length || !tabPanels.length) return;

    function activateTab(targetId) {
      if (!targetId) return;

      sidebarLinks.forEach(item => {
        const matches = item.getAttribute('data-tab') === targetId;
        item.classList.toggle('active', matches);
        item.setAttribute('aria-selected', matches ? 'true' : 'false');
      });

      tabPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === targetId);
      });

      // Keep clicked pill in view horizontally inside mobile horizontal scrollbar
      if (window.innerWidth <= 1024) {
        const activeLink = document.querySelector(`.portal-app-sidebar .portal-menu-item[data-tab="${targetId}"]`);
        if (activeLink) {
          const menuContainer = activeLink.closest('.portal-menu-links');
          if (menuContainer) {
            const linkLeft = activeLink.offsetLeft;
            const linkWidth = activeLink.offsetWidth;
            const containerWidth = menuContainer.offsetWidth;
            menuContainer.scrollTo({
              left: linkLeft - (containerWidth / 2) + (linkWidth / 2),
              behavior: 'smooth'
            });
          }
        }
      }

      // Scroll viewport back to top of workspace so user immediately sees header of selected tab
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    sidebarLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-tab');
        activateTab(targetId);
      });
    });

    // Support action buttons inside portal tabs (e.g. "+ Book Court Session", "View Combine Scorecard")
    const internalTabLinks = document.querySelectorAll('.portal-app-main a[href^="#"]');
    internalTabLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const targetHash = href.replace('#', '');
      const potentialTabId = targetHash.startsWith('tab-') ? targetHash : `tab-${targetHash}`;
      const matchingPanel = document.getElementById(potentialTabId);
      if (matchingPanel) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          activateTab(potentialTabId);
        });
      }
    });

    // Check URL hash on page load
    if (window.location.hash) {
      const initialHash = window.location.hash.replace('#', '');
      const initialTabId = initialHash.startsWith('tab-') ? initialHash : `tab-${initialHash}`;
      if (document.getElementById(initialTabId)) {
        activateTab(initialTabId);
      }
    }
  }

  // --- INITIALIZE ON DOM READY ---
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initDirection();
    initLoader();
    initDropdown();
    initMobileMenu();
    initScrollHelpers();
    initActiveNav();
    initControls();
    initAuthPortal();
    initDashboardPortalTabs();
  });
})();
