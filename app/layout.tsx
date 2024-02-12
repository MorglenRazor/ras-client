import { Layout } from 'antd'
import  Menu from 'antd/es/menu/menu'
import './globals.css'
import { Content,  Header } from 'antd/es/layout/layout'
import Link from 'next/link'

const items = [
  {key: "home", label: <Link href={"/"}>Home</Link>},
  {key: "Acts", label: <Link href={"/pages/acts"}>Акты приема</Link>},
  {key: "Reagent", label: <Link href={"/pages/reagent"}>Реагенты</Link>},
  {key: "SedLetter", label: <Link href={"/pages/sed"}>Письма сэд(debug)</Link>}
  
]



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeigth:"100vh"}}>
          <Header>
            <Menu 
              theme="dark" 
              mode ="horizontal" 
              items = {items} 
              style={{flex: 1, minWidth:0}}
              />
          </Header>
          <Content style={{padding: "0 48px"}}>{children}</Content>
          
        </Layout>
      </body>
    </html>
  )
}

