import type { Metadata } from "next";
export const metadata: Metadata = { title: "Mi espacio", robots: { index: false } };
export default function MembersLayout({ children }: { children: React.ReactNode }) { return children; }
