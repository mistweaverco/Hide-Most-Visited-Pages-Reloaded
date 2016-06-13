all: coffeescript html icons manifest zipup clean
debug: coffeescript html icons manifest
coffeescript:
	coffee --output tmp --compile src/coffeescript
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
