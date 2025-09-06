import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  OverlayArrow,
  Popover as ReactAriaPopover,
  Switch,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";

import "./popover.css";
import { ReactNode } from "react";

export const Popover = ({
  trigger,
  content,
}: {
  trigger: ReactNode;
  content: ReactNode;
}) => {
  return (
    <TooltipTrigger delay={0}>
      {trigger}
      <Tooltip>
        <OverlayArrow>
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
        {content}
      </Tooltip>
    </TooltipTrigger>
  );
};
