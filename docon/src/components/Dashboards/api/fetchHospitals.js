import axios from "axios";
import { useState } from "react";

export const useDataLocation = async () => {
    const [data, setData] = useState(null)
    await axios.get('https://maps.nj.gov/arcgis/rest/services/Framework/Structures_and_Critical_Infrastructure/MapServer/8/query?where=CITY%20%3D%20%27NEW%20BRUNSWICK%27&outFields=*&outSR=4326&f=json')
        .then(resp => {
            console.log(resp)
            setData(resp)
        })

    return data
}
