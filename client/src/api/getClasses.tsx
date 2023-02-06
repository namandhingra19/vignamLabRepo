export const getClasees=async (sendRequest:any,dispatchData:any)=>{
    sendRequest({
        url:`http://localhost:5000/classes`
    },dispatchData)
}