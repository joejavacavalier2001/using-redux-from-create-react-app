<?php
	$currentPrice = (rand(1,100) + (rand(1,99) / 100));
	$output = array("latestPrice" => $currentPrice);
	header("Access-Control-Allow-Origin: http://rktlebnhwebworks.net:3000");
	header("cache-control: no-cache, must-revalidate, max-age=0");
	header("Content-Type: application/json");
	echo json_encode($output, JSON_FORCE_OBJECT);
?>
