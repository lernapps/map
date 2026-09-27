/**
 * German copy for all UI elements of the map.
 *
 * All user-visible text lives here — never hardcoded in templates.
 * To add a new locale, create src/i18n/en.ts with the same shape and
 * import the correct file via a locale composable.
 *
 * Design principle 1.5: every user-visible text is in German; every identifier is English.
 */

export const de = {
  nav: {
    brand: 'lernapps.net',
    catalog: 'Kompetenzkatalog',
    apps: 'Apps',
    github: 'GitHub',
  },

  // ── Shared UI strings ──────────────────────────────────────────────────────
  common: {
    details: 'Details →',
    filterReset: 'Filter zurücksetzen',
    filterResetAriaLabel: 'Alle Filter zurücksetzen',
    noLink: 'Kein Link eingetragen',
    backTo: (label: string) => `← ${label}`,
    notFound: (entity: string) => `${entity} nicht gefunden`,
    goTo: (label: string) => `Zur ${label}`,
  },

  // ── Status vocabulary ──────────────────────────────────────────────────────
  status: {
    needed: 'Fehlend',
    partial: 'Teilweise abgedeckt',
    'well-covered': 'Gut abgedeckt',
    ariaLabel: (label: string) => `Status: ${label}`,
  },

  // ── Capability map ─────────────────────────────────────────────────────────
  catalog: {
    pageTitle: 'Kompetenzkarte',
    listAriaLabel: 'Kompetenzen',
    filterPanelAriaLabel: 'Kompetenzkarte filtern',
    filterViewHeading: 'Ansicht',
    filterGapAriaLabel: 'Nur fehlende und teilweise abgedeckte Kompetenzen anzeigen',
    filterGapLabel: 'Nur Lücken anzeigen',
    filterKmkHeading: 'KMK-Kompetenzbereich',
    filterKmkAriaLabel: 'KMK-Kompetenzbereiche filtern',
    filterKmkDomainAriaLabel: (title: string, count: number) => `${title} (${count} Kompetenzen)`,
    filterKmkSourceUrl: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt/strategie-bildung-in-der-digitalen-welt.html',
    filterKmkSourceLabel: 'KMK Strategie „Bildung in der digitalen Welt" (2016)',
    resultCount: (filtered: number, total: number) => `${filtered} von ${total} Kompetenzen`,
    resultCountFiltered: 'gefiltert',
    resultLiveAnnouncement: (count: number) => `${count} Kompetenzen werden angezeigt`,
    emptyHeading: 'Keine Kompetenzen gefunden',
    emptyBody: 'Versuche, andere Filter zu wählen.',
    gapCtaCount: (count: number) => `Du siehst ${count} ${count === 1 ? 'Lücke' : 'Lücken'} in der Kompetenzkarte.`,
    gapCtaBody: 'Wenn du ein Tool kennst oder baust, das eine dieser Lücken füllt,',
    gapCtaLink: 'trag es ein',
    nodeCardAriaLabel: (title: string) => `Kompetenz: ${title}`,
    nodeNoTools: 'Noch kein Tool eingetragen',
    nodeToolCount: (count: number) => `${count} ${count === 1 ? 'Tool' : 'Tools'} eingetragen`,
  },

  // ── Capability node detail ─────────────────────────────────────────────────
  catalogDetail: {
    backLabel: 'Kompetenzkarte',
    entityName: 'Kompetenz',
    bodyAriaLabel: 'Beschreibung der Kompetenz',
    toolsSectionTitle: 'Tools für diese Kompetenz',
    gapCtaNoTools: 'Noch kein Tool für diese Kompetenz.',
    gapCtaFewTools: 'Nur wenige Tools für diese Kompetenz.',
    gapCtaBody: 'Kennst du ein Tool oder baust gerade eines?',
    gapCtaLink: 'Trag es in die Registry ein',
    gapCtaSuffix: 'es dauert wenige Minuten.',
    dsgvoAriaLabel: (label: string) => `DSGVO-Status: ${label}`,
  },

  // ── Registry ───────────────────────────────────────────────────────────────
  registry: {
    pageTitle: 'Apps',
    listAriaLabel: 'Registry-Einträge',
    filterPanelAriaLabel: 'Registry filtern',
    filterDsgvoHeading: 'Datenschutz (DSGVO)',
    filterDsgvoAriaLabel: 'Nach DSGVO-Status filtern',
    filterDsgvoOptionAriaLabel: (label: string, count: number) => `${label} (${count} Einträge)`,
    filterCapabilityLabel: 'Gefiltert nach Kompetenz:',
    filterCapabilityRemoveAriaLabel: 'Kompetenzfilter entfernen',
    resultCount: (filtered: number, total: number) => `${filtered} von ${total} Tools`,
    resultCountFiltered: 'gefiltert',
    resultLiveAnnouncement: (count: number) => `${count} Tools werden angezeigt`,
    addButtonAriaLabel: 'Neues Tool in die Registry eintragen',
    addButtonLabel: '+ Tool eintragen',
    emptyHeading: 'Keine Tools gefunden',
    emptyBody: 'Versuche, andere Filter zu wählen.',
    youngNoticeHeading: 'Die Registry ist noch jung.',
    youngNoticeBody: 'Wenn du ein Tool kennst, das hier fehlt,',
    youngNoticeLink: 'trag es ein',
    youngNoticeSuffix: 'Es dauert wenige Minuten.',
    entryCardAriaLabel: (title: string) => `Tool: ${title}`,
    entryNoTeaser: 'Kein Teaser eingetragen.',
    entryNoLink: 'Kein Link eingetragen',
  },

  // ── Registry entry detail ──────────────────────────────────────────────────
  registryDetail: {
    backLabel: 'Apps',
    entityName: 'Tool',
    capabilitiesSectionTitle: 'Adressierte Kompetenzen',
    bodyAriaLabel: 'Beschreibung des Tools',
    similarSectionTitle: 'Ähnliche Tools',
  },

} as const

export type AppCopy = typeof de
