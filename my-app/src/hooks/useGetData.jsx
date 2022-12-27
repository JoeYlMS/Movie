import { useEffect} from "react";


const useGetData = (url,setData,tracker) => {
    useEffect(() => {
        fetch(url,)
            .then((response) => response.json())
            .then(data=> setData(data))
            .catch(error=> console.log(error,'setData(error)'));

    }, tracker ? tracker : [])
}

export default useGetData