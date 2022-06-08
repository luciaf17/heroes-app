import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Route, Routes } from 'react-router-dom'
import MarvelScreen from '../components/marvel/MarvelScreen'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen'
import Hero from '../components/hero/Hero'

const DashboardRoutes = () => {
  return (
    <>
    <Navbar />
    <div className="container mt-5">
    <Routes>
            <Route exact path="marvel" element={<MarvelScreen />} />
            <Route exact path="dc" element={<DcScreen />} />
            <Route exact path="search" element={<SearchScreen />} />
            <Route exact path="hero" element={<Hero />} />
            <Route exact path="/" element={<MarvelScreen />} />
        </Routes>
    </div>
    </>
  )
}

export default DashboardRoutes