import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

const miBlog = () => {
  return (
    <div>
      <Layout title="miBlog"></Layout>

      <Link href="/">
        <a>Volver al inicio</a>
      </Link>
      <Image src="/img/1.jpg" width={700} height={700} alt="img"></Image>
    </div>
  );
};

export default miBlog;
