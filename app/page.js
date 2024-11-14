import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to this Next JS.
      <p>
        <Link href="/meals">Meals page</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals page</Link>
      </p>
      <p>
        <Link href="/community">Community page</Link>
      </p>
    </main>
  );
}
