<?php

include 'db.php';
include 'core.php';

if (isset($_GET['dollar'])) {

    

    if ($_GET['dollar']=="prodat") {


        $name=$_POST['name'];
        $price=$_POST['price'];
        

        if (empty($name)) {

            echo' <div id="mess" style="background-color:red;"><p>Please Enter Product Title</p></div>';
        }
        elseif (empty($price)) {
            echo' <div id="mess" style="background-color:red;"><p>Enter price</p></div>';
        }
       
        else {
           echo adproduct($name,$price); 
        }

        # code...
    }






    



    if ($_GET['dollar']=="editprod") {



        $id = $_POST['id'];
        $name=$_POST['name'];
        $oldpic=$_POST['oldpic'];
        
        $price=$_POST['price'];
        
        


        editproduct($id,$name,$oldpic,$price);











    }
   
















    # code...
}




?>