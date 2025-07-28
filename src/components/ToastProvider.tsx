"use client";

import { Toaster } from "sonner";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        richColors
        closeButton
        expand={false}
        duration={3000}
        toastOptions={{
          style: {
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: "14px",
            padding: "12px 16px",
          },
          className: "toast-custom",
        }}
        theme="light"
        visibleToasts={5}
        offset="16px"
      />
    </>
  );
}
