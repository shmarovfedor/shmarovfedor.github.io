<?php
	if(isset($_GET['model_path']))
	{
		$data_filename = $_GET['model_path'].'/data.json';
		$description_filename = $_GET['model_path'].'/description.txt';
		$model = array();
		$data = array();
		$description = array();
		if(file_exists($data_filename))
		{
			$data = file_get_contents($data_filename);
		}
		if(file_exists($description_filename))
		{
			$description = file_get_contents($description_filename);
		}
		$model["data"] = $data;
		$model["description"] = $description;
		echo(json_encode($model));
		/*
		else
		{
			echo('Data file not found');
		}
		*/
	}
	else
	{
		echo('GET method is not set');
	}
	//header('Location: http://homepages.cs.ncl.ac.uk/f.shmarov/probreach/') ;
?>