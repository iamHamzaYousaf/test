import React, { useState } from 'react';
import { connect } from 'react-redux'
import ClientNav from './ClientNav';


export const Blog = (props) => {

    return (
        <div>
            <ClientNav />
            <div class="relative bg-white overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl py-1">
                                <span class="block">Blog</span>
                            </h2>                          
                        </div>                       
                    </div>
                </div>                 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Blog)

