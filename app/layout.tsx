import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-blue-500">

        {/* gradient animated background */}
        <div className="w-screen h-screen absolute animate-pulse bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        {/* content */}
        <div className="w-screen h-screen absolute flex items-center justify-center ">
          <div className="w-96 h-4/6 overflow-scroll rounded-xl bg-white p-5">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
