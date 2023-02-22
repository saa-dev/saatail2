import React from "react";
import PDFViewer from "../components/PDFViewer";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Saatail</h1>
      <PDFViewer url="/pdf/document1.pdf" />
    </div>
  );
}
