export async function handler(setState) {
    let response = await fetch('/data.json')
        .then(response => response.json())
        .then(json => {
                setState(json)
            }
        );

}
