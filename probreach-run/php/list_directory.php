<?php

	$path = "../data/";
	$directory = scandir($path);
	$j = 0;
	for ($i=0; $i < count($directory); $i++)
	{ 
		if (($directory[$i] != ".") && ($directory[$i] != ".."))
		{
			$list[$j] = $directory[$i];
			$j++;
		}
	}

	$models = array();
	$j = 0;
	for ($i=0; $i < count($list); $i++)
	{
		$title_filename = $path.$list[$i]."/title.txt";
		
		if(file_exists($title_filename))
		{
			$models[$j]["title"] = file_get_contents($title_filename);
			$models[$j]["path"] = $path.$list[$i]."/";
			$j++;
		}
	}

	echo(json_encode($models));
?>