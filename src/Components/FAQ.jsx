import React from 'react';

const FAQ = () => {
    return (
        
        <section className="dark:bg-gray-100 rounded-lg dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-center dark:text-gray-600">
                    Explore answers to the most common questions about movies and our Movie Portal services.
                </p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How can I search for movies on the platform?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            You can use the search bar at the top of the page to find movies by title, genre, or release year.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Are the movies available in different languages?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Yes, many of the movies come with language options and subtitles to cater to a global audience.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Can I create a list of my favorite movies?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Absolutely! You can mark movies as favorites, and they will be saved in your personalized favorites list for quick access.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How often is the movie database updated?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Our movie database is updated weekly with the latest releases and new content for you to explore.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Do I need an account to watch movies?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Yes, creating an account is necessary to access the full features of the portal, including streaming and saving favorites.
                        </p>
                    </details>
                </div>
            </div>
        </section>


    );
};

export default FAQ;