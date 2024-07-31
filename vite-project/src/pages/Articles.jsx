import React from 'react';
//import { useParams } from 'react-router-dom';
import { QUERY_ONE_SITE } from '../Graphql/Queries';
//import HistoricalSites from '../components/HistoricalSites';
import HistoricalSite from '../components/HistoricalSite';
import Comments from '../components/Comments';
import useQuerySite from '../Hooks/useQuerySite';


const Articles = () => {
    const { historicalsites, error } = useQuerySite({ query: QUERY_ONE_SITE, limit: 5 });

    if (error) return <h2>{error}</h2>;

    return (
        <div className='site-container'>
            {historicalsites?.map(historicalsite => (
                <div key={historicalsite.id}>
                    <HistoricalSite historicalsite={historicalsite} />
                    {/*<Comments comments={historicalsite?.comments} />*/}
                </div>
            ))}
        </div>
    );
}

export default Articles;
