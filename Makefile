.PHONY: run
run:
	@ docker-compose up

.PHONY: run-detach
run-detach:
	@ docker-compose up -d

.PHONY: run-rebuild
run-rebuild:
	@ docker-compose up -d --build
	