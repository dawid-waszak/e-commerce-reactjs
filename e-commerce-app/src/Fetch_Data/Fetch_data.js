export async function fetchDataFunction(url){

    const response = await fetch(url);
    return await response.json();
}