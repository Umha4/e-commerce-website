'use client'
import Cards from '@/components/products-components/cards'
import Company from '@/components/products-components/company'
import Header from '@/components/products-components/header'
import HomeHero from '@/components/products-components/hero'
import Pagination from '@/components/products-components/pagination'
import Footer from '@/components/shop-components/footer'
import React from 'react'



const ProductPage = () => {
  return (
    <div>
        <Header />
        <HomeHero/>
        
        <Company />
        <Footer />
        <Cards />
        <Pagination/>

    </div>
  )
}

export default ProductPage