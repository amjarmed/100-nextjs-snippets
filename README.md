# 100 Nextjs Snippets

![version](https://img.shields.io/badge/version-0.0.1-blue) ![license](https://img.shields.io/badge/license-MIT-green)

A collection of **100+ useful Nextjs snippets** designed to speed up your development workflow. This extension provides quick, easy access to frequently used Next.js code structures.

## Features

- **Fast Next.js Boilerplate**: Generate common Next.js components with a few keystrokes.
- **Routing Snippets**: Quickly scaffold out dynamic routes, links, and navigation.
- **Data Fetching Helpers**: Snippets for `getStaticProps`, `getServerSideProps`, and more.
- **API Routes**: Easily create new API routes in Next.js.

## Snippets

Here are some of the snippets included:

### Page Component

```typescript
nexpage → Creates a Next.js page with a Head component and basic structure
```

```typescript
import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>Welcome to Next.js!</div>
    </>
  );
};

export default HomePage;
```

### Link Component

```typescript
nexlink → Adds a Next.js <Link> component for navigation
```

```jsx
<Link href='/about'>
  <a>About Page</a>
</Link>
```

## Installation

1. Open **VSCode**.
2. Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar or pressing `Ctrl+Shift+X`.
3. Search for `100 Nextjs Snippets`.
4. Click **Install**.

## How to Use

After installation, simply type the snippet prefix (e.g., `nexpage`, `nexlink`) and press `Tab` to insert the snippet into your file.

You can find the full list of snippets by opening the command palette (`Ctrl+Shift+P`) and searching for "Insert Snippet".

## Contribution

If you have suggestions for new snippets or improvements, feel free to open an issue or submit a pull request on [GitHub](https://github.com/amjarmed/100-nextjs-snippets).

## License

This extension is licensed under the [MIT License](LICENSE).

---

### Customization

- Replace the `https://github.com/amjarmed/100-nextjs-snippets` link with your actual GitHub repository.
- Add more snippets in the "Snippets" section as needed.
- Update version numbers and any relevant metadata based on your project.

### Visit Me

- [Portfolio](https://www.amjarmed.com/).
