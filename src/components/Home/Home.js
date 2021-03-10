import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.leagues);
                setLeagues(data.leagues);
            });
    }, []);
    return (
        <div className='custom-bg'>
            <div className='custom-banner'>
                <div className='container'>
                    <h1 className='display-3 text-center text-white py-5 font-weight-bold'>League Nation</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        leagues.map((league) => (<League league={league}></League>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
