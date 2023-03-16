<?php 
class QueryBuilder  {
    public $db;
    public function __construct($db){
        $this->db = $db;


    }
public function Select($table)
{
   $sql="SELECT * FROM {$table}";
   $query=$this->db->prepare($sql);
   $query->execute();
   return $query->fetchAll(PDO::FETCH_ASSOC);
  

}
public function save($data){

    $sql="INSERT INTO account VALUES (NULL,?,?,?)";
    $query=$this->db->prepare($sql);
    $query->execute([$data->input_name,$data->input_deposit,$data->input_card_name]);
 if($query){

    echo "succes";
 }else {
    echo "false";
 }



}

public function delete_record($id){
$sql="DELETE FROM account WHERE id=$id ";
$query=$this->db->prepare($sql);
$query->execute();


}
public function update($data){

   $sql="UPDATE  account SET name=:name,deposit=:deposit,card_name=:card_name WHERE id=:id";
   $query=$this->db->prepare($sql);
   $query->execute(['name'=>$data->edit_name_save,'deposit'=>$data->edit_deposit_save,'card_name'=>$data->edit_card_name_save,'id'=>$data->id]);
if($query){

   echo "succes";
}else {
   echo "false";
}




}

}