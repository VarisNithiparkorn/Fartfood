const getAllItems = async <T>(url:string):Promise<T> =>{
    const res:Response = await fetch(url, {
        "method":"GET",
    })
    if(res.status !== 200){
        throw new Error(`Failed to fetch items. Status: ${res.status} (${res.statusText})`);
    }
    return res.json()

}

export {getAllItems}