
import Banner from '@/components/templates/index/banner/Banner'
import Latest from '@/components/templates/index/latest/Latest'
import Popular from '@/components/templates/index/popular/Popular'
import Roadmaps from '@/components/templates/index/roadmaps/Roadmaps'
import SupportMessage from '@/components/templates/index/supportMessage/SupportMessage'
import NewCourses from '@/components/templates/index/newCourses/NewCourses'
import React from 'react'
import LatestArticles from '@/components/templates/index/latestArticles/LatestArticles'
import MostPopular from '@/components/templates/index/mostPopular/MostPopular'
import KodePlusPro from '@/components/templates/index/kodePlusPro/KodePlusPro'

function HomePage() {
  return (
    // <h1 className='text-red-500 text-2xl text-center mt-2 font-bold'>Home Page Code Plus :))</h1>
    <>
      <Banner />
      <Latest />
      <Roadmaps />
      <Popular />
      <SupportMessage />
      <NewCourses />
      <LatestArticles />
      <MostPopular />
      <KodePlusPro />
    </>
  )
}

export default HomePage