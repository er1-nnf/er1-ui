'use client';

import { ReactNode } from 'react';
import { useLenisInit } from '@/hooks/useLenis';

export function LenisProvider({ children }: { children: ReactNode }) {
  useLenisInit();
  return <>{children}</>;
}
