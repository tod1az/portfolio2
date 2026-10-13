import type { CSSProperties } from 'react'

export const MENU_KEYS = ['career', 'projects', 'stats', 'skills', 'contact', 'resume'] as const
export type MenuKey = (typeof MENU_KEYS)[number]

export const MENU_ROTATIONS: Record<MenuKey, number> = {
  career: 0,
  stats: -60,
  skills: -120,
  resume: -180,
  projects: -240,
  contact: -300,
}

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
  label: string
  className: string
  style: CSSProperties
  size: 'lg' | 'sm'
}

/** Items on the rim, in clockwise order starting from the top. */
export const WHEEL_ITEMS: WheelItem[] = [
  { key: 'career', label: 'CAREER MODE', className: '-top-1', style: { transform: 'translateY(14px)' }, size: 'lg' },
  { key: 'stats', label: 'SKATER STATS', className: 'right-2 top-14', style: { transform: 'rotate(45deg)' }, size: 'sm' },
  { key: 'skills', label: 'PARK EDITOR', className: 'right-2 bottom-14', style: { transform: 'rotate(135deg)' }, size: 'sm' },
  { key: 'resume', label: 'OPTIONS', className: '-bottom-1', style: { transform: 'translateY(-14px)' }, size: 'lg' },
  { key: 'projects', label: 'PROJECTS', className: 'left-2 bottom-14', style: { transform: 'rotate(-135deg)' }, size: 'sm' },
  { key: 'contact', label: '2 PLAYER', className: 'left-2 top-14', style: { transform: 'rotate(-45deg)' }, size: 'sm' },
]

export const QUICK_NAV: { key: MenuKey; label: string }[] = [
  { key: 'career', label: 'CAREER' },
  { key: 'projects', label: 'PROJECTS' },
  { key: 'stats', label: 'STATS' },
  { key: 'skills', label: 'STACK' },
  { key: 'contact', label: '2 PLAYER' },
  { key: 'resume', label: 'OPTIONS' },
]
