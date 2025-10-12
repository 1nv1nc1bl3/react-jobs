// import { jobs } from '../jobs';
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

export default function JobListings({ isHome = false }) {
    // console.log(jobs);

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(12);

    {
        /* fetching data from jobs.json --
        In the 'package.json' file we have added this line
        "server": "json-server --watch src/jobs.json --port 8000"
        in "scripts" */
    }
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                {
                    /* in the 'vite.config.js' file we have added this settings for proxy:
                proxy: { '/api': {
                        target: 'http://localhost:8000',
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/api/, ''),
                        },
                },
                */
                }
                const res = await fetch('/api/jobs');
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    {
        /* show different number of jobs according to if page is Home */
    }
    const jobListings = isHome ? jobs.slice(0, 3) : jobs;

    {
        /* add a "Read More" button in "Jobs" page */
    }
    const loadMore = () => {
        setVisibleCount((prev) => prev + 12);
        setTimeout(
            () => window.scrollBy({ top: 400, behavior: 'smooth' }),
            100
        );
    };

    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <>
                        {/* Το grid με τις αγγελίες */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {jobListings.slice(0, visibleCount).map((job) => {
                                const {
                                    id,
                                    title,
                                    type,
                                    description,
                                    location,
                                    salary,
                                } = job;
                                return (
                                    <JobListing
                                        key={id}
                                        title={title}
                                        type={type}
                                        description={description}
                                        location={location}
                                        salary={salary}
                                    />
                                );
                            })}
                        </div>

                        {/* Το κουμπί ΕΞΩ από το grid */}
                        {!isHome && visibleCount < jobs.length && (
                            <div className='flex justify-center mt-10'>
                                <button
                                    onClick={loadMore}
                                    className='bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-900 transition'
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
