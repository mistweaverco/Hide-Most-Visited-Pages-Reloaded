all: js html css fonts icons manifest zipup clean
debug: js html css fonts icons manifest debug2dist
debug2dist:
	cp -r tmp/* dist/;
js:
	cp -r src/js/* tmp/
fonts:
	cp -r src/fonts tmp/
css:
	cp -r src/css/*.css tmp/
html:
	cp src/html/* tmp
icons:
	cp src/icons/icon-*.png tmp;
	cp src/icons/icon.png tmp
manifest:
	cp src/manifest.json tmp
zipup:
	zip --junk-paths dist/dist.zip tmp/*
clean:
	find tmp -type f -not -name '.gitignore' -exec rm -rf {} \;
