"use client";

import { ModalProvider } from "@/app/contexts/ModalContext";
import config from "@/config/config.json";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const { default_theme } = config.settings;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={default_theme}
      enableColorScheme={false}
    >
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
};

export default Providers;
