import React, {useCallback, useEffect, useRef} from 'react';
import {DialogWrapper, StyledDialog} from './styles';
import dialogPolyfill from 'dialog-polyfill';


export interface Props {
  isShown?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  className?: string;
  easyDismiss?: boolean;
}

function DialogComponent({
  children,
  className,
  easyDismiss,
  isShown,
  onClose,
  onOpen,
}: React.PropsWithChildren<Props>): React.ReactElement | null {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDialogElement>) => {
    if (easyDismiss && event.target instanceof HTMLElement && !contentRef?.current?.contains(event.target)) {
      onClose?.();
    }
  }, [easyDismiss, onClose]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDialogElement> | KeyboardEvent) => {
    if (isShown && event.key === 'Escape') {
      onClose?.();

      event.preventDefault();
      event.stopPropagation();
    }
  }, [isShown, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, true);

    return (): void => window.removeEventListener('keydown', handleKeyDown, true);
  }, [handleKeyDown]);

  const refCallback = useCallback((element: HTMLDialogElement | null): void => {
    if (element) {
      if (!element.showModal) {
        dialogPolyfill.registerDialog(element);
      }
      const focusedElement = document.activeElement;

      element.showModal();
      onOpen?.();
      if (focusedElement instanceof HTMLElement && element.contains(focusedElement)) {
        focusedElement.focus();
      }
    }
  }, [onOpen]);

  return isShown
    ? <dialog className={className} onClick={handleClick} ref={refCallback}>
      <DialogWrapper ref={contentRef}>
        {children}
      </DialogWrapper>
    </dialog>
    : null;
}

export default StyledDialog.withComponent(DialogComponent);