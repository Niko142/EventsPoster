export async function FetchForm( data ) {
    try {
        const request = await fetch('/api/messages', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const res = await request.json();
        return console.log(res);
    } 
    catch (error) {
        console.log(error);
    } 
}