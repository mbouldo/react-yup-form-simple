import Head from "next/head"
import Form from "../components/Form"
export default function Home() {
  return (
    <div className="bg-highContrastGray  py-24 font-inter">
      <Head>
        <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,500&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:ital,wght@0,300;0,600;0,700;0,900;1,400&display=swap"
              rel="stylesheet"
        />
      </Head>
      <div className="bg-mediumContrastGray w-3/5 mx-auto rounded-lg shadow  px-16 py-16">
        <div>
          <div className="text-3xl font-jetbrains text-brand py-5">\\ Hello World \\</div>
          <div className="text-5xl font-bold text-white tracking-wide">Dynamic Form Generation</div>
          <Form />
        </div>
      </div>
    </div>
  )
}
