import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Wel Come!</h1>
      <Link href="/login">Click to Login Page</Link>
    </div>
  );
}
