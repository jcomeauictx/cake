default: show
show: index.html
	chromium --allow-file-access-from-files $<
.PHONY: show
