runserver:
	jekyll serve

deploy-stage:
	scp -r _site/ bag2132@cunix.cc.columbia.edu:~/public_html/blackseanet/	
