# koa2demo
## php代码
    <?php
        $servername="localhost";
        $username="root";
        $password="";
        $con = mysqli_connect($servername,$username,$password);
	    if(!$con){
	        die('Could not connect:'.mysqli_error());
	    }else{
	        mysqli_query($con,"UPDATE yideng.t_goodnum SET count=count+1 WHERE id=1");
	    }
        mysqli_close($con);
    ?>
