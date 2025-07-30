import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Framework from './components/Framework/Framework'






function App() {
  const [count, setCount] = useState(0)
   const router = createBrowserRouter([
       {path: '/', element: <Layout />,
        children: [
        { index: true, element: <Framework /> }, // الصفحة الرئيسية
        { path: 'about', element: <About /> },
        { path: 'footer', element: <Footer/> },
        { path: 'portfolio', element: <Portfolio/> },
        { path: 'contact', element: <Contact /> },
        { path: 'framework', element: <Framework/> },

      ],
       },
  ])

  return (
    <>

     <RouterProvider router={router}/>
      {/* <Navbar />
      <About />
      <Footer /> */}
    </>
  )
}

export default App
