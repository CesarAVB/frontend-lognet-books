This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: **/node_modules/** **/dist/** **/.angular/** **/coverage/** **/.vscode/** package-lock.json **/*.spec.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.env.development
.env.production
.github/workflows/deploy-lognet.yml.bkp
.github/workflows/release.yml
.gitignore
.releaserc.json
CHANGELOG.md
components.json
Dockerfile
eslint.config.js
index.html
package.json
postcss.config.js
public/favicon.ico
public/placeholder.svg
public/robots.txt
README.md
src/App.css
src/App.tsx
src/assets/hero-bg.png
src/assets/hero-slide-1.jpg
src/assets/hero-slide-2.jpg
src/assets/hero-slide-3.jpg
src/assets/hero-slide-4.jpg
src/assets/logo_transp.png
src/assets/logo.jpg
src/assets/logo02.jpg
src/assets/logo2_transp.png
src/assets/logo2.png
src/assets/logoh.png
src/assets/logoht.png
src/components/AppLayout.tsx
src/components/BookCard.tsx
src/components/CategorySlider.tsx
src/components/Footer.tsx
src/components/NavLink.tsx
src/components/ui/accordion.tsx
src/components/ui/alert-dialog.tsx
src/components/ui/alert.tsx
src/components/ui/aspect-ratio.tsx
src/components/ui/avatar.tsx
src/components/ui/badge.tsx
src/components/ui/breadcrumb.tsx
src/components/ui/button.tsx
src/components/ui/calendar.tsx
src/components/ui/card.tsx
src/components/ui/carousel.tsx
src/components/ui/chart.tsx
src/components/ui/checkbox.tsx
src/components/ui/collapsible.tsx
src/components/ui/command.tsx
src/components/ui/context-menu.tsx
src/components/ui/dialog.tsx
src/components/ui/drawer.tsx
src/components/ui/dropdown-menu.tsx
src/components/ui/form.tsx
src/components/ui/hover-card.tsx
src/components/ui/input-otp.tsx
src/components/ui/input.tsx
src/components/ui/label.tsx
src/components/ui/menubar.tsx
src/components/ui/navigation-menu.tsx
src/components/ui/pagination.tsx
src/components/ui/popover.tsx
src/components/ui/progress.tsx
src/components/ui/radio-group.tsx
src/components/ui/resizable.tsx
src/components/ui/scroll-area.tsx
src/components/ui/select.tsx
src/components/ui/separator.tsx
src/components/ui/sheet.tsx
src/components/ui/sidebar.tsx
src/components/ui/skeleton.tsx
src/components/ui/slider.tsx
src/components/ui/sonner.tsx
src/components/ui/switch.tsx
src/components/ui/table.tsx
src/components/ui/tabs.tsx
src/components/ui/textarea.tsx
src/components/ui/toast.tsx
src/components/ui/toaster.tsx
src/components/ui/toggle-group.tsx
src/components/ui/toggle.tsx
src/components/ui/tooltip.tsx
src/components/ui/use-toast.ts
src/contexts/app.ts
src/contexts/AppContext.tsx
src/contexts/auth.ts
src/contexts/AuthContext.tsx
src/contexts/layout.tsx
src/contexts/useAuth.ts
src/data/static.ts
src/hooks/use-mobile.tsx
src/hooks/use-toast.ts
src/index.css
src/lib/api.ts
src/lib/books.ts
src/lib/utils.ts
src/main.tsx
src/pages/About.tsx
src/pages/BookDetail.tsx
src/pages/BooksAdmin.tsx
src/pages/Catalog.tsx
src/pages/Dashboard.tsx
src/pages/Downloads.tsx
src/pages/Favorites.tsx
src/pages/Index.tsx
src/pages/Landing.tsx
src/pages/Login.tsx
src/pages/NotFound.tsx
src/pages/Plans.tsx
src/pages/Player.tsx
src/pages/Privacy.tsx
src/pages/Profile.tsx
src/pages/Register.tsx
src/pages/Terms.tsx
src/test/example.test.ts
src/test/setup.ts
src/vite-env.d.ts
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
vitest.config.ts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".github/workflows/release.yml">
name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      issues: write
      pull-requests: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Release
        uses: cycjimmy/semantic-release-action@v4
        with:
          extra_plugins: |
            @semantic-release/changelog
            @semantic-release/git
            conventional-changelog-conventionalcommits
        env:
          GITHUB_TOKEN: ${{ secrets.SEMANTIC_RELEASE_TOKEN }}
</file>

<file path=".gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</file>

<file path=".releaserc.json">
{
  "branches": ["main"],
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "conventionalcommits"
    }],
    ["@semantic-release/release-notes-generator", {
      "preset": "conventionalcommits"
    }],
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md"
    }],
    ["@semantic-release/github"],
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }]
  ]
}
</file>

<file path="components.json">
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
</file>

<file path="eslint.config.js">
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
</file>

<file path="index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- TODO: Set the document title to the name of your application -->
    <title>Lognet Books</title>
    <meta name="description" content="Aplicativo de Livros Lognet" />
    <meta name="author" content="Lognet" />

    <!-- TODO: Update og:title to match your application name -->
    <meta property="og:title" content="Lognet Books" />
    <meta property="og:description" content="Aplicativo de Livros Lognet" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lognet.com/opengraph-image.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lognet" />
    <meta name="twitter:image" content="https://lognet.com/opengraph-image.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
</file>

<file path="postcss.config.js">
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
</file>

<file path="public/placeholder.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
</file>

<file path="public/robots.txt">
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
</file>

<file path="src/App.css">
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
</file>

<file path="src/components/NavLink.tsx">
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
</file>

<file path="src/components/ui/accordion.tsx">
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
</file>

<file path="src/components/ui/alert-dialog.tsx">
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
</file>

<file path="src/components/ui/alert.tsx">
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
</file>

<file path="src/components/ui/aspect-ratio.tsx">
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
</file>

<file path="src/components/ui/avatar.tsx">
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
</file>

<file path="src/components/ui/badge.tsx">
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
</file>

<file path="src/components/ui/breadcrumb.tsx">
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
</file>

<file path="src/components/ui/button.tsx">
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:scale-[0.98]",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-bg text-primary-foreground shadow-lg hover:shadow-glow hover:scale-105 active:scale-[0.98] transition-all duration-300",
        success: "bg-success text-success-foreground hover:bg-success/90 active:scale-[0.98]",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
</file>

<file path="src/components/ui/calendar.tsx">
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
</file>

<file path="src/components/ui/card.tsx">
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
</file>

<file path="src/components/ui/carousel.tsx">
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
</file>

<file path="src/components/ui/chart.tsx">
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
</file>

<file path="src/components/ui/checkbox.tsx">
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
</file>

<file path="src/components/ui/collapsible.tsx">
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
</file>

<file path="src/components/ui/context-menu.tsx">
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
</file>

<file path="src/components/ui/dialog.tsx">
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
</file>

<file path="src/components/ui/drawer.tsx">
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
</file>

<file path="src/components/ui/dropdown-menu.tsx">
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
</file>

<file path="src/components/ui/form.tsx">
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
</file>

<file path="src/components/ui/hover-card.tsx">
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
</file>

<file path="src/components/ui/input-otp.tsx">
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
</file>

<file path="src/components/ui/input.tsx">
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
</file>

<file path="src/components/ui/label.tsx">
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
</file>

<file path="src/components/ui/menubar.tsx">
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
</file>

<file path="src/components/ui/navigation-menu.tsx">
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
</file>

<file path="src/components/ui/pagination.tsx">
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
</file>

<file path="src/components/ui/popover.tsx">
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
</file>

<file path="src/components/ui/progress.tsx">
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
</file>

<file path="src/components/ui/radio-group.tsx">
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
</file>

<file path="src/components/ui/resizable.tsx">
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
</file>

<file path="src/components/ui/scroll-area.tsx">
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
</file>

<file path="src/components/ui/select.tsx">
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
</file>

<file path="src/components/ui/separator.tsx">
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
</file>

<file path="src/components/ui/sheet.tsx">
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
</file>

<file path="src/components/ui/sidebar.tsx">
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
</file>

<file path="src/components/ui/skeleton.tsx">
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
</file>

<file path="src/components/ui/slider.tsx">
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
</file>

<file path="src/components/ui/sonner.tsx">
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
</file>

<file path="src/components/ui/switch.tsx">
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
</file>

<file path="src/components/ui/table.tsx">
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
</file>

<file path="src/components/ui/tabs.tsx">
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
</file>

<file path="src/components/ui/toast.tsx">
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
</file>

<file path="src/components/ui/toaster.tsx">
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
</file>

<file path="src/components/ui/toggle-group.tsx">
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
</file>

<file path="src/components/ui/toggle.tsx">
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
</file>

<file path="src/components/ui/tooltip.tsx">
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
</file>

<file path="src/components/ui/use-toast.ts">
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };
</file>

<file path="src/contexts/auth.ts">
import { createContext, useContext } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'none' | 'basico' | 'premium' | 'trial';
  planExpiresAt?: string;
  credits: number;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updatePlan: (plan: User['plan']) => void;
  clearError: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
</file>

<file path="src/contexts/layout.tsx">
import React, { createContext, useContext } from 'react';

export interface LayoutContextType {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = (): LayoutContextType => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used within a LayoutProvider');
  return ctx;
};
</file>

<file path="src/contexts/useAuth.ts">
export { useAuth } from './auth';
</file>

<file path="src/data/static.ts">
export interface Plan {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  features: string[];
  highlighted?: boolean;
  credits: number;
}

export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 'R$ 18,90',
    priceValue: 18.9,
    credits: 10,
    features: [
      '10 títulos por mês',
      'E-books e audiobooks',
      'Leitura online',
      'App mobile',
      'Suporte por email',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 26,90',
    priceValue: 26.9,
    credits: -1,
    highlighted: true,
    features: [
      'Títulos ilimitados',
      'E-books, audiobooks e comics',
      'Download offline (até 10)',
      '1 best-seller exclusivo/mês',
      'Suporte prioritário',
      'Sem anúncios',
    ],
  },
];

export const testimonials = [
  { name: 'Ana Silva', role: 'Assinante Premium', text: 'Substituí 3 apps de leitura pelo Lognet SVA. O catálogo é incrível e o player de audiobook é o melhor que já usei!', avatar: 'AS' },
  { name: 'Carlos Mendes', role: 'Assinante Básico', text: 'Perfeito pra quem é cliente Lognet Fibra. Leio no ônibus todo dia, funciona super bem offline.', avatar: 'CM' },
  { name: 'Marina Costa', role: 'Assinante Premium', text: 'Meus filhos adoram os comics e eu fico com os audiobooks. Melhor investimento da família!', avatar: 'MC' },
];
</file>

<file path="src/hooks/use-mobile.tsx">
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
</file>

<file path="src/hooks/use-toast.ts">
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
</file>

<file path="src/lib/utils.ts">
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
</file>

<file path="src/main.tsx">
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Font Awesome configuration
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

createRoot(document.getElementById("root")!).render(<App />);
</file>

<file path="src/pages/About.tsx">
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl prose">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Sobre a LogBooks</h1>

        <section className="mb-6">
          <p>
            A LogBooks é a plataforma de leitura digital da Lognet, dedicada a oferecer acesso a ebooks, audiobooks
            e quadrinhos com uma experiência simples e moderna. Nosso objetivo é democratizar o acesso à cultura,
            conectando leitores a títulos nacionais e internacionais em um único lugar.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
          <p>
            Levar conhecimento, entretenimento e educação por meio de experiências digitais de alta qualidade,
            com foco na usabilidade, acessibilidade e suporte ao leitor em todas as plataformas.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">O que oferecemos</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Acesso a milhares de ebooks e audiobooks</li>
            <li>Modo offline para leitura e áudio</li>
            <li>Sistema de recomendações personalizado</li>
            <li>Suporte e atendimento ao cliente</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contato</h2>
          <p className="text-muted-foreground">Para parcerias, imprensa ou suporte: contato@lognetbr.com.br</p>
        </section>

        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft size={18} className="mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/">
              <img src={logoImg} alt="Lognet SVA" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground text-center">
              © 2026 <a href="https://lognetbr.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BRLognet</a>. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
</file>

<file path="src/pages/NotFound.tsx">
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
</file>

<file path="src/test/example.test.ts">
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
</file>

<file path="src/test/setup.ts">
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
</file>

<file path="src/vite-env.d.ts">
/// <reference types="vite/client" />
</file>

<file path="tsconfig.app.json">
{
  "compilerOptions": {
    "types": ["vitest/globals"],
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
</file>

<file path="tsconfig.json">
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}
</file>

<file path="tsconfig.node.json">
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
</file>

<file path="vitest.config.ts">
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
</file>

<file path=".env.production">
VITE_API_BASE_URL=https://logbooks-api.redelognet.com.br
</file>

<file path=".github/workflows/deploy-lognet.yml.bkp">
name: Deploy React App to Nginx

# Gatilho: roda quando houver push na branch main
on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest   # Ambiente do GitHub Actions (Ubuntu)

    steps:
      # 1️⃣ Baixar o código do repositório
      - name: Checkout code
        uses: actions/checkout@v4

      # 2️⃣ Configurar Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'  # Versão do Node.js
          cache: 'npm'

      # 3️⃣ Instalar dependências
      - name: Install dependencies
        run: npm ci   # npm ci garante build reproduzível no CI (mais rápido e confiável que npm install)

      # 4️⃣ Build do projeto React/Vite em modo produção
      # Gera os arquivos otimizados na pasta dist/
      - name: Build React app
        run: npm run build

      # 5️⃣ Deploy para o servidor Nginx via rsync
      # rsync é mais eficiente que SCP para sincronizar arquivos
      - name: Deploy to Nginx
        uses: burnett01/rsync-deployments@7.0.1
        with:
          # Switches do rsync:
          # -a = modo arquivo (preserva permissões, timestamps, etc)
          # -v = verbose (mostra o que está sendo copiado)
          # -z = comprime dados durante transferência
          # -r = recursivo (copia subpastas)
          # --delete = remove arquivos antigos do servidor que não existem mais no source
          switches: -avzr --delete

          # IMPORTANTE: a barra / no final copia APENAS O CONTEÚDO da pasta dist
          # Sem a barra, copiaria a pasta "dist" inteira
          path: dist/

          # Pasta de destino no servidor (onde o Nginx serve os arquivos)
          remote_path: /var/www/html/projetos_web/logbooks/

          # Dados de conexão SSH (armazenados nos Secrets do GitHub)
          remote_host: ${{ secrets.SERVER_HOST }}      # IP ou domínio do servidor
          remote_port: ${{ secrets.SERVER_PORT }}      # Porta SSH (normalmente 22)
          remote_user: ${{ secrets.SERVER_USER }}      # Usuário SSH
          remote_key: ${{ secrets.SSH_PRIVATE_KEY }}   # Chave privada SSH

      # 6️⃣ Mensagem de sucesso
      - name: Deployment complete
        run: echo "React frontend netmap deployed successfully to nginx"
</file>

<file path="Dockerfile">
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
</file>

<file path="README.md">
# LogBooks — Plataforma de Leitura Digital

Plataforma de leitura digital da **Lognet**, que oferece acesso a ebooks, audiobooks e quadrinhos (HQs/mangás) em uma experiência moderna e responsiva.

<img width="1898" height="870" alt="image" src="https://github.com/user-attachments/assets/12940e56-b98c-43f2-a6e2-47241b8032ae" />

---

## Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilização | Tailwind CSS 3 |
| Componentes UI | Radix UI + shadcn/ui |
| Roteamento | React Router DOM v6 |
| Formulários | React Hook Form + Zod |
| Estado/Cache | TanStack React Query |
| Ícones | Lucide React + Font Awesome |
| Carrossel | Embla Carousel |
| Animações | Framer Motion |
| Notificações | Sonner |
| Testes | Vitest + Testing Library |

---

## Funcionalidades

- **Autenticação** — Cadastro, login e logout com persistência via `localStorage`
- **Catálogo** — Listagem com filtros por gênero, formato e busca textual
- **Player** — Leitor de ebooks/comics com controle de fonte e modo escuro; player de audiobooks com velocidade ajustável e progresso
- **Favoritos** — Adicionar/remover títulos favoritos
- **Downloads** — Gerenciamento de conteúdos disponíveis offline
- **Planos** — Tela de assinatura com fluxo de checkout simulado (Básico e Premium)
- **Perfil** — Exibição de dados do usuário, estatísticas e gerenciamento de conta
- **Páginas institucionais** — Sobre, Política de Privacidade e Termos de Uso
- **Landing Page** — Página pública com carrossel de imagens e destaques de funcionalidades

---

## Estrutura do Projeto

```
src/
├── assets/          # Imagens e logotipos
├── components/      # Componentes reutilizáveis
│   ├── ui/          # Componentes base (shadcn/ui)
│   ├── AppLayout    # Layout principal autenticado (header + sidebar)
│   ├── BookCard     # Card de item do catálogo
│   ├── CategorySlider # Slider horizontal de livros por categoria
│   ├── Footer       # Rodapé global
│   └── NavLink      # Wrapper de NavLink com suporte a classes ativas
├── contexts/
│   ├── AuthContext  # Autenticação do usuário
│   └── AppContext   # Estado global (favoritos, downloads, progresso)
├── data/
│   └── mockData     # Dados simulados: catálogo, planos, depoimentos
├── hooks/           # Hooks utilitários (useToast, useIsMobile)
├── lib/             # Utilitários (cn)
├── pages/           # Páginas da aplicação
└── index.css        # Tokens de design (CSS custom properties)
```

---

## Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (Vite) |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Preview do build local |
| `npm run lint` | Lint com ESLint |
| `npm run test` | Executa testes (Vitest) |
| `npm run test:watch` | Testes em modo watch |

---

## Temas e Estilização

O projeto utiliza CSS custom properties definidas em `src/index.css` para suporte a tema claro e escuro. As cores primárias seguem a identidade visual da Lognet (paleta âmbar/laranja).

Principais tokens:

```css
--primary: 23 88% 51%;       /* Âmbar principal */
--accent: 263 54% 51%;       /* Roxo para destaques */
--gradient-primary: ...      /* Gradiente âmbar */
```

---

## Autenticação e Estado

A autenticação é simulada (sem backend real). Qualquer email/senha válidos criam uma sessão com plano `trial` de 7 dias. Os dados são persistidos no `localStorage` com as chaves:

| Chave | Conteúdo |
|---|---|
| `lognet-user` | Dados do usuário autenticado |
| `lognet-favs` | IDs dos favoritos |
| `lognet-downloads` | IDs dos downloads |
| `lognet-progress` | Progresso de leitura por ID |

---

## Versão

Versão atual: **1.7.0** — Veja o [CHANGELOG](./CHANGELOG.md) para o histórico completo de alterações.

---

## Contato

- **Email:** cesar.augusto.rj1@gmail.com  
- **Site:** [lognetbr.com.br](https://lognetbr.com.br)  
- **WhatsApp:** 0800 000 0192
</file>

<file path="src/components/CategorySlider.tsx">
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookCard from './BookCard';
import { Book } from '@/lib/books';

interface CategorySliderProps {
  title: string;
  items: Book[];
  accent?: string;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ title, items, accent }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  if (!items.length) return null;

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg sm:text-xl font-bold ${accent || 'text-foreground'}`}>{title}</h2>
        <div className="flex gap-1">
          <button onClick={() => scroll('left')} className="p-1.5 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll('right')} className="p-1.5 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {items.map(item => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;
</file>

<file path="src/components/ui/command.tsx">
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
</file>

<file path="src/components/ui/textarea.tsx">
import * as React from "react";

import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
</file>

<file path="src/contexts/app.ts">
import { createContext, useContext } from 'react';
import { Book } from '@/lib/books';

export interface AppContextType {
  favorites: string[];
  downloads: string[];
  wishlist: string[];
  readingProgress: Record<string, number>;
  toggleFavorite: (id: string) => void;
  toggleDownload: (id: string) => void;
  toggleWishlist: (id: string) => void;
  setProgress: (id: string, progress: number) => void;
  isFavorite: (id: string) => boolean;
  isDownloaded: (id: string) => boolean;
  isWishlisted: (id: string) => boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = (): AppContextType => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp deve ser usado dentro de um AppProvider');
  return ctx;
};
</file>

<file path="src/index.css">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 210 11% 15%;

    --card: 0 0% 100%;
    --card-foreground: 210 11% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 210 11% 15%;

    --primary: 23 88% 51%;
    --primary-foreground: 0 0% 100%;

    --secondary: 23 60% 70%;
    --secondary-foreground: 0 0% 100%;

    --muted: 210 20% 96%;
    --muted-foreground: 210 7% 46%;

    --accent: 263 54% 51%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --warning: 27 98% 54%;
    --warning-foreground: 0 0% 100%;

    --success: 23 70% 60%;
    --success-foreground: 0 0% 100%;

    --border: 210 20% 90%;
    --input: 210 20% 90%;
    --ring: 23 88% 51%;

    --radius: 0.75rem;

    --sidebar-background: 210 20% 98%;
    --sidebar-foreground: 210 11% 15%;
    --sidebar-primary: 23 88% 51%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 210 20% 96%;
    --sidebar-accent-foreground: 210 11% 15%;
    --sidebar-border: 210 20% 90%;
    --sidebar-ring: 23 88% 51%;

    --gradient-primary: linear-gradient(135deg, hsl(23, 88%, 51%), hsl(23, 60%, 70%));
    --gradient-hero: linear-gradient(135deg, hsl(23, 88%, 45%), hsl(23, 88%, 55%), hsl(23, 60%, 70%));
    --gradient-dark: linear-gradient(135deg, hsl(210, 11%, 10%), hsl(211, 50%, 15%));
    --shadow-card: 0 4px 20px -4px hsl(23 88% 51% / 0.08);
    --shadow-card-hover: 0 8px 30px -4px hsl(23 88% 51% / 0.15);
    --shadow-glow: 0 0 30px hsl(23 88% 51% / 0.3);
  }

  .dark {
    --background: 220 15% 8%;
    --foreground: 0 0% 92%;

    --card: 220 15% 12%;
    --card-foreground: 0 0% 92%;

    --popover: 220 15% 12%;
    --popover-foreground: 0 0% 92%;

    --primary: 23 88% 51%;
    --primary-foreground: 0 0% 100%;

    --secondary: 23 60% 70%;
    --secondary-foreground: 0 0% 100%;

    --muted: 220 15% 18%;
    --muted-foreground: 210 10% 60%;

    --accent: 263 54% 51%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 62% 40%;
    --destructive-foreground: 0 0% 100%;

    --warning: 27 98% 54%;
    --warning-foreground: 0 0% 100%;

    --success: 23 70% 60%;
    --success-foreground: 0 0% 100%;

    --border: 220 15% 20%;
    --input: 220 15% 20%;
    --ring: 23 88% 51%;

    --sidebar-background: 220 15% 10%;
    --sidebar-foreground: 0 0% 92%;
    --sidebar-primary: 23 88% 51%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 220 15% 15%;
    --sidebar-accent-foreground: 0 0% 92%;
    --sidebar-border: 220 15% 18%;
    --sidebar-ring: 23 88% 51%;

    --gradient-primary: linear-gradient(135deg, hsl(23, 88%, 51%), hsl(23, 60%, 70%));
    --gradient-hero: linear-gradient(135deg, hsl(23, 88%, 30%), hsl(23, 88%, 45%), hsl(23, 60%, 65%));
    --gradient-dark: linear-gradient(135deg, hsl(220, 15%, 6%), hsl(220, 20%, 10%));
    --shadow-card: 0 4px 20px -4px hsl(0 0% 0% / 0.3);
    --shadow-card-hover: 0 8px 30px -4px hsl(23 88% 51% / 0.2);
    --shadow-glow: 0 0 40px hsl(23 88% 51% / 0.25);
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }
}

@layer utilities {
  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-bg {
    background: var(--gradient-primary);
  }

  .gradient-hero-bg {
    background: var(--gradient-hero);
  }

  .shadow-card {
    box-shadow: var(--shadow-card);
  }

  .shadow-card-hover {
    box-shadow: var(--shadow-card-hover);
  }

  .shadow-glow {
    box-shadow: var(--shadow-glow);
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }

  .animate-slide-up {
    animation: slideUp 0.6s ease-out;
  }

  .animate-scale-in {
    animation: scaleIn 0.3s ease-out;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</file>

<file path="src/pages/Catalog.tsx">
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import BookCard from '@/components/BookCard';
import { listBooks, genres, formats, formatLabels, type Genre, type ContentFormat } from '@/lib/books';
import { Book } from '@/lib/books';
import { useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const Catalog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialQ = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQ);
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'all'>('all');
  const [selectedFormat, setSelectedFormat] = useState<ContentFormat | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const [items, setItems] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    listBooks({ q: query || undefined, genre: selectedGenre === 'all' ? undefined : selectedGenre, format: selectedFormat === 'all' ? undefined : selectedFormat, limit: 100 })
      .then((res) => {
        if (mounted) setItems(res);
      })
      .catch(() => {
        if (mounted) setItems([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => { mounted = false; };
  }, [query, selectedGenre, selectedFormat]);

  const filtered = items;

  const clearFilters = () => { setQuery(''); setSelectedGenre('all'); setSelectedFormat('all'); };

  return (
    <AppLayout>
      <div className="mb-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground mb-4">Catálogo</h1>

        {/* Search */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar por título ou autor..."
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`h-11 px-4 rounded-xl flex items-center gap-2 text-sm font-medium transition-colors ${
              showFilters ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            <SlidersHorizontal size={16} /> Filtros
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-4 animate-scale-in">
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setSelectedFormat('all')} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedFormat === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                Todos
              </button>
              {formats.map(f => (
                <button key={f} onClick={() => setSelectedFormat(f)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedFormat === f ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                  {formatLabels[f]}
                </button>
              ))}
            </div>
            <div className="w-full" />
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setSelectedGenre('all')} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedGenre === 'all' ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                Todos gêneros
              </button>
              {genres.map(g => (
                <button key={g} onClick={() => setSelectedGenre(g)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedGenre === g ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                  {g}
                </button>
              ))}
            </div>
            {(selectedGenre !== 'all' || selectedFormat !== 'all' || query) && (
              <button onClick={clearFilters} className="px-3 py-1.5 rounded-full text-xs font-medium text-destructive hover:bg-destructive/10 transition-colors">
                Limpar filtros
              </button>
            )}
          </div>
        )}

        <p className="text-sm text-muted-foreground">{loading ? 'Carregando...' : `${filtered.length} título${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {!loading && filtered.map(item => (
          <BookCard key={item.id} item={item} size="lg" />
        ))}
        {loading && (
          <div className="col-span-full text-center py-10">Carregando...</div>
        )}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg text-muted-foreground">Nenhum resultado encontrado.</p>
          <button onClick={clearFilters} className="text-primary text-sm hover:underline mt-2">Limpar filtros</button>
        </div>
      )}
    </AppLayout>
  );
};

export default Catalog;
</file>

<file path="src/pages/Profile.tsx">
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useAuth } from '@/contexts/auth';
import { useApp } from '@/contexts/app';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, BookOpen, Heart, Download, Settings, LogOut } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const { favorites, downloads } = useApp();

  if (!user) return null;

  const planLabels: Record<string, string> = { none: 'Sem plano', trial: 'Trial (7 dias)', basico: 'Básico', premium: 'Premium' };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto animate-fade-in">
        {/* Avatar section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-primary-foreground mb-3">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-xl font-bold text-foreground">{user.name}</h1>
          <p className="text-sm text-muted-foreground">{user.email}</p>
          <span className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            <Crown size={12} /> {planLabels[user.plan]}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { icon: BookOpen, label: 'Créditos', value: user.credits === 999 ? '∞' : String(user.credits) },
            { icon: Heart, label: 'Favoritos', value: String(favorites.length) },
            { icon: Download, label: 'Downloads', value: String(downloads.length) },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card rounded-2xl p-4 text-center shadow-card border border-border">
              <Icon size={20} className="mx-auto text-primary mb-1" />
              <p className="text-lg font-bold text-card-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Link to="/plans" className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-all">
            <Crown size={20} className="text-primary" />
            <div className="flex-1"><p className="text-sm font-medium text-card-foreground">Gerenciar Assinatura</p><p className="text-xs text-muted-foreground">Alterar plano, ver faturas</p></div>
          </Link>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
            <Settings size={20} className="text-muted-foreground" />
            <div className="flex-1"><p className="text-sm font-medium text-card-foreground">Configurações</p><p className="text-xs text-muted-foreground">Idioma, notificações, cache</p></div>
          </div>
          <button onClick={logout} className="w-full flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-all text-left">
            <LogOut size={20} className="text-destructive" />
            <p className="text-sm font-medium text-destructive">Sair da conta</p>
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
</file>

<file path="src/pages/Terms.tsx">
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto" />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl prose">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Termos e Condições de Uso – LogBooks</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">INTRODUÇÃO</h2>
          <p>
            O LogBooks é uma plataforma detida de responsabilidade da LogBooks Editora, Produtos e Serviços Digitais Ltda, empresa com sede no Brasil e inscrita no CNPJ sob o número 16.881.623/0001-50 (“LogBooks”).
          </p>
          <p>
            O LogBooks (“Plataforma”) serve como meio para que pessoas interessadas tenham acesso garantido e contínuo às versões digitais completas de várias obras literárias.
          </p>
          <p>
            Por meio destes Termos e Condições Gerais de Uso (“Termos”), o LogBooks apresenta aos usuários em geral as condições essenciais para o uso dos serviços oferecidos na Plataforma.
          </p>
          <p className="font-semibold">AO CLICAR EM “EU ACEITO”, VOCÊ CONCORDA COM OS PRESENTES TERMOS E CONDIÇÕES DE USO. AS DISPOSIÇÕES AQUI PRESENTES REGULAMENTARÃO A UTILIZAÇÃO DA PLATAFORMA, PORTANTO, LEIA-OS COM ATENÇÃO!</p>
          <p>
            Ao aceitar os Termos, você está confirmando que entende e concorda em obedecer a seus termos e é o único responsável por entender e cumprir todas as leis, normas, regulamentos e requisitos da jurisdição onde reside, que possam ser aplicáveis ao seu uso da plataforma.
          </p>
          <p>
            Salve ou imprima uma cópia dos termos para seu controle. Se você não entender qualquer uma das disposições dos termos, entre em contato conosco antes de usar a Plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">CADASTRO</h2>
          <p>
            Por meio da plataforma os usuários, observados determinados requisitos abaixo especificados, terão acesso garantido e contínuo às seguintes obras digitais: Obras literárias (E-books) e/ou obras literárias em formato de áudio (Audiobooks). "Obras Digitais" significam E-books e Audiobooks, em conjunto ou individualmente.
          </p>
          <p>
            Os interessados poderão se cadastrar na plataforma através de nosso website ou de nosso aplicativo e, uma vez cadastrados, poderão acessar as obras digitais a que tiverem acesso por meio de nosso aplicativo, disponível para dispositivos Android (a partir da versão 8.0) e IOS (a partir da versão 15.0).
          </p>
          <p>
            Para fins de utilização da plataforma, os usuários deverão criar uma conta na plataforma LogBooks informando, para fins de cadastro e verificação de benefícios, seus dados pessoais (nome, CPF, e-mail, telefone).
          </p>
          <p>
            Os usuários que efetuarem cadastro vinculado a algum parceiro do LogBooks só terão o cadastro aprovado caso estejam em dia com suas obrigações perante o respectivo parceiro.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">Planos de Contratação</h2>
          <p>
            O Cliente Avulso poderá se beneficiar da utilização do LogBooks e acesso às obras digitais mediante a contratação de um Plano de utilização diretamente com o LogBooks.
          </p>
          <p>
            Para contratação de plano de utilização, o cliente avulso deverá acessar a loja de aplicativos correspondente ao sistema operacional de seu dispositivo e realizar pela própria loja de aplicativos a assinatura mensal, conforme condições disponíveis no momento da contratação.
          </p>
          <p>
            Esses são os planos de contratação atualmente disponíveis para contratação (exemplo):
          </p>
          <ul>
            <li>E-books + Audiobooks R$ 39</li>
            <li>E-books R$ 23,90</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">OBRAS DIGITAIS DO CONTEÚDO</h2>
          <p>
            As Obras Digitais serão mensalmente disponibilizadas a todos os usuários conforme plano de utilização associado à sua conta. Os títulos poderão variar conforme contratos com editoras e distribuidoras.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">USO DAS OBRAS DIGITAIS</h2>
          <p>
            As obras digitais serão disponibilizadas e utilizadas apenas para fins pessoais e domésticos. O LogBooks garante aos usuários o direito exclusivo de visualizar e utilizar as obras digitais de forma irrestrita, a qualquer momento após o download, porém apenas para uso pessoal e não comercial.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">TRANSFERÊNCIA DE OBRAS DIGITAIS</h2>
          <p>
            Os usuários poderão exercer o direito de transferência de direitos das obras adquiridas através do LogBooks a outros Usuários cadastrados, observadas as regras descritas nos Termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">USO DA PLATAFORMA</h2>
          <p>
            O acesso à Plataforma é condicionado a utilização de equipamentos e softwares compatíveis. A responsabilidade pela verificação da compatibilidade técnica do aparelho é exclusiva dos usuários.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">EXCLUSÃO DE RESPONSABILIDADE</h2>
          <p>
            O uso da plataforma por menores de idade não é permitido; o LogBooks não se responsabiliza por interrupções fora de seu controle; e não oferece garantias além das previstas explicitamente nestes Termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">CANCELAMENTO</h2>
          <p>
            O LogBooks se reserva o direito de interromper o serviço, cancelar contas e manter acesso às obras já disponibilizadas conforme descrito nos Termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">PROPRIEDADE INTELECTUAL</h2>
          <p>
            Todos os conteúdos disponibilizados na plataforma são protegidos pelas leis de Propriedade Intelectual aplicáveis. É proibida a reprodução não autorizada das obras digitais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">DISPOSIÇÕES GERAIS</h2>
          <p>
            O presente Termo poderá ser alterado a qualquer momento a critério exclusivo do LogBooks. As condições destes Termos serão regidas e interpretadas de acordo com as leis da República Federativa do Brasil.
          </p>
        </section>

        <section className="mt-8">
          <p className="font-semibold">Quer falar com a gente?</p>
          <p className="text-sm">contato@lognetrj.com.br</p>
        </section>

        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft size={18} className="mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/">
              <img src={logoImg} alt="Lognet SVA" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground text-center">
              © 2026 <a href="https://lognetbr.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BRLognet</a>. Todos os direitos reservados. | <Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
</file>

<file path="tailwind.config.ts">
import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
</file>

<file path=".env.development">
VITE_API_BASE_URL=http://localhost:8080
</file>

<file path="package.json">
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^7.2.0",
    "@fortawesome/free-brands-svg-icons": "^7.2.0",
    "@fortawesome/free-regular-svg-icons": "^7.2.0",
    "@fortawesome/free-solid-svg-icons": "^7.2.0",
    "@fortawesome/react-fontawesome": "^3.2.0",
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "axios": "^1.13.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.34.1",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react": "^5.1.4",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "jsdom": "^20.0.3",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.21",
    "vitest": "^3.2.4"
  }
}
</file>

<file path="src/contexts/AppContext.tsx">
import React, { useState, useCallback, useEffect } from 'react';
import { Book } from '@/lib/books';
import { AppContext } from './app';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => JSON.parse(localStorage.getItem('lognet-favs') || '[]'));
  const [downloads, setDownloads] = useState<string[]>(() => JSON.parse(localStorage.getItem('lognet-downloads') || '[]'));
  const [wishlist, setWishlist] = useState<string[]>(() => JSON.parse(localStorage.getItem('lognet-wishlist') || '[]'));
  const [readingProgress, setReadingProgress] = useState<Record<string, number>>(() => JSON.parse(localStorage.getItem('lognet-progress') || '{}'));
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { localStorage.setItem('lognet-favs', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('lognet-downloads', JSON.stringify(downloads)); }, [downloads]);
  useEffect(() => { localStorage.setItem('lognet-wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem('lognet-progress', JSON.stringify(readingProgress)); }, [readingProgress]);

  const toggle = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, id: string) => {
    setList(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleFavorite = useCallback((id: string) => toggle(favorites, setFavorites, id), [favorites]);
  const toggleDownload = useCallback((id: string) => toggle(downloads, setDownloads, id), [downloads]);
  const toggleWishlist = useCallback((id: string) => toggle(wishlist, setWishlist, id), [wishlist]);

  const setProgress = useCallback((id: string, progress: number) => {
    setReadingProgress(prev => ({ ...prev, [id]: progress }));
  }, []);

  return (
    <AppContext.Provider value={{
      favorites, downloads, wishlist, readingProgress,
      toggleFavorite, toggleDownload, toggleWishlist, setProgress,
      isFavorite: (id) => favorites.includes(id),
      isDownloaded: (id) => downloads.includes(id),
      isWishlisted: (id) => wishlist.includes(id),
      searchQuery, setSearchQuery,
    }}>
      {children}
    </AppContext.Provider>
  );
};
</file>

<file path="src/lib/api.ts">
import axios from 'axios';

const meta = (import.meta as unknown as { env?: Record<string, string> });
const baseURL = meta.env?.VITE_API_BASE_URL ?? 'https://logbooks-api.redelognet.com.br';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token from localStorage to every request if present
api.interceptors.request.use((config: import('axios').AxiosRequestConfig) => {
  try {
    const token = localStorage.getItem('lognet-token');
    if (token) {
      config.headers = config.headers || {};
      (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }
  } catch (e) {
    void e;
  }
  return config;
});

export default api;
</file>

<file path="src/pages/BookDetail.tsx">
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import CategorySlider from '@/components/CategorySlider';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/app';
import { getBook, listBooks, formatLabels, formatIcons, type Book } from '@/lib/books';
import { useEffect, useState } from 'react';
import { Heart, Download, Play, BookOpen, Share2, Star, ArrowLeft, Clock, Globe } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, isDownloaded, toggleDownload, readingProgress } = useApp();

  const [item, setItem] = useState<Book | null>(null);
  const [related, setRelated] = useState<Book[]>([]);
  useEffect(() => {
    if (!id) return;
    let mounted = true;
    getBook(id)
      .then(b => { if (mounted) setItem(b); })
      .catch(() => { if (mounted) setItem(null); });
    return () => { mounted = false; };
  }, [id]);

  useEffect(() => {
    let mounted = true;
    if (item) {
      listBooks({ genre: item.genre, limit: 10 })
        .then(res => { if (mounted) setRelated(res.filter(r => r.id !== item.id)); })
        .catch(() => { if (mounted) setRelated([]); });
    }
    return () => { mounted = false; };
  }, [item]);

  if (!item) return <AppLayout><div className="text-center py-20"><p className="text-muted-foreground">Item não encontrado.</p><Link to="/catalog" className="text-primary hover:underline">Voltar ao catálogo</Link></div></AppLayout>;

  const progress = readingProgress[item.id] || item.progress || 0;
  const fav = isFavorite(item.id);
  const downloaded = isDownloaded(item.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: item.title, text: `Confira "${item.title}" no Lognet SVA!`, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: 'Link copiado!' });
    }
  };

  return (
    <AppLayout>
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft size={16} /> Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-8 mb-12 animate-fade-in">
        {/* Cover */}
        <div className={`flex-shrink-0 w-48 sm:w-56 mx-auto md:mx-0 aspect-[2/3] rounded-2xl bg-gradient-to-br ${item.coverColor} shadow-card-hover flex items-center justify-center`}>
          <div className="text-center p-6">
            <p className="text-lg font-bold mb-1" style={{ color: 'white' }}>{item.title}</p>
            <p className="text-sm opacity-75" style={{ color: 'white' }}>{item.author}</p>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {formatIcons[item.format]} {formatLabels[item.format]}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">{item.genre}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{item.title}</h1>
          <p className="text-base text-muted-foreground mb-4">{item.author}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><Star size={14} className="text-warning" /> {item.rating}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {item.duration}</span>
            <span className="flex items-center gap-1"><Globe size={14} /> {item.language}</span>
          </div>

          {progress > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Progresso</span><span>{progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.synopsis}</p>

          <div className="flex flex-wrap gap-3">
            <Link to={`/player/${item.id}`}>
              <Button variant="hero" size="lg">
                <Play size={18} /> {progress > 0 ? 'Continuar' : item.format === 'audiobook' ? 'Ouvir Agora' : 'Ler Agora'}
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => { toggleDownload(item.id); toast({ title: downloaded ? 'Removido dos downloads' : 'Baixando para offline...' }); }}>
              <Download size={18} /> {downloaded ? 'Baixado' : 'Baixar'}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => { toggleFavorite(item.id); toast({ title: fav ? 'Removido dos favoritos' : 'Adicionado aos favoritos ❤️' }); }}>
              <Heart size={20} className={fav ? 'fill-destructive text-destructive' : ''} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleShare}>
              <Share2 size={20} />
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && <CategorySlider title="Você também pode gostar" items={related} />}
    </AppLayout>
  );
};

export default BookDetail;
</file>

<file path="src/pages/BooksAdmin.tsx">
import React, { useEffect, useMemo, useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pencil, Trash2, Plus, Upload, X } from 'lucide-react';
import { listBooks, createBook, updateBook, deleteBook, apiBase, Book } from '@/lib/books';

type Tipo = 'PDF' | 'EPUB' | 'AUDIOBOOK';
type Status = 'ATIVO' | 'INATIVO' | 'PROCESSANDO' | 'ERRO';

type Livro = {
  id: number;
  nome: string;
  autor?: string;
  descricao?: string;
  genero?: string;
  ano?: number | null;
  isbn?: string | null;
  tipo: Tipo;
  arquivo_bucket?: string | null;
  arquivo_key?: string | null;
  tamanho_bytes?: number | null;
  capa_bucket?: string | null;
  capa_key?: string | null;
  duracao_segundos?: number | null;
  status: Status;
  created_at?: string;
  updated_at?: string;
};

const STORAGE_KEY = 'admin:livros';

const emptyLivro = (): Partial<Livro> => ({
  nome: '',
  autor: '',
  descricao: '',
  genero: '',
  ano: null,
  isbn: '',
  tipo: 'PDF',
  arquivo_bucket: null,
  arquivo_key: null,
  tamanho_bytes: null,
  capa_bucket: null,
  capa_key: null,
  duracao_segundos: null,
  status: 'PROCESSANDO',
});

const BooksAdmin: React.FC = () => {
  const [items, setItems] = useState<Livro[]>([]);
  const [editing, setEditing] = useState<Partial<Livro> | null>(null);
  const [filter, setFilter] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [uploadingArquivo, setUploadingArquivo] = useState(false);
  const [uploadingCapa, setUploadingCapa] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(null);
  const [capaSelecionada, setCapaSelecionada] = useState<File | null>(null);

  // Carregar livros da API
  useEffect(() => {
    let mounted = true;
    const fetchBooks = async () => {
      try {
        const res = await listBooks({ limit: 500, page: 0 });
        let apiBooks: Livro[] = [];
        if (Array.isArray(res)) {
          apiBooks = res as unknown as Livro[];
        } else if (res && typeof res === 'object' && 'content' in res) {
          const resWithContent = res as Record<string, unknown>;
          if (Array.isArray(resWithContent.content)) {
            apiBooks = resWithContent.content as unknown as Livro[];
          }
        }
        if (mounted) setItems(apiBooks);
      } catch (e) {
        console.error('Erro ao carregar livros (admin):', e);
        if (mounted) setItems([]);
      }
    };
    fetchBooks();
    return () => { mounted = false };
  }, []);

  const startCreate = () => {
    setEditing(emptyLivro());
    setArquivoSelecionado(null);
    setCapaSelecionada(null);
    setDialogOpen(true);
  };

  const startEdit = (l: Livro) => {
    setEditing({ ...l });
    setArquivoSelecionado(null);
    setCapaSelecionada(null);
    setDialogOpen(true);
  };

  const handleUploadArquivo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setArquivoSelecionado(file);

    if (!editing?.id) {
      toast({
        title: 'Salve o livro primeiro',
        description: 'Crie o livro antes de fazer upload',
        variant: 'destructive',
      });
      return;
    }

    setUploadingArquivo(true);
    try {
      const formData = new FormData();
      formData.append('arquivo', file);

      const token = localStorage.getItem('lognet-token');
      const response = await fetch(`${apiBase}/api/v1/livros/${editing.id}/arquivo`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload do arquivo');
      }

      const data = await response.json();
      setEditing({
        ...editing,
        arquivo_bucket: data.bucket,
        arquivo_key: data.key,
        tamanho_bytes: data.tamanho,
        status: 'ATIVO',
      });

      toast({ title: 'Arquivo enviado com sucesso!' });
    } catch (error) {
      toast({
        title: 'Erro ao fazer upload',
        description: error instanceof Error ? error.message : 'Tente novamente',
        variant: 'destructive',
      });
    } finally {
      setUploadingArquivo(false);
    }
  };

  const handleUploadCapa = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCapaSelecionada(file);

    if (!editing?.id) {
      toast({
        title: 'Salve o livro primeiro',
        description: 'Crie o livro antes de fazer upload',
        variant: 'destructive',
      });
      return;
    }

    setUploadingCapa(true);
    try {
      const formData = new FormData();
      formData.append('capa', file);

      const token = localStorage.getItem('lognet-token');
      const response = await fetch(`${apiBase}/api/v1/livros/${editing.id}/capa`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload da capa');
      }

      const data = await response.json();
      setEditing({
        ...editing,
        capa_bucket: data.bucket,
        capa_key: data.key,
      });

      toast({ title: 'Capa enviada com sucesso!' });
    } catch (error) {
      toast({
        title: 'Erro ao fazer upload',
        description: error instanceof Error ? error.message : 'Tente novamente',
        variant: 'destructive',
      });
    } finally {
      setUploadingCapa(false);
    }
  };

  const save = () => {
    if (!editing || !editing.nome) {
      toast({ title: 'Nome é obrigatório', variant: 'destructive' });
      return;
    }

    (async () => {
      try {
        if (editing && editing.id) {
          const id = editing.id;
          const { id: _, ...payload } = editing;
          const updated = await updateBook(String(id), payload as Partial<Book>);
          setItems((prev) => prev.map((p) => (p.id === id ? (updated as unknown as Livro) : p)));
          toast({ title: 'Livro atualizado' });
        } else {
          const { id, ...payload } = editing;
          const created = await createBook(payload as Partial<Book>);
          setItems((prev) => [created as unknown as Livro, ...prev]);
          toast({ title: 'Livro criado' });
        }
      } catch (err) {
        toast({ title: 'Erro ao salvar', description: err instanceof Error ? err.message : 'Tente novamente', variant: 'destructive' });
      } finally {
        setEditing(null);
        setArquivoSelecionado(null);
        setCapaSelecionada(null);
        setDialogOpen(false);
      }
    })();
  };

  const remove = (id: number) => {
    (async () => {
      if (!confirm('Remover este livro?')) return;
      try {
        await deleteBook(String(id));
        setItems((prev) => prev.filter((p) => String(p.id) !== String(id)));
        toast({ title: 'Livro removido' });
      } catch (err) {
        toast({ title: 'Erro ao remover', description: err instanceof Error ? err.message : 'Tente novamente', variant: 'destructive' });
      }
    })();
  };

  const filtered = items.filter(
    (i) =>
      i.nome.toLowerCase().includes(filter.toLowerCase()) ||
      (i.autor || '').toLowerCase().includes(filter.toLowerCase())
  );

  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'ATIVO':
        return 'bg-green-100 text-green-800';
      case 'INATIVO':
        return 'bg-gray-100 text-gray-800';
      case 'PROCESSANDO':
        return 'bg-blue-100 text-blue-800';
      case 'ERRO':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b bg-background">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Administração de Livros</h1>
              <p className="text-sm text-muted-foreground mt-1">Gerencie o catálogo — crie, edite e remova livros.</p>
            </div>
            <div className="flex items-center gap-3">
              <Input
                placeholder="Buscar por nome ou autor"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-80"
              />
              <Button onClick={startCreate} className="inline-flex items-center gap-2">
                <Plus size={16} /> Novo livro
              </Button>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 overflow-hidden">
          <div className="max-w-[1400px] mx-auto h-full p-6">
            {/* List */}
            <div className="bg-card rounded-lg p-6 overflow-auto">
              {filtered.length === 0 ? (
                <div className="h-96 flex items-center justify-center text-muted-foreground">
                  Nenhum livro encontrado.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map((l) => (
                    <div key={l.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      {/* Capa (placeholder) */}
                      <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Sem capa</p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-semibold text-sm line-clamp-2">{l.nome}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-1">{l.autor || 'Desconhecido'}</p>
                        </div>

                        {/* Badges */}
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {l.tipo}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${getStatusColor(l.status)}`}>
                            {l.status}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => startEdit(l)}
                            className="flex-1 text-xs py-1 rounded border hover:bg-gray-50 flex items-center justify-center gap-1"
                          >
                            <Pencil size={12} /> Editar
                          </button>
                          <button
                            onClick={() => remove(l.id)}
                            className="flex-1 text-xs py-1 rounded border border-red-200 hover:bg-red-50 text-red-600 flex items-center justify-center gap-1"
                          >
                            <Trash2 size={12} /> Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing?.id ? 'Editar livro' : 'Novo livro'}</DialogTitle>
              <DialogDescription>Preencha os dados do livro e faça upload dos arquivos.</DialogDescription>
            </DialogHeader>

            {editing && (
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Informações</TabsTrigger>
                  <TabsTrigger value="arquivo">Arquivo</TabsTrigger>
                  <TabsTrigger value="capa">Capa</TabsTrigger>
                </TabsList>

                {/* Tab: Informações */}
                <TabsContent value="info" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold">Nome *</label>
                      <Input
                        value={editing.nome || ''}
                        onChange={(e) => setEditing({ ...editing, nome: e.target.value })}
                        placeholder="Nome do livro"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Autor</label>
                      <Input
                        value={editing.autor || ''}
                        onChange={(e) => setEditing({ ...editing, autor: e.target.value })}
                        placeholder="Nome do autor"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold">Descrição</label>
                    <Textarea
                      value={editing.descricao || ''}
                      onChange={(e) => setEditing({ ...editing, descricao: e.target.value })}
                      placeholder="Descrição do livro"
                      className="mt-1 resize-none"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-semibold">Tipo</label>
                      <select
                        className="w-full rounded border border-input bg-background px-3 py-2 mt-1 text-sm"
                        value={editing.tipo || 'PDF'}
                        onChange={(e) => setEditing({ ...editing, tipo: e.target.value as Tipo })}
                      >
                        <option value="PDF">PDF</option>
                        <option value="EPUB">EPUB</option>
                        <option value="AUDIOBOOK">AUDIOBOOK</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold">Status</label>
                      <select
                        className="w-full rounded border border-input bg-background px-3 py-2 mt-1 text-sm"
                        value={editing.status || 'ATIVO'}
                        onChange={(e) => setEditing({ ...editing, status: e.target.value as Status })}
                      >
                        <option value="ATIVO">ATIVO</option>
                        <option value="INATIVO">INATIVO</option>
                        <option value="PROCESSANDO">PROCESSANDO</option>
                        <option value="ERRO">ERRO</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold">Ano</label>
                      <Input
                        type="number"
                        value={editing.ano || ''}
                        onChange={(e) => setEditing({ ...editing, ano: e.target.value ? parseInt(e.target.value) : null })}
                        placeholder="YYYY"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold">ISBN</label>
                      <Input
                        value={editing.isbn || ''}
                        onChange={(e) => setEditing({ ...editing, isbn: e.target.value })}
                        placeholder="ISBN"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Gênero</label>
                      <Input
                        value={editing.genero || ''}
                        onChange={(e) => setEditing({ ...editing, genero: e.target.value })}
                        placeholder="Gênero"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {editing.tipo === 'AUDIOBOOK' && (
                    <div>
                      <label className="text-xs font-semibold">Duração (segundos)</label>
                      <Input
                        type="number"
                        value={editing.duracao_segundos || ''}
                        onChange={(e) =>
                          setEditing({
                            ...editing,
                            duracao_segundos: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                        placeholder="3600"
                        className="mt-1"
                      />
                    </div>
                  )}

                  {editing.created_at && (
                    <div className="text-xs text-muted-foreground bg-gray-50 p-3 rounded">
                      <div>Criado: {new Date(editing.created_at).toLocaleString('pt-BR')}</div>
                      {editing.updated_at && (
                        <div>Atualizado: {new Date(editing.updated_at).toLocaleString('pt-BR')}</div>
                      )}
                    </div>
                  )}
                </TabsContent>

                {/* Tab: Arquivo */}
                <TabsContent value="arquivo" className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-semibold mb-1">Arquivo Principal</p>
                    <p className="text-xs text-muted-foreground mb-4">PDF, EPUB ou Audiobook</p>
                    <label>
                      <input
                        type="file"
                        accept=".pdf,.epub,.mp3,.m4b"
                        onChange={handleUploadArquivo}
                        disabled={uploadingArquivo}
                        className="hidden"
                      />
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
                        disabled={uploadingArquivo || !editing.id}
                        onClick={(e) => {
                          if (!editing.id) {
                            toast({
                              title: 'Salve o livro primeiro',
                              description: 'Crie ou edite o livro antes de fazer upload',
                              variant: 'destructive',
                            });
                            return;
                          }
                          (e.currentTarget.previousElementSibling as HTMLInputElement)?.click();
                        }}
                      >
                        <Upload size={16} />
                        {uploadingArquivo ? 'Enviando...' : 'Selecionar arquivo'}
                      </button>
                    </label>
                  </div>

                  {arquivoSelecionado && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <div className="text-sm">
                        <p className="font-semibold text-green-900">{arquivoSelecionado.name}</p>
                        <p className="text-xs text-green-700">
                          {(arquivoSelecionado.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => setArquivoSelecionado(null)}
                        className="p-1 text-green-600 hover:bg-green-100 rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}

                  {editing.arquivo_key && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-900 mb-1">Arquivo Armazenado</p>
                      <p className="text-xs text-blue-700">Bucket: {editing.arquivo_bucket}</p>
                      <p className="text-xs text-blue-700">Key: {editing.arquivo_key}</p>
                      {editing.tamanho_bytes && (
                        <p className="text-xs text-blue-700">
                          Tamanho: {(editing.tamanho_bytes / 1024 / 1024).toFixed(2)} MB
                        </p>
                      )}
                    </div>
                  )}
                </TabsContent>

                {/* Tab: Capa */}
                <TabsContent value="capa" className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-semibold mb-1">Capa do Livro</p>
                    <p className="text-xs text-muted-foreground mb-4">JPG, PNG ou WebP</p>
                    <label>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={handleUploadCapa}
                        disabled={uploadingCapa}
                        className="hidden"
                      />
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
                        disabled={uploadingCapa || !editing.id}
                        onClick={(e) => {
                          if (!editing.id) {
                            toast({
                              title: 'Salve o livro primeiro',
                              description: 'Crie ou edite o livro antes de fazer upload',
                              variant: 'destructive',
                            });
                            return;
                          }
                          (e.currentTarget.previousElementSibling as HTMLInputElement)?.click();
                        }}
                      >
                        <Upload size={16} />
                        {uploadingCapa ? 'Enviando...' : 'Selecionar imagem'}
                      </button>
                    </label>
                  </div>

                  {capaSelecionada && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <div className="text-sm">
                        <p className="font-semibold text-green-900">{capaSelecionada.name}</p>
                        <p className="text-xs text-green-700">
                          {(capaSelecionada.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => setCapaSelecionada(null)}
                        className="p-1 text-green-600 hover:bg-green-100 rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}

                  {editing.capa_key && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-900 mb-1">Capa Armazenada</p>
                      <p className="text-xs text-blue-700">Bucket: {editing.capa_bucket}</p>
                      <p className="text-xs text-blue-700">Key: {editing.capa_key}</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            )}

            <DialogFooter className="gap-2">
              <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={save} disabled={!editing?.nome}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default BooksAdmin;
</file>

<file path="src/pages/Plans.tsx">
import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { plans } from '@/data/static';
import { Star, Check, CreditCard, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Plans: React.FC = () => {
  const { user, updatePlan } = useAuth();
  const [showCheckout, setShowCheckout] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubscribe = async (planId: string) => {
    setProcessing(true);
    await new Promise(r => setTimeout(r, 1500));
    updatePlan(planId as 'basico' | 'premium');
    setShowCheckout(null);
    setProcessing(false);
    toast({ title: '🎉 Assinatura ativada com sucesso!' });
  };

  const selectedPlan = plans.find(p => p.id === showCheckout);

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground text-center mb-2">Escolha seu Plano</h1>
        <p className="text-center text-muted-foreground mb-8">Comece com 7 dias grátis. Cancele quando quiser.</p>

        {user?.plan && user.plan !== 'none' && (
          <div className="bg-primary/5 rounded-2xl p-4 mb-8 text-center">
            <p className="text-sm text-primary font-medium">
              Plano atual: <strong>{user.plan === 'trial' ? 'Trial Grátis' : user.plan.charAt(0).toUpperCase() + user.plan.slice(1)}</strong>
              {user.planExpiresAt && ` • Ativo até ${new Date(user.planExpiresAt).toLocaleDateString('pt-BR')}`}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted ? 'gradient-bg text-primary-foreground shadow-glow' : 'bg-card border border-border shadow-card'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-warning text-warning-foreground text-xs font-bold">
                  Mais Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? '' : 'text-card-foreground'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'opacity-80' : 'text-muted-foreground'}`}>/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${plan.highlighted ? 'opacity-90' : 'text-muted-foreground'}`}>
                    <Check size={14} className="mt-0.5 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'secondary' : 'hero'}
                size="lg"
                className="w-full"
                onClick={() => setShowCheckout(plan.id)}
                disabled={user?.plan === plan.id}
              >
                {user?.plan === plan.id ? 'Plano Atual' : 'Assinar'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm p-4">
          <div className="bg-card rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-card-hover animate-scale-in border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-card-foreground">Checkout - {selectedPlan.name}</h2>
              <button onClick={() => setShowCheckout(null)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nome no Cartão</label>
                <input defaultValue={user?.name} className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Número do Cartão</label>
                <input placeholder="4242 4242 4242 4242" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Validade</label>
                  <input placeholder="12/28" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">CVV</label>
                  <input placeholder="123" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">CPF</label>
                <input placeholder="000.000.000-00" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Plano {selectedPlan.name}</span>
                <span className="font-semibold text-foreground">{selectedPlan.price}/mês</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">7 dias grátis</span>
                <span className="font-semibold text-success">- {selectedPlan.price}</span>
              </div>
              <div className="border-t border-border mt-2 pt-2 flex justify-between text-sm">
                <span className="font-bold text-foreground">Total hoje</span>
                <span className="font-bold text-foreground">R$ 0,00</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full mt-4" onClick={() => handleSubscribe(selectedPlan.id)} disabled={processing}>
              <CreditCard size={18} /> {processing ? 'Processando...' : `Pagar ${selectedPlan.price}`}
            </Button>
            <p className="text-[10px] text-muted-foreground text-center mt-3">Pagamento simulado. Nenhum valor real será cobrado.</p>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default Plans;
</file>

<file path="vite.config.ts">
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
});
</file>

<file path="src/components/BookCard.tsx">
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Download, BookOpen, Headphones, MessageSquare } from 'lucide-react';
import { Book, formatIcons } from '@/lib/books';
import { useApp } from '@/contexts/app';

interface BookCardProps {
  item: Book & { capa_key?: string; capaKey?: string };
  size?: 'sm' | 'md' | 'lg';
}

const formatIcon = {
  ebook: BookOpen,
  audiobook: Headphones,
  comic: MessageSquare,
};

const BookCard: React.FC<BookCardProps> = ({ item, size = 'md' }) => {
  const { isFavorite, toggleFavorite } = useApp();
  const fav = isFavorite(item.id);
  const Icon = formatIcon[item.format];

  // ✅ Estado para capa do MinIO
  const [capaUrl, setCapaUrl] = useState<string | null>(null);
  const [loadingCapa, setLoadingCapa] = useState(true);
  const [erroCapa, setErroCapa] = useState(false);

  // ✅ Carregar capa do MinIO
  useEffect(() => {
    const fetchCapa = async () => {
      try {
        setLoadingCapa(true);
        setErroCapa(false);

        // Verificar se tem capa_key (pode ser capa_key ou capaKey)
        const capaKey = item.capa_key || item.capaKey;
        
        if (!capaKey) {
          setLoadingCapa(false);
          return;
        }

        const response = await fetch(`/api/v1/livros/${item.id}/capa/link`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('lognet-token')}`,
          },
        });

        if (!response.ok) throw new Error('Erro ao buscar capa');

        const data = await response.json();
        setCapaUrl(data.url);
      } catch (err) {
        console.error('❌ Erro ao carregar capa:', err);
        setErroCapa(true);
      } finally {
        setLoadingCapa(false);
      }
    };

    fetchCapa();
  }, [item.id, item.capa_key, item.capaKey]);

  const sizeClasses = {
    sm: 'w-32',
    md: 'w-40 sm:w-44',
    lg: 'w-48 sm:w-52',
  };

  return (
    <div className={`${sizeClasses[size]} flex-shrink-0 group`}>
      <Link to={`/book/${item.id}`} className="block">
        <div className={`relative aspect-[2/3] rounded-xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:scale-105 bg-gradient-to-br ${item.coverColor}`}>
          {/* ✅ Imagem Real da Capa */}
          {capaUrl && !erroCapa && (
            <img
              src={capaUrl}
              alt={item.title}
              className="w-full h-full object-cover"
              onError={() => setErroCapa(true)}
            />
          )}

          {/* Fallback - sem capa ou erro */}
          {(!capaUrl || erroCapa) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <Icon className="mb-2 opacity-30" size={32} color="white" />
              <h3 className="text-xs sm:text-sm font-bold leading-tight mb-1" style={{ color: 'white' }}>
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs opacity-75" style={{ color: 'white' }}>
                {item.author}
              </p>
            </div>
          )}

          {/* Format badge */}
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background/90 text-foreground">
            {formatIcons[item.format]} {item.format === 'ebook' ? 'E-book' : item.format === 'audiobook' ? 'Áudio' : 'HQ'}
          </div>

          {/* Progress bar */}
          {item.progress && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30">
              <div className="h-full bg-success transition-all" style={{ width: `${item.progress}%` }} />
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={(e) => { e.preventDefault(); toggleFavorite(item.id); }}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart size={14} className={fav ? 'fill-destructive text-destructive' : 'text-foreground'} />
          </button>
        </div>
      </Link>

      <div className="mt-2 px-1">
        <h4 className="text-xs sm:text-sm font-semibold text-foreground truncate">
          {item.title}
        </h4>
        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
          {item.author}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-warning text-[10px]">★</span>
          <span className="text-[10px] text-muted-foreground">{item.rating}</span>
          <span className="text-[10px] text-muted-foreground ml-1">{item.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
</file>

<file path="src/lib/books.ts">
export type ContentFormat = 'ebook' | 'audiobook' | 'comic';
export type Genre =
  | 'Ficção'
  | 'Romance'
  | 'Autoajuda'
  | 'Negócios'
  | 'Terror'
  | 'Fantasia'
  | 'Infantil'
  | 'Biografia'
  | 'Ciência'
  | 'HQ'
  | 'Mangá'
  | 'Poesia'
  | 'História';

export interface Book {
  id: string;
  title: string;
  author: string;
  format: ContentFormat;
  genre: Genre;
  language?: string;
  duration?: string;
  rating?: number;
  coverColor?: string;
  synopsis?: string;
  progress?: number;
  isFavorite?: boolean;
}

export const genres: Genre[] = [
  'Ficção',
  'Romance',
  'Autoajuda',
  'Negócios',
  'Terror',
  'Fantasia',
  'Infantil',
  'Biografia',
  'Ciência',
  'HQ',
  'Mangá',
  'Poesia',
  'História',
];

export const formats: ContentFormat[] = ['ebook', 'audiobook', 'comic'];

export const formatLabels: Record<ContentFormat, string> = {
  ebook: 'E-book',
  audiobook: 'Audiobook',
  comic: 'HQ / Comic',
};

export const formatIcons: Record<ContentFormat, string> = {
  ebook: '📖',
  audiobook: '🎧',
  comic: '💬',
};

const getApiBase = () => {
  const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};
  if (env.VITE_API_URL) return env.VITE_API_URL.replace(/\/$/, '');
  try {
    const loc = window.location;
    return `${loc.protocol}//${loc.hostname}:8080`;
  } catch (e) {
    return 'http://localhost:8080';
  }
};

export const apiBase = getApiBase();

function buildHeaders(contentType?: string) {
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (contentType) headers['Content-Type'] = contentType;
  try {
    const token = localStorage.getItem('lognet-token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  } catch (e) {
    // ignore
  }
  return headers;
}

function qs(params: Record<string, unknown>) {
  const parts: string[] = [];
  Object.keys(params).forEach((k) => {
    const v = params[k as keyof typeof params];
    if (v === undefined || v === null || v === '') return;
    if (Array.isArray(v)) {
      (v as unknown[]).forEach((vv) => parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(vv))}`));
    } else {
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
    }
  });
  return parts.length ? `?${parts.join('&')}` : '';
}

export async function listBooks(options?: { q?: string; genre?: string; format?: string; page?: number; limit?: number; ids?: string[] }) {
  const params: Record<string, unknown> = {};
  if (options?.q) params.q = options.q;
  if (options?.genre) params.genre = options.genre;
  if (options?.format) params.format = options.format;
  if (options?.page) params.page = options.page;
  if (options?.limit) params.limit = options.limit;
  if (options?.ids) params.ids = options.ids;

  const url = `${apiBase}/api/v1/livros${qs(params)}`;
  const res = await fetch(url, { method: 'GET', headers: buildHeaders() });
  if (!res.ok) throw new Error(`Failed to fetch books: ${res.status}`);
  const data = await res.json().catch(() => null);
  if (!data) return [];

  const normalize = (raw: unknown): Book => {
    const r = raw as Record<string, unknown>;
    const maybeTitulo = (r.title as string) || (r.titulo as string) || (r.nome as string) || '';
    const maybeAuthor = (r.author as string) || (r.autor as string) || '';
    let format = (r.format as string) || (r.formato as string) || undefined;
    if (!format) {
      const t = ((r.tipo as string) || '').toString().toUpperCase();
      if (t === 'AUDIOBOOK') format = 'audiobook';
      else if (t === 'PDF' || t === 'EPUB') format = 'ebook';
      else if (t === 'HQ' || t === 'MANGA' || t === 'MANGÁ' || t === 'COMIC') format = 'comic';
      else format = 'ebook';
    }

    return {
      id: r.id ? String(r.id) : String(Math.random()),
      title: maybeTitulo,
      author: maybeAuthor,
      format: format as ContentFormat,
      genre: ((r.genero as Genre) || (r.genre as Genre)) || 'Ficção',
      language: (r.language as string) || (r.idioma as string) || undefined,
      duration: (r.duration as string) || (r.duracao as string) || undefined,
      rating: typeof r.rating === 'number' ? (r.rating as number) : undefined,
      coverColor: (r.coverColor as string) || (r.capaColor as string) || 'from-amber-100 to-orange-100',
      synopsis: (r.synopsis as string) || (r.descricao as string) || undefined,
      progress: typeof r.progress === 'number' ? (r.progress as number) : undefined,
      isFavorite: !!r.isFavorite,
    } as Book;
  };

  // If API returned a page
  if (Array.isArray(data)) return data.map(normalize);
  if (data && typeof data === 'object' && Array.isArray(data.content)) return data.content.map(normalize);
  return [];
}

export async function getBook(id: string) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  const res = await fetch(url, { method: 'GET', headers: buildHeaders() });
  if (!res.ok) throw new Error(`Failed to fetch book ${id}: ${res.status}`);
  const raw = await res.json();

  const normalize = (raw: unknown): Book => {
    const r = raw as Record<string, unknown>;
    const maybeTitulo = (r.title as string) || (r.titulo as string) || (r.nome as string) || '';
    const maybeAuthor = (r.author as string) || (r.autor as string) || '';
    let format = (r.format as string) || (r.formato as string) || undefined;
    if (!format) {
      const t = ((r.tipo as string) || '').toString().toUpperCase();
      if (t === 'AUDIOBOOK') format = 'audiobook';
      else if (t === 'PDF' || t === 'EPUB') format = 'ebook';
      else if (t === 'HQ' || t === 'MANGA' || t === 'MANGÁ' || t === 'COMIC') format = 'comic';
      else format = 'ebook';
    }

    return {
      id: r.id ? String(r.id) : String(Math.random()),
      title: maybeTitulo,
      author: maybeAuthor,
      format: format as ContentFormat,
      genre: ((r.genero as Genre) || (r.genre as Genre)) || 'Ficção',
      language: (r.language as string) || (r.idioma as string) || undefined,
      duration: (r.duration as string) || (r.duracao as string) || undefined,
      rating: typeof r.rating === 'number' ? (r.rating as number) : undefined,
      coverColor: (r.coverColor as string) || (r.capaColor as string) || 'from-amber-100 to-orange-100',
      synopsis: (r.synopsis as string) || (r.descricao as string) || undefined,
      progress: typeof r.progress === 'number' ? (r.progress as number) : undefined,
      isFavorite: !!r.isFavorite,
    } as Book;
  };

  return normalize(raw);
}

export async function createBook(payload: Partial<Book>) {
  const url = `${apiBase}/api/v1/livros`;
  const res = await fetch(url, { method: 'POST', headers: buildHeaders('application/json'), body: JSON.stringify(payload) });
  if (!res.ok) throw new Error(`Failed to create book: ${res.status}`);
  return (await res.json()) as Book;
}

export async function updateBook(id: string, payload: Partial<Book>) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  const res = await fetch(url, { method: 'PUT', headers: buildHeaders('application/json'), body: JSON.stringify(payload) });
  if (!res.ok) throw new Error(`Failed to update book ${id}: ${res.status}`);
  return (await res.json()) as Book;
}

export async function patchStatus(id: string, status: 'ATIVO' | 'INATIVO') {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}/status`;
  const res = await fetch(url, { method: 'PATCH', headers: buildHeaders('application/json'), body: JSON.stringify({ status }) });
  if (!res.ok) throw new Error(`Failed to patch status for ${id}: ${res.status}`);
  return (await res.json()) as Book;
}

export async function deleteBook(id: string) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  const res = await fetch(url, { method: 'DELETE', headers: buildHeaders() });
  if (!res.ok) throw new Error(`Failed to delete book ${id}: ${res.status}`);
  return true;
}
</file>

<file path="src/pages/Downloads.tsx">
import React from 'react';
import AppLayout from '@/components/AppLayout';
import BookCard from '@/components/BookCard';
import { useApp } from '@/contexts/app';
import { listBooks, Book } from '@/lib/books';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

const DownloadsPage: React.FC = () => {
  const { downloads } = useApp();
  const [items, setItems] = useState<Book[]>([]);
  useEffect(() => {
    let mounted = true;
    if (!downloads || downloads.length === 0) { setItems([]); return; }
    listBooks({ ids: downloads })
      .then(res => { if (mounted) setItems(res); })
      .catch(() => { if (mounted) setItems([]); });
    return () => { mounted = false; };
  }, [downloads]);

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-foreground mb-2">Downloads Offline</h1>
      <p className="text-sm text-muted-foreground mb-6">{items.length}/10 itens baixados • {(items.length * 102).toLocaleString()} MB usados de 1 GB</p>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <Download size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Nenhum download ainda.</p>
          <p className="text-sm text-muted-foreground mt-1">Baixe conteúdos para ler sem internet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map(item => <BookCard key={item.id} item={item} size="lg" />)}
        </div>
      )}
    </AppLayout>
  );
};

export default DownloadsPage;
</file>

<file path="src/pages/Favorites.tsx">
import React from 'react';
import AppLayout from '@/components/AppLayout';
import BookCard from '@/components/BookCard';
import { useApp } from '@/contexts/app';
import { listBooks, Book } from '@/lib/books';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Favorites: React.FC = () => {
  const { favorites } = useApp();
  const [items, setItems] = useState<Book[]>([]);
  useEffect(() => {
    let mounted = true;
    if (!favorites || favorites.length === 0) { setItems([]); return; }
    listBooks({ ids: favorites })
      .then(res => { if (mounted) setItems(res); })
      .catch(() => { if (mounted) setItems([]); });
    return () => { mounted = false; };
  }, [favorites]);

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-foreground mb-6">Favoritos</h1>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <Heart size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Nenhum favorito ainda.</p>
          <p className="text-sm text-muted-foreground mt-1">Toque no ❤️ em qualquer título para adicionar.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map(item => <BookCard key={item.id} item={item} size="lg" />)}
        </div>
      )}
    </AppLayout>
  );
};

export default Favorites;
</file>

<file path="src/pages/Index.tsx">
import React from 'react';
import { useAuth } from '@/contexts/auth';
import Landing from './Landing';
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import logoImg from '@/assets/logoh.png';

const Index: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <img src={logoImg} alt="Lognet SVA" className="h-16 w-auto mx-auto mb-4" />
          <div className="mt-4">
            <FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-primary" />
          </div>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Dashboard /> : <Landing />;
};

export default Index;
</file>

<file path="src/pages/Player.tsx">
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBook, Book } from '@/lib/books';
import { useApp } from '@/contexts/app';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Bookmark, Moon, Type, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Player: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setProgress, readingProgress } = useApp();
  const [item, setItem] = useState<Book | null>(null);
  useEffect(() => {
    if (!id) return;
    let mounted = true;
    getBook(id).then(b => { if (mounted) setItem(b); }).catch(() => { if (mounted) setItem(null); });
    return () => { mounted = false; };
  }, [id]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(readingProgress[id || ''] || 0);
  const [fontSize, setFontSize] = useState(16);
  const [darkReader, setDarkReader] = useState(false);

  useEffect(() => {
    if (!item) return;
    let interval: NodeJS.Timeout;
    if (isPlaying && item.format === 'audiobook') {
      interval = setInterval(() => {
        setCurrentProgress(p => {
          const next = Math.min(p + 0.5 * speed, 100);
          setProgress(item.id, Math.round(next));
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, item, setProgress]);

  if (!item) return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground">Item não encontrado.</p></div>;

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];

  // Mock text content for ebook/comic
  const mockText = `Capítulo 1\n\n${item.synopsis}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;

  return (
    <div className={`min-h-screen ${darkReader ? 'bg-[hsl(220,15%,8%)] text-[hsl(0,0%,88%)]' : 'bg-background text-foreground'} transition-colors duration-300`}>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 bg-background/90 backdrop-blur border-b border-border">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={18} /> Voltar
        </button>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground truncate max-w-[200px]">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.author}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setDarkReader(!darkReader)}>
          <Moon size={18} />
        </Button>
      </div>

      {/* Progress bar */}
      <div className="fixed top-14 left-0 right-0 z-40 h-1 bg-muted">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${currentProgress}%` }} />
      </div>

      {/* Content */}
      <div className="pt-20 pb-32 px-4 max-w-2xl mx-auto">
        {item.format === 'audiobook' ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${item.coverColor} shadow-glow flex items-center justify-center mb-8`}>
              <p className="text-lg font-bold text-center px-4" style={{ color: 'white' }}>{item.title}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{Math.round(currentProgress)}% concluído</p>
            <div className="w-full max-w-sm h-2 bg-muted rounded-full overflow-hidden mb-8">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${currentProgress}%` }} />
            </div>
          </div>
        ) : (
          <div>
            {/* Reader controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button onClick={() => setFontSize(s => Math.max(12, s - 2))} className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground"><Minus size={16} /></button>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Type size={14} /> {fontSize}px</span>
              <button onClick={() => setFontSize(s => Math.min(28, s + 2))} className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground"><Plus size={16} /></button>
            </div>

            <div className="prose max-w-none" style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}>
              {mockText.split('\n\n').map((p, i) => (
                <p key={i} className={`mb-4 ${darkReader ? 'text-[hsl(0,0%,88%)]' : 'text-foreground'}`}>{p}</p>
              ))}
            </div>

            {/* Page navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button variant="outline" size="sm" onClick={() => setCurrentProgress(p => { const n = Math.max(0, p - 10); setProgress(item.id, n); return n; })}>
                <ChevronLeft size={16} /> Anterior
              </Button>
              <span className="text-xs text-muted-foreground">Página {Math.round(currentProgress / 10) + 1} de 10</span>
              <Button variant="outline" size="sm" onClick={() => setCurrentProgress(p => { const n = Math.min(100, p + 10); setProgress(item.id, n); return n; })}>
                Próxima <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Audio controls (audiobook only) */}
      {item.format === 'audiobook' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-t border-border p-4">
          <div className="max-w-md mx-auto flex flex-col items-center gap-3">
            <div className="flex items-center gap-6">
              <button onClick={() => setCurrentProgress(p => Math.max(0, p - 5))} className="text-muted-foreground hover:text-foreground">
                <SkipBack size={22} />
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)} className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                {isPlaying ? <Pause size={24} className="text-primary-foreground" /> : <Play size={24} className="text-primary-foreground ml-0.5" />}
              </button>
              <button onClick={() => setCurrentProgress(p => Math.min(100, p + 5))} className="text-muted-foreground hover:text-foreground">
                <SkipForward size={22} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => { const i = speeds.indexOf(speed); setSpeed(speeds[(i + 1) % speeds.length]); }}
                className="px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground hover:text-foreground">
                {speed}x
              </button>
              <button className="text-muted-foreground hover:text-foreground"><Bookmark size={18} /></button>
              <button className="text-muted-foreground hover:text-foreground"><Moon size={18} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
</file>

<file path="src/pages/Register.tsx">
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, User } from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) { toast({ title: 'Preencha todos os campos', variant: 'destructive' }); return; }
    if (password.length < 8) { toast({ title: 'Senha deve ter no mínimo 8 caracteres', variant: 'destructive' }); return; }
    setLoading(true);
    const ok = await register(name, email, password);
    setLoading(false);
    if (ok) { toast({ title: 'Conta criada! Bem-vindo ao Lognet SVA 🎉' }); navigate('/'); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md animate-scale-in">
        <div className="text-center mb-8">
          <Link to="/">
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto mx-auto" />
          </Link>
          <p className="text-muted-foreground mt-2">Crie sua conta e comece 7 dias grátis</p>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Senha</label>
              <div className="relative">
                <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full h-11 pl-4 pr-10 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Criando conta...' : 'Criar Conta Grátis'}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Já tem conta? <Link to="/login" className="text-primary font-medium hover:underline">Fazer login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
</file>

<file path="src/App.tsx">
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Catalog from "./pages/Catalog";
import BookDetail from "./pages/BookDetail";
import Player from "./pages/Player";
import Favorites from "./pages/Favorites";
import DownloadsPage from "./pages/Downloads";
import Profile from "./pages/Profile";
import Plans from "./pages/Plans";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BooksAdmin from "./pages/BooksAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/player/:id" element={<Player />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin/livros" element={<BooksAdmin />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AppProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
</file>

<file path="src/pages/Privacy.tsx">
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl prose">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Política de Privacidade</h1>
        <h2 className="text-lg font-semibold mb-6">POLÍTICA DE PRIVACIDADE – LogBooks</h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. INTRODUÇÃO</h3>
          <p>
            A presente Política de Privacidade tem por objetivo esclarecer e informar, de forma transparente, como a “LogBooks Editora, Produtos e Serviços Digitais Ltda.” (“Nós” ou “LogBooks”), trata os dados pessoais das pessoas com quem interage como Usuários (a partir de agora também denominados “Você”) e como tais dados são coletados, utilizados, armazenados, tratados e protegidos no contexto da LogBooks (“PLATAFORMA”).
          </p>
          <p>
            Para os fins desta Política de Privacidade, a LogBooks será considerada a Controladora de Dados. Os detalhes de contato são fornecidos ao final desta Política.
          </p>
          <p>
            Ao se cadastrar ou usar, de qualquer forma, a PLATAFORMA ou o website da LogBooks, bem como ao clicar “EU ACEITO”, você concorda com esta Política de Privacidade e com todos os seus termos e condições.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. FINALIDADES DA POLÍTICA DE PRIVACIDADE</h3>
          <p>
            Esta seção explica as finalidades do tratamento de dados: transparência sobre motivos da coleta, operações de tratamento, direitos do usuário e bases legais aplicáveis.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. DADOS PESSOAIS</h3>
          <p className="mb-2">Dados fornecidos pelo Usuário (exemplos):</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground">
            <li>Nome</li>
            <li>CPF</li>
            <li>E-mail</li>
            <li>Telefone celular</li>
            <li>Data de nascimento</li>
          </ul>
          <p className="mb-2">Dados adicionais que podem ser fornecidos:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground">
            <li>RG</li>
            <li>Endereço</li>
            <li>Fotografia (selfie)</li>
            <li>Digital</li>
            <li>Placa de veículo</li>
          </ul>
          <p>
            A partir do uso da PLATAFORMA também são gerados dados técnicos e estatísticos (ex.: uso, consumo, avaliações) que permitem aprimorar recomendações e serviços.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. COLETA DE DADOS PESSOAIS</h3>
          <p>
            Os dados são, em regra, fornecidos pelo próprio Usuário no cadastro ou durante o uso da PLATAFORMA. Também poderemos tratar dados de forma agregada e anônima para fins estatísticos.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">5. OPERAÇÕES DE TRATAMENTO E FINALIDADES</h3>
          <p className="mb-2">Principais finalidades e operações de tratamento incluem:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground">
            <li>Cadastro e verificação cadastral (Base legal: execução de contrato)</li>
            <li>Atendimento e suporte ao usuário (Base legal: execução de contrato / legítimo interesse)</li>
            <li>Análise de avaliações e aprimoramento de produtos (Base legal: legítimo interesse / consentimento)</li>
            <li>Marketing e comunicações (Base legal: consentimento / legítimo interesse)</li>
            <li>Operacionalização da Plataforma (relatórios, transferências de direitos, etc.)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">6. COMPARTILHAMENTO DE DADOS COM TERCEIROS</h3>
          <p>
            Compartilhamos dados com prestadores de serviços (hospedagem, analytics, pagamentos), autoridades competentes quando exigido por lei, e parceiros quando necessário para a prestação do serviço, sempre observando obrigações contratuais de proteção de dados.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">7. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h3>
          <p>
            Poderemos transferir dados para provedores localizados em outros países quando necessário — sempre observando as exigências legais e medidas contratuais de proteção de dados.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">8. SEGURANÇA</h3>
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados, contudo nenhum sistema é totalmente invulnerável. Em caso de incidente de segurança, notificaremos os titulares e autoridades conforme a legislação aplicável.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">9. COOKIES</h3>
          <p>
            Utilizamos cookies de sessão e persistentes para melhorar a experiência do usuário; você pode ajustar as preferências do seu navegador para bloquear cookies, tendo ciência de que algumas funcionalidades podem ser impactadas.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">10. QUALIDADE, RETENÇÃO E DIREITOS</h3>
          <p>
            Mantemos seus dados corretos e atualizados pelo tempo necessário à finalidade; você tem direitos de acesso, retificação, eliminação, oposição, portabilidade e reclamação junto à ANPD.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">11. INFORMAÇÕES DE CONTATO</h3>
          <p>Em caso de dúvidas ou solicitações relativas a dados pessoais:</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>E-mail: contato@lognetrj.com.br</li>
            <li>Telefone: (11) 5645-1100</li>
            <li>Endereço: Rua Cerro Corá, 2175 - Vila Romana, São Paulo - SP, 05061-450</li>
            <li>Encarregado de Dados (DPO): Diego Orsatti — dpo@lognetrj.com.br</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">12. ATUALIZAÇÕES E ALTERAÇÕES</h3>
          <p>
            Esta Política poderá ser atualizada periodicamente; a continuidade no uso da PLATAFORMA após alterações implica aceitação das novas condições.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">13. LEI APLICÁVEL</h3>
          <p>Estas disposições são regidas pelas leis da República Federativa do Brasil.</p>
        </section>

        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft size={18} className="mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/">
              <img src={logoImg} alt="Lognet SVA" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground text-center">
              © 2026 <a href="https://lognetbr.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BRLognet</a>. Todos os direitos reservados. | <Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
</file>

<file path="src/pages/Dashboard.tsx">
import React from 'react';
import { useAuth } from '@/contexts/useAuth';
import { listBooks, Book as ApiBook } from '@/lib/books';
import { useEffect, useState } from 'react';
import CategorySlider from '@/components/CategorySlider';
import AppLayout from '@/components/AppLayout';
import { BookOpen, Headphones, MessageSquare, TrendingUp } from 'lucide-react';

interface Book extends ApiBook {
  nome: string;
  autor?: string;
  descricao?: string;
  genero?: string;
  tipo: 'PDF' | 'EPUB' | 'AUDIOBOOK';
  status: string;
  [key: string]: unknown;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [items, setItems] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchBooks = async () => {
      try {
        setLoading(true);
        console.log('📚 Carregando livros...');
        
        const res = await listBooks({ limit: 100, page: 0 });
        
        console.log('📦 Resposta da API:', res);
        
        // ✅ Tratar resposta (pode ser array ou Page object)
        let apiBooks: ApiBook[] = [];
        
        if (Array.isArray(res)) {
          apiBooks = res;
          console.log('✅ Resposta é um array');
        } else if (res && typeof res === 'object') {
          // Se for um objeto Page do Spring
          const pageRes = res as { content?: ApiBook[] };
          if ('content' in res && pageRes.content) {
            apiBooks = pageRes.content;
            console.log('✅ Resposta é um Page object, extraído content');
          } else {
            apiBooks = [];
            console.log('⚠️ Resposta é objeto mas sem propriedade content');
          }
        }
        
        // Transform ApiBook to Book interface and ensure `format` is present
        const books: Book[] = apiBooks.map((book) => {
          const b = book as unknown as Record<string, unknown>;
          const maybeTitulo = (book as ApiBook).title || (b.titulo as string) || (b.nome as string) || '';
          const maybeTipo = (b.tipo as string) || '';

          // derive format: prefer book.format or book.formato, otherwise map from tipo
          let format = (book as ApiBook).format || (b.formato as string) || undefined;
          if (!format) {
            const t = maybeTipo.toUpperCase();
            if (t === 'AUDIOBOOK') format = 'audiobook';
            else if (t === 'PDF' || t === 'EPUB') format = 'ebook';
            else if (t === 'HQ' || t === 'MANGA' || t === 'MANGÁ' || t === 'COMIC') format = 'comic';
            else format = 'ebook';
          }

          return {
            ...book,
            nome: maybeTitulo,
            tipo: (maybeTipo as 'PDF' | 'EPUB' | 'AUDIOBOOK') || 'PDF',
            status: (b.status as string) || 'disponível',
            // normalized fields expected by UI
            title: (book as ApiBook).title || maybeTitulo || (b.nome as string) || '',
            author: (book as ApiBook).author || (b.autor as string) || '',
            format: format as string,
            coverColor: (book as ApiBook).coverColor || (b.capaColor as string) || 'from-amber-100 to-orange-100',
          } as Book;
        });
        
        console.log('📚 Livros carregados:', books.length);
        
        if (mounted) {
          setItems(books);
          setError(null);
        }
      } catch (err) {
        console.error('❌ Erro ao carregar livros:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Erro ao carregar livros');
          setItems([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchBooks();
    
    return () => { 
      mounted = false; 
    };
  }, []);

  // ✅ Usar array vazio como fallback
  const safeItems = Array.isArray(items) ? items : [];

  const continueReading = safeItems
    .filter(i => i.progress && i.progress > 0)
    .slice(0, 10);
    
  const newReleases = safeItems.slice(0, 12);
  
  const bestSellers = safeItems
    .filter(i => i.rating >= 4.5)
    .slice(0, 12);
    
  const audiobooks = safeItems
    .filter((i) => (i.format || '').toString() === 'audiobook')
    .slice(0, 12);

  const comics = safeItems
    .filter((i) => (i.format || '').toString() === 'comic')
    .slice(0, 12);
    
  const recommended = safeItems
    .filter(i => i.genero === 'Ficção')
    .slice(0, 12);

  const stats = [
    { icon: BookOpen, label: 'E-books Lidos', value: '12', color: 'text-primary' },
    { icon: Headphones, label: 'Horas Ouvidas', value: '34h', color: 'text-secondary' },
    { icon: MessageSquare, label: 'HQs Lidas', value: '8', color: 'text-accent' },
    { icon: TrendingUp, label: 'Sequência', value: '5 dias', color: 'text-warning' },
  ];

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Carregando livros...</p>
        </div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-700 font-semibold">❌ Erro ao carregar livros</p>
          <p className="text-red-600 text-sm mt-1">{error}</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      {/* Greeting */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Olá, <span className="gradient-text">{user?.name || 'Leitor'}</span> 👋
        </h1>
        <p className="text-muted-foreground mt-1">O que vamos ler hoje?</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 animate-slide-up">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-card rounded-2xl p-4 shadow-card border border-border">
            <Icon size={20} className={`${color} mb-2`} />
            <p className="text-xl sm:text-2xl font-bold text-card-foreground">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      {continueReading.length > 0 && <CategorySlider title="📖 Continuar Lendo" items={continueReading} />}
      {newReleases.length > 0 && <CategorySlider title="🔥 Novos Lançamentos" items={newReleases} />}
      {bestSellers.length > 0 && <CategorySlider title="⭐ Best-sellers" items={bestSellers} />}
      {audiobooks.length > 0 && <CategorySlider title="🎧 Audiobooks Populares" items={audiobooks} />}
      {comics.length > 0 && <CategorySlider title="💬 Comics & Mangás" items={comics} />}
      {recommended.length > 0 && <CategorySlider title="✨ Recomendados para Você" items={recommended} accent="gradient-text" />}

      {/* Empty state */}
      {safeItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum livro disponível no momento.</p>
        </div>
      )}
    </AppLayout>
  );
};

export default Dashboard;
</file>

<file path="src/contexts/AuthContext.tsx">
import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import { AuthContext, AuthContextType, User } from './auth';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Restaurar usuário do localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem('lognet-user');
    const token = localStorage.getItem('lognet-token');

    if (saved && token) {
      try {
        const parsedUser = JSON.parse(saved);
        setUser(parsedUser);
      } catch (e) {
        console.error('Erro ao restaurar usuário:', e);
        localStorage.removeItem('lognet-user');
        localStorage.removeItem('lognet-token');
      }
    }
    setIsLoading(false);
  }, []);

  const apiBase = (() => {
    const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};
    if (env.VITE_API_URL) return env.VITE_API_URL.replace(/\/$/, '');
    try {
      const loc = window.location;
      return `${loc.protocol}//${loc.hostname}:8080`;
    } catch (e) {
      return 'http://localhost:8080';
    }
  })();

  const saveUser = useCallback((u: User) => {
    setUser(u);
    localStorage.setItem('lognet-user', JSON.stringify(u));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const login = useCallback(
    async (login: string, senha: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // Validações básicas
        if (!login || !senha) {
          throw new Error('Login e senha são obrigatórios');
        }

        if (login.length < 3) {
          throw new Error('Login deve ter no mínimo 3 caracteres');
        }

        if (senha.length < 6) {
          throw new Error('Senha deve ter no mínimo 6 caracteres');
        }

        console.log('🔐 Tentando login com:', { login, senhaLength: senha.length });

        // Chamada à API - usando login e senha (como esperado pela API)
        console.debug('[Auth] calling', `${apiBase}/api/v1/auth/login`);
        const response = await fetch(`${apiBase}/api/v1/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ login, senha }),
        });

        console.log('📡 Resposta da API:', {
          status: response.status,
          statusText: response.statusText,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('❌ Erro na resposta:', errorData);

          // Se houver detalhes de validação, mostre-os
          if (errorData.errors && Array.isArray(errorData.errors)) {
            const errorMessages = errorData.errors
              .map((e: { message?: string }) => e.message || String(e))
              .join(', ');
            throw new Error(errorMessages);
          }

          throw new Error(
            errorData.message ||
              errorData.msg ||
              `Erro ao fazer login (${response.status})`
          );
        }

        const data = await response.json();
        console.log('✅ Login bem-sucedido:', data);

        const token = data.token || data.accessToken || data.access_token;
        if (!token) {
          throw new Error('Token não recebido do servidor');
        }

        localStorage.setItem('lognet-token', token);

        // A resposta pode conter user ou ser o próprio usuário
        const serverUser = data.user || data.usuario || data;
        const u: User = {
          id: serverUser.id ? String(serverUser.id) : '1',
          name: serverUser.name || serverUser.nome || login,
          email: serverUser.email || serverUser.login || login,
          avatar: serverUser.avatar,
          plan: (serverUser.plan as User['plan']) || 'trial',
          planExpiresAt:
            serverUser.planExpiresAt ||
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          credits: typeof serverUser.credits === 'number' ? serverUser.credits : 10,
        };

        saveUser(u);
        console.log('👤 Usuário salvo:', u);

        // webhook disabled

        return true;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Falha ao fazer login';
        setError(errorMessage);
        console.error('❌ Login failed:', errorMessage, err);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [saveUser]
  );

  const register = useCallback(
    async (name: string, email: string, password: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // Validações básicas
        if (!name || !email || !password) {
          throw new Error('Nome, email e senha são obrigatórios');
        }

        if (name.length < 3) {
          throw new Error('Nome deve ter no mínimo 3 caracteres');
        }

        if (!email.includes('@')) {
          throw new Error('Email inválido');
        }

        if (password.length < 6) {
          throw new Error('Senha deve ter no mínimo 6 caracteres');
        }

        console.log('📝 Tentando registro com:', { name, email, passwordLength: password.length });

        // Tenta registrar via API
        try {
          const response = await fetch(`${apiBase}/api/v1/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });

          console.log('📡 Resposta do registro:', {
            status: response.status,
            statusText: response.statusText,
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ Erro no registro:', errorData);

            // Se houver detalhes de validação, mostre-os
            if (errorData.errors && Array.isArray(errorData.errors)) {
              const errorMessages = errorData.errors
                .map((e: { message?: string }) => e.message || String(e))
                .join(', ');
              throw new Error(errorMessages);
            }

            throw new Error(
              errorData.message ||
                errorData.msg ||
                `Erro ao registrar (${response.status})`
            );
          }

          const data = await response.json();
          console.log('✅ Registro bem-sucedido:', data);

          const token = data.token || data.accessToken || data.access_token;
          if (token) {
            localStorage.setItem('lognet-token', token);
          }

          const serverUser = data.user || data.usuario || data;
          const u: User = {
            id: serverUser.id ? String(serverUser.id) : '1',
            name: serverUser.name || serverUser.nome || name,
            email: serverUser.email || email,
            avatar: serverUser.avatar,
            plan: (serverUser.plan as User['plan']) || 'trial',
            planExpiresAt:
              serverUser.planExpiresAt ||
              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            credits: typeof serverUser.credits === 'number' ? serverUser.credits : 10,
          };

          saveUser(u);
          console.log('👤 Usuário registrado:', u);

          // webhook disabled

          return true;
        } catch (apiErr) {
          // Se API falhar, cria usuário localmente como fallback
          console.warn('API registration failed, using local fallback', apiErr);
          const u: User = {
            id: Math.random().toString(36).substring(2, 9),
            name,
            email,
            plan: 'trial',
            planExpiresAt: new Date(
              Date.now() + 7 * 24 * 60 * 60 * 1000
            ).toISOString(),
            credits: 10,
          };
          saveUser(u);
          return true;
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Falha ao registrar';
        setError(errorMessage);
        console.error('❌ Register failed:', errorMessage, err);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [saveUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
    localStorage.removeItem('lognet-user');
    localStorage.removeItem('lognet-token');
    console.log('🚪 Logout realizado');
  }, []);

  const updatePlan = useCallback(
    (plan: User['plan']) => {
      if (user) {
        const updated: User = {
          ...user,
          plan,
          credits: plan === 'premium' ? 999 : 10,
          planExpiresAt: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ).toISOString(),
        };
        saveUser(updated);
        console.log('📊 Plano atualizado para:', plan);
      }
    },
    [user, saveUser]
  );

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    register,
    logout,
    updatePlan,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
</file>

<file path="src/pages/Login.tsx">
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/useAuth';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, BookOpen, Headphones, Smartphone, Star } from 'lucide-react';
import logo02 from '@/assets/logo02.jpg';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const { login: authLogin, error, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lognet-credentials');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.login) setLogin(parsed.login);
        if (parsed?.senha) setSenha(parsed.senha);
        setRemember(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Limpar erro quando o usuário começa a digitar
  useEffect(() => {
    if (error) {
      clearError();
    }
  }, [login, senha, error, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!login || !senha) {
      toast({
        title: 'Preencha todos os campos',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const ok = await authLogin(login, senha);
    setLoading(false);

    if (ok) {
      try {
        if (remember) {
          localStorage.setItem('lognet-credentials', JSON.stringify({ login, senha }));
        } else {
          localStorage.removeItem('lognet-credentials');
        }
      } catch {
        // ignore storage errors
      }
      toast({ title: 'Bem-vindo de volta!' });
      navigate('/');
    } else {
      // Erro será exibido no toast ou no formulário
      if (error) {
        toast({
          title: 'Erro ao fazer login',
          description: error,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Erro ao fazer login',
          description: 'Verifique suas credenciais e tente novamente',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left - features (visible on md+) */}
      <aside className="hidden md:flex relative flex-col justify-center p-12 bg-gradient-to-br from-amber-200 via-amber-300 to-orange-300 overflow-hidden">
        {/* decorative blobs */}
        <div aria-hidden className="absolute -top-20 -left-12 w-72 h-72 rounded-full bg-gradient-to-tr from-amber-200 via-amber-100 to-transparent blur-3xl opacity-30 pointer-events-none" />
        <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-amber-100/30 to-transparent blur-2xl opacity-20 pointer-events-none" />

        <div className="max-w-lg mx-auto text-center">
          <div className="flex items-center gap-4 justify-center mb-4">
            <img src={logo02} alt="Lognet" className="h-24 md:h-28 w-auto" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">Descubra mais com a Lognet</h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Milhares de títulos</p>
                <p className="text-sm text-muted-foreground/90">E-books nacionais e internacionais.</p>
              </div>
            </article>

            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <Headphones size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Audiobooks</p>
                <p className="text-sm text-muted-foreground/90">Narradores profissionais.</p>
              </div>
            </article>

            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <Smartphone size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Modo offline</p>
                <p className="text-sm text-muted-foreground/90">Baixe conteúdos para acessar sem internet.</p>
              </div>
            </article>

            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <Star size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Recomendações</p>
                <p className="text-sm text-muted-foreground/90">Sugestões personalizadas com base no seu gosto.</p>
              </div>
            </article>
          </div>
        </div>
      </aside>

      {/* Right - form */}
      <main className="flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md animate-scale-in">
          <header className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Entrar na sua conta</h3>
            <p className="text-sm text-muted-foreground mt-2">Use seu login e senha para acessar.</p>
          </header>

          {/* mobile features (visible only on small screens) */}
          <div className="md:hidden mb-4 flex gap-3 overflow-x-auto">
            <div className="min-w-[11rem] bg-gradient-to-br from-amber-50 to-amber-100/30 border border-border rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-primary-foreground">
                <BookOpen size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Milhares de títulos</p>
                <p className="text-xs text-muted-foreground">E-books e audiobooks.</p>
              </div>
            </div>
            <div className="min-w-[11rem] bg-gradient-to-br from-amber-50 to-amber-100/30 border border-border rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-primary-foreground">
                <Headphones size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Audiobooks</p>
                <p className="text-xs text-muted-foreground">Ouça no caminho.</p>
              </div>
            </div>
          </div>

          <section className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg ring-1 ring-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Login</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    placeholder="seu login"
                    className="w-full h-14 pl-10 pr-4 rounded-xl bg-muted border border-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Senha</label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-14 pl-4 pr-10 rounded-xl bg-muted border border-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-sm transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border border-border bg-background text-primary focus:ring-2 focus:ring-primary"
                  />
                  <span>Lembrar-me</span>
                </label>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                  onClick={() =>
                    toast({
                      title: 'Esqueceu a senha?',
                      description: 'Por favor, entre em contato com o atendimento do provedor: contato@lognetrj.com.br',
                    })
                  }
                >
                  Esqueceu a senha?
                </button>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl transform-gpu hover:-translate-y-0.5 hover:shadow-glow"
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 mb-1">Erro ao fazer login:</p>
                  <p className="text-sm text-red-700 whitespace-pre-wrap">{error}</p>
                </div>
              )}
            </form>

            <p className="mt-4 text-xs text-muted-foreground text-center">
              Ao entrar, você concorda com nossos <a className="text-amber-500 underline" href="/privacy">termos</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
</file>

<file path="src/components/AppLayout.tsx">
import React, { useState } from 'react';
import { LayoutContext } from '@/contexts/layout'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { useApp } from '@/contexts/app';
import { Button } from '@/components/ui/button';
import {
  Home, BookOpen, Heart, Download, User, LogOut, Menu, X, Search, Crown, Library, ChevronLeft, ChevronRight
} from 'lucide-react';
import logoImg from '@/assets/logoh.png';
import Footer from './Footer';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/catalog', icon: Library, label: 'Catálogo' },
  { to: '/favorites', icon: Heart, label: 'Favoritos' },
  { to: '/profile', icon: User, label: 'Perfil' },
];

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sidebar-collapsed') === '1';
    } catch {
      return false;
    }
  });
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/catalog?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <LayoutContext.Provider value={{ collapsed, setCollapsed }}>
      <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-amber-600 bg-amber-500/95 backdrop-blur supports-[backdrop-filter]:bg-amber-500/90 text-white">
        <div className="flex h-full items-center gap-4 px-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-foreground">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <img src={logoImg} alt="Lognet SVA" className="h-10 w-auto" />
          </Link>

          <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-md mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar livros, audiobooks, comics..."
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </form>

          

          <div className="ml-auto flex items-center gap-2">
            {user?.plan === 'premium' && (
              <span className="hidden sm:flex items-center gap-1 text-xs font-semibold text-warning bg-warning/10 px-2 py-1 rounded-full">
                <Crown size={12} /> Premium
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="ml-2"
            >
              <LogOut size={16} className="mr-2" /> Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 bottom-0 z-40 border-r border-border bg-sidebar transition-all duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${collapsed ? 'w-20' : 'w-64'}`}>
        <nav className={`flex flex-col gap-1 p-2 ${collapsed ? 'items-center' : 'p-4'}`}>
          {navItems.map(({ to, icon: Icon, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setSidebarOpen(false)}
                title={label}
                aria-label={label}
                className={`group relative flex items-center ${collapsed ? 'justify-center px-2 py-3' : 'gap-3 px-4 py-3'} rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <Icon size={20} />
                {!collapsed && <span>{label}</span>}

                {/* Visual tooltip when collapsed */}
                {collapsed && (
                  <span className="pointer-events-none absolute left-full top-1/2 z-50 -translate-y-1/2 ml-3 hidden whitespace-nowrap rounded bg-foreground text-white text-xs font-medium px-2 py-1 opacity-0 transition-all duration-150 group-hover:block group-hover:opacity-95">
                    {label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle on sidebar edge */}
          <button
          type="button"
          onClick={() => {
            const next = !collapsed;
            setCollapsed(next);
            try { localStorage.setItem('sidebar-collapsed', next ? '1' : '0'); } catch (e) { void e; }
          }}
          aria-label={collapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
          className="hidden lg:flex absolute top-1/2 -right-5 transform -translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 text-white items-center justify-center shadow-md hover:bg-amber-600"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {user && (
          <div className={`absolute bottom-0 left-0 right-0 border-t border-sidebar-border ${collapsed ? 'p-3' : 'p-4'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-primary-foreground">
                {user.name.charAt(0).toUpperCase()}
              </div>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-sidebar-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </aside>

      {/* Main */}
      <main className={`flex-1 overflow-auto pt-16 ${collapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
        <div className="p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
    </LayoutContext.Provider>
  );
};

export default AppLayout;
</file>

<file path="src/components/Footer.tsx">
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { useLayout } from '@/contexts/layout';
import logoImg from '@/assets/logoht.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  // Show the detailed footer only on the public landing page ('/') when NOT authenticated.
  const isLanding = location.pathname === '/' && !isAuthenticated;
  const { collapsed } = useLayout();
  const wideClass = collapsed ? 'lg:ml-20 lg:w-[calc(100%_-_5rem)]' : 'lg:ml-64 lg:w-[calc(100%_-_16rem)]';

  return (
    <>
      {/* Detailed footer: on home show on all sizes; on other pages show only on small screens */}
      <footer className={`${isLanding ? 'block' : 'block lg:hidden'} mt-12 bg-amber-500 border-t border-amber-600 text-white`}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img src={logoImg} alt="Lognet" className="h-10 w-auto" />
              </Link>
              <p className="text-sm max-w-md">Plataforma de leitura digital da Lognet. Ebooks, audiobooks e quadrinhos com acesso fácil.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-amber-50 hover:text-white transition-colors">Início</Link></li>
                <li><Link to="/catalog" className="text-amber-50 hover:text-white transition-colors">Catálogo</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Saiba mais</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-amber-50 hover:text-white transition-colors">Termos de uso</Link></li>
                <li><Link to="/privacy" className="text-amber-50 hover:text-white transition-colors">Política de privacidade</Link></li>

                <li><a href="mailto:contato@lognetrj.com.br" className="text-amber-50 hover:text-white transition-colors">Fale conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={["fas", "envelope"]} className="w-5 h-5 text-amber-50 mr-3" />
                  <a href="mailto:contato@lognetbr.com.br" className="text-amber-50 hover:text-white transition-colors">contato@lognetbr.com.br</a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} className="w-5 h-5 text-amber-50 mr-3" />
                  <a href="https://wa.me/5508000000192" target="_blank" rel="noreferrer" className="text-amber-50 hover:text-white transition-colors">0800 000 0192</a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={["fas", "globe"]} className="w-5 h-5 text-amber-50 mr-3" />
                  <a href="https://lognetbr.com.br/" target="_blank" rel="noreferrer" className="text-amber-50 hover:text-white transition-colors">lognetbr.com.br</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-600 py-4">
          <div className="container mx-auto px-4 text-sm text-amber-50 text-center">© {year} <a href="https://lognetbr.com.br/" target="_blank" rel="noreferrer" className="text-amber-50/95 hover:text-white font-semibold">BRLognet</a>. Todos os direitos reservados.</div>
        </div>
      </footer>

        {/* Simple footer for large screens where sidebar is fixed (avoid being covered).
          Hidden on home because home uses the detailed footer across sizes. */}
        <footer className={`${isLanding ? 'hidden' : 'hidden lg:flex'} items-center justify-center bg-amber-500 border-t border-amber-600 text-white py-4 ${wideClass}`}>
        <div className="px-4 text-sm text-amber-50 text-center">© {year} <a href="https://lognetbr.com.br/" target="_blank" rel="noreferrer" className="text-amber-50/95 hover:text-white font-semibold">BRLognet</a>. Todos os direitos reservados.</div>
      </footer>
    </>
  );
};

export default Footer;
</file>

<file path="src/pages/Landing.tsx">
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Headphones, Smartphone, Wifi, Star, ChevronRight, Menu, X } from 'lucide-react';
import { testimonials } from '@/data/static';
import logoImg from '@/assets/logoht.png';
import Footer from '@/components/Footer';

const Landing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop', // Biblioteca
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=800&fit=crop', // Livros
    'https://images.unsplash.com/photo-1589998059171-988d887df646?w=1200&h=800&fit=crop', // Headphones
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Auto-play do carrossel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 backdrop-blur-md border-b border-amber-600/50 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Início</Link>
            <Link to="/catalog" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Catálogo</Link>
            <Link to="/about" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Sobre</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-white transition-all duration-200">
                  Entrar
                </Button>
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 border-t border-amber-600/50">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link to="/" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link to="/catalog" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Catálogo</Link>
              <Link to="/plans" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Planos</Link>
              <Link to="/about" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              <div className="pt-3 border-t border-amber-600/50 flex flex-col gap-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white">
                    Entrar
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-white text-amber-600 hover:bg-amber-50">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden h-[65vh] sm:h-[70vh] md:h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hero ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 z-0 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => console.log(`Image ${index + 1} loaded`)}
                onError={() => console.log(`Image ${index + 1} failed to load`)}
              />
            ))}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-20"
            >
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-20"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 z-10" />
        </div>
        <div className="relative container mx-auto px-4 py-20 sm:py-32 md:py-40 z-30">
          <div className="max-w-xl animate-slide-up bg-black/30 p-6 rounded-2xl backdrop-blur-sm z-30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Wifi size={14} /> Exclusivo para clientes Lognet
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Leitura, Áudio e HQs <span className="gradient-text">Ilimitados</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
              Leia e ouça histórias onde, como e quando quiser! Milhares de ebooks, audiobooks e comics na palma da sua mão. Leitura e áudio onde e quando quiser.
            </p>
            <div className="flex">
              <Link to="/catalog" className="mx-auto sm:mx-0"><Button variant="outline" size="xl">Explorar Catálogo <ChevronRight size={18} /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            Tudo em um só lugar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'E-books', desc: 'Milhares de títulos nacionais e internacionais para ler a qualquer hora.' },
              { icon: Headphones, title: 'Audiobooks', desc: 'Ouça livros narrados por profissionais enquanto se exercita ou dirige.' },
              { icon: Smartphone, title: 'Comics & HQs', desc: 'Mangás, quadrinhos e graphic novels com visualização painel a painel.' },
              { icon: Wifi, title: 'Modo Offline', desc: 'Baixe conteúdos e leia sem internet. Perfeito para o metrô!' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">O que nossos leitores dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map(t => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
</file>

<file path="CHANGELOG.md">
## [1.20.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.19.0...v1.20.0) (2026-02-25)

### Features

* adicionar carregamento de capas de livros do MinIO e normalizar dados da API ([2d61c1a](https://github.com/CesarAVB/frontend-lognet-books/commit/2d61c1a98a9a4e31e62300e70290de850e4605fb))

## [1.19.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.18.0...v1.19.0) (2026-02-24)

### Features

* melhorar a lógica de carregamento de livros e adicionar tratamento de erros na Dashboard ([a04b69a](https://github.com/CesarAVB/frontend-lognet-books/commit/a04b69ad5bb309def0c06c9b4f8cbe11328c72ed))

## [1.18.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.17.0...v1.18.0) (2026-02-24)

### Features

* remover webhook e adicionar suporte a token de autenticação nas requisições ([2c85f53](https://github.com/CesarAVB/frontend-lognet-books/commit/2c85f532b052aa34d8c84d83b7d4478d3a73467f))

## [1.17.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.16.0...v1.17.0) (2026-02-24)

### Features

* adicionar upload de arquivos e capas para livros na administração ([763f6ba](https://github.com/CesarAVB/frontend-lognet-books/commit/763f6bad29247aa628f982f5a103172bd8062cfa))

## [1.16.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.15.0...v1.16.0) (2026-02-24)

### Features

* adicionar tooltip visual para itens da barra lateral quando colapsada ([d1ed7b5](https://github.com/CesarAVB/frontend-lognet-books/commit/d1ed7b51100731c2060699196a41a95ea0b737be))

## [1.15.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.14.0...v1.15.0) (2026-02-24)

### Features

* adicionar contexto de layout para gerenciar estado de colapso da barra lateral ([b0fb80e](https://github.com/CesarAVB/frontend-lognet-books/commit/b0fb80e095ebcdbca91d3f444e392bd67b82f407))

## [1.14.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.13.0...v1.14.0) (2026-02-24)

### Features

* atualizar footer para exibir conteúdo detalhado apenas na página inicial para usuários não autenticados ([49ffb57](https://github.com/CesarAVB/frontend-lognet-books/commit/49ffb571926f697314e5e9ef47ec980129b4d192))

## [1.13.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.12.0...v1.13.0) (2026-02-24)

### Features

* adicionar funcionalidade de colapsar barra lateral e melhorar acessibilidade ([57568d1](https://github.com/CesarAVB/frontend-lognet-books/commit/57568d1e0c4551415c7bdd5827e171f12ccd77ab))
* refatorar estrutura de dados de livros e atualizar componentes para usar nova API ([df8655d](https://github.com/CesarAVB/frontend-lognet-books/commit/df8655db57d8c0cafccc860408d4780224c3f1ed))

## [1.12.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.11.0...v1.12.0) (2026-02-24)

### Features

* refatorar contextos de autenticação e aplicativo ([ca0032c](https://github.com/CesarAVB/frontend-lognet-books/commit/ca0032ce7ac3f9e1dfd2851f6a7d16d71fce27f7))

## [1.11.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.10.0...v1.11.0) (2026-02-24)

### Features

* adiciona axios como dependência e atualiza o footer para exibir conteúdo condicionalmente ([70e2766](https://github.com/CesarAVB/frontend-lognet-books/commit/70e2766111bdd4ae6a7188bf9b5979aa91326442))

## [1.10.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.9.0...v1.10.0) (2026-02-24)

### Features

* implementa login com autenticação via API e armazenamento de credenciais ([0324d84](https://github.com/CesarAVB/frontend-lognet-books/commit/0324d84c06f32b049bdf23bc001cb16c34f1ef2d))

## [1.9.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.8.0...v1.9.0) (2026-02-23)

### Features

* adiciona página de administração de livros e integra webhook de login ([c0b7a23](https://github.com/CesarAVB/frontend-lognet-books/commit/c0b7a2365693ef19e47b93cc0717ee818e2485f5))

## [1.8.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.7.0...v1.8.0) (2026-02-23)

### Features

* atualiza textos de login e footer para maior clareza ([4ae7f13](https://github.com/CesarAVB/frontend-lognet-books/commit/4ae7f13694a3af7ff2fcf9d8f52f126247d50731))

## [1.7.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.6.0...v1.7.0) (2026-02-18)

### Features

* adiciona página "Sobre" com informações sobre a LogBooks ([f11d870](https://github.com/CesarAVB/frontend-lognet-books/commit/f11d87084e5b1d5941af540ca5138712b3798060))

## [1.6.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.5.0...v1.6.0) (2026-02-18)

### Features

* adiciona carrossel de imagens na página inicial e atualiza o rodapé ([aad4943](https://github.com/CesarAVB/frontend-lognet-books/commit/aad49433e913c341e846baa27faf8412711e3374))

## [1.5.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.4.2...v1.5.0) (2026-02-18)

### Features

* adiciona funcionalidade de recuperação de senha no botão "Esqueceu a senha?" ([13f6cad](https://github.com/CesarAVB/frontend-lognet-books/commit/13f6cadaab6382e7761cda5011ce02f89076aaa9))

## [1.4.2](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.4.1...v1.4.2) (2026-02-17)

### Bug Fixes

* atualizar texto de contato e link no rodapé ([9cc4136](https://github.com/CesarAVB/frontend-lognet-books/commit/9cc4136c28fde6533845d2186652afc4403ba0b6))

## [1.4.1](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.4.0...v1.4.1) (2026-02-17)

### Bug Fixes

* corrigir exportação do componente de Termos ([d64c10e](https://github.com/CesarAVB/frontend-lognet-books/commit/d64c10ee952c95ac657ac2053c4ef32e9a352664))

## [1.4.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.3.0...v1.4.0) (2026-02-17)

### Features

* adicionar página de Termos e Condições e integrar no Footer ([e5402d8](https://github.com/CesarAVB/frontend-lognet-books/commit/e5402d8302226e004689316091e793905b22b169))

## [1.3.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.2.0...v1.3.0) (2026-02-17)

### Features

* adicionar componente Footer e integrá-lo nas páginas AppLayout e Landing ([75c58bf](https://github.com/CesarAVB/frontend-lognet-books/commit/75c58bfebb789703a0b7d516d1774d08b4e05d81))
* adicionar ícones de contato no rodapé e atualizar informações de contato ([6bc047b](https://github.com/CesarAVB/frontend-lognet-books/commit/6bc047b73427af3a20cc3059f4349c6d39e63a96))
* reformular a página de login com novos elementos visuais e informações sobre recursos ([1965000](https://github.com/CesarAVB/frontend-lognet-books/commit/19650004ccfdd8f60bac60ce5ad4e3e8ec08064e))

### Bug Fixes

* corrigir ano de direitos autorais no rodapé do componente Footer ([2fa23a3](https://github.com/CesarAVB/frontend-lognet-books/commit/2fa23a37f1d757a1af3d34bb82be3d3be7ff8a0a))

## [1.2.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.1.0...v1.2.0) (2026-02-17)

### Features

* atualizar layout da página de Landing e Privacy, incluindo novos links e ajustes de estilo ([ed2ef76](https://github.com/CesarAVB/frontend-lognet-books/commit/ed2ef7657d184cfc17f66da64732b75e8f0b7122))

## [1.1.0](https://github.com/CesarAVB/frontend-lognet-books/compare/v1.0.0...v1.1.0) (2026-02-17)

### Features

* adicionar página de Política de Privacidade e links no rodapé ([24342e3](https://github.com/CesarAVB/frontend-lognet-books/commit/24342e382833a90ebb831d9293617bc9dae942f6))

## 1.0.0 (2026-02-17)

### Features

* atualizar configuração de deploy e ajustar porta do servidor ([f8947ac](https://github.com/CesarAVB/frontend-lognet-books/commit/f8947ac02a7ea2a8069089049fd75e22395eb5e1))
</file>

</files>
