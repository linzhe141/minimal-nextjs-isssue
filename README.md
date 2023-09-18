### This is a [minimal-nextjs-isssue](https://github.com/vercel/next.js/issues/55496) project


### To Reproduce

1、Deploy via vercel

### Additional context

The GET and POST handle functions are written in the api/nav/route.ts file at the same time. The development environment is normal. However, after deployment through vercel, the GET request returns an abnormal result. If the POST handle function is commented out at that time, the GET request returns a normal result?

My entire application did not initiate a corresponding post request, regardless of whether it was commented out or not.

![image](https://github.com/vercel/next.js/assets/40790268/78f9b218-6177-49cb-9781-0bb9be152185)
The page.tsx file does exist

### app/api/nav/route.ts
```typescript
export async function GET(request: Request) {
  const test = []
  for (const name of await fs.readdir(
    path.resolve(process.cwd(), 'app/blog/data_structure/tree')
  )) {
    test.push(name)
  }
  const result = {
    code: 200,
    test: test,
  }
  return NextResponse.json(result)
}

export async function POST(request: Request) {
  return NextResponse.json({ data: true })
}
```
### app/page.tsx
```typescript
"use client"
import { useEffect } from "react";

export default function Home() {
  function foo() {
    fetch("/api/nav");
  }
  useEffect(() => {
    foo();
  }, []);
  return <main>testxxxxxxx</main>;
}

```
- abnormal response: the post handle function `is not commented` on the vercel production environment, `page.tsx file name is missing`

  ```json
  {
      "code": 200,
      "test": [
          "readme.mdx"
      ]
  }
  ```

- normal response:  the post handle function `is commented` on the vercel production

  ```json
  {
      "code": 200,
      "test": [
          "page.tsx",
          "readme.mdx"
      ]
  }
  ```