// Virtus · Icon.tsx
// Thin wrapper over lucide-react so JSX stays close to the static HTML
// (`<Icon name="dumbbell" />` ≈ `<i data-lucide="dumbbell">`).
// Only the icons actually used across the pages are imported, so the
// bundle stays tree-shaken. Add a name + import to extend.
import {
  CalendarCheck, MapPin, UserRoundCog, HeartPulse, Check, Target,
  UsersRound, Activity, Dumbbell, GitCommitHorizontal, Accessibility,
  Flame, Trophy, RotateCcw, Move, ShieldPlus, Ear, ClipboardList, Route,
  TrendingUp, Clock, Phone, Navigation, MessageCircle, CheckCircle2,
  Users, Timer, Gauge, ShieldCheck, Mail, Send,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  "calendar-check": CalendarCheck,
  "map-pin": MapPin,
  "user-round-cog": UserRoundCog,
  "heart-pulse": HeartPulse,
  check: Check,
  target: Target,
  "users-round": UsersRound,
  activity: Activity,
  dumbbell: Dumbbell,
  "git-commit-horizontal": GitCommitHorizontal,
  accessibility: Accessibility,
  flame: Flame,
  trophy: Trophy,
  "rotate-ccw": RotateCcw,
  move: Move,
  "shield-plus": ShieldPlus,
  ear: Ear,
  "clipboard-list": ClipboardList,
  route: Route,
  "trending-up": TrendingUp,
  clock: Clock,
  phone: Phone,
  navigation: Navigation,
  "message-circle": MessageCircle,
  "check-circle-2": CheckCircle2,
  users: Users,
  timer: Timer,
  gauge: Gauge,
  "shield-check": ShieldCheck,
  mail: Mail,
  send: Send,
};

export default function Icon({
  name,
  className,
  ...rest
}: { name: string } & React.SVGProps<SVGSVGElement>) {
  const Cmp = MAP[name];
  if (!Cmp) {
    if (process.env.NODE_ENV !== "production")
      console.warn(`[Icon] unknown name "${name}"`);
    return null;
  }
  // strokeWidth ~2, rounded caps — matches the Lucide defaults the design uses.
  return <Cmp className={className} aria-hidden {...rest} />;
}
