import React from 'react'

export default function ClientNav() {
    const logOutHandler = () => {
        sessionStorage.clear();
    }
    return (
        <div>
            <nav class="bg-blue">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                            {/* Nav Items */}
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <a href="/home" class="bg-turquoise text-white hover:bg-turquoise-dark px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                    <a href="/blog" class="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                                    <a href="/about" class="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                    <a href="/" class="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        onClick={() => logOutHandler()}>Log Out</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
