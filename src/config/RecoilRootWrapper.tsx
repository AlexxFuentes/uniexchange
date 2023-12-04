'use client'
import React from 'react';
import { RecoilRoot } from 'recoil'

export function RecoilRootWrapper({ children }: { children: React.ReactNode }) {
  return <RecoilRoot >{children}</RecoilRoot>;
}