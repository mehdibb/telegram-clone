import React, {useCallback, useState} from 'react';

import {Dialog, DialogProps} from '../../components';


export interface ReturnType {
  closeDialog: () => void;
  dialog: React.ReactElement;
  isVisible: boolean;
  showDialog: () => void;
}

export default function useDialog(
  dialogProps?: React.PropsWithChildren<DialogProps>,
  content?: React.ReactNode,
): ReturnType {
  const [isVisible, setIsVisible] = useState(false);
  const showDialog = useCallback(() => setIsVisible(true), []);
  const closeDialog = useCallback(() => setIsVisible(false), []);

  return {
    closeDialog,
    dialog: <Dialog isShown={isVisible} onClose={closeDialog} {...dialogProps}>
      {content}
    </Dialog>,
    isVisible: dialogProps?.isShown == null ? isVisible : dialogProps.isShown,
    showDialog,
  };
}