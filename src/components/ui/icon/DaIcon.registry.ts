/**
 * DaIcon.registry.ts
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for every icon in the system.
 *
 * Adding an icon
 * ──────────────
 * 1. Import the IconType from react-icons at the top.
 * 2. Add a key → value entry in ICON_MAP under the right section.
 * 3. That's it. DaIconName updates automatically.
 *
 * Naming rules
 * ────────────
 * • Always kebab-case            "alert-circle", not "alertCircle"
 * • Semantic over library-origin "logout", not "tb-logout-2"
 * • Suffix directional variants  "chevron-right", "chevron-down"
 *
 * DaIconName
 * ──────────
 * Derived from ICON_MAP — import wherever you need type-safe names:
 *
 *   import type { DaIconName } from "./DaIcon.registry"
 *   const name: DaIconName = "search"  // ✓ autocomplete
 *   const bad:  DaIconName = "typo"    // ✗ compile error
 * ─────────────────────────────────────────────────────────────
 */

import type { IconType } from "react-icons"
import { RxDashboard }               from "react-icons/rx"
import { HiOutlineHome,
         HiOutlineChartBar }         from "react-icons/hi2"
import { TbChevronRight,
         TbChevronLeft,
         TbChevronDown,
         TbChevronUp,
         TbLogout2,
         TbMenu2,
         TbX,
         TbSearch,
         TbEdit,
         TbTrash,
         TbCopy,
         TbDownload,
         TbUpload,
         TbRefresh,
         TbFilter,
         TbPlus,
         TbMinus,
         TbAlertCircle,
         TbCircleCheck,
         TbCircleX,
         TbAlertTriangle,
         TbInfoCircle,
         TbLoader2,
         TbCurrencyBitcoin,
         TbCoinBitcoin,
         TbBuildingSkyscraper,
         TbChartCandle }             from "react-icons/tb"
import { RiEyeLine,
         RiEyeOffLine,
         RiSettings4Line,
         RiUserReceivedLine }        from "react-icons/ri"
import { IoPersonOutline }           from "react-icons/io5"
import { BiBell }                    from "react-icons/bi"
import { BsCurrencyDollar,
         BsGraphUp }                 from "react-icons/bs"
import { LiaExchangeAltSolid }       from "react-icons/lia"
import { LuHistory }                 from "react-icons/lu"
import { GrLineChart }               from "react-icons/gr"
import { MdOutlineSupportAgent,
         MdOutlineCandlestickChart } from "react-icons/md"

// ─────────────────────────────────────────────────────────────

export const ICON_MAP = {

  // ── Navigation ──────────────────────────────────────────────
  home:            HiOutlineHome,
  dashboard:       RxDashboard,
  menu:            TbMenu2,
  logout:          TbLogout2,
  "chevron-right": TbChevronRight,
  "chevron-left":  TbChevronLeft,
  "chevron-down":  TbChevronDown,
  "chevron-up":    TbChevronUp,
  chevron:         TbChevronRight,  // @deprecated → use "chevron-right"
  collapse:        TbChevronLeft,   // @deprecated → use "chevron-left"
  expand:          TbChevronRight,  // @deprecated → use "chevron-right"

  // ── Actions ──────────────────────────────────────────────────
  search:    TbSearch,
  edit:      TbEdit,
  delete:    TbTrash,
  copy:      TbCopy,
  download:  TbDownload,
  upload:    TbUpload,
  refresh:   TbRefresh,
  filter:    TbFilter,
  add:       TbPlus,
  remove:    TbMinus,
  close:     TbX,
  x:         TbX,        // alias — used by DaInputTrailing clear button
  eye:       RiEyeLine,
  "eye-off": RiEyeOffLine,

  // ── Status — required by the input system ───────────────────
  // Do not rename without updating DaInput.styles.ts → statusStyles
  "alert-circle":   TbAlertCircle,
  "check-circle":   TbCircleCheck,
  "circle-x":       TbCircleX,
  "alert-triangle": TbAlertTriangle,
  "info-circle":    TbInfoCircle,
  loader:           TbLoader2,

  // ── User / Identity ──────────────────────────────────────────
  profile:      IoPersonOutline,
  settings:     RiSettings4Line,
  notification: BiBell,
  withdrawal:   RiUserReceivedLine,
  support:      MdOutlineSupportAgent,

  // ── Finance ──────────────────────────────────────────────────
  pipeline:        TbCurrencyBitcoin,
  crypto:          TbCoinBitcoin,
  "real-estate":   TbBuildingSkyscraper,
  "trading-tools": TbChartCandle,
  forex:           MdOutlineCandlestickChart,
  stock:           GrLineChart,
  analytics:       HiOutlineChartBar,
  transaction:     LuHistory,
  activity:        LiaExchangeAltSolid,
  deals:           BsCurrencyDollar,
  reports:         BsGraphUp,

} as const satisfies Record<string, IconType>

// ─────────────────────────────────────────────────────────────

/** Union of every valid icon name. */
export type DaIconName = keyof typeof ICON_MAP
