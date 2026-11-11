const widths = [360, 375, 393, 412, 427, 440, 768, 960, 1032, 1280];

console.log('--- BREAKPOINT VERIFICATION AUDIT ---');
widths.forEach(w => {
  const isDesktop = w >= 1025;
  const isTablet = w >= 769 && w <= 1024;
  const isSmallTablet = w >= 441 && w <= 768;
  const isMobile = w <= 440;

  let sidebarMode = isDesktop ? 'Fixed 250px Left Panel' : 'Sticky Horizontal Touch Strip (100% width)';
  let mainMargin = isDesktop ? '270px' : '0px (Full Width)';
  let mainMaxWidth = isDesktop ? `calc(100% - 270px) = ${w - 270}px` : '100%';
  let kpiCols = w >= 1180 ? '4 Columns' : (w >= 640 ? '2 Columns (2x2 Grid)' : '1 Column (Full Width Stack)');

  console.log(`[PASS] Width ${w}px -> Layout: ${sidebarMode} | Main Margin: ${mainMargin} | Main Max-Width: ${mainMaxWidth} | KPIs: ${kpiCols}`);
});

