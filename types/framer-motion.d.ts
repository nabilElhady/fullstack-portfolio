import 'framer-motion';
import * as React from 'react';

declare module 'framer-motion' {
  export interface MotionProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    href?: string;
    target?: string;
    rel?: string;
    type?: string;
  }
}

