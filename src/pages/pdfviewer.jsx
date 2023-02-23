import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

const PDFViewer = dynamic(() => import("../components/PDFViewer"), {
  ssr: false,
});

export default function PDFViewerPage() {
  const router = useRouter();
  const filename = router.query.filename;

  if (!filename) {
    // If filename is not defined, show an error message
    return <div>Filename not specified</div>;
  }

  return (
    <Layout>
      <PDFViewer filename={filename} />
    </Layout>
  );
}
