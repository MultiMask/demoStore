# development environment
build-dev:
	docker-compose \
		--project-directory=${PWD} \
		--project-name=multimask \
		-f docker-compose.yml \
		build ${ARGS}

start-dev:
	docker-compose \
		--project-directory=${PWD} \
		--project-name=multimask \
		-f docker-compose.yml \
		up --build

stop-dev:
	docker-compose \
		--project-directory=${PWD} \
		--project-name=multimask \
		-f docker-compose.yml \
		down

# clean dungling images/volumes
docker-cleanup:
	docker volume rm $$(docker volume ls -qf dangling=true)
	docker rmi $$(docker images -a | grep "^<none>" | awk '{print $3}')
	docker rmi $$(docker images -a --filter=dangling=true -q)
	docker rm $$(docker ps --filter=status=exited --filter=status=created -q)

# connect to running containers:
mongo:
	docker exec -ti mongo mongo

api:
	docker exec -ti api bash

client:
	docker exec -ti client bash

proxy:
	docker exec -ti proxy bash	
