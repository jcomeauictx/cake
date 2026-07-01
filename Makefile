default: show
show: index.html
	if [ "$(which chromium)" ]; then \
	 chromium --allow-file-access-from-files $<; \
	else \
	 echo point browser to localhost:8000 >&2; \
	 python3 -m http.server; \
	fi
.PHONY: show
