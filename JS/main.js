Accview=document.querySelector('#Accview');
main_body=document.querySelector('#main_body');
save_account_view=document.querySelector('#save_account_view');
btnsave=document.querySelector('#btnsave');
name_save=document.querySelector('[name="name_save"]');
deposit_save=document.querySelector('[name="deposit_save"]');
card_name_save=document.querySelector('[name="card_name_save"]');
edit_delete_view=document.querySelector('#edit_delete_view');
Accview_delete=document.querySelector('#Accview_delete');
btnsave.addEventListener('click',save_data);
main_body_delete=document.querySelector('#main_body_delete');




DB.show_data().then(
    (data)=>{
        show(data);
    },(err)=>{
        console.log(err);
    }
);


function save_data()
{

  let Inputs_obj={

    input_name: name_save.value,
    input_deposit: deposit_save.value,
    input_card_name: card_name_save.value
  };
  console.log(Inputs_obj);
 DB.SaveRequest(Inputs_obj).then(
        (ress)=>{
            DB.show_data().then(
                (data)=>{
                    show(data);
                    showA();
                },(err)=>{
                    console.log(err);
                }
            );
            

        },
        (err)=>{

            console.log(err);
        }

  



 )








}

A=document.querySelector('#A');
B=document.querySelector('#B');
C=document.querySelector('#C');

A.addEventListener('click',showA);
B.addEventListener('click',showB);
C.addEventListener('click',showC);

function showC(){

    Accview.style.display='none';
save_account_view.style.display='none';
;
Accview_delete.style.display="block";
edit_delete_view.style.display="none";

DB.show_data().then(
    (data)=>{
        show_data_with_del_btn(data)
    },(err)=>{
        console.log(err);
    }
);

}
function showE(){
    Accview.style.display='none';
save_account_view.style.display='none';
edit_delete_view.style.display="block";
Accview_delete.style.display="block";


}


function showA()
{

    Accview.style.display='block';
save_account_view.style.display='none';
edit_delete_view.style.display="none";
Accview_delete.style.display="none";
}
function showB()
{

    Accview.style.display='none';
save_account_view.style.display='block';
edit_delete_view.style.display="none";
Accview_delete.style.display="none";
}








function show(data){
let text="";
for(let i=0;i<data.length;i++)
{
    text +=    `<tr>
    <th>${data[i].id}</th>
    <th>${data[i].name}</th>
   <th>${data[i].deposit}</th>
   <th>${data[i].card_name}</th>
      </tr> `;

}
main_body.innerHTML=text;


}
function show_data_with_del_btn(data){
    let text="";
    for(let i=0;i<data.length;i++)
    {
        text +=    `<tr>
        <th>${data[i].id}</th>
        <th>${data[i].name}</th>
       <th>${data[i].deposit}</th>
       <th>${data[i].card_name}</th>
       <th><button class="btn btn-danger" id="deletee">Delete</button>
       <th><button class="btn btn-success" id="edit">Edit</button>
          </tr> `;
    
    }
    main_body_delete.innerHTML=text;


 edit=document.querySelectorAll('#edit');
 for(let i=0;i<edit.length;i++){
    edit[i].addEventListener('click',edit_function);
    function edit_function(){
        showE();
        edit_name_save=document.querySelector('[name="edit_name_save"]');
        edit_deposit_save=document.querySelector('[name="edit_deposit_save"]');
        edit_card_name_save=document.querySelector('[name="edit_card_name_save"]');
        edit_btn_save=document.querySelector('#edit_btn_save');
        edit_btn_save.addEventListener('click',save_edited);
        function save_edited(){
            let newObj={
                id:data[i].id,
                edit_name_save:edit_name_save.value,
                edit_deposit_save:edit_deposit_save.value,
                edit_card_name_save:edit_card_name_save.value
               
            }
            DB.Save_Edit_Request(newObj).then(
                (ress)=>{
                    DB.show_data().then(
                        (data)=>{
                            show(data);
                            showA();
                        },(err)=>{
                            console.log(err);
                        }
                        

                    );




                },
                (err)=>{
                    console.log(err);
                }





            )

        }


    }

 }







    deletee=document.querySelectorAll('#deletee');
    for(let i=0;i<deletee.length;i++)
    {
        deletee[i].addEventListener('click',myfunction);
        function myfunction(){
            let id=data[i].id;

            DB.delete_data(id).then(
                (ress)=>{
                    DB.show_data().then(
                        (data)=>{
                            show_data_with_del_btn(data);
                           
                        },(err)=>{
                            console.log(err);
                        }
                    );




                },
            (err)=>{
                console.log(err);
            }




            )
            
        }
    
    }

    }
    

