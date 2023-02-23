import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/pdfviewer?filename=document1">
        <div>View Document 1</div>
      </Link>
      <br />
      <Link href="/pdfviewer?filename=document2">
        <div>View Document 2</div>
      </Link>
    </div>
  );
}
