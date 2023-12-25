import { Banner } from "../../components/Layout/Banner/Banner"

import { Text } from "../../components/Layout/Text/Text"
import { Thumbnail } from "../../components/Layout/Thumbnail/Thumbnail"
import { FilterBox } from "../../components/Layout/FilterBox/FilterBox"

import bannerImage from '../../assets/images/banner-plataforma.jpg'
import { Footer } from "../../components/Footer/Footer"
import { latestFiltersUsed, VideoData } from "../../data/VideoData"

import uuid from 'react-uuid'
import { Header } from "../../components/Header/Header"


export function Plataforma() {
  const VideosList = VideoData
  const LatestFilters = latestFiltersUsed

  return (
    <>
      <Header page="platform" />

      <section className="plataforma pt-28 bg-blue-900">
        <div className="px-4">
          <Banner 
            text="Fique por dentro dos novos conteúdos" 
            imageUrl={bannerImage} 
            classes="bg-blue-800"
          />
        </div>

        <div className="p-4">
          <Text type="topic" text="Últimos filtros acessados" classes="mt-4 sm:mt-8 lg:mt-16" />
  
          <div className="flex flex-wrap gap-4 lg:gap-8 overflow-x-auto">
            {LatestFilters.map(filter => {
              return (
                <FilterBox 
                  name={filter} 
                  key={filter+uuid()}
                  classes="bg-blue-900 w-3/12 flex-1" 
                />
              )
            })}
          </div>
        </div>

        <div className="pb-4">
          <Text type="topic" text="O que selecionamos baseado nas suas escolhas" classes="px-4 mt-10" />

          <div className="flex gap-8 overflow-x-auto ml-4">
            {VideosList.algorithm.map(videos => {
              return (
                <Thumbnail 
                  key={videos.id}
                  title={videos.title}
                  category={videos.category} 
                  imageUrl={videos.thumbnail} classes=" w-[25vw] h-64" 
                />
              )
            })}
          </div>
        </div>
      
        <div className="pb-4">
          <Text type="topic" text="Fique por dentro dos novos conteúdos" classes="px-4 mt-10" />
  
          <div className="flex gap-8 overflow-x-auto ml-4">
            {VideosList.news.map(videos => {
              return (
                <Thumbnail 
                  key={videos.id}
                  title={videos.title}
                  category={videos.category} 
                  imageUrl={videos.thumbnail} classes=" w-[25vw] h-64" 
                />
              )
            })}
          </div>
        </div>
      
        <div className="pb-32">
          <Text type="topic" text="Para você assistir de novo" classes="px-4 mt-10" />
  
          <div className="flex gap-8 overflow-x-auto ml-4">
            {VideosList.watchAgain.map(videos => {
              return (
                <Thumbnail 
                  key={videos.id}
                  title={videos.title}
                  category={videos.category} 
                  imageUrl={videos.thumbnail} classes=" w-[25vw] h-64" 
                />
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}