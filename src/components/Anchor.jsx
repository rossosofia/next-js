import { useRouter } from "next/router";

// this is some destructuring. in the () you can see which props it's taking
// problem solved: not dowloading a lot of data you don't need
export default function Anchor({ children, href, className }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href)
  }

  return (
    <a
    className={className}
    href={href}
    onClick={handleClick}
    >
      {children}
    </a>
  );
}