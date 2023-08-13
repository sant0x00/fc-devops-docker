.PHONY: network
network:
	@ docker network create laravel_net

.PHONY: build
build:
	@ docker build -t santos0santos0/laravel:latest .

.PHONY: run
run:
	@ make build
	@ docker run --rm -d --name laravel -p 8080:8080 santos0santos0/laravel

.PHONY: build-prod
build-prod:
	@ docker build -t santos0santos0/laravel:prod . -f Dockerfile.prod

.PHONY: run-prod
run-prod:
	@ make build-prod
	@ docker run -d --network laravel_net --name laravel santos0santos0/laravel:prod