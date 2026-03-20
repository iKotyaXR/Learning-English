import type {LucideIcon} from "lucide-react";
import type {Key} from "react";

export interface ITab {
    title: string;
    icon?: LucideIcon;
    value: Key | null | undefined;
}