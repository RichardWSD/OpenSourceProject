import type { ComponentPublicInstance } from 'vue';
import type { PopupProps } from './Popup';

export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';

export type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type PopupInstance = ComponentPublicInstance<PopupProps>;
