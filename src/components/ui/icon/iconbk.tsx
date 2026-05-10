import type { IconType } from "react-icons";

import {
  HiOutlineHome,
  HiOutlineChartBar,
} from "react-icons/hi2";

import {
  TbCurrencyBitcoin,
  TbBuildingSkyscraper,
  TbChartCandle,
  TbChevronRight,
  TbChevronLeft,
  TbSearch,
  TbCoinBitcoin,
} from "react-icons/tb";

import {
  BsGraphUp,
  BsCurrencyDollar,
} from "react-icons/bs";

import { RxDashboard } from "react-icons/rx";
import { GrLineChart } from "react-icons/gr";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { RiUserReceivedLine, RiSettings4Line } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { BiBell } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";

import { MdOutlineSupportAgent, MdOutlineCandlestickChart } from "react-icons/md";

export const ICON_MAP: Record<string, IconType> = {
  // Core
  dashboard: RxDashboard,
  "real-estate": TbBuildingSkyscraper,
  profile: IoPersonOutline,

  // Investment
  pipeline: TbCurrencyBitcoin,       // Crypto
  activity: LiaExchangeAltSolid, // Account activity / transfers

  // Trading Tools
  "trading-tools": TbChartCandle,    // forex / charts
  analytics: HiOutlineChartBar,
  forex: MdOutlineCandlestickChart,
  stock: GrLineChart,

  // Finance
  transaction: LuHistory,
  withdrawal:  RiUserReceivedLine,
  crypto: TbCoinBitcoin,

  // System
  settings: RiSettings4Line,
  notification: BiBell,
  search: TbSearch,

  // Misc
  support: MdOutlineSupportAgent,
  deals: BsCurrencyDollar,
  reports: BsGraphUp,

  // Navigation
  chevron: TbChevronRight,
  collapse: TbChevronLeft,
  expand: TbChevronRight,

  logout: TbLogout2,
};

interface SidebarIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function SidebarIcon({ name, size = 16, className }: SidebarIconProps) {
  const IconComponent = ICON_MAP[name] ?? HiOutlineHome; // Fallback to a default icon if name not found
  return <IconComponent size={size} className={className} />;
}