import { Layout } from 'antd'
import  Menu from 'antd/es/menu/menu'
import './globals.css'
import { Content, Header } from 'antd/es/layout/layout'
import Link from 'next/link'
import { AntdRegistry } from '@ant-design/nextjs-registry'


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
        <Layout>
          <Header>
            <Menu 
              theme="dark" 
              mode ="horizontal" 
              items = {items} 
              style={{flex: 1, minWidth:0}}
              />
          </Header>
          <AntdRegistry>
              {children}
            </AntdRegistry> 
          
          
        </Layout>
      </body>
      
      
    </html>
  )
}

