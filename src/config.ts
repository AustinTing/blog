export type NavDisplayMode =
  | 'alwaysText'
  | 'alwaysIcon'
  | 'textHiddenOnMobile'
  | 'iconHiddenOnMobile'
  | 'textToIconOnMobile';

export interface InternalNavItem {
  path: `/${string}`;
  text: string;
  icon?: string;
  displayMode?: NavDisplayMode;
}

export interface SocialLinkItem {
  href: string;
  label: string;
  icon?: string;
}

export type NavBarComponentType = 'internalNavs' | 'socialLinks' | 'hr';

export interface NavBarLayoutConfig {
  left: NavBarComponentType[];
  right: NavBarComponentType[];
  mergeOnMobile?: boolean;
}

export interface ExternalLinkConfig {
  openInNewTab: boolean;
  rel: string;
  newTabLabelSuffix: string;
}

export interface SiteConfig {
  title: string;
  description: string;
}

export interface UIConfig {
  internalNavs: InternalNavItem[];
  socialLinks: SocialLinkItem[];
  navBarLayout: NavBarLayoutConfig;
  externalLink: ExternalLinkConfig;
}

export const SITE: SiteConfig = {
  title: 'Learning Astro Blog',
  description:
    'A clean starting point that rebuilds the astro-antfustyle-theme step by step while learning Astro fundamentals.',
};

export const UI: UIConfig = {
  internalNavs: [
    {
      path: '/',
      text: 'Home',
      displayMode: 'alwaysText',
    },
    {
      path: '/lessons',
      text: 'Lessons roadmap',
      displayMode: 'textHiddenOnMobile',
    },
  ],
  socialLinks: [
    {
      href: 'https://github.com/lin-stephanie/astro-antfustyle-theme',
      label: 'Reference theme on GitHub',
      icon: 'i-ri-github-line',
    },
  ],
  navBarLayout: {
    left: ['internalNavs'],
    right: ['socialLinks'],
    mergeOnMobile: true,
  },
  externalLink: {
    openInNewTab: true,
    rel: 'noopener noreferrer',
    newTabLabelSuffix: '(opens in a new tab)',
  },
};
