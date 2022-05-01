import { useState } from "react";
import { useDispatch } from "react-redux";
import { Drug } from "../../types";
import { getDrugs } from "../features/drugs";

const useFetchDrugs = () => {
    const [loading, setloading] = useState(false);
    const dispatch =  useDispatch(); 


    const fetchDrugs = async () => {
        setloading(true);

        try{
            const res = await fetch('/api/drugs');
            const result = await res.json();
            dispatch(getDrugs({result}))
            setloading(false);
        } catch (err) {
            console.log(err);
        }
    }
    

    return {loading, fetchDrugs};
};

export default useFetchDrugs;

