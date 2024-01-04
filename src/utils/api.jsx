export const fetchDataFromAPI = async () => {
    try {
        const response = await fetch('http://117.20.62.118:8100/rs-service/poliklinik')
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data from API.');
    }
};

export const postDataToAPI = async (postData) => {
    try {
        const response = await fetch('http://117.20.62.118:8100/rs-service/decubitusugd', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error posting data to API.');
    }
};