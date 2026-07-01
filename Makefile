default: show
show: index.html
	if [ "$(which chromium)" ]; then \
	 chromium --allow-file-access-from-files $<; \
	else \
	 python3 -m http.server; \
	 echo point browser to localhost:8000 >&2; \
	fi
.PHONY: show
