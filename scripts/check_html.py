"""Validações leves do site estático (sem dependências externas)."""

import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HTML = ROOT / "index.html"

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}


class Checker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
        self.h1 = 0
        self.meta = {}
        self.refs = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag not in VOID:
            self.stack.append(tag)
        if tag == "h1":
            self.h1 += 1
        if tag == "meta":
            key = attrs.get("name") or attrs.get("property")
            if key:
                self.meta[key] = attrs.get("content", "")
        for attr in ("src", "href"):
            if attr in attrs:
                self.refs.append(attrs[attr])
        if attrs.get("target") == "_blank" and "noopener" not in attrs.get("rel", ""):
            self.errors.append(f'link externo sem rel="noopener": {attrs.get("href")}')

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack or self.stack[-1] != tag:
            self.errors.append(f"tag de fechamento inesperada: </{tag}>")
            return
        self.stack.pop()


def main():
    checker = Checker()
    checker.feed(HTML.read_text(encoding="utf-8"))

    if checker.stack:
        checker.errors.append("tags sem fechar: " + ", ".join(checker.stack))
    if checker.h1 != 1:
        checker.errors.append(f"esperado 1 h1, encontrado {checker.h1}")
    for key in ("description", "viewport", "og:title", "og:image"):
        if not checker.meta.get(key):
            checker.errors.append(f"meta ausente: {key}")

    for ref in checker.refs:
        if re.match(r"^(https?:|mailto:|#|data:)", ref):
            continue
        target = (ROOT / ref.split("?")[0].split("#")[0]).resolve()
        if not target.is_file():
            checker.errors.append(f"arquivo referenciado não existe: {ref}")

    if checker.errors:
        for err in checker.errors:
            print("ERRO:", err)
        return 1

    print("OK: HTML válido, referências e metadados conferidos.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
