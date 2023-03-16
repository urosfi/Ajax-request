class DB{

    static show_data()
    {
        return new Promise((resolve,reject)=>
        {
            let XML=new XMLHttpRequest();
            XML.onreadystatechange=()=>
            {
                    if(XML.readyState === 4 && XML.status === 200)
                        {

                           resolve(JSON.parse(XML.responseText));//vraca string
                        }
             }
             XML.open('GET','Alldata.php');

             XML.send();

            }

        )


    }
static SaveRequest(save_data){

    return new Promise((resolve,reject)=>{

      let XML=new XMLHttpRequest();
    XML.onreadystatechange=()=>{

        if(XML.readyState==4 && XML.status==200){


            resolve(XML.responseText);


        }}
        XML.open('POST','save_data.php');
        XML.setRequestHeader("content-type","application/json");
        XML.send(JSON.stringify(save_data));
    })
}


static delete_data($id)
{
    return new Promise((resolve,reject)=>
    {
        let XML=new XMLHttpRequest();
        XML.onreadystatechange=()=>
        {
                if(XML.readyState === 4 && XML.status === 200)
                    {

                       resolve(XML.responseText);//vraca string
                    }
         }
         XML.open('POST','delete.php');

         XML.send($id);

        }

    )


}

static Save_Edit_Request(save_edited_data){

    return new Promise((resolve,reject)=>{

      let XML=new XMLHttpRequest();
    XML.onreadystatechange=()=>{

        if(XML.readyState==4 && XML.status==200){


            resolve(XML.responseText);


        }}
        XML.open('POST','save_edited_data.php');
        XML.setRequestHeader("content-type","application/json");
        XML.send(JSON.stringify(save_edited_data));
    })
}















// static show_data_with_delete()
// {
//     return  new Promise((resolve,reject)=>{

//         let XML= new XMLHttpRequest();
//         XML.onreadystatechange=()=>
//         {
//             if(XML.readyState==4 && XML.status ==200)
//             {

//             }
//         }
//      XML.open('GET','ALLdata.php');
//      XML.send();
//     }






    // )




// }



}
