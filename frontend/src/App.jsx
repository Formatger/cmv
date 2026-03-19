import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Members from './pages/Members'
import Socis from './pages/Socis'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticies" element={<News />} />
          <Route path="/noticies/:slug" element={<NewsDetail />} />
          <Route path="/esdeveniments" element={<Events />} />
          <Route path="/esdeveniments/:slug" element={<EventDetail />} />
          <Route path="/membres" element={<Members />} />
          <Route path="/socis" element={<Socis />} />
          <Route path="/sobre-nosaltres" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
