const handleSubmit = async(e) => {
    e.preventDefault();
    const input=document.getElementById('name');
    const inputValue=input.value;

    console.log(inputValue);
git 
    try{
        const response =await fetch('https://server-new-xo66.onrender.com/api/testing/putdata',{
            method: 'POST',
            headers :{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: 5,name: inputValue}),
        });
        if(!response.ok){
            throw new Error(`An error has occured: ${response.statusText}`);
        }
        const data= await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(`Error posting data: `,error);
    }
};