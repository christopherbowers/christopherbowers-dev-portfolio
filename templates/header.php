<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Christopher Bowers Full-stack Developer</title>
	<style type="text/css">
	<?php include("styles.css") ?>
	</style>
	<link href=data:, rel=icon>
	<link rel="me" href="https://webperf.social/@christopherbowers">
</head>
<body>
<div class="layout_wrapper">
	<div class="nav">
		<div class="site-header__wrapper">
			<span></span>
			<nav aria-label="Navigation">
				<button class="nav__toggle"  onClick="toggle()">
					<svg viewBox="0 0 100 100" width="100" height="100">
					<rect y="0" width="100" height="6" class="line one"></rect>
					<rect y="48" width="100" height="6" class="line two"></rect>
					<rect y="94" width="100" height="6" class="line three"></rect>
				</svg>
				</button>
				<ul class="nav__wrapper">
				<?php if (isset($data->navLinks)) {
					$navList = '';
    			foreach ($data->navLinks as $link) {
						$navList .= '<li class="nav__item"><a href="' . $link->url .'">' . $link->name . '</a></li>';
    			}
    			echo $navList;
					}?>
					<li class="nav__item">
						<a href="https://github.com/christopherbowers" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								fill="currentColor"
								class="bi bi-github"
								viewbox="0 0 16 16"
								role="img"
								aria-labelledby="title  desc"
							>
								<title id="title">GitHub</title>
								<desc id="desc">GitHub Icon</desc>
								<path
									role="presentation"
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
								></path>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
