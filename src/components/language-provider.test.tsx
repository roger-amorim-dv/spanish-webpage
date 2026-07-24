import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "./language-provider";
import { SiteHeader } from "./site-header";

function CopyProbe() {
  const { t } = useLanguage();
  return <h1>{t.hero.titleA}</h1>;
}

describe("language switching", () => {
  beforeEach(() => window.localStorage.clear());

  it("defaults to Spanish and switches to natural Portuguese copy", async () => {
    const user = userEvent.setup();
    render(<LanguageProvider><CopyProbe /><SiteHeader /></LanguageProvider>);
    expect(screen.getByRole("heading", { name: "Habla español." })).toBeInTheDocument();
    await user.selectOptions(screen.getByRole("combobox"), "pt");
    expect(screen.getByRole("heading", { name: "Fale espanhol." })).toBeInTheDocument();
    expect(window.localStorage.getItem("habla-locale")).toBe("pt");
  });

  it("renders working section and member navigation targets", () => {
    render(<LanguageProvider><SiteHeader /></LanguageProvider>);
    expect(screen.getAllByRole("link", { name: "Cursos" })[0]).toHaveAttribute("href", "#courses");
    expect(screen.getAllByRole("link", { name: "Método" })[0]).toHaveAttribute("href", "#method");
    expect(screen.getAllByRole("link", { name: "Área de estudiantes" })[0]).toHaveAttribute("href", "/members");
  });
});
