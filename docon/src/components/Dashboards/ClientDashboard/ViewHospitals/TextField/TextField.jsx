import React, { useEffect, useState } from 'react'
import { useDataLocation } from '../../../api/fetchHospitals'
import axios from 'axios'

export const TextField = () => {
    const [data, setData] = useState(null)
    useEffect(async () => {
        const result = await axios('https://maps.nj.gov/arcgis/rest/services/Framework/Structures_and_Critical_Infrastructure/MapServer/8/query?where=CITY%20%3D%20%27NEW%20BRUNSWICK%27&outFields=*&outSR=4326&f=json')
        setData(result)

    }, [])
    if(data != null){
        console.log(data.data.features)
    }
    return (
        <h1 class='font-railway'>Local Hospitals around New Brunswick</h1>
    )
}
