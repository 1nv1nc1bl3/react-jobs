import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

export default function JobPage() {
    // const { id } = useParams();
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             console.log(data);
    //             setJob(data);
    //         } catch (error) {
    //             console.log('Error fetching data', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchJob();
    // }, [id]);

    return <h1>JobPage</h1>;
}
