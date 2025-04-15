"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="mt-4 text-xl">Oops! Page not found.</p>
      <p className="mt-2 text-gray-600">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
