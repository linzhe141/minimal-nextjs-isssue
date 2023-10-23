"use client"
import { useEffect } from "react";

export default function Home() {
  function foo() {
    fetch("/nav");
  }
  useEffect(() => {
    foo();
  }, []);
  return <main>testxxxxxxx</main>;
}
