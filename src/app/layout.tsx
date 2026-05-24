
import "./globals.css";
import "./layout.css"
import Navigator from "../components/Navigator";


export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>){
  return (
    <html lang="en">
      <body>
        <div className="MainContainer">
          <div className="TitleContainer">
            <h1>Página que llama a cosas de Ricardo y Mortirio API de nuevo como no</h1>
          </div>
          <Navigator/>
          {children}
        </div>
      </body>
    </html>
  );
}
