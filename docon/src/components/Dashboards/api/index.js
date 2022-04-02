import axios from "axios";

export const getDataLocation = async () => {
    await axios.get('https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NJ')
        .then(resp => {
            console.log(resp)
        })
}