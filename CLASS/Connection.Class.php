<?php 

class Connection {
   
     public static function connect($config)
     {
        try {
         return  new PDO('mysql:host='.$config['HOST'].';dbname='. $config['DBNAME'].'',$config['USER'], $config['PASSWORD']);
            
        }
        catch(PDOException $e){
        
            echo "konekcija nije uspela" . $e->getMessage();
        }
        
        




     }









}













?>