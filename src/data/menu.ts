export const MENU_KEYS = ['career', 'projects', 'stats', 'skills', 'contact', 'resume'] as const
export type MenuKey = (typeof MENU_KEYS)[number]

export const MENU_TITLES: Record<MenuKey, string> = {
  career: 'CAREER MODE',
  projects: 'PROJECTS (SINGLE SESSION)',
  stats: 'SKATER STATS',
  skills: 'PARK EDITOR (STACK)',
  contact: '2 PLAYER (CONTACT)',
  resume: 'OPTIONS / CV',
}

export interface WheelItem {
  key: MenuKey
  /** One or two words. With two, the first sits on the outer arc and the second on the inner arc. */
  lines: [string] | [string, string]
  /** Position on the rim in degrees, clockwise from the top. */
  angle: number
}

/** Items on the rim, in clockwise order starting from the top. */
export const WHEEL_ITEMS: WheelItem[] = [
  { key: 'career', lines: ['CAREER', 'MODE'], angle: 0 },
  { key: 'stats', lines: ['SKATER', 'STATS'], angle: 60 },
  { key: 'skills', lines: ['PARK', 'EDITOR'], angle: 120 },
  { key: 'resume', lines: ['OPTIONS'], angle: 180 },
  { key: 'projects', lines: ['PROJECTS'], angle: 240 },
  { key: 'contact', lines: ['2 PLAYER'], angle: 300 },
]

/** Rotation that brings the given item to the top of the wheel. */
export const MENU_ROTATIONS: Record<MenuKey, number> = Object.fromEntries(
  WHEEL_ITEMS.map((item) => [item.key, -item.angle]),
) as Record<MenuKey, number>

export const QUICK_NAV: { key: MenuKey; label: string }[] = [
  { key: 'career', label: 'CAREER' },
  { key: 'projects', label: 'PROJECTS' },
  { key: 'stats', label: 'STATS' },
  { key: 'skills', label: 'STACK' },
  { key: 'contact', label: '2 PLAYER' },
  { key: 'resume', label: 'OPTIONS' },
]
