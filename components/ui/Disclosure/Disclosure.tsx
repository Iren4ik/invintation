import React, { useContext } from "react";
import {
  Disclosure as AriaDisclosure,
  DisclosurePanel as AriaDisclosurePanel,
  DisclosureStateContext,
  Heading,
  type DisclosurePanelProps as AriaDisclosurePanelProps,
  type DisclosureProps as AriaDisclosureProps,
} from 'react-aria-components';
import { composeRenderProps } from 'react-aria-components';
import { Button } from  '@/components/ui/Button';
import { tv } from "tailwind-variants";
// import { CaretDownIcon } from "@phosphor-icons/react";
import { composeTailwindRenderProps } from "@/components/ui/utils";

const disclosure = tv({
  base: `
    group cursor-pointer
    rounded-[20px]
    bg-beige px-5 py-4 lg:px-6 lg:py-5
    overflow-hidden
    text-[14px] lg:text-[18px]
  `,
});

const icon = tv({
  base: "w-5 h-5 transition-transform duration-200 ease-in-out cursor-pointer",
  variants: {
    isExpanded: {
      true: "transform rotate-180",
    },
    isDisabled: {
      true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
    }
  }
});

export interface DisclosureProps extends AriaDisclosureProps {
  children: React.ReactNode;
}

export function Disclosure({ children, ...props }: DisclosureProps) {
  return (
    <AriaDisclosure
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => disclosure({ ...renderProps, className }))}
    >
      {children}
    </AriaDisclosure>
  );
}

export interface DisclosureHeaderProps {
  children: React.ReactNode;
}

export function DisclosureHeader({ children }: DisclosureHeaderProps) {
  const { isExpanded } = useContext(DisclosureStateContext)!;
  return (
    <Heading className="m-0">
      <Button
        slot="trigger"
        variant="quiet"
        className="
          w-full justify-start whitespace-normal text-start 
          hover:bg-transparent pressed:bg-transparent p-0 cursor-pointer
          pressed:text-black active:scale-100 pressed:scale-100
        ">
        {({isDisabled}) => (
          <div className="w-full flex justify-between items-center gap-[8px]">
            <span className="flex-1 min-w-0 text-[16px] lg:text-[20px] font-semibold ">{children}</span>
            <svg className={icon({ isExpanded, isDisabled })} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
          </div>
        )} 
      </Button>
    </Heading>
  );
}

export interface DisclosurePanelProps extends AriaDisclosurePanelProps {
  children: React.ReactNode;
}

export function DisclosurePanel({ children, ...props }: DisclosurePanelProps) {
  return (
    <AriaDisclosurePanel {...props} className={composeTailwindRenderProps(props.className, 'h-(--disclosure-panel-height) motion-safe:transition-[height] overflow-clip')}>
      <div className="mt-3 lg:mt-4">{children}</div>
    </AriaDisclosurePanel>
  );
}
