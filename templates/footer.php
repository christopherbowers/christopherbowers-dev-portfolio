<footer class="footer">
	<p>
		Designed &amp; Built by Christopher Bowers
	</p>
</footer>
</div>
<script>
	const toggle = () => {
		const menu = document.querySelector('.nav__wrapper');
		const hamburger = document.querySelector('.nav__toggle');
		menu.classList.toggle('active');
		hamburger.classList.toggle('active');
	};
	
	document.querySelectorAll('.nav__item a').forEach((link) => {
		link.addEventListener("click", ()=> toggle())
	});
</script>
</body>
</html>
