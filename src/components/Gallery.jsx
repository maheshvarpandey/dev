/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { galleryList } from '../constant/galleryImages'

const Gallery = () => {

const [showMore, setShowMore] = useState(8)

  return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {/* product - start */}
                  {galleryList?.slice(0, showMore)?.map((item, index) => {
                      return <div key={index}>
                          <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                              <img src={item?.imageSrc} loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                              <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                                  <span className="text-gray-500">{item?.title}</span>
                                  <span className="text-gray-800 text-lg lg:text-xl font-bold">Transformation {index+1}</span>
                              </div>
                          </a>
                      </div>
                  })}
              </div>
              {showMore < galleryList?.length - 1 ?
                  <div className="flex justify-center mt-12">
                      <button onClick={() => setShowMore(galleryList?.length)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          See More
                      </button>
                  </div>
                  : ''}

              {showMore === galleryList?.length ?
                  <div className="flex justify-center mt-12">
                      <button 
                      onClick={() => {
                        setShowMore(8);
                        window.scrollTo(0, 1000)
                        }} 
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          See Less
                      </button>
                  </div>
                  : ''}
          </div>
      </div>

  )
}

export default Gallery