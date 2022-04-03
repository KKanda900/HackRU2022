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
    const consolidateJSON = () => {
        if (data != null) {
            for (const key of Object.keys(data)) {
                if (data[key].features) {
                    console.log(data[key].features)
                    hospitals.push(data[key].features.map(hospital => hospital.attributes))
                }
            }
        }
    }
    consolidateJSON()
    // populates array with hospital data JSONs
    console.log(hospitals[0])
    const totalRows = []
    const hospitalNames = []
    const hospitalAddress = []
    const hospitalTelephone = []
    const hospitalLocationLink = []
    const createTableRows = async () => {
        if (hospitals.length != 0) {
            for (const key in Object.keys(hospitals[0])) {
                const tempArray = []
                // console.log('hereree')
                // console.log(hospitals)
                const hospitalValue = hospitals[0][key]
                // console.log(hospitalValue)
                // hospitalNames.push(hospitalValue.NAME)
                let baseLink = `https://www.google.com/maps/search/?api=1&query=${hospitalValue.NAME}`
                // hospitalLocationLink.push(baseLink)
                // hospitalAddress.push(hospitalValue.ADDRESS)
                // hospitalTelephone.push(hospitalValue.TELEPHONE)
                totalRows.push({ "name": hospitalValue.NAME })
                totalRows.push({ "link": baseLink })
                totalRows.push({ "addr": hospitalValue.ADDRESS })
                totalRows.push({ "tele": hospitalValue.TELEPHONE })
                // totalRows.push.apply(totalRows, tempArray)
                console.log('checking rn')
                console.log(totalRows)
                // tempArray.clear()
            }
        }
    }
    console.log('main array')
    console.log(totalRows)

    createTableRows()
    console.log(hospitalNames)
    console.log(hospitalLocationLink)
    console.log(hospitalAddress)
    console.log(hospitalTelephone)

    const returnDynamicTable = () => {
        // if ((hospitalNames.length !== 0) && (hospitalLocationLink.length !== 0) && (hospitalAddress.length !== 0) && (hospitalTelephone.length !== 0)) {
        if (totalRows.length !== 0) {
            return (
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Hospital Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Hospital Location Link
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Hospital Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telephone
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                totalRows.map(
                                    (item, index) => (
                                        <tr>
                                            <td key={index + 1}>{item.name}</td>
                                            <td key={index + 2 }>{item.link}</td>
                                            <td key={index + 3}>{item.addr}</td>
                                            <td key={index + 4}>{item.tele}</td>
                                        </tr>
                                    )
                                )
                            }

                        </tbody>
                    </table>
                </div>
            )

        }
        return (
            <h1>fail</h1>
        )
    }

    return (
        <div>
            <h1 class='font-railway'>Local Hospitals around New Brunswick</h1>
            {returnDynamicTable()}
        </div>
    )
}
