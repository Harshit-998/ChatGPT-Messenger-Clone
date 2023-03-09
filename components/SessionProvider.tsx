"use client";

import React from "react";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { useSession } from "next-auth/react"


type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export function SessionProvider({ children, session }: Props) {
  return <Provider>{children}</Provider>;
}
