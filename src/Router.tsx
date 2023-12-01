import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { CriarConta } from './pages/CriarConta/CriarConta'
import { Plataforma } from './pages/Plataforma/Plataforma'
import { Interna } from './pages/Plataforma/Interna/Interna'
import { AreaDoDocente } from './pages/Plataforma/AreaDoDocente/AreaDoDocente'

export function Router() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/criar-conta" element={<CriarConta />} />
          <Route path="/plataforma" element={<Plataforma />} />
          <Route path="/plataforma/interna" element={<Interna />} />
          <Route path="/area-do-docente" element={<AreaDoDocente />} />
      </Routes>
    </>
  )
}
