import Hero from '../components/Hero';
import Homecards from '../components/Homecards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Homecards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    );
}
