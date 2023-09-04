<?php

	$data_file = file_get_contents('data.json');
	$data = json_decode($data_file);

	ob_start();
	include("./templates/header.php");
	include('./templates/main.php');
	include("./templates/footer.php");

	$html = ob_get_contents();
	// Remove extra whitespace from beginning and end of HTML code
	$html = trim($html);
	// Remove extra whitespace between HTML tags
	$html = preg_replace('/\s+/', ' ', $html);
	// Remove extra lines
	$html = preg_replace('/\n+/', '', $html);
	// Remove spaces between opening and closing HTML tags
	$html = preg_replace('/>\\s+</', '><', $html);

	ob_end_clean();

	file_put_contents('index.html', $html);
