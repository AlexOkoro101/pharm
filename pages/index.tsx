import { Stack, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetchDrugs from '../src/components/hooks/useFetchDrugs';
import Drugs from '../src/modules/home/Drugs';
import Filter from '../src/modules/home/Filter';
import SearchResults from '../src/modules/home/SearchResults';
import { Drug } from '../src/types';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const {loading, fetchDrugs} = useFetchDrugs();
  const drugs: Drug[] =  useSelector((state: Record<string, any>) => state.drugs.value.result);
  const [searchQuery, setsearchQuery] = useState<string>("");
  const [active, setactive] = useState<string>("all");

  useEffect(() => {
    getDrugs();
  }, []);

  const getDrugs = async () => {
    await fetchDrugs();
  };

  
  const filteredDrugs: Drug[] = useMemo<Drug[]>(() => {
    if(!searchQuery) return [];

    const filter = drugs?.filter((drug) => {
      return drug.name.toLowerCase().includes(searchQuery) && (drug.category.includes(active) || active === 'all');
    });
    
    return filter;
  }, [searchQuery, drugs, active]);

  const filteredMain: Drug[] = useMemo<Drug[]>(() => {
    // if(active === "all") return [];

    const filter = drugs?.filter((drug) => {
      return drug.category.includes(active) || active === 'all';
    });
    
    return filter;
  }, [drugs, active]);

  
  return (
    <div className={styles.font}>
      <Head>
        <title>Pharmacy App</title>
        <meta name="description" content="Pharmacy App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Stack sx={{alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <Typography
              variant="h6"
              noWrap
              component="div"
          >
              Loading ...
          </Typography>
        </Stack>
      ) : (
        <>
          <Filter drugs={drugs} searchQuery={searchQuery} setsearchQuery={setsearchQuery} filteredDrugs={filteredDrugs} active={active} setactive={setactive} />

          {filteredDrugs?.length > 0 ? (

            <SearchResults filteredDrugs={filteredDrugs} />

          ) : (searchQuery && !filteredDrugs?.length) ? (

            <Stack sx={{alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  
              >
                  No Product matches that search term
              </Typography>
            </Stack>

            ) : (

              <Drugs filteredMain={filteredMain} />

          )}

        
        </>
      )}

    </div>
  )
}

export default Home
