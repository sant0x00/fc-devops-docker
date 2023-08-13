.PHONY: build
build:
	@ docker build -t santos0santos0/nginx-fullcycle .

.PHONY: run
run:
	@ docker run --rm -d -p 8080:80 santos0santos0/nginx-fullcycle

.PHONY: build-prod
build-prod:
	@ docker build -t santos0santos0/nginx:prod . -f Dockerfile.prod

.PHONY: run-prod
run-prod:
	@ make build-prod
	@ docker run -d --network laravel_net --name nginx -p 8080:80 santos0santos0/nginx:prod