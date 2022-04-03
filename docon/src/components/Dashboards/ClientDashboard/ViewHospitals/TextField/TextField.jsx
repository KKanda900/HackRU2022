import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const TextField = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getHospitalDataNow() {
            await axios.get('https://maps.nj.gov/arcgis/rest/services/Framework/Structures_and_Critical_Infrastructure/MapServer/8/query?where=CITY%20%3D%20%27NEW%20BRUNSWICK%27&outFields=*&outSR=4326&f=json')
                .then((response) => {
                    setData(response)
                }
                )
        }
        getHospitalDataNow()
    }, [])

    // pushes data to hospitals containing JSON objects
    const hospitals = []
    const consolidateJSON= () => {
        if (data != null) {
            for (const key of Object.keys(data)) {
                if(data[key].features){
                    console.log(data[key].features)
                    hospitals.push(data[key].features.map(hospital => hospital.attributes))
                }
            }
        }
    }
    consolidateJSON()
    // populates array with hospital data JSONs
    console.log(hospitals)


    return (
        <h1 class='font-railway'>Local Hospitals around New Brunswick</h1>
    )
}
