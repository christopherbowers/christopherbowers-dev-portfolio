<main>
<section class="hero">
	<div>
		<span class="small-heading">Hi, my name is</span>
	</div>
	<div>
		<span class="big-heading">Christopher Bowers</span>
	</div>
	<div>
		<span class="medium-heading">I make things for the web.</span>
	</div>
</section>
<section id="projects">
	<h4 class="section-heading">
		Projects
	</h4>
	<?php
		if (isset($data->projects)) {
			$projects = $data->projects;
			$html = '';

			foreach($projects as $project) { ?>

		<div class="project-wrapper">
		<h5>
			<?php if ($project->externalUrl) { ?>
			<a href="<?php echo $project->externalUrl?>"><?php echo $project->title ?></a>
			<?php
				} else {
				echo $project->title;
				}
			?>
		</h5>
		<div class="image-wrapper">
			<img alt="<?php echo $project->title?>" src="images<?php echo $project->imgUrl?>" width="1920" height="1080">
		</div>
		<?php if (isset($project->tech)) {
			$techList = '<ul class="tech-list">';
			foreach ($project->tech as $tech) {
				$techList .= '<li>' . $tech . '</li>';
			}
			$techList .= '</ul>';
			echo $techList;
		}?>
		<p><?php echo $project->description?></p>
		<?php
		$links = sprintf('<div class="project-links">
			<a href="%s" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" class="bi bi-box-arrow-up-right" viewbox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg></a><a href="%s" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" class="bi bi-github" viewbox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
		</div>',$project->link,$project->github);
		echo $links;
		;?>
		</div>
		<?php }
	} ?>
</section>
<section id="contact">
	<h4>
		Contact
	</h4>
	<ul>
		<li><?php echo $data->name?></li>
		<li><?php echo $data->email?></li>
		<li><?php echo $data->phone?></li>
		<li><?php echo $data->address?></li>
	</ul>
</section>
</main>
